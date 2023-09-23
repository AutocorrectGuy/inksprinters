<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ConverterController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
  return redirect('/convert');
});

// Route::get('/home', HomeController::class);
Route::get('/home', function () {
  return redirect('/convert');
});

// db test with posts
Route::get('/posts/trashed', [PostController::class, 'trashed'])->name('posts.trashed');
Route::get('/posts/{id}/restore', [PostController::class, 'restore'])->name('posts.restore');
Route::delete('/posts/{id}/force-delete', [PostController::class, 'forceDelete'])->name('posts.force_delete');
Route::resource('/posts', PostController::class);

// converter test
// File conversation
Route::get('/convert', [ConverterController::class, 'index'])->name('convert.index');
// Route::post('/convert/pdf-to-eps', [ConverterController::class, 'pdfToEpsAPI'])->name('convert.pdf.to.eps');
// Route::post('/convert/ai-to-pdf', [ConverterController::class, 'aiToPdfAPI'])->name('convert.ai.to.pdf');
Route::post('/convert/via-api', [ConverterController::class, 'convertViaApi'])->name('convert.via.api');