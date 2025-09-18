<script setup lang="ts">
// import Header from '../components/core/Header.vue'
import Navbar from '../components/core/Navbar.vue'
</script>
<template>
    <div class="min-h-screen bg-gray-100 dark:bg-gray-800">
        <div class="mx-auto max-w-md bg-white min-h-screen relative">
            <div class="p-6 pb-24 bg-gray-50 dark:bg-gray-950 min-h-screen">
                <!-- <Header /> -->
                <slot />
            </div>
            <Navbar />
        </div>
    </div>
</template>