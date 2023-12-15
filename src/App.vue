<script setup>
import { RouterView, useRouter } from 'vue-router'
import { useProfileStore } from '@/stores/profile'
import { watchEffect } from 'vue'
const profileStore = useProfileStore()
const router = useRouter()

watchEffect(() => {
  if (!profileStore.isAuth) {
    router.push('/auth')
  }
})
</script>

<template>
  <RouterView />
</template>
