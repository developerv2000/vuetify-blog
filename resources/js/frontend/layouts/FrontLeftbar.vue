<script setup>
import { mdiSend, mdiFacebook, mdiTwitter, mdiInstagram } from "@mdi/js";
import profileImageUrl from "@images/frontend/profile.jpg";

const icons = [mdiSend, mdiFacebook, mdiTwitter, mdiInstagram];
</script>

<template>
    <v-sheet
        class="leftbar position-fixed h-screen d-flex flex-column align-center ml-n6 pa-8 text-center"
        width="350"
    >
        <v-avatar size="210" class="pa-4 bg-light-blue-darken-4">
            <img class="rounded-circle" :src="profileImageUrl" alt="profile" />
        </v-avatar>

        <h2 class="profile-name text-h2 mt-6 font-weight-bold">Kate Glover</h2>

        <p class="text-body-1 mt-4">
            Justo stet no accusam stet invidunt sanctus magna clita vero eirmod,
            sit sit labore dolores lorem. Lorem at sit dolor dolores sed diam
            justo
        </p>

        <div class="d-flex justify-center ga-4 mt-5">
            <div class="links-wrapper d-flex ga-2">
                <v-hover
                    v-for="icon in icons"
                    :key="icon"
                    v-slot="{ isHovering, props }"
                >
                    <v-btn
                        v-bind="props"
                        :icon="icon"
                        variant="outlined"
                        rounded="0"
                        size="small"
                        :class="
                            isHovering
                                ? 'bg-light-blue-darken-4'
                                : 'bg-white text-light-blue-darken-4'
                        "
                    />
                </v-hover>
            </div>
        </div>

        <v-btn
            class="w-100 mt-auto text-capitalize"
            color="light-blue-darken-4"
            size="large"
        >
            Hire me
        </v-btn>
    </v-sheet>
</template>

<style scoped>
.leftbar {
    transform: translateX(-100%); /* Translate because of position fixed */
}

.profile-name {
    font-size: 40px !important;
}

.links-wrapper .v-btn {
    border-color: #01579b;
}
</style>
