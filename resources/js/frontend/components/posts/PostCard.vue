<script setup>
import PostCardSubtitle from "./PostCardSubtitle.vue";
import { Link } from "@inertiajs/vue3";
import { mdiMenuRight } from "@mdi/js";

defineProps(["post"]);
</script>

<template>
    <v-card variant="text">
        <v-row align="center" dense>
            <v-col cols="4">
                <v-img :src="post.image_asset_url" cover></v-img>
            </v-col>

            <v-col cols="8" class="text-blue-grey-darken-4">
                <v-card-title
                    class="position-relative ml-n16 mb-2 pa-4 font-weight-bold bg-white"
                    >{{ post.title }}</v-card-title
                >
                <PostCardSubtitle :post="post" />
                <v-card-text class="pb-0 text-truncate">{{
                    post.body
                }}</v-card-text>

                <v-card-actions class="pb-0">
                    <Link :href="route('posts.show', post.id)">
                        <v-btn
                            color="light-blue-darken-4"
                            class="text-capitalize"
                            :append-icon="mdiMenuRight"
                        >
                            Read More
                        </v-btn>
                    </Link>
                </v-card-actions>
            </v-col>
        </v-row>
    </v-card>
</template>
