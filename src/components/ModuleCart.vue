<template>
  <div class="p-8 border border-[#E5E5F8] rounded-2xl flex flex-col gap-5 h-[196px]">
    <div class="flex items-center gap-3">
      <Tag
        v-for="(tag, i) in item.tags"
        :key="i"
        :class="{ 'active-tag': i % 2 === 0 }"
        :tag="tag"
      />
    </div>
    <h3
      class="text-xl text-[#413663] font-medium mb-[6px] font-ubuntu line-clamp-2 leading-7 min-h-[56px]"
    >
      {{ item.title }}
    </h3>

    <div class="flex items-center gap-3">
      <template v-for="(material, i) in item.materials" :key="i">
        <span class="text-base leading-4 text-[#968FA9]">{{ material }} </span>
        <Dot v-if="i !== item.materials.length - 1" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'
import Dot from '@/components/icons/Dot.vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => ({
      tags: ['Pediatrics', 'Pulmonology'],
      title: 'Antibacterial therapy. Pediatric pulmonology',
      materials: ['Online test', 'materials']
    })
  }
})
const { item } = toRefs(props)
</script>
