<template>
  <div class="max-w-[370px] flex flex-col gap-7">
    <SendCode v-if="currentComponent == 'SendCode'" @sendCode="sendCode" />
    <CheckCode
      v-else-if="currentComponent == 'CheckCode'"
      @changeComponent="changeComponent"
      @showModal="$emit('showModal')"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SendCode from './SendCode.vue'
import CheckCode from './CheckCode.vue'
const currentComponent = ref('SendCode')
const sendCode = () => {
  currentComponent.value = 'CheckCode'
}
const changeComponent = (component) => {
  currentComponent.value = component
}
</script>
