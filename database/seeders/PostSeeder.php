<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    for ($i = 0; $i < 100; $i++) {
      DB::table('posts')->insert([
        'title' => fake()->title(),
        'category_id' => rand(1,15),
        'image' => null,
        'description' => fake()->sentences(rand(1,3), true),
        'created_at' => now()
      ]);
    }
  }
}
