<script setup>
import { ref } from 'vue';

const mobileNav = ref(true)
const toggleNav = () => {
    mobileNav.value = !mobileNav.value
}
</script>

<template>
    <header class="bg-primary text-white flex px-10 py-10 md:px-32 justify-between">
        <p class="font-lato text-3xl md:text-4xl font-thin"><Link>PHP-Lagos</Link></p>
        <nav class="hidden md:grid">
            <p class="font-lato text-lg">August 24th - 25th => Eko Convention Centre, Lagos</p>
            <ul class="flex justify-around">
                <li>Home</li>
                <li>Speakers</li>
                <li>Schedule</li>
                <li>Venue</li>
                <li>Register</li>
            </ul>
        </nav>
        <button @click="toggleNav" class="md:hidden">
            <div style="height:2px;" class="bg-white w-12" ></div>
            <div class="bg-white w-12 my-2" style="height:2px;"></div>
            <div class="bg-white w-12" style="height:2px;"></div>
        </button>
    </header>
    <nav class="transition-transform duration-500 z-50 md:hidden h-screen w-2/5 bg-white absolute inset-y-0" :class="{ '-translate-x-[70vw]': mobileNav }">
            <ul class="grid gap-5 justify-end p-5 mt-10">
                <li>Home</li>
                <li>Speakers</li>
                <li>Schedule</li>
                <li>Venue</li>
                <li>Register</li>
            </ul>
        </nav>
</template>
