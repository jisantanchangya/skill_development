<script setup>
import { useRoute } from 'vue-router'
import {Search} from 'lucide-vue-next'


</script>

<template>
    <div class="mx-auto sticky top-0 z-50 flex gap-4 justify-around items-center p-5 border-b border-gray-300 bg-gray-100">

        <div class="flex gap-20 items-center">
            <div>
                <h1 class="font-mono text-green-500 text-2xl font-bold">AmraPari</h1>
            </div>

            <div class="flex gap-20">
                <div class="flex items-center justify-center">
                    <button class="border rounded-2xl border-gray-300 h-10 w-30 p-2 bg-gray-200">All course</button>
                </div>
                <div class="flex items-center justify-center border rounded-2xl focus-within:border-blue-500 border-gray-300 focus:ring-2 focus:ring-blue-500 gap-1">
                    <Search class="mx-2 h-6 w-6 text-gray-500" />
                    <input type="text" placeholder="Search..." class="focus:outline-none  h-10 w-80 p-2" />
                </div>
            </div>
        </div>


        <div>
            <router-link to="/login" class="border rounded-2xl border-gray-300 h-10 w-20 p-2 bg-gray-200">Login</router-link>
        </div>

    </div>


</template>