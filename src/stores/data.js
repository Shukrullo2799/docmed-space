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
  const stories = ref([
    {
      id: 1,
      url: '/Stories.png',
      isViewed: false
    },
    {
      id: 2,
      url: '/Stories.png',
      isViewed: false
    },
    {
      id: 3,
      url: '/Stories.png',
      isViewed: false
    },
    {
      id: 4,
      url: '/Stories.png',
      isViewed: true
    },
    {
      id: 5,
      url: '/Stories.png',
      isViewed: true
    }
  ])
  const navigation = ref([
    {
      id: 1,
      url: '/education.svg',
      title: 'Education',
      description: 'All modules',
      status: 'Open'
    },
    {
      id: 2,
      url: '/events.svg',
      title: 'Events',
      description: 'Coming events',
      status: 'Open'
    },
    {
      id: 3,
      url: '/media.svg',
      title: 'Media',
      description: 'Event notes',
      status: 'Open'
    }
  ])
  const modules = ref([
    {
      id: 1,
      tags: ['Pediatrics', 'Pulmonology'],
      title: 'Antibacterial therapy. Pediatric pulmonology',
      materials: ['Online test', 'materials']
    },
    {
      id: 2,
      tags: ['Pediatrics', 'Pulmonology'],
      title: 'Antibacterial therapy. Pediatric pulmonology',
      materials: ['Online test', 'materials']
    }
  ])
  const recommended = ref([
    {
      id: 1,
      tags: ['News', 'Beginners'],
      title: 'Inflammatory bowel disease and mental disorders found to be linked',
      isViewed: false,
      photo: '/recommend1.png'
    },
    {
      id: 2,
      tags: ['News', 'Beginners'],
      title: 'Uzbekistan will strengthen its fight against tuberculosis',
      isViewed: false,
      photo: '/recommend2.png'
    }
  ])

  const show_sidebar = ref(null)
  const setSidebar = (value) => {
    show_sidebar.value = value
  }

  const getCountries = computed(() => countries.value)
  const getLanguages = computed(() => languages.value)
  const getStories = computed(() => stories.value)
  const getNavigation = computed(() => navigation.value)
  const getModules = computed(() => modules.value)
  const getRecommended = computed(() => recommended.value)

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
    getStories,
    getNavigation,
    getModules,
    getRecommended,
    resendCodeTime,
    startResendCodeTimer,
    resendCodeTimer,
    checkAccsessCode,
    countSendCode,
    show_sidebar,
    setSidebar
  }
})
