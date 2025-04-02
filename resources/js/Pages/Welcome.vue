<script setup>
import { Head, Link } from "@inertiajs/vue3";

defineProps({
    phpVersion: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <Head title="Welcome" />
    <h1>Its home, check if vuetify is working!</h1>
    <v-btn>Elevation 4</v-btn>
</template>
