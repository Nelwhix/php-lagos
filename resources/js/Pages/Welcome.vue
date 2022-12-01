<script setup>
import Layout from "@/Layouts/Layout.vue"
defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
});
</script>

<template>
    <Head title="Welcome" />
    <Layout>
        <!--Hero Section-->
        <section class="bg-primary font-lato py-10">
            <h2 class="text-center text-lg md:text-3xl" style="color:#5c7e79;">The largest meetup of PHP developers in Africa</h2>
            <p class="text-white mt-3 px-5 font-light md:text-2xl">Every year we invite PHP artisans no matter the framework to 
                Lagos to talk about new technologies and best practices. Join Us!
            </p>
            <div class="text-center text-white mt-4">
                <button class="uppercase rounded-md p-5 hover:bg-white hover:text-[#5c7e79]" style="border: 1px solid white;">register now</button>
            </div>
        </section>
    </Layout>
</template>
