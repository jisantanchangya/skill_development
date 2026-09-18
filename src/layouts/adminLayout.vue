<script setup>
import { useRoute } from 'vue-router'

import Navbar from '@/components/nevigation/navbar.vue'
import Homepage from '@/modules/home/views/HomeView.vue'
import Footer from '@/components/nevigation/footer.vue'

const route = useRoute()
</script>

<template>
  <Navbar />
  <Homepage />
  <Footer />
</template>

<style scoped>
</style>
