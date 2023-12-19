<template>
  <div>
    <h3 class="title">Navigation</h3>
    <div class="flex md:gap-[30px] gap-3 md:mt-6 mt-5 flex-col xl:flex-row">
      <template v-for="(item, i) in dataStore.getNavigation" :key="i">
        <NavigationCart :item="item" class="w-full" />
      </template>
    </div>
  </div>
</template>

<script setup>
import NavigationCart from './NavigationCart.vue'
import { useDataStore } from '@/stores/data'
const dataStore = useDataStore()
</script>
