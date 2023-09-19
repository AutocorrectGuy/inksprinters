<?php

namespace App\Http\Controllers;

use App\Helpers\FileConversionHelper;
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
    $converter = new FileConversionHelper('pdf', 'eps');
    return $converter->convertFileFormat($request);
  }
}