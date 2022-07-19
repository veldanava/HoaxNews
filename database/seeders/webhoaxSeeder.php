<?php

namespace Database\Seeders;

use App\Models\webhoax as ModelsWebhoax;
use Apps\Models\webhoax;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class webhoaxSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ModelsWebhoax::factory()->count(50)->create();
    }
}
