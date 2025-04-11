<script setup>
import FrontLeftbar from '@/Front/Layouts/leftbar.vue';

defineProps({
    includeLeftbar: {
        default: true,
    },
});
</script>

<template>
    <v-app class="bg-indigo-lighten-5">
        <v-main max-width="1200px" class="mx-auto w-100">
            <div class="d-flex">
                <FrontLeftbar v-if="includeLeftbar"></FrontLeftbar>

                <slot>

                </slot>
            </div>
        </v-main>
    </v-app>
</template>
