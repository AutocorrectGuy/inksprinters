<?php

use App\Http\Controllers\EncodingTextFilesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::get('products', function () {
    return response(['Hello, world!', 'This is test response from', 'Laravel backend'],200);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// 
Route::post('/download-encoded-text-file', [EncodingTextFilesController::class, 'downloadEncodedTextFile']);

