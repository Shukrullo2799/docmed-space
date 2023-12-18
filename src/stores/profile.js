import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', () => {
  const token = ref(localStorage.getItem('token') || null)
  const phone_code = ref('1234')
  const isAuth = computed(() => !!token.value)
  const user = ref({
    id: 124,
    full_name: 'Giselle Saint Claire',
    location: 'Uzbekistan, Tashkent',
    avatar: '/Avatar.svg',
    referral_link: 'docmed.space/mikheeva_olga'
  })
  const getUser = computed(() => user.value)

  const employees = ref([
    {
      id: 122,
      full_name: 'Dmitry Yuryevich Ovsyannikov',
      location: 'Uzbekistan, Tashkent',
      avatar: '/Avatar.svg',
      referral_link: 'docmed.space/mikheeva_olga',
      specialty: 'Dentist'
    },
    {
      id: 123,
      full_name: 'Tatiana Mikhailovna Ryabova',
      location: 'Uzbekistan, Tashkent',
      avatar: '/Avatar.svg',
      referral_link: 'docmed.space/mikheeva_olga',
      specialty: 'Dentist'
    },
    {
      id: 124,
      full_name: 'Giselle Saint Claire',
      location: 'Uzbekistan, Tashkent',
      avatar: '/Avatar.svg',
      referral_link: 'docmed.space/mikheeva_olga',
      specialty: 'Dentist'
    },
    {
      id: 125,
      full_name: 'Аширматов Бахрам Маджидович',
      location: 'Uzbekistan, Tashkent',
      avatar: '/Avatar.svg',
      referral_link: 'docmed.space/mikheeva_olga',
      specialty: 'Dentist'
    },
    {
      id: 126,
      full_name: 'Giselle Saint Claire',
      location: 'Uzbekistan, Tashkent',
      avatar: '/Avatar.svg',
      referral_link: 'docmed.space/mikheeva_olga',
      specialty: 'Dentist'
    }
  ])
  const getEmployees = computed(() => employees.value)
  const setToken = (newToken) => {
    token.value = newToken
    localStorage.setItem('token', newToken)
  }
  return {
    token,
    user,
    getUser,
    phone_code,
    isAuth,
    setToken,
    getEmployees
  }
})
