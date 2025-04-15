<script setup>
import useRouteUtils from "@/shared/composables/useRouteUtils";
import { Link } from "@inertiajs/vue3";

const { isActive } = useRouteUtils();

const links = [
    { name: "home", label: "Home", href: "/" },
    { name: "about", label: "About", href: "/about" },
    { name: "contacts", label: "Contacts", href: "/contacts" },
];
</script>

<template>
    <nav class="navbar w-100 d-flex justify-center ga-4 pa-4">
        <Link
            v-for="link in links"
            :key="link.name"
            :href="link.href"
            class="navbar__link text-decoration-none"
            :class="
                isActive(link.name)
                    ? 'navbar__link--active text-white'
                    : 'text-grey-lighten-1'
            "
        >
            {{ link.label }}
        </Link>
    </nav>
</template>

<style scoped>
.navbar {
    background-color: #2A4B7C;
}

.navbar__link:not(.navbar__link--active):hover {
    color: #E0E0E0 !important;
}
</style>
