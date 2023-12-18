<template>
  <div class="p-8 flex flex-col gap-7 border-[#E5E5F8] border rounded-2xl">
    <h3 class="title">Rating</h3>
    <div class="flex gap-4 flex-wrap">
      <div
        v-for="(_, tab) in tabs"
        :key="tab"
        class="py-3 px-5 rounded-xl cursor-pointer"
        :class="currentTab === tab ? 'text-[#7646FF] bg-[#F1ECFF]' : 'text-[#968FA9] bg-[#F4F4F9]'"
        @click="currentTab = tab"
      >
        {{ tab }}
      </div>
    </div>
    <component :is="tabs[currentTab]" />
    <Button label="Open rating" outlined class="w-fit" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Overall from '@/components/Overall.vue'
import Region from '@/components/Overall.vue'
import Specialization from '@/components/Overall.vue'
const tabs = {
  Overall,
  Region,
  Specialization
}
const currentTab = ref('Overall')
</script>
