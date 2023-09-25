<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class PostSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    for ($i = 0; $i < 50; $i++) {
      Post::insert([
        'title' => Str::random(20),
        'description' => Str::random(20),
        'status' => rand(0, 1),
        'publish_date' => date('Y-m-d'),
        'user_id' => rand(1, 5),
        'category_id' => rand(1, 5),
        'views' => rand(1, 6) * 50
      ]);
    }
  }
}