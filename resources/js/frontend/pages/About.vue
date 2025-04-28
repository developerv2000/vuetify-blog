<script setup>
import FrontLayout from "../layouts/FrontLayout.vue";
import { Head } from "@inertiajs/vue3";
import Breadcrumbs from "../components/Breadcrumbs.vue";
</script>

<template>
    <FrontLayout>
        <Head title="About" />
        <Breadcrumbs title="About me" :links="[{ label: 'About' }]" />
    </FrontLayout>
</template>
