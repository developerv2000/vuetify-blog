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
    <Head title="Home" />
    {{ $page }}
</template>
