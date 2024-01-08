<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class EncodingTextFilesController extends Controller
{
    public function downloadEncodedTextFile(Request $request)
    {
        $text = $request->input('text');
        $encoding = $request->input('encoding');

        // Encoding the text
        $encodedText = iconv('UTF-8', $encoding, $text);

        // Generating a unique filename
        $fileName = Str::random(10) . '.txt';
        $filePath = storage_path('app/public/' . $fileName);
        Storage::disk('public')->put($fileName, $encodedText);

        // Set headers for the response
        $headers = [
            'Content-Type' => 'text/plain', // Adjust this based on the file type
            'Content-Disposition' => "attachment; filename=\"$fileName\"",
        ];

        // Return the response to download and then delete the file
        return response()->download($filePath, $fileName, $headers)->deleteFileAfterSend(true);
    }
}