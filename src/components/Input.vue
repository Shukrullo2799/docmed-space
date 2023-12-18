<template>
  <span class="relative">
    <input
      :type="type"
      class="border border-[#C8C8E3] rounded-xl pl-4 py-3 w-full text-base leading-5 text-[#413663] font-normal truncate h-11"
      :class="[
        icon && show_icon ? 'pr-[60px]' : 'pr-4',
        error ? 'border-[#EA6361] bg-[#FFEBEB] text-[#C51311]' : '',
        center ? 'text-center' : ''
      ]"
      :placeholder="placeholder"
      :disabled="disabled ? disabled : show_icon ? show_icon : false"
      v-model="input_value"
      @input="input"
      @blur="show_icon = icon"
      :min="min"
      :max="max"
      :maxlength="maxlength"
      :minlength="minlength"
      :id="id"
    />
    <Edit v-if="show_icon" class="input-icon" @click="show_icon = !show_icon" />
  </span>
</template>

<script setup>
import { ref, toRefs, watch } from 'vue'
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
    type: [String, Number],
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  error: {
    type: Boolean,
    default: false
  },
  center: {
    type: Boolean,
    default: false
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 9
  },
  maxlength: {
    type: Number
  },
  minlength: {
    type: Number
  },
  id: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['update:value'])
const show_icon = ref(props.icon)
const input_value = ref(props.value)
const input = () => emit('update:value', input_value.value)
watch(
  () => props.value,
  (val) => {
    input_value.value = val
  }
)
</script>
<style scoped>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
