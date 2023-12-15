<template>
  <span class="relative">
    {{ disabled ?? show_icon }}
    <input
      :type="type"
      class="border border-[#C8C8E3] rounded-xl pl-4 pr-8 py-3 text-base leading-5 text-[#413663] font-normal truncate h-11"
      :class="icon ? 'pr-[60px]' : 'pr-4'"
      :placeholder="placeholder"
      :disabled="disabled ? disabled : show_icon ? show_icon : false"
      v-model="input_value"
      @input="input"
      @blur="show_icon = icon"
    />
    <Edit v-if="show_icon" class="input-icon" @click="show_icon = !show_icon" />
  </span>
</template>

<script setup>
import { ref, toRefs } from 'vue'
import Edit from '@/components/icons/Edit.vue'
const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: 'Enter text'
  },
  icon: {
    type: Boolean,
    default: false
  },
  value: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: !false
  }
})
const emit = defineEmits(['update:value'])
const show_icon = ref(props.icon)
const input_value = ref(props.value)
const input = () => emit('update:value', input_value.value)
</script>
