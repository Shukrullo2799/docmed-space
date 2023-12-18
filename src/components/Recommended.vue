<template>
  <div>
    <div class="flex justify-between md:items-center items-start gap-1 mb-5 md:mb-6">
      <h3 class="title truncate">Recommended media</h3>
      <span class="underline leading-5 text-[#413663] tracking-[-0.21px] truncate">Read more</span>
    </div>
    <div class="flex gap-8 md:flex-row flex-col">
      <RecommendedCart
        :item="rec"
        v-for="(rec, i) in dataStore.getRecommended"
        :key="i"
        class="md:max-w-[468px] md:w-1/2"
      />
    </div>
  </div>
</template>

<script setup>
import RecommendedCart from '@/components/RecommendedCart.vue'
import { useDataStore } from '@/stores/data'
const dataStore = useDataStore()
</script>
