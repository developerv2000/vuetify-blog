<script setup>
import { ref } from "vue";
import { router, Link } from "@inertiajs/vue3";

const action = ref("Subscribe");
const email = ref("");
const message = ref("");
const errors = ref(null);

function handleSubscription() {
    const url =
        action.value === "Subscribe"
            ? route("subscribe")
            : route("unsubscribe");

    router.post(
        url,
        { email: email.value },
        {
            preserveScroll: true,
            onSuccess: (page) => {
                console.log(page.props.front_flashed);
                message.value =
                    page.props.front_flashed?.message ?? "Action successful.";

                action.value =
                    action.value === "Subscribe" ? "Unsubscribe" : "Subscribe";

                errors.value = null;
            },
            onError: (err) => {
                errors.value = err;
                message.value = "";
            },
        }
    );
}
</script>

<template>
    <v-sheet
        color="light-blue-darken-4"
        class="d-flex flex-column justify-center align-center pa-12 text-center"
    >
        <h3 class="text-h4 font-weight-bold">Subscribe My Newsletter</h3>
        <p class="mt-2 mb-4">
            Subscribe and get my latest article in your inbox
        </p>

        <form
            @submit.prevent="handleSubscription"
            class="d-flex w-50 align-justify"
        >
            <v-text-field
                v-model="email"
                label="Email"
                density="compact"
                variant="solo"
                single-line
                hide-details
                :error-messages="errors?.email"
                class="email-input"
                type="email"
                name="email"
                required
            />

            <v-btn
                type="submit"
                color="indigo-darken-2"
                class="submit h-100 text-capitalize rounded-0"
            >
                {{ action }}
            </v-btn>
        </form>

        <div v-if="message" class="mt-4 text-white">
            {{ message }}
        </div>
    </v-sheet>
</template>

<style scoped>
.email-input,
.email-input ::v-deep(.v-field) {
    border-radius: 0 !important;
}

.submit {
    height: auto !important;
}
</style>
