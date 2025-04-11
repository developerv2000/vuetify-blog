// resources/js/shared/appSetup.js
import { createSSRApp, createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../../vendor/tightenco/ziggy';
import vuetify from './vuetify';
import { renderToString } from '@vue/server-renderer';

const appName = import.meta.env.VITE_APP_NAME || 'Blog';

export function initializeSPA(pagesGlob) {
    return createInertiaApp({
        title: (title) => (title ? `${title} - ${appName}` : appName),
        resolve: (name) =>
            resolvePageComponent(`./Pages/${name}.vue`, pagesGlob),
        setup({ el, App, props, plugin }) {
            return createApp({ render: () => h(App, props) })
                .use(plugin)
                .use(ZiggyVue)
                .use(vuetify)
                .mount(el);
        },
        progress: { color: '#4B5563' },
    });
}

export function initializeSSR(page, pagesGlob) {
    return createInertiaApp({
        page,
        render: renderToString,
        title: (title) => (title ? `${title} - ${appName}` : appName),
        resolve: (name) =>
            resolvePageComponent(`./Pages/${name}.vue`, pagesGlob),
        setup({ App, props, plugin }) {
            return createSSRApp({ render: () => h(App, props) })
                .use(plugin)
                .use(ZiggyVue, {
                    ...page.props.ziggy,
                    location: new URL(page.props.ziggy.location),
                })
                .use(vuetify);
        },
    });
}
