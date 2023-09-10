@if ($paginator->hasPages())
  <div class="flex w-full justify-center">
    <div class="join border border-gray-300 my-4">
      {{-- Previous Page Link --}}
      @if ($paginator->onFirstPage())
        <button class="btn btn-disabled join-item">«</button>
      @else
        <a href="{{ $paginator->previousPageUrl() }}" class="btn join-item" rel="prev">«</a>
      @endif

      {{-- Pagination Elements --}}
      @foreach ($elements as $element)
        @if (is_string($element))
          <div class="mx-1 px-4 py-2 text-gray-500">{{ $element }}</div>
        @endif

        @if (is_array($element))
          @foreach ($element as $page => $url)
            @if ($page == $paginator->currentPage())
              <button class="btn btn-disabled join-item">{{ $page }}</button>
            @else
              <a href="{{ $url }}" class="btn join-item">{{ $page }}</a>
            @endif
          @endforeach
        @endif
      @endforeach

      {{-- Next Page Link --}}
      @if ($paginator->hasMorePages())
        <a href="{{ $paginator->nextPageUrl() }}" class="btn join-item" rel="next">»</a>
      @else
        <button class="btn btn-disabled join-item">»</button>
      @endif
    </div>
  </div>
@endif
