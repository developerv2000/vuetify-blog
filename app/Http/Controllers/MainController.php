<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function home(Request $request)
    {
        $randomPosts = Post::inRandomOrder()
            ->limit(2)
            ->with('category')
            ->withCount('comments')
            ->get();

        $latestPosts = Post::latest()
            ->limit(6)
            ->with('category')
            ->withCount('comments')
            ->get();

        $latestPostChunks = $latestPosts->chunk(3);

        return inertia('Home', compact('randomPosts', 'latestPostChunks'));
    }
}
