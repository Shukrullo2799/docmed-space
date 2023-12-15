import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', () => {
  const token = ref(localStorage.getItem('token') || null)
  const phone_code = ref('1234')
  const isAuth = computed(() => !!token.value)

  const setToken = (newToken) => {
    token.value = newToken
    localStorage.setItem('token', newToken)
  }
  return {
    token,
    phone_code,
    isAuth,
    setToken
  }
})
