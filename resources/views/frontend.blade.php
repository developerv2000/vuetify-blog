<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Scripts -->
    @routes
    @vite(['resources/css/frontend/app.css', 'resources/js/frontend/app.js'])
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>
