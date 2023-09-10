@extends('layouts.default')
@section('content')
  <h1 class="pb-20 text-3xl">Posts page</h1>

  @if (session('success'))
    <div class="alert alert-success mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{{ session('success') }}</span>
    </div>
  @endif

  <div class="flex justify-end gap-4">
    <a href="{{ route('posts.trashed') }}" class="btn btn-primary text-white">Trashed</a>
    <a href="{{ route('posts.create') }}" class="btn btn-accent text-white">Create</a>
  </div>

  <table class="table mt-4">
    <!-- head -->
    <thead class="bg-gray-200">
      <tr>
        <th></th>
        <th>Image</th>
        <th>Title</th>
        <th>Description</th>
        <th>Category</th>
        <th>Created at</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      @foreach ($posts as $post)
        <tr class="hover">
          <th>{{ $post->id }}</th>
          <td><img class="max-w-[128px]" src="{{ asset('/storage/images/' . $post->image) }}" /></td>
          <td> {{ $post->title }} </td>
          <td>{{ $post->description }}</td>
          <td>{{ $post->category->name }}</td>
          <td>{{ $post->created_at ? \Carbon\Carbon::parse($post->created_at)->diffForHumans() : '---' }}</td>
          <td class="">
            <div class="flex items-center gap-2">
              <a href="{{ route('posts.show', $post->id) }}" class="btn btn-success btn-outline btn-sm">View</a>
              <a href="{{ route('posts.edit', $post->id) }}" class="btn btn-info btn-outline btn-sm">Edit</a>
              <form action="{{ route('posts.destroy', $post->id) }}" method="POST">
                @csrf
                @method('DELETE')
                <button type="submit" class="btn btn-error btn-outline btn-sm">Delete</button>
              </form>
            </div>
          </td>
        </tr>
      @endforeach
    </tbody>
  </table>
  {{ $posts->links('vendor.pagination') }}
@endsection
