<script setup>
import FrontLeftbar from "./FrontLeftbar.vue";
import FrontNavbar from "./FrontNavbar.vue";
import FrontFooter from "./FrontFooter.vue";

defineProps({
    includeLeftbar: {
        default: true,
    },
});
</script>

<template>
    <v-app class="bg-indigo-lighten-5">
        <v-main max-width="1200px" class="mx-auto w-100">
            <FrontLeftbar v-if="includeLeftbar" />
            <FrontNavbar />
            <slot></slot>
            <FrontFooter />
        </v-main>
    </v-app>
</template>

<style scoped>
.v-main {
    padding-left: 380px; /* Padding for leftbar */
}
</style>
