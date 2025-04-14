// Vite's config file: defines how Vite builds and serves your frontend assets

import { defineConfig } from 'vite'; // Function to define Vite config
import laravel from 'laravel-vite-plugin'; // Laravel Vite integration (handles hot reload, asset loading, SSR)
import vue from '@vitejs/plugin-vue'; // Enables Vue single-file component support (.vue files)
import vuetify from 'vite-plugin-vuetify'; // Adds Vuetify UI framework integration
import { fileURLToPath } from 'url'; // Used to resolve absolute file paths

export default defineConfig({
    plugins: [
        laravel({
            // Entry points for frontend and dashboard apps (JS + CSS)
            input: [
                'resources/js/frontend/app.js',
                'resources/js/dashboard/app.js',
                'resources/css/frontend/app.css',
                'resources/css/dashboard/app.css',
            ],
            ssr: 'resources/js/frontend/ssr.js', // Entry point for server-side rendering
            refresh: true, // Enables hot reload on file changes
        }),
        vue({
            template: {
                // Configure how asset URLs are handled inside Vue templates
                transformAssetUrls: {
                    base: null, // Prevent auto-adjusting asset base paths
                    includeAbsolute: false, // Skip modifying absolute asset URLs
                },
            },
        }),
        vuetify(), // Enable Vuetify plugin to support Material UI components
    ],
    resolve: {
        alias: {
            // Set up import aliases for cleaner and shorter import paths
            '@': fileURLToPath(new URL('./resources/js', import.meta.url)), // `@` -> `resources/js`
            '@images': fileURLToPath(new URL('./resources/images', import.meta.url)), // `@images` -> `resources/images`
        },
    },
    ssr: {
        noExternal: ['vuetify'], // Mark Vuetify as internal to avoid issues during SSR
    },
    optimizeDeps: {
        include: ['vuetify'], // Pre-bundle Vuetify for better performance
    },
});
