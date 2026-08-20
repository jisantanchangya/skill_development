<script setup>
import { ref } from 'vue'
import { X, Mail, Lock, LogIn } from 'lucide-vue-next'
import { useModalStore } from '@/stores/modalStore'

const modalStore = useModalStore()

const email = ref('')
const password = ref('')

const handleLogin = () => {
  // Handle form submission logic here
  console.log('Logging in user:', { email: email.value, password: password.value })
  modalStore.closeLogin()
}
</script>

<template>
    <transition name="fade"> 
    <div 
      v-if="modalStore.isLoginOpen" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
      @click.self="modalStore.closeLogin"
    >
      <div 
        class="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 transform transition-all duration-300 scale-100 overflow-hidden"
      >
        <!-- Close Button -->
        <button 
          @click="modalStore.closeLogin" 
          class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
          aria-label="Close modal"
        >
          <X :size="20" />
        </button>

        <!-- Header -->
        <div class="text-center mb-6">
          <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-3">
            <LogIn :size="24" />
          </div>
          <h2 class="text-2xl font-bold text-gray-800">Log in to Your Account</h2>
          <p class="text-sm text-gray-500 mt-1">Sign in to continue to AmraPari</p>
        </div>


        <!-- Form -->
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <div class="relative">
              <Mail :size="18" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                v-model="email"
                type="email" 
                id="email" 
                name="email" 
                placeholder="name@example.com"
                required 
                class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-800 text-sm transition-all"
              />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div class="relative">
              <Lock :size="18" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                v-model="password"
                type="password" 
                id="password" 
                name="password" 
                placeholder="••••••••"
                required 
                class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-800 text-sm transition-all"
              />
            </div>
          </div>

          <button 
            type="submit" 
            class="w-full mt-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-200 cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>