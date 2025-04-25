<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * Set a default root view — will be overwritten dynamically.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Handle an incoming request.
     */
    public function handle($request, \Closure $next)
    {
        // Dynamically set the root view based on the route
        $this->rootView = $request->routeIs('dashboard*') ? 'dashboard' : 'frontend';

        return parent::handle($request, $next);
    }

    /**
     * Share default props for every Inertia response.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => fn() => [
                'user' => $request->user(),
                // 'roles' => $request->user()?->roles->pluck('name'),
                // 'permissions' => $request->user()?->permissions->pluck('name'),
            ],
            'query' => fn() => $request->query(),
            'flash' => fn() => session('flash', []), // flashed messages
            'ziggy' => fn() => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];
    }
}
