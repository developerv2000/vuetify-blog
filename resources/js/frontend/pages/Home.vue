<script setup>
import { usePage } from "@inertiajs/vue3";
import FrontLayout from "../layouts/FrontLayout.vue";
import { Link } from "@inertiajs/vue3";
import carouselImage from "@images/frontend/carousel.jpg";
import { mdiCalendar, mdiFolder, mdiComment } from "@mdi/js";
import { useDate } from "vuetify";
import useConvertTimestamps from "@/shared/composables/useConvertTimestamps";

// Get posts
const page = usePage();
const randomPosts = page.props.randomPosts;

// Validate posts timestamps
const { convertTimestamps } = useConvertTimestamps();
convertTimestamps(randomPosts);

// Used in formatting dates
const date = useDate();
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
                    class="position-relative fill-height d-flex flex-column justify-center align-center pa-16 text-center text-white"
                >
                    <h2 class="text-h4">{{ post.title }}</h2>

                    <div class="d-flex ga-2 mt-5 text-subtitle-2">
                        <div class="d-flex align-center ga-1">
                            <v-icon size="16" color="white">{{
                                mdiCalendar
                            }}</v-icon>
                            <span
                                >{{
                                    date.format(post.created_at, "normalDate")
                                }}
                                {{ date.format(post.created_at, "year") }}</span
                            >
                        </div>

                        <div class="d-flex align-center ga-1">
                            <v-icon size="16" color="white">{{
                                mdiFolder
                            }}</v-icon>
                            <span>{{ post.category.name }}</span>
                        </div>

                        <div class="d-flex align-center ga-1">
                            <v-icon size="16" color="white">{{
                                mdiComment
                            }}</v-icon>
                            <span>{{ post.comments_count }} Comments</span>
                        </div>
                    </div>

                    <Link :href="route('posts.show', post.id)">
                        <v-btn
                            variant="outlined"
                            class="mt-5 text-capitalize"
                            color="white"
                            size="large"
                            >Read More</v-btn
                        >
                    </Link>
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
