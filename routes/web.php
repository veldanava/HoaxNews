<?php

use App\Http\Controllers\WebhoaxController;
use Illuminate\Foundation\Application;
use Illuminate\Routing\Route as RoutingRoute;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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


Route::get('/', [WebhoaxController::class, 'index']);
Route::post('/webhoax', [WebhoaxController::class, 'store'])->middleware(['auth', 'verified'])->name('create.webhoax');
Route::get('/webhoax', [WebhoaxController::class, 'show'])->middleware(['auth', 'verified'])->name('my.webhoax');
Route::get('/webhoax/edit', [WebhoaxController::class, 'edit'])->middleware(['auth', 'verified'])->name('edit.webhoax');
Route::post('/webhoax/update', [WebhoaxController::class, 'update'])->middleware(['auth', 'verified'])->name('update.webhoax');
Route::post('/webhoax/delete', [WebhoaxController::class, 'destroy'])->middleware(['auth', 'verified'])->name('delete.webhoax');



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
