<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;


class GSConverterController extends Controller
{

  const ALLOWED_EXT = ['PDF', 'EPS', 'AI'];

  private function validateExtension(string $ext)
  {
    return in_array($ext, self::ALLOWED_EXT) ? strtolower($ext) : null;
  }

  private function generateSentFileName(string $from, string $to)
  {
    return $from . '_' . $to . "_" . hash('sha256', (string) microtime(true)) . '.' . $from;
  }

  public function index()
  {
    return view('convert');
  }

  /**
   * Handles the conversion of a file via an external API.
   * 
   * The function does the following:
   * 1. Validates the source and target formats for conversion.
   * 2. Determines the appropriate API URL based on the application environment.
   * 3. Sends the file to the conversion API for processing.
   * 4. Downloads and returns the converted file to the client.
   *
   * @param Request $request The incoming HTTP request containing the file and desired conversion details.
   * @return \Illuminate\Http\Response Returns a response containing either the converted file or an error message.
   */
  public function convertViaApi(Request $request)
  {
    // Validate the provided file formats (source and target) for conversion
    $from = $this->validateExtension($request->from);
    $to = $this->validateExtension($request->to);

    // Check if the formats are valid; if not, return an error response
    if (!$from || !$to) {
      return response()->json(['error' => 'Invalid extension(s).'], 400);
    }

    // Determine the conversion API endpoint URL based on the current environment
    $apiHref = (env('APP_ENV') === 'production'
      ? env('CONVERSION_API_URL_PRODUCTION')
      : env('CONVERSION_API_URL_LOCAL')) . '/convert-file-type';

    // Extract and store relevant information about the uploaded file
    $file = $request->file('file');
    $filename = $file->getClientOriginalName();
    $baseFileName = pathinfo($filename, PATHINFO_FILENAME);

    // Generate a unique file name for sending to the conversion API
    $sentFileName = $this->generateSentFileName($from, $to);

    // Save the uploaded file to local storage
    $path = $file->storeAs($from, $sentFileName, 'public');
    $uploadedFileContentsPath = storage_path('app/public/' . $path);

    // Send the file to the external conversion API for processing
    $response = Http::attach(
      'file',
      file_get_contents($uploadedFileContentsPath),
      $sentFileName
    )->post($apiHref);

    // After sending the file to the API, remove it from local storage to free up space
    Storage::disk('public')->delete($path);

    //TODO: rewrite proper redirect that will work on React
    // Check if the conversion API returned an error
    if ($response->failed()) {
      return back()->withErrors(['error' => "Failed to convert the file from {$from} to {$to}."]);
    }
    
    // Retrieve and save the content of the converted file 
    $convertedFileUrl = $response->json()['converted_file_url'];
    $convertedContent = Http::get($convertedFileUrl)->body();

    // Store the converted file in storage/app/public
    $temoraryRetrievedFilePath = storage_path("app/public/{$to}/" . $baseFileName . ".{$to}");
    file_put_contents($temoraryRetrievedFilePath, $convertedContent);

    // Generate a public URL for the stored file
    $publicUrl = asset("storage/{$to}/" . $baseFileName . ".{$to}");

    return response(['download_url' => $publicUrl]);

  }
}