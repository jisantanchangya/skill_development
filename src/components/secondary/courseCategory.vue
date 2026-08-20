<script setup>
import categoryBg from '@/assets/images/category_cover.jpeg'
</script>

<template>
    <div 
        class="relative flex flex-col items-center justify-center p-4 h-screen bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${categoryBg})` }"
    >
        <!-- Overlay backdrop for contrast -->
        <div class="absolute inset-0 bg-slate-950/70 -z-0"></div>

        <div class="relative z-10 text-center">
            <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-white tracking-tight drop-shadow-md">
                Course Categories
            </h2>
        </div>
    </div>
</template>