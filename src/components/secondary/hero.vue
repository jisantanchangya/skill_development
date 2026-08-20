<script setup>
import { ref } from 'vue'
import { Search } from 'lucide-vue-next'
import heroBg from '@/assets/images/hero_cover.jpeg'

const searchQuery = ref('')
</script>

<template>
    <div 
        class="relative flex flex-col gap-8 justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${heroBg})` }"
    >
        <!-- Overlay backdrop for readability -->
        <div class="absolute inset-0 bg-black/60 -z-0"></div>

        <div class="relative z-10 flex flex-col items-center gap-8 text-center px-4">
            <h1 class="text-white text-4xl sm:text-5xl font-bold tracking-tight drop-shadow-md">
                Welcome to Skill Development Project
            </h1>
            <div class="flex justify-center items-center gap-2 border border-white/40 rounded-lg p-2 bg-black/20 backdrop-blur-xs">
                <!-- lucide search icon -->
                <Search :size="30" class="text-white ml-2 flex-shrink-0" />
                <input 
                    v-model="searchQuery" 
                    type="text" 
                    placeholder="Search a course..." 
                    class="p-2 text-white placeholder-gray-300 bg-transparent outline-none w-64 sm:w-80" 
                />
            </div>
        </div>
    </div>
</template>