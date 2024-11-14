<?php

namespace Database\Seeders;

use App\Models\Burger;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BurgerSeeder extends Seeder
{
    public function run(): void
    {
        Burger::create([
            'name' => 'Cheese Burger',
            'description' => 'Tasty Cheesy Burger with onions and tomato',
            'image' => 'images/burger.png',
            'price' => 10
        ]);
        Burger::create([
            'name' => 'Fries',
            'description' => 'Smalll Box of Fries...',
            'image' => 'images/fries.png',
            'price' => 5
        ]);
    }
}
