<template>
  <button
    class="px-[20px] py-[10px] rounded-xl text-base leading-5 h-[44px] font-normal"
    :type="type"
    :disabled="disabled"
    :class="[
      'rounded-[5px] text-[16px] font-bold',
      severity === 'primary' && !outlined ? 'bg-[#7646FF] text-[#fff]' : '',
      severity === 'secondary' && !outlined ? 'bg-[#F9F9FB] text-[#413663] ' : '',

      outlined ? 'bg-[#fff] text-[#413663] border-[1px] border-[#E5E5F8]' : ''
    ]"
    @click="onClick"
  >
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  },
  severity: {
    type: String,
    default: 'primary'
  },
  outlined: {
    type: Boolean,
    default: false
  }
})
</script>
