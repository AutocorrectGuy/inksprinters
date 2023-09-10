<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    DB::table('categories')->insert([
      ['name' => 'PHP'],
      ['name' => 'JavaScript'],
      ['name' => 'SQL'],
      ['name' => 'HTML'],
      ['name' => 'CSS'],
      ['name' => 'TypeScript'],
      ['name' => 'SCSS'],
      ['name' => 'Blade'],
      ['name' => 'Vue.js'],
      ['name' => 'Bash'],
      ['name' => 'Python'],
      ['name' => 'Ruby'],
      ['name' => 'XML'],
      ['name' => 'JSON'],
      ['name' => 'YAML']
    ]);
  }
}
