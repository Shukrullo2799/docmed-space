<template>
  <div
    class="px-[10px] py-[6px] rounded-xl truncate text-sm font-normal leading-4 uppercase bg-[#F4F4F9] text-[#9D9DBB]"
  >
    {{ tag }}
  </div>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  tag: {
    type: String,
    default: ''
  }
})
const { tag } = toRefs(props)
</script>
