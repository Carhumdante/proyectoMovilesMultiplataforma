<?php

use App\Models\User;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\ProgramController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/users', [UserController::class,'store']);

Route::post('/students_store', [StudentController::class,'store']);
Route::get('/students_token', [StudentController::class,'showToken']);
Route::post('/students_delete', [StudentController::class,'destroy']);
Route::post('/students_update', [StudentController::class,'update']);

Route::get('/show_students_by_program', [ProgramController::class,'show_students_by_program']);

