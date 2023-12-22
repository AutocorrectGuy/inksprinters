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

        $encodedText = iconv('UTF-8', $encoding, $text);

        $fileName = Str::random(10) . '.txt';
        Storage::disk('public')->put($fileName, $encodedText);

        return response()->json(['fileName' => $fileName]);
    }
}