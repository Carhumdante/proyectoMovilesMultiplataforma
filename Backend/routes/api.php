<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\PassportAuthController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\OfficeController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderdetailController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductLineController;
use App\Http\Controllers\CookieController;
use App\Http\Controllers\CartController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/', function () {
    return view('welcome');
});

Route::get('/users', [UserController::class,'store']);

Route::post('/students_store', [StudentController::class,'store']);
Route::post('/students_show', [StudentController::class,'show']);
Route::get('/students_token', [StudentController::class,'showToken']);
Route::post('/students_delete', [StudentController::class,'destroy']);
Route::post('/students_update', [StudentController::class,'update']);

Route::get('/show_students_by_program', [ProgramController::class,'show_students_by_program']);

Route::post('/register', [PassportAuthController::class,'register']);
Route::post('/login', [PassportAuthController::class,'login']);

Route::post('/customers_index', [CustomerController::class, 'index']);
Route::post('/customers_create', [CustomerController::class, 'store']);
Route::post('/customers_update', [CustomerController::class, 'update']);
Route::post('/customers_delete', [CustomerController::class, 'destroy']);
Route::get('/customers_show', [CustomerController::class, 'show']);
Route::get('/customers_number', [CustomerController::class, 'customerNumber']);


Route::post('/employee_index', [EmployeeController::class, 'index']);
Route::post('/employee_create', [EmployeeController::class, 'store']);
Route::post('/employee_update', [EmployeeController::class, 'update']);
Route::post('/employee_delete', [EmployeeController::class, 'destroy']);

Route::post('/office_index', [OfficeController::class, 'index']);
Route::post('/office_create', [OfficeController::class, 'store']);
Route::post('/office_update', [OfficeController::class, 'update']);
Route::post('/office_delete', [OfficeController::class, 'destroy']);

Route::post('/order_index', [OrderController::class, 'index']);
Route::post('/order_create', [OrderController::class, 'store']);
Route::post('/order_update', [OrderController::class, 'update']);
Route::post('/order_delete', [OrderController::class, 'destroy']);
Route::get('/order_last', [OrderController::class, 'last']);
Route::post('/order_customer', [OrderController::class, 'getOrderFromCustomer']);


Route::post('/orderdetail_index', [OrderdetailController::class, 'index']);
Route::post('/orderdetail_create', [OrderdetailController::class, 'create']);
Route::post('/orderdetail_update', [OrderdetailController::class, 'update']);
Route::post('/orderdetail_delete', [OrderdetailController::class, 'destroy']);

Route::post('/product_index', [ProductController::class, 'index']);
Route::post('/product_create', [ProductController::class, 'store']);
Route::post('/product_update', [ProductController::class, 'update']);
Route::post('/product_delete', [ProductController::class, 'destroy']);
Route::get('/product_show', [ProductController::class, 'show']);
Route::get('/product_cars', [ProductController::class, 'productCars']);
Route::get('/product_motorcycles', [ProductController::class, 'productMotorcycles']);
Route::get('/product_planes', [ProductController::class, 'productPlanes']);
Route::get('/product_ships', [ProductController::class, 'productShips']);
Route::get('/product_trains', [ProductController::class, 'productTrains']);
Route::get('/product_trucks', [ProductController::class, 'productTrucks']);
Route::get('/product_vintages', [ProductController::class, 'productVintage']);

Route::post('/productline_index', [ProductLineController::class, 'index']);
Route::post('/productline_create', [ProductLineController::class, 'store']);
Route::post('/productline_update', [ProductLineController::class, 'update']);
Route::post('/productline_delete', [ProductLineController::class, 'destroy']);
Route::get('/productline_show', [ProductLineController::class, 'show']);

Route::post('/cookie_set', [CookieController::class, 'setCookie']);
Route::post('/cookie_get', [CookieController::class, 'getCookie']);
Route::post('/cookie_delete', [CookieController::class, 'deleteCookie']);

Route::post('/cart_create', [CartController::class, 'create']);
Route::post('/cart_get', [CartController::class, 'select']);
Route::post('/cart_delete', [CartController::class, 'destroy']);
