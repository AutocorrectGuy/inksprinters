<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Intervention\Image\ImageManagerStatic as Image;

class ConverterController extends Controller
{

  // private $validationParameters = [
  // ];

  public function index()
  {
    return view('convert');
  }

  public function greyscaleImage(Request $request)
  {
    $request->validate([
      'image' => 'required|image',
    ]);

    $imageFile = $request->file('image');

    // Convert image
    $image = Image::make($imageFile);
    $image->greyscale();

    // Generate a unique name for the image with a meaningful extension
    $extension = $imageFile->getClientOriginalExtension();
    $imageName = time() . '.' . $extension;

    // Save the image to a temporary location with the format
    $temporaryPath = tempnam(sys_get_temp_dir(), 'greyscaled_');
    $image->save($temporaryPath, 90, $extension); // 90 is the quality, you can adjust as needed

    // Create a BinaryFileResponse for download
    $response = new BinaryFileResponse($temporaryPath);
    $response->setContentDisposition('attachment', $imageName);
    $response->deleteFileAfterSend(true);

    return $response;
  }
}