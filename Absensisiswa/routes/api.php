<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GuruController;
use App\Http\Controllers\SiswaController;
use App\Http\Controllers\KelasController;
use App\Http\Controllers\HariController;
use App\Http\Controllers\MapelController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// root guru
Route::get('guru', [GuruController::class, 'index']);
Route::post('guru', [GuruController::class, 'store']);
Route::get('guru/{id}', [GuruController::class, 'show']);
Route::put('guru/{id}', [GuruController::class, 'update']);
Route::delete('guru/{id}', [GuruController::class, 'destroy']);
Route::resource('siswas', SiswaController::class);
Route::resource('kelas', KelasController::class);
Route::resource('hari', HariController::class);
Route::resource('mapel', MapelController::class);


