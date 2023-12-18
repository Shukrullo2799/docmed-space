<template>
  <div
    class="w-[120px] h-[120px ] rounded-2xl border-4 bg-white overflow-hidden p-1 cursor-pointer flex-shrink-0"
    :class="storie.isViewed ? 'border-[#E5E5F8]' : 'border-[#7646FF]'"
  >
    <img :src="storie.url" alt="" />
  </div>
</template>

<script setup>
const props = defineProps({
  storie: {
    type: Object,
    required: true
  }
})
</script>
