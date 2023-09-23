 <div class="m-4 max-w-sm rounded-lg border border-gray-300 bg-gray-200 p-6 shadow">
   <div class="relative mx-auto h-36 w-36">
     <!-- Top-left rectangle -->
     <div
       class="absolute left-0 top-0 flex h-3/5 w-3/5 items-center justify-center rounded-md bg-rose-600 shadow-lg shadow-rose-300">
       <span class="text-xl font-bold text-white">{{ $from }}</span>
     </div>
     <!-- Bottom-right rectangle -->
     <div
       class="absolute bottom-0 right-0 flex h-3/5 w-3/5 items-center justify-center rounded-md bg-blue-600 shadow-lg shadow-blue-300">
       <span class="text-xl font-bold text-white">{{ $to }}</span>
     </div>
   </div>
   <a href="#">
     <h5 class="text-md py-4 text-center font-bold tracking-tight text-gray-900">
       {{ strtoupper($from) }} to {{ strtoupper($to) }}
     </h5>
   </a>
   @php
     $fromTo = $from . 'to' . $to;
   @endphp
   <div class="flex justify-center">
     <x-modal id="modal-{{ $fromTo }}" btnText="Convert" headingText="Convert {{ $fromTo }}">
       <div class="border-b border-b-gray-300 pb-4">
         Convert your {{ $from }} file into {{ $to }} format with ease. Simply upload your
         {{ $from }} and we'll handle the rest.
       </div>
       <form class="flex items-center justify-between" action="{{ route($route) }}" method="post"
         enctype="multipart/form-data">
         @csrf
         <div class="my-2">
           <label for="input_{{ $fromTo }}" class="mb-1 block font-medium">Select {{ $from }}
             file:</label>
           <input type="file" id="input_{{ $fromTo }}" name="{{ $from }}"
             accept=".{{ $from }}" required>
         </div>
         <button type="submit"
           class="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700">Convert</button>
       </form>
     </x-modal>
   </div>
 </div>
