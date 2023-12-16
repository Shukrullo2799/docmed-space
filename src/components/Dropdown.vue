<template>
  <div class="relative">
    <div class="flex items-center gap-1" @click="isOpen = !isOpen">
      <ArrowDown v-if="leftIcon" :fill="color" />
      <span :class="`text-[${color}]`">
        <slot name="value">
          {{ value }}
        </slot>
      </span>
      <ArrowDown v-if="!leftIcon" :fill="color" />
    </div>
    <div
      class="absolute top-10 bg-white py-4 px-5 rounded-xl z-10 min-w-[270px] max-h-[240px] overflow-hidden flex flex-col gap-4 shadow-[0_0_15px_0_rgba(153,153,153,0.2)]"
      :class="leftIcon ? 'right-0' : '-left-4'"
      v-if="isOpen"
    >
      <div class="flex justify-between items-center">
        <span class="text-[#413663] text-xl font-ubuntu font-medium">{{ title }}</span>
        <CloseIcon class="cursor-pointer w-6 h-6" @click="isOpen = false" />
      </div>
      <div class="flex flex-col gap-4 max-h-[164px] h-full overflow-auto">
        <div
          class="cursor-pointer h-[20px] leading-none flex-shrink-0"
          v-for="option in options"
          :key="option[optionValue]"
          @click="select(option)"
        >
          <slot name="option" :option="option">
            <span class="text-[16px] leading-none">
              {{ option[optionLabel] }}
            </span>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, toRefs } from 'vue'
import ArrowDown from './icons/ArrowDown.vue'
import CloseIcon from './icons/CloseIcon.vue'

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  optionLabel: {
    type: String,
    default: 'name'
  },
  optionValue: {
    type: String,
    default: 'code'
  },
  leftIcon: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: '#78708F'
  },
  title: {
    type: String,
    default: '🏳️ Select a language'
  }
})
const { optionValue } = toRefs(props)
const emit = defineEmits(['update:value'])
const isOpen = ref(false)
const select = (option) => {
  isOpen.value = false
  emit('update:value', option[optionValue.value])
}
</script>
