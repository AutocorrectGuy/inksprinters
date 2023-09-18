@extends('layouts.default')
@section('content')
  <h1 class="text-center text-5xl font-extrabold">
    Choose
    <small class="font-semibold text-gray-500">
      converter
    </small>
  </h1>
  <div class="grid grid-cols-1 p-12 md:grid-cols-3">

    {{-- Display Errors --}}
    @if ($errors->any())
      <div class="col-span-full m-4 rounded-md bg-red-500 p-4 text-white md:col-span-3">
        <h3 class="mb-2 font-bold">Errors:</h3>
        <ul>
          @foreach ($errors->all() as $error)
            <li>{{ $error }}</li>
          @endforeach
        </ul>
      </div>
    @endif

    {{-- PDF to EPS --}}
    <div class="m-4 max-w-sm rounded-lg border border-gray-300 bg-gray-200 p-6 shadow">
      <div class="relative mx-auto h-36 w-36">
        <!-- Top-left rectangle with "PDF" -->
        <div
          class="absolute left-0 top-0 flex h-3/5 w-3/5 items-center justify-center rounded-md bg-rose-600 shadow-lg shadow-rose-300">
          <span class="text-xl font-bold text-white">PDF</span>
        </div>
        <!-- Bottom-right rectangle with "EPS" -->
        <div
          class="absolute bottom-0 right-0 flex h-3/5 w-3/5 items-center justify-center rounded-md bg-blue-600 shadow-lg shadow-blue-300">
          <span class="text-xl font-bold text-white">EPS</span>
        </div>
      </div>
      <a href="#">
        <h5 class="text-md py-4 text-center font-bold tracking-tight text-gray-900">
          PDF to EPS
        </h5>
      </a>
      <div class="flex justify-center">
        <x-modal id="modal-pdf-to-eps" btnText="Upload & Convert" headingText="Convert PDF to EPS">
          <div class="border-b border-b-gray-300 pb-4">
            Convert your PDF files into EPS format with ease. Simply upload your PDF and we'll handle the rest.
          </div>
          <form class="flex items-center justify-between" action="{{ route('convert.pdf.to.eps') }}" method="post"
            enctype="multipart/form-data">
            @csrf
            <div class="my-2">
              <label for="input_pdf_to_eps" class="mb-1 block font-medium">Select a PDF:</label>
              <input type="file" id="input_pdf_to_eps" name="pdf" accept=".pdf" required>
            </div>
            <button type="submit"
              class="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700">Convert</button>
          </form>
        </x-modal>
      </div>
    </div>
  </div>
@endsection
