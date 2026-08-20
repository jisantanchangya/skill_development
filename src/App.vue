<script setup>

import Navbar from './components/landing/navbar.vue'
import SkillView from './views/skillView.vue'
import RegisterModal from './components/auth/register.vue'
import LoginModal from './components/auth/login.vue'
import { View } from 'lucide-vue-next';
</script>

<template>
  <Navbar />
  <RegisterModal />
  <LoginModal />
  <RouterView />
  <!-- <SkillView /> -->
  
</template>

<style scoped>
</style>


