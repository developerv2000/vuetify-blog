<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function home(Request $request)
    {
        $randomPosts = Post::inRandomOrder()->limit(2)->get();

        return inertia('Home', compact('randomPosts'));
    }
}
