<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Program;

class ProgramSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $program = new Program;
        $program->name = 'RAE';
        $program->description = 'Carrera Real';
        $program->key = 'RAE';
        $program->save();
    }
}
