import createServer from '@inertiajs/vue3/server';
import { initializeSSR } from '@/shared/appSetup';

createServer((page) =>
    initializeSSR(page, import.meta.globEager('./pages/**/*.vue'))
);
