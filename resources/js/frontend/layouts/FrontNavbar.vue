<script setup>
import useRouteUtils from '@/shared/composables/useRouteUtils';
import { Link } from '@inertiajs/vue3';

const { isActive } = useRouteUtils();

const links = [
    { name: "home", label: "Home", href: "/" },
    { name: "about", label: "About", href: "/about" },
    { name: "contacts", label: "Contacts", href: "/contacts" },
];
</script>

<template>
    <div class="w-100 d-flex justify-center ga-4 pa-4 bg-blue-grey-darken-3">
        <Link v-for="link in links"
            :key="link.name"
            :href="link.href"
            :class="isActive(link.name) ? 'text-grey-lighten-5' : 'text-grey-lighten-1'"
        >
            {{ link.label }}
        </Link>
    </div>
</template>
