<script setup>
import { Link } from "@inertiajs/vue3";

const props = defineProps({
    title: String,
    links: {
        type: Array,
        default: () => [],
    },
});

// Merge Home + links
const validatedLinks = [{ label: "Home", href: "/" }, ...props.links];
</script>

<template>
    <v-sheet
        color="light-blue-darken-4"
        class="px-8 py-16 d-flex justify-space-between"
    >
        <h4 class="text-h4 text-uppercase font-weight-bold">{{ title }}</h4>

        <v-breadcrumbs :items="validatedLinks" class="text-h6 text-white pa-0">
            <template #item="{ item }">
                <v-breadcrumbs-item>
                    <Link v-if="item.href" :href="item.href" class="breadcrumbs-link text-white text-decoration-none">{{ item.label }}</Link>
                    <span v-else>{{ item.label }}</span>
                </v-breadcrumbs-item>
            </template>
        </v-breadcrumbs>
    </v-sheet>
</template>

<style scoped>
.breadcrumbs-link:hover {
    text-decoration: underline !important;
}
</style>
