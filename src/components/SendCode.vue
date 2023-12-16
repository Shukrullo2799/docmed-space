<template>
  <div>
    <label for="phone" class="text-base text-[#78708F] mb-2 block">Phone number</label>
    <div
      class="flex items-center gap-2 rounded-xl border border-[#C8C8E3] px-4 py-3 w-full max-w-[370px] h-11"
    >
      <Dropdown
        :options="dataStore.getCountries"
        v-model:value="phone_code"
        title="☎️ Select a region"
        color="#413663"
      >
        <template #option="slotProps">
          <p class="w-[282px] md:w-[326px]">
            {{ slotProps.option.name }}
            ({{ slotProps.option.code }})
          </p>
        </template>
      </Dropdown>
      <input type="number" id="phone" class="w-full" v-model="phone_number" />
    </div>
  </div>
  <Button
    label="Send code"
    :disabled="!phone_number || !phone_code || phone_number < 999999"
    class="w-full"
    @click="sendCode"
  />
  <p class="text-base text-[#78708F] max-w-[370px] mx-auto">
    I hereby agree to the
    <span class="underline"> Terms of processing of my personal data</span>.
  </p>
</template>

<script setup>
import { onBeforeMount, ref, watchEffect } from 'vue'
import { useDataStore } from '@/stores/data'
const emit = defineEmits(['sendCode'])
const dataStore = useDataStore()
const phone_code = ref('')
const phone_number = ref('')

onBeforeMount(() => {
  watchEffect(() => {
    phone_code.value = dataStore.getCountries[0].code
  })
})
const sendCode = () => {
  emit('sendCode', `${phone_code.value}${phone_number.value}`)
}
</script>
<style scoped>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
