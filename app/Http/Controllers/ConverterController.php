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
  public function convertPdfToEps(Request $request)
  {
    $request->validate([
      'pdf' => 'required|mimes:pdf',
    ]);

    $pdfFile = $request->file('pdf');

    // Convert PDF to EPS using Intervention Image
    $image = Image::make($pdfFile);

    // Generate a unique name for the output EPS
    $imageName = time() . '.eps';

    // Save the EPS to a temporary location
    $temporaryPath = tempnam(sys_get_temp_dir(), 'converted_') . '.eps';
    $image->encode('eps')->save($temporaryPath);

    // Create a BinaryFileResponse for download
    $response = new BinaryFileResponse($temporaryPath);
    $response->setContentDisposition('attachment', $imageName);
    $response->deleteFileAfterSend(true);

    return $response;
  }
  public function convertToCmyk(Request $request)
  {
    $request->validate([
      'pdf' => 'required|mimes:pdf',
    ]);

    $pdfFile = $request->file('pdf');

    // Convert PDF RGB to CMYK using Intervention Image
    $image = Image::make($pdfFile);
    $image->profile(public_path('path_to_your_ICC_cmyk_profile.icc'));

    // Generate a unique name for the output PDF
    $pdfName = time() . '.pdf';

    // Save the CMYK PDF to a temporary location
    $temporaryPath = tempnam(sys_get_temp_dir(), 'converted_') . '.pdf';
    $image->encode('pdf')->save($temporaryPath);

    // Create a BinaryFileResponse for download
    $response = new BinaryFileResponse($temporaryPath);
    $response->setContentDisposition('attachment', $pdfName);
    $response->deleteFileAfterSend(true);

    return $response;
  }

  public function addYellowToWhiteInPdf(Request $request)
  {
    $request->validate([
      'pdf' => 'required|mimes:pdf|max:2048',
    ]);

    $pdfFile = $request->file('pdf');

    // Convert the PDF page(s) to image(s) using Intervention Image
    $images = Image::make($pdfFile->path());

    // Process each image
    foreach ($images as $img) {
      $img->pixelate(1); // This is a workaround for the next step
      $img->each(function ($pixel) {
        $color = $pixel->getRed();
        $black = $color[3];

        // Check if the pixel is pure white
        if ($black == 0) {
          $yellow = 0.004 * 255; // Convert 0.4% to a value between 0 and 255
          $pixel->setRed([0, 0, $yellow, 0]);
        }
      });
    }

    // Generate a unique name for the output PDF
    $outputPdfName = time() . '_yellow.pdf';

    // Save the processed image(s) back to a temporary PDF location
    $temporaryPath = tempnam(sys_get_temp_dir(), 'yellowed_') . '.pdf';
    $images->encode('pdf')->save($temporaryPath);

    // Create a BinaryFileResponse for download
    $response = new BinaryFileResponse($temporaryPath);
    $response->setContentDisposition('attachment', $outputPdfName);
    $response->deleteFileAfterSend(true);

    return $response;
  }
  
  public function convertImageToPdf(Request $request)
  {
    $request->validate([
      'image' => 'required|mimes:jpg,jpeg,png,gif,bmp|max:2048',
    ]);

    $imageFile = $request->file('image');

    // Convert the image to PDF using Intervention Image
    $image = Image::make($imageFile);

    // Generate a unique name for the output PDF
    $pdfName = time() . '.pdf';

    // Save the PDF to a temporary location
    $temporaryPath = tempnam(sys_get_temp_dir(), 'converted_') . '.pdf';
    $image->encode('pdf')->save($temporaryPath);

    // Create a BinaryFileResponse for download
    $response = new BinaryFileResponse($temporaryPath);
    $response->setContentDisposition('attachment', $pdfName);
    $response->deleteFileAfterSend(true);

    return $response;
  }


  public function convertAiToPdf(Request $request)
  {
    $request->validate([
      'ai' => 'required|mimetypes:application/postscript,application/pdf',
    ]);

    $aiFile = $request->file('ai');

    // Convert AI to PDF using Intervention Image
    $image = Image::make($aiFile);

    // Generate a unique name for the output PDF
    $pdfName = time() . '.pdf';

    // Save the PDF to a temporary location
    $temporaryPath = tempnam(sys_get_temp_dir(), 'converted_') . '.pdf';
    $image->encode('pdf')->save($temporaryPath);

    // Create a BinaryFileResponse for download
    $response = new BinaryFileResponse($temporaryPath);
    $response->setContentDisposition('attachment', $pdfName);
    $response->deleteFileAfterSend(true);

    return $response;
  }

}