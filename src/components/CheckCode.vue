<template>
  <div>
    <label for="phone" class="text-base text-[#78708F] mb-2 block"
      >The code was sent.
      <span class="underline text-[#7646FF] cursor-pointer" @click="changeComponent('SendCode')"
        >Change the number</span
      >
    </label>
    <div class="flex items-center gap-4 max-w-[370px]">
      <template v-for="(item, i) in codes">
        <Input
          placeholder
          type="number"
          center
          class="code w-full"
          :id="`code-${i}`"
          v-model:value="item.value"
          :min="0"
          :max="9"
          :maxlength="1"
          @keyup="setCode($event, i)"
          @focus="selectValue($event)"
          autofocus
          :error="isCodeValid"
        />
      </template>
    </div>
  </div>
  <div class="flex flex-col gap-2">
    <Button
      :label="
        isPending && dataStore.resendCodeTime
          ? `New code in ${dataStore.resendCodeTime} seconds.`
          : 'Resend code'
      "
      id="send_button"
      class="w-full"
      :class="isCodeValid ? 'bg-[#F1ECFF] text-[#D8D1FF]' : ''"
      @click="getNewCode"
      :disabled="isPending && dataStore.resendCodeTime ? true : false"
    />
    <Button
      label="Code did not come"
      severity="secondary"
      @click="$emit('showModal')"
      v-if="dataStore.countSendCode > 1"
    />
    <!-- :disabled="codes.some((item) => !item.value)" -->
  </div>
  <p class="text-base text-[#78708F] max-w-[370px] mx-auto">
    I hereby agree to the
    <span class="underline"> Terms of processing of my personal data</span>.
  </p>
</template>

<script setup>
import { ref } from 'vue'
import { useDataStore } from '@/stores/data'
import { useProfileStore } from '@/stores/profile'
import { useRouter } from 'vue-router'

const emit = defineEmits(['changeComponent', 'showModal'])

const dataStore = useDataStore()
const profileStore = useProfileStore()
const router = useRouter()

const codes = ref([{}, {}, {}, {}])
const isPending = ref(false)
const isCodeValid = ref(false)

const changeComponent = (val) => {
  emit('changeComponent', val)
}
const selectValue = (e) => {
  e.target.select()
}
const setCode = (e, i) => {
  if (isNaN(Number(e.key)) && e.key != 'Backspace') {
    e.target.value = ''
    return false
  }
  const inputs = document.querySelectorAll('.code input')
  if (e.keyCode == 8 && i > 0 && e.target.value == '') inputs[i - 1].focus()
  if (e.target.value.length > 0) {
    if (i < 3) inputs[i + 1].focus()
    else {
      checkCode()
      document.getElementById('send_button').focus()
    }
  }
}
const checkCode = () => {
  const code = codes.value.map((item) => item.value).join('')
  if (code.length == 4 && !isPending.value && dataStore.checkAccsessCode(code)) {
    profileStore.setToken('123456')
    router.push('/')
  } else {
    isCodeValid.value = true
  }
}
const getNewCode = () => {
  if (isCodeValid.value) {
    isCodeValid.value = false
    codes.value.forEach((item) => (item.value = ''))
    return false
  }
  isPending.value = true
  dataStore.startResendCodeTimer()
}
</script>
