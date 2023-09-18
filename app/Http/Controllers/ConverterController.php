<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;


class ConverterController extends Controller
{

  // private $validationParameters = [
  // ];

  public function index()
  {
    return view('convert');
  }

  protected function storeUploadedFile($file)
  {
    $filename = uniqid() . '.' . $file->getClientOriginalExtension();
    $file->storeAs('pdfs', $filename, 'public');
    return $filename;
  }

  protected function getFilePath($directory, $filename)
  {
    return str_replace('/', '\\', storage_path("app/public/{$directory}/" . $filename));
  }

  public function pdfToEpsAPI(Request $request)
  {
    $file = $request->file('pdf');
    $filename = time() . '.pdf';
    $path = $file->storeAs('pdfs', $filename, 'public');

    $response = Http::attach(
      'pdf',
      file_get_contents(storage_path('app/public/' . $path)),
      $filename
    )->post('http://153.92.221.48:8000/api/pdftoeps');

    // Delete the file from storage after it's sent
    Storage::disk('public')->delete($path);

    if ($response->failed()) {
      return back()->withErrors(['error' => 'Failed to convert the file.']);
    }

    $convertedFileUrl = $response->json()['file_url'];
    return redirect($convertedFileUrl);
  }
}