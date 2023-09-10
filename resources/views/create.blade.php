@extends('layouts.default')
@section('content')
  <div class="mx-auto">
    <h3 class="pb-20 text-3xl">Create a new post</h3>
    <form class="form-control gap-2 py-4" action="{{ route('posts.store') }}" method="POST" enctype="multipart/form-data">
      @csrf
      @if ($errors->any())
        @foreach ($errors->all() as $error)
          <div class="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{{ $error }}</span>
          </div>
        @endforeach
      @endif
      <div class="flex">
        <label class="label grow">
          <span class="label-text">Title</span>
        </label>
        <input type="text" placeholder="Your title" class="input input-bordered w-full max-w-xs" name="title" required/>
      </div>
      <div class="flex">
        <label class="label grow">
          <span class="label-text">Category</span>
        </label>
        <select class="select select-primary w-full max-w-xs" name="category_id">
          @foreach ($categories as $category)
            <option value="{{ $category->id }}">{{ $category->name }}</option>
          @endforeach
        </select>
      </div>
      <div class="flex">
        <label class="label grow">
          <span class="label-text">Image</span>
        </label>
        <input type="file" placeholder="Choose file"
          class="file-input file-input-bordered file-input-primary w-full max-w-xs" name="image" required/>
      </div>
      <div class="flex flex-col">
        <label class="label">
          <span class="label-text">Your description</span>
        </label>
        <textarea class="textarea textarea-bordered h-24 w-full" placeholder="Your description" name="description" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary mt-4">Create</button>
    </form>
  </div>
@endsection
