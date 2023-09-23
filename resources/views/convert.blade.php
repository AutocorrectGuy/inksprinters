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

    {{-- <x-conversion-card :from="'pdf'" :to="'eps'" :route="'convert.pdf.to.eps'"/>
    <x-conversion-card :from="'ai'" :to="'pdf'" :route="'convert.ai.to.pdf'"/> --}}
    <div class="flex justify-center">
      <form class="flex items-center justify-between" action="{{ route('convert.via.api') }}" method="post"
        enctype="multipart/form-data">
        @csrf
        <div class="flex flex-col gap-2">
          <select class="select select-primary w-full max-w-xs" name="from">
            <option selected>PDF</option>
            <option>EPS</option>
            <option>AI</option>
          </select>
          <select class="select select-primary w-full max-w-xs" name="to">
            <option>PDF</option>
            <option selected>EPS</option>
            <option>AI</option>
          </select>
          <input type="file" id="file" name="file" accept="" required />
          <button type="submit"
            class="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700">Convert</button>
        </div>
      </form>
    </div>
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        const fromSelect = document.querySelector('[name="from"]');
        const fileInput = document.getElementById('file');
        // Update the accept attribute based on the from select value
        const updateAcceptAttribute = () => fileInput.setAttribute('accept', '.' + fromSelect.value.toLowerCase());
        // Initial setting of accept attribute
        updateAcceptAttribute();
        // Event listener for changes in from select
        fromSelect.addEventListener('change', updateAcceptAttribute);
      });
    </script>
  </div>
@endsection
