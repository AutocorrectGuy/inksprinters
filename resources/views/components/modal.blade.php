{{-- $id --}}
{{-- $btnText --}}
{{-- $headingText --}}
{{-- $innerHTML --}}

<!-- Modal toggle -->
<button id="{{ $id }}-toggle" class="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700"
  type="button">
  {{ $btnText }}
</button>

<!-- Main modal -->
<div id="{{ $id }}" tabindex="-1" aria-hidden="true"
  class="fixed bottom-0 left-0 right-0 top-0 z-50 hidden h-screen w-screen items-center justify-center border border-gray-200 bg-black bg-opacity-80 p-4">
  <div class="relative mx-auto my-auto max-h-full w-full max-w-2xl">
    <!-- Modal content -->
    <div class="relative rounded-lg bg-gray-200 shadow">
      <!-- Modal header -->
      <div class="flex items-start justify-between rounded-t border-b border-gray-300 p-4">
        <h3 class="px-2 text-xl font-semibold text-gray-900">
          {{ $headingText }}
        </h3>
        <button type="button" id="{{ $id }}-close"
          class="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900">
          <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
        </button>
      </div>
      <!-- Modal body -->
      <div class="space-y-6 p-6">
        {{ $slot }}
      </div>
    </div>
  </div>
</div>
<script>
  document.addEventListener('DOMContentLoaded', function() {

    // Function to toggle modal visibility
    function toggleModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        if (modal.classList.contains('hidden')) {
          modal.classList.remove('hidden');
          modal.classList.add('flex');
          modal.setAttribute('aria-hidden', 'false');
        } else {
          modal.classList.remove('flex');
          modal.classList.add('hidden');
          modal.setAttribute('aria-hidden', 'true');
        }
      }
    }

    // Handle modal toggle button
    const toggleButton = document.getElementById("{{ $id }}-toggle");
    if (toggleButton) {
      toggleButton.addEventListener('click', function() {
        toggleModal("{{ $id }}");
      });
    }

    // Handle modal close button
    const closeButton = document.getElementById("{{ $id }}-close");
    if (closeButton) {
      closeButton.addEventListener('click', function() {
        toggleModal("{{ $id }}");
      });
    }

    // Close the modal when clicking on the background
    const modal = document.getElementById("{{ $id }}");
    if (modal) {
      modal.addEventListener('click', function(event) {
        if (event.target === modal) {
          toggleModal(modal.id);
        }
      });

      // Prevent the modal from closing when clicking inside the modal content
      const modalContent = modal.querySelector('.relative.max-h-full');
      if (modalContent) {
        modalContent.addEventListener('click', function(event) {
          event.stopPropagation();
        });
      }
    }
  });
</script>
