<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class PostController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return view('posts', ['posts' => Post::paginate(5)]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create(Request $request)
  {
    return view('create', ['categories' => Category::all()]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $request->validate([
      'title' => ['required', 'max:255'],
      'category_id' => ['required', 'integer'],
      'image' => ['required', 'image', 'max:2028'],
      'description' => ['required']
    ]);

    // Store image
    $image = $request->file('image');
    $imagePath = time() . "." . $image->getClientOriginalExtension();
    $image->storeAs('images', $imagePath);

    // DB::table('posts')->insert([
    //   'title' => $request->title,
    //   'category_id' => $request->category_id,
    //   'image' => $imagePath,
    //   'description' => $request->description
    // ]);

    $post = new Post();
    $post->title = $request->title;
    $post->category_id = $request->category_id;
    $post->image = $imagePath;
    $post->description = $request->description;
    $post->save();

    return redirect('posts')->with('post-created', 'Post uploaded successfully!');
  }

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    $post = Post::findOrFail($id);
    return view('show', compact('post'));
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(string $id)
  {
    return view('edit', [
      'post' => Post::findOrFail($id),
      'categories' => Category::all(),
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, string $id)
  {
    $request->validate([
      'title' => ['max:255'],
      'category_id' => ['required', 'integer'],
      'description' => ['required']
    ]);

    $post = Post::findOrFail($id);

    if ($request->hasFile('image')) {
      $request->validate([
        'image' => ['required', 'image', 'max:2028']
      ]);
      // Store image
      $image = $request->file('image');
      $imagePath = time() . "." . $image->getClientOriginalExtension();
      $image->storeAs('images', $imagePath);

      // delete previous image
      File::delete(public_path('/storage/images/' . $post->image));
      $post->image = $imagePath;
    }

    $post->title = $request->title;
    $post->category_id = $request->category_id;
    $post->description = $request->description;
    $post->save();

    return redirect('posts')->with('success', 'Post uploaded successfully!');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(string $id)
  {
    $post = Post::findOrFail($id);
    $post->delete();
    return redirect('/posts')->with('success', 'Post deleted successfully!');
  }

  public function trashed()
  {
    return view('trashed', ['posts' => Post::onlyTrashed()->get()]);
  }

  public function restore(String $id)
  {
    Post::onlyTrashed()->findOrFail($id)->restore();
    return redirect()->back();
  }

  public function forceDelete(String $id)
  {
    $post = Post::onlyTrashed()->findOrFail($id);
    if ($post->image)
      File::delete(public_path('/storage/images/' . $post->image));
    $post->forceDelete();
    return redirect()->back();
  }
}
