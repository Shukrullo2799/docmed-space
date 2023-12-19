<template>
  <aside
    class="lg:max-w-[470px] bg-[#F9F9FB] p-8 lg:pb-8 pb-28 flex flex-col gap-8 lg:h-full lg:overflow-auto noscroll xl:flex-shrink-0 rounded-2xl"
  >
    <Calendar />
    <div class="flex flex-col gap-8 text-[#413663]">
      <h3 class="font-ubuntu text-2xl leading-7 font-bold">Events</h3>
      <p class="font-ubuntu text-xl font-medium">
        {{ eventStore.todayEvents.date.getDate() }}
        {{ eventStore.todayEvents.date.toLocaleString('en-US', { month: 'long' }) }}
      </p>

      <EventCard v-for="event in eventStore.todayEvents.events" :key="event.id" :event="event" />
    </div>
    <div class="flex flex-col gap-8 text-[#413663]">
      <h3 class="font-ubuntu text-2xl leading-7 font-bold">Coming events</h3>
      <template v-for="(event, index) in eventStore.comingEvents">
        <p class="font-ubuntu text-xl font-medium">
          {{ event.date.getDate() }}
          {{ event.date.toLocaleString('en-US', { month: 'long' }) }}
        </p>

        <EventCard v-for="e in event.events" :key="event.id" :event="e" />
      </template>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import EventCard from './EventCard.vue'
import { useEventStore } from '@/stores/event'
import Calendar from './Calendar.vue'
const eventStore = useEventStore()
const event = ref({
  id: 1,
  title:
    'Patient with AF and diabetes mellitus. How to improve the life prognosis of a comorbid patient?',
  date: new Date('03.09.2023'),
  desc: 'Webinar: "Direct line with an expert". The influence of the modern nature of nutrition on cardiovascular complications: Russian accents of the section "Epidemiology and prevention"',
  tags: ['Offline', 'Cardiology']
})
</script>
