import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const isRegisterOpen = ref(false)
  const isLoginOpen = ref(false)

  function openRegister() {
    isRegisterOpen.value = true
  }

  function closeRegister() {
    isRegisterOpen.value = false
  }

  function openLogin(){
    isLoginOpen.value = true
  }
  function closeLogin(){
    isLoginOpen.value = false
  }

  return {
    isRegisterOpen,
    isLoginOpen,
    openRegister,
    closeRegister,
    openLogin,
    closeLogin,
  }
})
