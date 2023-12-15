<template>
  <div class="p-4 border border-[#E5E5F8] rounded-2xl flex flex-col gap-3 h-[150px]">
    <img class="rounded-full w-8 min-w-[32px] h-8" :src="item.url" alt="" />
    <div>
      <h4 class="text-base text-[#413663] leading-5 font-semibold mb-[6px] truncate">
        {{ item.title }}
      </h4>
      <p class="text-sm leading-4 text-[#78708F] truncate">{{ item.description }}</p>
    </div>
    <div class="flex items-center">
      <span class="text-sm leading-4 text-[#413663] flex-grow truncate">{{ item.status }} </span>
      <ArrowRight />
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'
import ArrowRight from '@/components/icons/ArrowRight.vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => ({
      url: 'https://picsum.photos/200/300',
      title: 'Product name',
      description: 'Product description',
      status: 'Open'
    })
  }
})
const { item } = toRefs(props)
</script>
