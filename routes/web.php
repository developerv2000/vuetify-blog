<?php

use App\Http\Controllers\MainController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\SubscriberController;
use Illuminate\Support\Facades\Route;

Route::controller(MainController::class)->group(function () {
    Route::get('/', 'home')->name('home');
    Route::get('/about', 'about')->name('about');
    Route::get('/contacts', 'contacts')->name('contacts');
});

Route::get('/posts/{record}', [PostController::class, 'show'])->name('posts.show');

Route::controller(SubscriberController::class)->group(function () {
    Route::post('/subscribe', 'subscribe')->name('subscribe');
    Route::post('/unsubscribe', 'unsubscribe')->name('unsubscribe');
});

require __DIR__.'/auth.php';
