<script setup>
import { useDate } from 'vuetify';
import { mdiCalendar, mdiFolder, mdiComment } from "@mdi/js";

defineProps(['post']);

const date = useDate();
</script>

<template>
    <v-card-subtitle class="d-flex ga-2 text-subtitle-2 opacity-100">
        <div class="d-flex align-center ga-1">
            <v-icon size="16">{{ mdiCalendar }}</v-icon>

            <span>
                {{ date.format(post.created_at, "normalDate") }}
                {{ date.format(post.created_at, "year") }}</span
            >
        </div>

        <div class="d-flex align-center ga-1">
            <v-icon size="16">{{ mdiFolder }}</v-icon>
            <span>{{ post.category.name }}</span>
        </div>

        <div class="d-flex align-center ga-1">
            <v-icon size="16">{{ mdiComment }}</v-icon>
            <span>{{ post.comments_count }} Comments</span>
        </div>
    </v-card-subtitle>
</template>
