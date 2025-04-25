<?php

namespace App\Http\Controllers;

use App\Models\Subscriber;
use Illuminate\Http\Request;

class SubscriberController extends Controller
{
    public function subscribe(Request $request)
    {
        if (!Subscriber::where('email', $request->input('email'))->exists()) {
            Subscriber::create($request->all());
        }

        return redirect()->back()->with([
            'flash.message' => 'Subscribed successfully.',
        ]);
    }

    public function unsubscribe(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email|exists:subscribers,email',
        ]);

        Subscriber::where('email', $validated['email'])->delete();

        return redirect()->back()->with([
            'flash.message' => 'Unsubscribed successfully.',
        ]);
    }
}
