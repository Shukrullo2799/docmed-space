<script setup>
import { ref, onMounted, watch, watchEffect } from 'vue'
import Rightbar from '@/components/Rightbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Strories from '@/components/Strories.vue'
import Bell from '@/components/icons/Bell.vue'
import Logo from '@/components/icons/Logo.vue'
import { useDataStore } from '@/stores/data'
import Navigation from '@/components/Navigation.vue'
import Modules from '@/components/Modules.vue'
import ReferralLink from '@/components/ReferralLink.vue'
import Profile from '@/components/Profile.vue'
import Rating from '@/components/Rating.vue'
import Recommended from '@/components/Recommended.vue'
const dataStore = useDataStore()

// let windowWidth = ref(window.innerWidth)
// onMounted(() => {
//   window.addEventListener('resize', () => {
//     windowWidth.value = window.innerWidth
//   })
// })
// watch(
//   () => windowWidth.value,
//   () => {
//     if (windowWidth.value >= 768) {
//       dataStore.setSidebar(true)
//     } else {
//       dataStore.setSidebar(false)
//     }
//   }
// )
</script>

<template>
  <main class="flex h-screen max-w-[1920px] mx-auto">
    <!--  v-if="dataStore.show_sidebar"  -->
    <Sidebar class="md:flex hidden" />
    <div class="h-full w-full md:p-[60px] md:pt-8 px-8 py-5">
      <div
        class="flex md:items-center justify-between gap-4 text-[#413663] flex-col md:flex-row mb-5"
      >
        <h2 class="font-ubuntu text-[32px] leading-10 font-bold order-2 md:order-1">Main page</h2>
        <div class="flex items-center gap-4 order-1 md:order-2 w-full md:w-auto">
          <Logo class="block md:hidden" />
          <span class="hidden md:block">Giselle Saint Claire</span>
          <img class="ml-auto md:ml-0" src="/Avatar.svg" alt="" />
          <Bell />
        </div>
      </div>
      <div class="flex gap-8 md:flex-row flex-col">
        <div class="w-full flex flex-col gap-8">
          <div class="flex flex-col md:py-4 gap-6">
            <h3 class="title">Stories</h3>
            <div class="flex gap-8 overflow-auto noscroll">
              <template v-for="(storie, i) in dataStore.getStories" :key="i">
                <Strories :storie="storie" />
              </template>
            </div>
          </div>
          <div class="md:py-4 flex flex-col gap-8">
            <Navigation />
            <Modules />
          </div>
          <div class="md:py-4">
            <h3 class="title mb-6">Your page</h3>
            <div class="flex md:flex-row flex-col gap-8">
              <div class="md:max-w-[468px] md:w-1/2">
                <Profile class="md:mb-8 mb-5" />
                <ReferralLink />
              </div>
              <Rating class="md:max-w-[468px] md:w-1/2 h-fit" />
            </div>
          </div>
          <Recommended class="md:py-4" />
        </div>
        <Rightbar class="md:mx-0 -mx-8" />
      </div>
    </div>
  </main>
</template>
