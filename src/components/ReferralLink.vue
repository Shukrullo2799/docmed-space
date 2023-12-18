<template>
  <div class="p-8 flex flex-col gap-7 border-[#E5E5F8] border rounded-2xl relative">
    <h3 class="title">Referral Link</h3>
    <p class="text-[#78708F]">
      Invite your colleagues and get bonuses to your bonus account for their registration
    </p>
    <div class="flex gap-5">
      <Input class="w-full" placeholder="" v-model:value="referralLink" disabled />
      <Button label="Copy link" class="flex-shrink-0" @click="copyToClipboard(referralLink)" />
    </div>
    <div class="absolute right-8" v-if="isCopy">
      <span class="text-[#78708F] text-lg font-bold font-ubuntu">Copied </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const referralLink = ref('docmed.space/doc/Giselle#ref_8s7')
const isCopy = ref(false)
const copyToClipboard = (text) => {
  isCopy.value = true
  window.navigator.clipboard.writeText(text)
  setTimeout(() => {
    isCopy.value = false
  }, 2000)
}
</script>
