<template>
  <div class="flex flex-col flex-shrink-0 justify-between p-8 pt-10 h-full w-[330px] bg-[#F9F9FB]">
    <div class="flex flex-col gap-10">
      <Logo />
      <div class="flex flex-col gap-4">
        <p class="uppercase">Navigation</p>
        <div class="flex flex-col gap-2">
          <router-link
            v-for="(link, index) in links"
            :key="link.name"
            :to="link.path"
            class="text-[#413663] text-lg leading-6 py-2 w-fit"
            :class="active_link == index ? 'text-[#7646FF] rounded-xl bg-[#F1ECFF] -ml-4 px-4' : ''"
          >
            {{ link.name }}
          </router-link>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <p class="uppercase">Profile</p>
        <div class="flex flex-col gap-2">
          <router-link
            v-for="(link, index) in profile_links"
            :key="link.name"
            :to="link.path"
            class="text-[#413663] text-lg leading-6 py-2 w-fit"
            :class="active_link == index ? 'text-[#7646FF] rounded-xl bg-[#F1ECFF] -ml-4 px-4' : ''"
          >
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </div>
    <div>
      <Dropdown
        :options="dataStore.getLanguages"
        v-model:value="language"
        leftIcon
        optionValue="value"
        class="mb-10"
      />
      <div class="text-[#968FA9] leading-5">
        <p class="mb-4">Company Label place</p>
        <p>Personal data protection</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, watchEffect } from 'vue'
import Logo from './icons/Logo.vue'
import { useDataStore } from '@/stores/data'
const dataStore = useDataStore()

const active_link = ref(0)
const links = [
  {
    name: 'Main page',
    path: '/'
  },
  {
    name: 'Education',
    path: '/education'
  },
  {
    name: 'Events',
    path: '/events'
  },
  {
    name: 'Media',
    path: '/media'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Community',
    path: '/community'
  },
  {
    name: 'Medication',
    path: '/medication'
  }
]
const profile_links = [
  {
    name: 'Personal page',
    path: '/profile'
  },
  {
    name: 'Settings',
    path: '/settings'
  },
  {
    name: 'Exit',
    path: '/auth'
  }
]
const language = ref('')

onBeforeMount(() => {
  watchEffect(() => {
    language.value = dataStore.getLanguages[0].value
  })
})
</script>
