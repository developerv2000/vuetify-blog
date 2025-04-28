<script setup>
import useRouteUtils from "@/shared/composables/useRouteUtils";
import { Link } from "@inertiajs/vue3";
import { mdiMenuDown } from "@mdi/js";

const { isActive } = useRouteUtils();

const links = [
    { name: "home", label: "Home", href: "/" },
    { name: "about", label: "About", href: "/about" },
    { name: "contacts", label: "Contacts", href: "/contacts" },
];

const dropdownItems = [
    {
        title: "Page 1",
        href: "#page-1",
    },
    {
        title: "Page 2",
        href: "#page-2",
    },
    {
        title: "Page 3",
        href: "#page-3",
    },
    {
        title: "Page 4",
        href: "#page-4",
    },
];
</script>

<template>
    <nav class="bg-blue-grey-darken-4 navbar w-100 d-flex justify-center ga-4 pa-4">
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

        <v-menu transition="slide-x-transition">
            <template #activator="{ props }">
                <button
                    v-bind="props"
                    class="dropdown-button d-flex align-center ga-1 pa-0 text-grey-lighten-1"
                >
                    Pages
                    <v-icon>{{ mdiMenuDown }}</v-icon>
                </button>
            </template>

            <v-list class="mt-2">
                <v-list-item
                    v-for="item in dropdownItems"
                    :key="item.href"
                    class="pa-0"
                >
                    <Link
                        :href="item.href"
                        class="list-item d-block w-100 px-4 py-2 text-decoration-none"
                        style="min-width: 120px"
                    >
                        {{ item.title }}
                    </Link>
                </v-list-item>
            </v-list>
        </v-menu>
    </nav>
</template>

<style scoped>
.navbar__link:not(.navbar__link--active):hover {
    color: #e0e0e0 !important;
}

.dropdown-button:hover,
.dropdown-button:focus {
    color: #e0e0e0 !important;
}

.list-item {
    color: black;
}

.list-item:hover {
    background-color: #e0e0e0;
}
</style>
