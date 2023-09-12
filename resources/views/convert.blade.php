@extends('layouts.default')
@section('content')
  <div class="flex my-10 items-center justify-center bg-gray-100">
    <div class="w-full max-w-xl rounded bg-white p-6 shadow-md">
      @if (session('success'))
        <div class="mb-4 rounded bg-green-200 p-4 text-green-700">
          {{ session('success') }}
        </div>
        <a href="{{ asset('storage/' . session('epsPath')) }}" download
          class="mb-4 inline-block text-blue-500 underline">Download EPS</a>
      @endif

      @if (session('error'))
        <div class="mb-4 rounded bg-red-200 p-4 text-red-700">
          {{ session('error') }}
        </div>
      @endif

      <form action="{{ route('convert.greyscaleImage') }}" method="POST" enctype="multipart/form-data" class="space-y-4">
        @csrf
        <div>
          <label for="image" class="block text-sm font-medium text-gray-600">Upload image:</label>
          <input type="file" class="mt-1 w-full rounded-md border p-2" id="image" name="image" required>
        </div>
        <button type="submit"
          class="focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none">Convert</button>
      </form>
    </div>
  </div>
@endsection