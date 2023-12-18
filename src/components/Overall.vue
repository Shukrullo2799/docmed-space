<template>
  <div class="flex flex-col gap-3">
    <div
      v-for="(employee, i) in profileStore.getEmployees"
      :key="i"
      class="flex items-center gap-4"
    >
      <span class="text-[#78708F]">#{{ employee.id }}</span>
      <img :src="employee.avatar" class="min-w-[40px] h-10" alt="" />
      <div>
        <p class="text-[#413663]" :class="{ 'font-semibold': checkUser(employee.id) }">
          {{ employee.full_name }}
        </p>
        <div class="text-[#78708F] text-sm leading-4">
          <span>{{ employee.location }} / </span>
          <span>{{ employee.specialty }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProfileStore } from '@/stores/profile'
const profileStore = useProfileStore()
const user = profileStore.getUser
const checkUser = (id) => {
  return id === user.id
}
</script>
