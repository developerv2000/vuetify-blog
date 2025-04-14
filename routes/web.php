<?php

use App\Http\Controllers\MainController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::controller(MainController::class)->group(function () {
    Route::get('/', [MainController::class, 'home'])->name('home');
    Route::get('/about', [MainController::class, 'home'])->name('about');
    Route::get('/contacts', [MainController::class, 'home'])->name('contacts');
});

Route::get('/posts/{record}', [PostController::class, 'show'])->name('show');

require __DIR__.'/auth.php';
