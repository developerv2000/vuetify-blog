<script setup>
import FrontLayout from "../layouts/FrontLayout.vue";
import { Head } from "@inertiajs/vue3";
import Breadcrumbs from "../components/Breadcrumbs.vue";
import aboutImage from "@images/frontend/about.jpg";
import { ref, onMounted } from "vue";

// Define skills dynamically
const skills = ref([
    { label: "Adaptability", value: 0, target: 70 },
    { label: "Research", value: 0, target: 85 },
    { label: "Editing", value: 0, target: 100 },
]);

const hasAnimated = ref(false);

let incrementInterval;

// Function to increment skill levels
function incrementLevels() {
    let allReached = true;

    skills.value.forEach((skill) => {
        if (skill.value < skill.target) {
            skill.value += 1;
            allReached = false;
        }
    });

    if (allReached) {
        clearInterval(incrementInterval);
    }
}

// Start the interval to animate progress
function startIntervals() {
    incrementInterval = setInterval(incrementLevels, 30);
}

function onIntersect(isIntersecting) {
    if (isIntersecting && !hasAnimated.value) {
        startIntervals();
        hasAnimated.value = true; // Prevent running again
    }
}
</script>

<template>
    <FrontLayout>
        <Head title="About" />
        <Breadcrumbs title="About me" :links="[{ label: 'About' }]" />

        <v-sheet class="px-8 py-10">
            <h2 class="text-h4 font-weight-bold mb-4">
                Article writer with 10 years of experience
            </h2>

            <div>
                <v-img
                    :src="aboutImage"
                    class="float-left mr-4 mb-2"
                    width="50%"
                    height="302px"
                    cover
                />

                <p class="mb-6">
                    Takimata lorem et ut et diam amet dolor gubergren, amet
                    dolor eirmod sea sea invidunt, sed no sed diam ipsum ut et.
                    Sit nonumy est ut consetetur sed, labore dolor ipsum sed ea
                    dolor lorem erat et erat, consetetur sed labore duo voluptua
                    rebum sed gubergren. Dolores nonumy sanctus erat clita stet
                    sed, dolore justo diam eos aliquyam diam. Clita nonumy rebum
                    dolor dolor eos takimata labore diam sed, et voluptua et
                    invidunt sanctus, elitr dolor nonumy tempor dolor elitr
                    lorem no dolor ipsum, ut at gubergren dolor est aliquyam
                    stet, et sea takimata rebum labore erat duo invidunt lorem.
                    At takimata stet diam dolore accusam, kasd at diam aliquyam
                    diam sed est dolor takimata. Sadipscing rebum diam ea et
                    tempor, eirmod et et invidunt voluptua et dolor sit. Labore
                    labore clita et amet sea sit et, est ipsum eirmod amet
                    voluptua dolore, diam eirmod kasd lorem gubergren clita at
                    amet, sea accusam vero amet lorem eos sed diam sit amet,
                    nonumy ipsum et tempor magna dolores aliquyam vero eos
                    ipsum. Ipsum ipsum sadipscing diam aliquyam diam et ipsum
                    eos vero, gubergren magna elitr elitr clita dolor. Aliquyam
                    vero sed sanctus sed dolore sanctus elitr no amet, ea magna
                    ipsum. Diam eirmod kasd lorem gubergren clita at amet, sea
                    accusam vero amet lorem eos sed diam sit amet, nonumy ipsum
                    et tempor magna dolores aliquyam vero eos ipsum. Ipsum ipsum
                    sadipscing diam aliquyam diam et ipsum eos vero, gubergren
                    magna elitr elitr clita dolor. Aliquyam vero sed sanctus sed
                    dolore sanctus elitr no amet, ea magna ipsum. Diam eirmod
                    kasd lorem gubergren clita at amet, sea accusam vero amet
                    lorem eos sed diam sit amet, nonumy ipsum et tempor magna
                    dolores aliquyam vero eos ipsum. Ipsum ipsum sadipscing diam
                    aliquyam diam et ipsum eos vero, gubergren magna elitr elitr
                    clita dolor. Aliquyam vero sed sanctus sed dolore sanctus
                    elitr no amet, ea magna ipsum. Aliquyam vero sed sanctus sed
                    dolore sanctus elitr no amet, ea magna ipsum. Diam eirmod
                    kasd lorem gubergren clita at amet, sea accusam vero amet
                    lorem eos sed diam sit amet, nonumy ipsum et tempor magna
                    dolores aliquyam vero eos ipsum. Ipsum ipsum sadipscing diam
                    aliquyam diam et ipsum eos vero, gubergren magna elitr elitr
                    clita dolor. Aliquyam vero sed sanctus sed dolore sanctus
                    elitr no amet, ea magna ipsum.
                </p>

                <div
                    class="d-flex flex-column ga-4"
                    v-intersect="{
                        handler: onIntersect,
                        options: {
                            threshold: 0.1,
                            rootMargin: '302px 0px 0px 0px',
                        },
                    }"
                >
                    <v-progress-linear
                        v-for="skill in skills"
                        :key="skill.label"
                        color="light-blue-darken-4"
                        height="18"
                        v-model="skill.value"
                    >
                        <template #default>
                            <span class="text-subtitle-2 text-white">
                                {{ skill.label }}
                            </span>
                        </template>
                    </v-progress-linear>
                </div>
            </div>
        </v-sheet>
    </FrontLayout>
</template>
