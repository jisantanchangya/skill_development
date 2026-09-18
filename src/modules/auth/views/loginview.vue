<script>
import LoginFrom from '@/modules/auth/components/loginForm.vue'

export default {
  components: {
    LoginFrom
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-around gap-10 px-10 py-10 md:px-12 lg:px-20">
    <div class="flex justify-content items-center">
        <h1 class="text-2xl font-bold">Welcome Back</h1>
    </div>
    <div class="flex flex-col justify-center items-start gap-4">
        <h1>Login to your account</h1>
        <LoginFrom />
    </div>
    
  </div>
</template>