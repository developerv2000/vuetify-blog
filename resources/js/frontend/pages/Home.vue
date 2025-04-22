<script setup>
import { usePage, router } from "@inertiajs/vue3";
import FrontLayout from "../layouts/FrontLayout.vue";
import { Link } from "@inertiajs/vue3";
import carouselImage from "@images/frontend/carousel.jpg";
import useConvertTimestamps from "@/shared/composables/useConvertTimestamps";
import PostsList from "../components/posts/PostsList.vue";
import PostCardSubtitle from "../components/posts/PostCardSubtitle.vue";
import Subscribe from "../components/Subscribe.vue";

// Get posts
const page = usePage();
const randomPosts = page.props.randomPosts;
const latestPostChunks = page.props.latestPostChunks;

// Validate posts timestamps
const { convertTimestamps } = useConvertTimestamps();
convertTimestamps(randomPosts);

function refreshRandomPosts() {
    router.visit(route("home"), {
        only: ["randomPosts"],
        preserveScroll: true,
    });
}
</script>

<template>
    <FrontLayout>
        <!-- Carousel -->
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

                    <PostCardSubtitle
                        class="mt-4"
                        :post="post"
                    ></PostCardSubtitle>

                    <Link :href="route('posts.show', post.id)">
                        <v-btn
                            variant="outlined"
                            class="mt-5 text-capitalize"
                            color="white"
                            size="large"
                            >Read More</v-btn
                        >
                    </Link>

                    <v-btn class="mt-6 text-lowercase" @click="refreshRandomPosts">Refresh partly $randomPosts</v-btn>
                </div>
            </v-carousel-item>
        </v-carousel>

        <!-- Posts list -->
        <PostsList :posts="latestPostChunks[0]" />

        <!-- Subscrube -->
        <Subscribe />

        <!-- Posts list 2 -->
        <PostsList :posts="latestPostChunks[1]" />
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
