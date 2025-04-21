<script setup>
import useConvertTimestamps from "@/shared/composables/useConvertTimestamps";
import PostCard from "./PostCard.vue";

const { posts } = defineProps({
    posts: Object,
});

const { convertTimestamps } = useConvertTimestamps();
convertTimestamps(posts);
</script>

<template>
    <v-sheet class="d-flex flex-column ga-4 pa-8 py-10">
        <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </v-sheet>
</template>

