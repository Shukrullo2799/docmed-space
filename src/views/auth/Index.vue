<script setup>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { useProfileStore } from '@/stores/profile'
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import ModuleCart from '@/components/ModuleCart.vue'
const router = useRouter()
const profileStore = useProfileStore()

const form = ref({})
const rules = computed(() => {
  return {
    login: { required },
    password: { required }
  }
})
const v$ = useVuelidate(rules, form)

const login = () => {
  // v$.value.$validate().then((valid) => {
  //   if (valid) {
  //     profileStore.setToken('123456')
  //     router.push('/')
  //   }
  // })
  console.log('login')
}
const val = ref('123456s')
</script>

<template>
  <main class="h-screen">
    <h1 className="text-3xl font-bold underline">Auth</h1>
    {{ val }}
    <br />
    <Input v-model:value="val" />
  </main>
</template>
