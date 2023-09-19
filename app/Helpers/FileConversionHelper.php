<?php

namespace App\Helpers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

class FileConversionHelper
{

  // Supported file extensions
  private $supportedExtensions = ['pdf', 'eps', 'ai'];

  public $ext_input;
  public $ext_output;
  public $href;

  public function __construct($from, $to)
  {
    if (in_array($from, $this->supportedExtensions) && in_array($to, $this->supportedExtensions)) {
      $this->ext_input = $from;
      $this->ext_output = $to;
    } else {
      throw new \Exception('Unsupported conversion type');
    }

    $baseHref = env('APP_ENVIRONMENT') === 'local' ? '153.92.221.48:8000' : '127.0.0.1:8001';
    $this->href = "http://{$baseHref}/api/{$this->ext_input}to{$this->ext_output}";
  }

  public function convertFileFormat(Request $request)
  {
    $file = $request->file($this->ext_input);
    $filename = $file->getClientOriginalName();
    $baseFileName = pathinfo($filename, PATHINFO_FILENAME);

    $path = $file->storeAs($this->ext_input, $filename, 'public');

    $response = Http::attach(
      $this->ext_input,
      file_get_contents(storage_path('app/public/' . $path)),
      $filename
    )->post($this->href);

    // Delete the file from storage after it's sent
    Storage::disk('public')->delete($path);

    if ($response->failed()) {
      return back()->withErrors(['error' => "Failed to convert the file from {$this->ext_input} to {$this->ext_output}."]);
    }

    $convertedFileUrl = $response->json()['file_url'];
    $convertedContent = Http::get($convertedFileUrl)->body();

    $publicPath = public_path("storage/{$this->ext_output}/" . $baseFileName . ".{$this->ext_output}");
    file_put_contents($publicPath, $convertedContent);

    return response()->download($publicPath)->deleteFileAfterSend(true);
  }
}