<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function home(Request $request)
    {
        return inertia('Home', [
            'randomPosts' => fn () => Post::inRandomOrder()
                ->limit(2)
                ->with('category')
                ->withCount('comments')
                ->get(),

            'latestPostChunks' => fn () => Post::latest()
                ->limit(6)
                ->with('category')
                ->withCount('comments')
                ->get()
                ->chunk(3),
        ]);
    }
}
