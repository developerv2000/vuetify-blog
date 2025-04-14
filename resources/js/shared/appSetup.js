// Common logic to initialize both SPA and SSR Inertia apps with Vue 3 and Vuetify

import { createSSRApp, createApp, h } from 'vue'; // Vue rendering functions
import { createInertiaApp } from '@inertiajs/vue3'; // InertiaJS client setup
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'; // Dynamic page loader
import { ZiggyVue } from '../../../vendor/tightenco/ziggy'; // Laravel route helper for Vue
import vuetify from './vuetify'; // Vuetify plugin config
import { renderToString } from '@vue/server-renderer'; // Vue server-side renderer

const appName = import.meta.env.VITE_APP_NAME || 'Blog'; // App title from .env

/**
 * Initializes a Single Page Application (SPA)
 * @param {Object} pagesGlob - `import.meta.glob` result with all page components (lazy loading)
 */
export function initializeSPA(pagesGlob) {
    return createInertiaApp({
        // Set document title dynamically
        title: (title) => (title ? `${title} - ${appName}` : appName),

        // Resolve .vue page components dynamically from passed `pagesGlob`
        resolve: (name) =>
            resolvePageComponent(`./pages/${name}.vue`, pagesGlob),

        // Main Vue app setup
        setup({ el, App, props, plugin }) {
            return createApp({ render: () => h(App, props) }) // Render Inertia root component
                .use(plugin) // Use Inertia plugin
                .use(ZiggyVue) // Use Laravel routes inside Vue
                .use(vuetify) // Use Vuetify
                .mount(el); // Mount to DOM
        },

        // Inertia progress bar color
        progress: { color: '#4B5563' },
    });
}

/**
 * Initializes a Server-Side Rendered (SSR) Inertia app
 * @param {Object} page - Initial page data
 * @param {Object} pagesGlob - `import.meta.globEager` result with all page components (eager loaded)
 */
export function initializeSSR(page, pagesGlob) {
    return createInertiaApp({
        page, // Page from SSR server
        render: renderToString, // Render method for SSR

        title: (title) => (title ? `${title} - ${appName}` : appName),

        resolve: (name) =>
            resolvePageComponent(`./pages/${name}.vue`, pagesGlob),

        setup({ App, props, plugin }) {
            return createSSRApp({ render: () => h(App, props) })
                .use(plugin)
                .use(ZiggyVue, {
                    // Provide Ziggy config during SSR
                    ...page.props.ziggy,
                    location: new URL(page.props.ziggy.location),
                })
                .use(vuetify); // Attach Vuetify to SSR app
        },
    });
}
