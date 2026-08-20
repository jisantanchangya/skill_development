<script setup> 
import router from '../../router/index.js'
</script>

<template>
    <div class="flex justify-around items-center p-4">
        <div>
            <h1 class="text-xl font-bold">Skill Development Project</h1>
        </div>
        <div class="flex space-x-4 text-blue-500">
            <router-link to="/login" class="mr-4">login</router-link>
            <router-link to="/register" class="mr-4">register</router-link>
            <router-link to="/contact" class="mr-4">Contact</router-link>    
        </div>
        
    </div>
</template>