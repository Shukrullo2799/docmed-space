<template>
  <div
    class="flex items-center justify-center fixed top-0 left-0 w-full h-full bg-[#00000040] z-50 text-black md:px-3 p-0"
    v-if="open"
  >
    <div class="bg-white md:p-10 px-8 py-[47px] md:w-[770px] md:h-auto h-full md:rounded-xl">
      <div class="flex justify-between md:items-center items-start">
        <h2 class="text-2xl leading-7 font-ubuntu font-bold">{{ title }}</h2>
        <CloseIcon class="cursor-pointer flex-shrink-0" @click="$emit('close')" />
      </div>
      <div class="mt-8">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import CloseIcon from '@/components/icons/CloseIcon.vue'
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  open: {
    type: Boolean,
    required: true
  }
})
</script>
