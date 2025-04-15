<script setup>
import { usePage } from "@inertiajs/vue3";
import FrontLayout from "../layouts/FrontLayout.vue";
import carouselImage from "@images/frontend/carousel.jpg";

const page = usePage();
const randomPosts = page.props.randomPosts;
</script>

<template>
    <FrontLayout>
        <v-carousel height="460" hide-delimiters>
            <v-carousel-item
                v-for="post in randomPosts"
                :key="post.id"
                :src="carouselImage"
                cover
            >
                <div class="overlay" />

                <div
                    class="position-relative fill-height d-flex justify-center align-center pa-16 text-center text-white"
                >
                    <h2 class="text-h4">{{ post.title }}</h2>
                </div>
            </v-carousel-item>
        </v-carousel>
    </FrontLayout>
</template>

<style scoped>
.overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(var(--v-theme-on-background), 0.45);
    z-index: 1;
}

.position-relative {
    z-index: 2;
}
</style>
