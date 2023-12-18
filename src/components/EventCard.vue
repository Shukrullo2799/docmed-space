<template>
  <div class="p-8 bg-white rounded-2xl flex flex-col gap-5">
    <div class="flex items-center gap-3">
      <Tag
        v-for="(tag, i) in event.tags"
        :key="tag"
        :tag="tag"
        :class="{ 'active-tag': i % 2 === 0 }"
      />
    </div>
    <h3 class="font-ubuntu text-xl text-[#413663]">{{ event.title }}</h3>
    <p class="text-[#9F98B3] text-base leading-5">{{ event.desc }}</p>
    <div class="text-[#9F98B3] text-base leading-5 flex items-center gap-3">
      <span class=""
        >{{ event.date.getDate() }} {{ event.date.toLocaleString('en-US', { month: 'long' }) }}
      </span>
      <Dot />
      <span>10:00 – 18:00</span>
    </div>

    <Button outlined label="View details" class="w-fit" />
  </div>
</template>

<script setup>
import { toRefs } from 'vue'
import Dot from './icons/Dot.vue'
const props = defineProps({
  event: {
    type: Object,
    required: true
  }
})
const { event } = toRefs(props)
</script>
