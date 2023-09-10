@extends('layouts.default')
@section('content')
  <div class="mx-auto">
    <h3 class="pb-20 text-3xl">Edit post</h3>
    <form action="{{ route('posts.update', $post->id) }}" method="POST" class="form-control gap-2 py-4"
      enctype="multipart/form-data">
      @csrf
      @method('PUT')
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
      <div class="flex flex-col">
        <label class="label grow">
          <span class="label-text">Title</span>
        </label>
        <input type="text" value="{{ $post->title }}" placeholder="Your title"
          class="input input-bordered w-full max-w-md" name="title" />
      </div>
      <div class="flex flex-col">
        <label class="label grow">
          <span class="label-text">Category</span>
        </label>
        <select class="select select-primary w-full max-w-md" name="category_id">
          @foreach ($categories as $category)
            <option value="{{ $category->id }}">{{ $category->name }}</option>
          @endforeach
        </select>
      </div>
      <div class="flex flex-col">
        <label class="label grow">
          <span class="label-text">Image</span>
        </label>
        <img src="{{ asset('/storage/images/' . $post->image) }}" class="w-fit max-w-md" alt="" srcset="">
        <input type="file" placeholder="Choose file"
          class="file-input file-input-bordered file-input-primary w-full max-w-md" name="image" />
      </div>
      <div class="flex flex-col">
        <label class="label">
          <span class="label-text">Description</span>
        </label>
        <textarea class="textarea textarea-bordered h-24 w-full" name="description" placeholder="Your description">{{ $post->description }}</textarea>
      </div>
      <button type="submit" class="btn btn-primary mt-4">Update</button>
    </form>
  </div>
@endsection
