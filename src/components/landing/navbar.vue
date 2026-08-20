<script setup> 
import { useModalStore } from '@/stores/modalStore'

const modalStore = useModalStore()
</script>

<template>
    <nav class="sticky top-0 z-50 flex justify-between items-center bg-gray-300 backdrop-blur-md border-b border-gray-200/50 shadow-sm transition-all">
        <div class="flex ml-20 items-center justify-center gap-2">
            <div>
                <img src="@/assets/images/logo.png" alt="Logo" class="h-20 w-20 text-white rounded-full" />
            </div>
            <h1 class="text-3xl text-blue-600 font-bold">AmraPari</h1>
        </div>
        <div class="flex mr-30 space-x-4 text-blue-600 text-lg items-center">
            <router-link to="/" class="hover:text-blue-700 transition-colors">Home</router-link>
            <router-link to="/category" class="hover:text-blue-700 transition-colors">Categories</router-link> 
            <router-link to="/contact" class="hover:text-blue-700 transition-colors">Contact</router-link> 
            <button 
                @click="modalStore.openRegister()" 
                class="ml-60 hover:text-blue-700 transition-colors cursor-pointer"
            >
                Register
            </button>
            <button 
                @click="modalStore.openLogin()" 
                class="hover:text-blue-700 transition-colors cursor-pointer"
            >
                Login
            </button>
               
        </div>
    </nav>
</template>