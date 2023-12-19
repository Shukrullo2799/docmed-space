<template>
  <div class="bg-white flex justify-between pb-5 fixed bottom-0 w-full z-50">
    <div
      v-for="(_, tab) in tabs"
      :key="tab"
      class="py-3 px-[27px] cursor-pointer"
      @click="show(tab)"
    >
      <component :is="tabs[tab]" :class="active_tab == tab ? '#7646FF' : '#C8C8E3'" />
    </div>
  </div>
  <div class="fixed w-full h-full pb-20 z-10" v-if="show_sidebar">
    <Sidebar class="flex w-full" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Hamburger from './icons/Hamburger.vue'
import HomeIcon from './icons/HomeIcon.vue'
import CalendarIcon from './icons/CalendarIcon.vue'
import Person from './icons/Person.vue'
import Sidebar from './Sidebar.vue'

const tabs = {
  Hamburger,
  HomeIcon,
  CalendarIcon,
  Person
}
const active_tab = ref('HomeIcon')
const show_sidebar = ref(false)
const show = (tab) => {
  active_tab.value = tab
  if (tab === 'Hamburger') {
    show_sidebar.value = !show_sidebar.value
    document.body.style.overflow = show_sidebar.value ? 'hidden' : 'auto'
  }
}
</script>
