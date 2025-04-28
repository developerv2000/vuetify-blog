<script setup>
const appName = import.meta.env.VITE_APP_NAME || 'Blog';
</script>

<template>
    <v-footer color="blue-grey-darken-4" class="justify-center pa-4">
        <p><strong>{{ appName }}.</strong> All Rights Reserved. Designed by <strong>HTML Codex</strong></p>
    </v-footer>
</template>
