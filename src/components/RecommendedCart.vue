<template>
  <div>
    <div class="relative mb-4">
      <img :src="item.photo" alt="" class="w-full h-[235px]" />
      <div class="flex gap-3 absolute bottom-5 left-5">
        <Tag v-for="(tag, i) in item.tags" :key="i" :tag="tag" />
      </div>
    </div>
    <h4 class="title md:min-h-[84px] flex items-center mb-4">{{ item.title }}</h4>
    <span class="text-[#BCB8CA] text-lg leading-6">Not viewed</span>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})
</script>
