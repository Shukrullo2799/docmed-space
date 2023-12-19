<template>
  <div class="title flex justify-between items-center">
    <svg
      @click="prevMoth"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.3246 6.17504C18.7802 6.63065 18.7802 7.36934 18.3246 7.82495L12.1496 14L18.3246 20.175C18.7802 20.6306 18.7802 21.3693 18.3246 21.825C17.869 22.2806 17.1303 22.2806 16.6747 21.825L9.67472 14.825C9.2191 14.3693 9.2191 13.6306 9.67472 13.175L16.6747 6.17504C17.1303 5.71943 17.869 5.71943 18.3246 6.17504Z"
        fill="#555575"
      />
    </svg>
    {{ year.toLocaleString('en-US', { month: 'long' }) }},
    {{ year.getFullYear() }}
    <svg
      @click="nextMonth"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.67472 6.17504C10.1303 5.71943 10.869 5.71943 11.3246 6.17504L18.3246 13.175C18.7802 13.6306 18.7802 14.3693 18.3246 14.825L11.3246 21.825C10.869 22.2806 10.1303 22.2806 9.67472 21.825C9.2191 21.3693 9.2191 20.6306 9.67472 20.175L15.8498 14L9.67472 7.82495C9.2191 7.36934 9.2191 6.63065 9.67472 6.17504Z"
        fill="#555575"
      />
    </svg>
  </div>
  <div class="rounded-xl border-[#E5E5F8] border">
    <div class="week">
      <div class="py-4 md:py-6 text-[#9D9DBB] text-center border" v-for="d in weekDays" :key="d">
        {{ d }}
      </div>
    </div>
    <div class="parent">
      <template v-for="(day, i) in days" :key="i">
        <div
          class="py-4 md:py-6 text-[#413663] text-center border relative"
          :class="[
            { 'text-[#E6E4EC]': day.otherMonth },
            { 'text-[#7646FF] bg-[#F9F8FF]': day.today }
          ]"
        >
          {{ day.day }}
          <div
            v-if="day.today"
            class="absolute top-2 right-2 bg-[#7646FF] rounded-full w-2 h-2"
          ></div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import ArrowRight from './icons/ArrowRight.vue'

const date = ref('')
const lastDay = ref(0)
const prevLastDay = ref(0)
const firstDayIndex = ref(0)
const lastDayIndex = ref(0)
const nextDays = ref(0)
const days = ref([])
const first_day_index = ref(null)
const last_day_index = ref(null)

const month = ref(1)
const year = ref(new Date())
const activeMonth = ref('')
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
watch([year], () => {
  renderCalendar()
})

const renderCalendar = () => {
  activeMonth.value = year.value.getMonth()
  date.value = new Date(year.value.getFullYear(), activeMonth.value, 1)
  date.value.setDate(1)
  lastDay.value = new Date(date.value.getFullYear(), date.value.getMonth() + 1, 0).getDate()
  prevLastDay.value = new Date(date.value.getFullYear(), date.value.getMonth(), 0).getDate()
  firstDayIndex.value = date.value.getDay()
  lastDayIndex.value = new Date(date.value.getFullYear(), date.value.getMonth() + 1, 0).getDay()
  nextDays.value = 7 - lastDayIndex.value

  let days_f = []

  if (firstDayIndex.value === 0) {
    firstDayIndex.value = 7
  }

  for (let x = firstDayIndex.value - 1; x > 0; x--) {
    days_f.push({ day: prevLastDay.value - x + 1, otherMonth: true })
  }

  for (let i = 1; i <= lastDay.value; i++) {
    if (i === new Date().getDate() && date.value.getMonth() === new Date().getMonth()) {
      days_f.push({ day: i, today: true, otherMonth: false })
    } else {
      days_f.push({ day: i, otherMonth: false, month: date.value.getMonth() })
    }
  }

  if (days_f.length < 35) {
    for (let j = 1; j <= nextDays.value + 7; j++) {
      days_f.push({ day: j, otherMonth: true })
    }
  } else {
    for (let j = 1; j <= nextDays.value; j++) {
      days_f.push({ day: j, otherMonth: true })
    }
  }

  first_day_index.value = days_f.findIndex((d) => d.day == 1)
  last_day_index.value = days_f.lastIndexOf(
    days_f.find((d) => d.day == lastDay.value && !d.otherMonth)
  )

  days.value = days_f
  first_day_index.value = null
  last_day_index.value = null
}

const prevMoth = () => {
  year.value = new Date(year.value.getFullYear(), year.value.getMonth() - 1, 1)
}
const nextMonth = () => {
  year.value = new Date(year.value.getFullYear(), year.value.getMonth() + 1, 1)
}

onMounted(() => {
  renderCalendar()
})
</script>
<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
.week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
</style>
