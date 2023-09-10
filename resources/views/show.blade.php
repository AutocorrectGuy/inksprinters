@extends('layouts.default')
@section('content')
  <h1 class="pb-20 text-3xl">{{ $post->title }}</h1>
  <div class="flex flex-col gap-2">
    <div>Image</div>
    <img class="max-w-[128px]" src="{{ asset('/storage/images/' . $post->image) }}" />
  </div>
  <div class="flex flex-col gap-2">
    <div>Description</div>
    <p> {{ $post->description }}</p>
  </div>
  <div class="flex flex-col gap-2">
    <div>Created at</div>
    <div> {{ $post->created_at }}</div>
  </div>
@endsection
