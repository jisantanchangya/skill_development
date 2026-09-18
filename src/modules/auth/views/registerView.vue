<script>
import RegisterForm from '@/modules/auth/components/registerForm.vue'

export default {
  components: {
    RegisterForm
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center gap-10 px-10 py-10 md:px-12 lg:px-20">
    
    <div class="flex flex-col justify-center items-start gap-4">
        <h1 class="text-xl font-bold">Get Started with AmraPari</h1>
        <RegisterForm />
    </div>
    
  </div>
</template>