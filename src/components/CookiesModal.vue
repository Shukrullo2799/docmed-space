<template>
  <div
    class="md:w-[370px] w-[326px] p-4 bg-white absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-[0_0_15px_0_rgba(153,153,153,0.2)]"
  >
    <div class="flex justify-between md:items-center items-start">
      <h2 class="text-2xl leading-7 font-ubuntu font-bold">🍪 We use cookies</h2>
      <CloseIcon class="cursor-pointer flex-shrink-0" @click="$emit('close')" />
    </div>
    <p class="text-sm leading-4 text-[#968FA9] mt-2">
      Cookies help us deliver the best experience on our website. By using our website, you agree to
      the use of cookies.
    </p>
  </div>
</template>

<script setup>
import CloseIcon from './icons/CloseIcon.vue'
</script>

<style lang="scss" scoped></style>
