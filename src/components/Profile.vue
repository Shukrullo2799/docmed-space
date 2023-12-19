<template>
  <div class="p-8 flex flex-col gap-7 border-[#E5E5F8] border rounded-2xl relative">
    <div class="flex gap-3">
      <img class="min-w-[60px] h-[60px]" :src="user.avatar" alt="" />
      <div class="flex-grow">
        <h3 class="text-xl text-[#413663] font-medium mb-2 font-ubuntu">
          {{ user.full_name }}
        </h3>
        <p class="text-sm leading-4 text-[#968FA9]">{{ user.location }}</p>
      </div>
      <Edit class="w-6 h-6 cursor-pointer" />
    </div>
    <div class="flex gap-4 flex-wrap">
      <Button label="Open" />
      <Button label="Unpublish profile" severity="secondary" class="whitespace-nowrap" />
    </div>
    <div>
      <p class="text-[#78708F] mb-4">Link to your profile</p>
      <div class="flex gap-5 xl:flex-nowrap lg:flex-wrap">
        <Input class="w-full" placeholder="" v-model:value="user.referral_link" icon />
        <Button
          label="Copy link"
          class="flex-shrink-0"
          @click="copyToClipboard"
          severity="secondary"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Edit from '@/components/icons/Edit.vue'
import { useProfileStore } from '@/stores/profile'
const profileStore = useProfileStore()

const user = profileStore.getUser

const copyToClipboard = () => {
  window.navigator.clipboard.writeText(user.referral_link)
}
</script>
