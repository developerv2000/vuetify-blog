<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Inertia\Inertia;
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
        if ($request->route()->is('dashboard*')) {
            Inertia::setRootView('dashboard');
        } else {
            Inertia::setRootView('frontend');
        }

        // Resolve component path based on the route prefix
        Inertia::resolveComponentUsing(function ($name) use ($request) {
            if ($request->route()->is('dashboard*')) {
                return "resources/js/dashboard/pages/{$name}.vue";
            }

            return "resources/js/front/pages/{$name}.vue";
        });

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
            'auth' => [
                'user' => $request->user(),
                // 'roles' => $request->user()?->roles->pluck('name'),
                // 'permissions' => $request->user()?->permissions->pluck('name'),
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'query' => fn () => $request->query(),
        ];
    }
}
