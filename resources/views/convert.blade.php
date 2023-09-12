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

    {{-- RGB to CYMK --}}
    <div class="m-4 max-w-sm rounded-lg border border-gray-300 bg-gray-200 p-6 shadow">
      <div class="relative mx-auto h-36 w-36">
        <!-- Top-left rectangle with "RGB" -->
        <div
          class="absolute left-0 top-0 flex h-3/5 w-3/5 items-center justify-center rounded-md bg-gradient-to-r from-red-500 via-green-500 to-blue-500 shadow-lg shadow-red-300">
          <span class="text-xl font-bold text-white">RGB</span>
        </div>
        <!-- Bottom-right rectangle with "CYMK" -->
        <div
          class="absolute bottom-0 right-0 flex h-3/5 w-3/5 items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 via-yellow-500 to-pink-500 shadow-lg shadow-pink-300">
          <span class="text-xl font-bold text-black">CYMK</span>
        </div>
      </div>
      <a href="#">
        <h5 class="text-md py-4 text-center font-bold tracking-tight text-gray-900">
          RGB to CYMK (in PDF)
        </h5>
      </a>
      <div class="flex justify-center">
        <x-modal id="modal-rbg-to-cymk" btnText="Upload & Convert" headingText="Convert RGB to CYMK in PDF">
          <form action="{{ route('convert.rgb.to.cymk') }}" method="post" enctype="multipart/form-data">
            @csrf
            <div>
              <label for="input_rgb_to_cymk">Upload PDF:</label>
              <input type="file" id="input_rgb_to_cymk" name="pdf" accept=".pdf" required>
            </div>
            <button class="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700"
              type="submit">Convert</button>
          </form>
        </x-modal>
      </div>
    </div>

    {{-- Add Yellow to white in PDF --}}
    <div class="m-4 max-w-sm rounded-lg border border-gray-300 bg-gray-200 p-6 shadow">
      <div class="relative mx-auto h-36 w-36">
        <!-- Top-left rectangle with "WHITE" -->
        <div
          class="absolute left-0 top-0 flex h-3/5 w-3/5 items-center justify-center rounded-md bg-white shadow-lg shadow-gray-400">
          <span class="text-xl font-bold text-black">0.0%</span>
        </div>
        <!-- Bottom-right rectangle with "YELLOW" -->
        <div
          class="absolute bottom-0 right-0 flex h-3/5 w-3/5 items-center justify-center rounded-md bg-yellow-200 shadow-lg shadow-gray-400">
          <span class="text-xl font-bold text-black">0.4%</span>
        </div>
      </div>
      <a href="#">
        <h5 class="text-md py-4 text-center font-bold tracking-tight text-gray-900">
          Add 0.4% yellow (in PDF)
        </h5>
      </a>
      <div class="flex justify-center">
        <x-modal id="modal-add-yellow-to-white-in-pdf" btnText="Upload & Convert"
          headingText="Convert RGB to CYMK in PDF">
          <form action="{{ route('add.yeelow.to.white.in.pdf') }}" method="post" enctype="multipart/form-data">
            @csrf
            <div>
              <label for="input_add_yellow_to_white_in_pdf">Upload PDF:</label>
              <input type="file" id="input_add_yellow_to_white_in_pdf" name="pdf" accept=".pdf" required>
            </div>
            <button class="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700"
              type="submit">Update</button>
          </form>
        </x-modal>
      </div>
    </div>

    {{-- Convert Image to PDF --}}
    <div class="m-4 max-w-sm rounded-lg border border-gray-300 bg-gray-200 p-6 shadow">
      <div class="relative mx-auto h-36 w-36">
        <!-- Image representation -->
        <div
          class="absolute left-0 top-0 flex h-3/5 w-3/5 items-center justify-center rounded-md bg-blue-300 shadow-lg shadow-blue-400">
          <span class="text-xl font-bold text-white">IMAGE</span>
        </div>
        <!-- PDF representation -->
        <div
          class="absolute bottom-0 right-0 flex h-3/5 w-3/5 items-center justify-center rounded-md bg-red-300 shadow-lg shadow-red-400">
          <span class="text-xl font-bold text-white">PDF</span>
        </div>
      </div>
      <a href="#">
        <h5 class="text-md py-4 text-center font-bold tracking-tight text-gray-900">
          Convert Image to PDF
        </h5>
      </a>
      <div class="flex justify-center">
        <x-modal id="modal-image-to-pdf" btnText="Upload & Convert" headingText="Convert Image to PDF">
          <form action="{{ route('convert.image.to.pdf') }}" method="post" enctype="multipart/form-data">
            @csrf
            <div>
              <label for="input_image_to_pdf">Upload Image:</label>
              <input type="file" id="input_image_to_pdf" name="image" accept="image/*" required>
            </div>
            <button class="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700"
              type="submit">Convert</button>
          </form>
        </x-modal>
      </div>
    </div>

    {{-- Converts .ai to .pdf --}}
    <div class="m-4 max-w-sm rounded-lg border border-gray-300 bg-gray-200 p-6 shadow">
      <div class="relative mx-auto h-36 w-36">
        <!-- Top-left rectangle with "RGB" -->
        <div
          class="absolute left-0 top-0 flex h-3/5 w-3/5 items-center justify-center rounded-md bg-sky-700 shadow-lg shadow-red-300">
          <span class="text-xl font-bold text-white">AI</span>
        </div>
        <!-- Bottom-right rectangle with "CYMK" -->
        <div
          class="absolute bottom-0 right-0 flex h-3/5 w-3/5 items-center justify-center rounded-md bg-red-700 shadow-lg shadow-pink-300">
          <span class="text-xl font-bold text-white">PDF</span>
        </div>
      </div>
      <a href="#">
        <h5 class="text-md py-4 text-center font-bold tracking-tight text-gray-900">
          AI to PDF
        </h5>
      </a>
      <div class="flex justify-center">
        <x-modal id="modal-ai_to_pdf" btnText="Upload & Convert" headingText="Convert AI to PDF">
          <form action="{{ route('convert.ai.to.pdf') }}" method="post" enctype="multipart/form-data">
            @csrf
            <div>
              <label for="input_rgb_to_cymk">Upload AI file:</label>
              <p class="py-4">Effortlessly convert your Adobe Illustrator files to PDF format. Just upload your .ai
                file, and we'll
                transform it into a high-quality PDF, making your designs easily accessible and shareable.</p>
              <input class="pb-4" type="file" id="input_rgb_to_cymk" name="ai" accept=".ai" required>
            </div>
            <button class="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700"
              type="submit">Convert</button>
          </form>
        </x-modal>
      </div>
    </div>
  </div>
@endsection
