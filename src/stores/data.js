import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  const countries = ref([
    { name: 'UAE', code: '+971' },
    { name: 'Russia', code: '+7' },
    { name: 'Uzbekistan', code: '+998' },
    { name: 'UAE', code: '+971' },
    { name: 'Russia', code: '+7' },
    { name: 'Uzbekistan', code: '+998' },
    { name: 'UAE', code: '+971' },
    { name: 'Russia', code: '+7' },
    { name: 'Uzbekistan', code: '+998' }
  ])
  const languages = ref([
    { name: 'English', value: 'English' },
    { name: 'German', value: 'German' },
    { name: 'Spanish', value: 'Spanish' }
  ])
  const getCountries = computed(() => countries.value)
  const getLanguages = computed(() => languages.value)

  const resendCodeTime = ref(60)
  const resendCodeTimer = ref(null)

  const startResendCodeTimer = () => {
    resendCodeTimer.value = setInterval(() => {
      resendCodeTime.value--
      if (resendCodeTime.value === 0) {
        clearInterval(resendCodeTimer.value)
      }
    }, 1000)
  }

  const accsessCode = ref('1111')
  const checkAccsessCode = (code) => {
    if (code === accsessCode.value) {
      return true
    }
    countSendCode.value++
    return false
  }
  const countSendCode = ref(0)

  return {
    getCountries,
    getLanguages,
    resendCodeTime,
    startResendCodeTimer,
    resendCodeTimer,
    checkAccsessCode,
    countSendCode
    // getCountSendCode
  }
})
