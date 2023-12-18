<template>
  <div>
    <h3 class="title">Your modules</h3>
    <div class="flex md:gap-8 gap-5 md:mt-6 mt-5 flex-col md:flex-row">
      <template v-for="(item, i) in dataStore.getModules" :key="i">
        <ModuleCart :item="item" class="w-full" />
      </template>
    </div>
  </div>
</template>

<script setup>
import ModuleCart from './ModuleCart.vue'
import { useDataStore } from '@/stores/data'
const dataStore = useDataStore()
</script>
