<template>
  <div class="bg-primary py-2 border-round h-full">
    <div class="flex align-items-center justify-content-center my-3">
      <span class="text-900 cursor-pointer" @click="getMonthCalendar()">
        {{ $t(months[month - 1] ? months[month - 1].name : '') }}
      </span>
    </div>
    <Divider class="w-full" />
    <div class="flex align-items-center justify-content-between text-s400 py-2">
      <span style="width: 14.285714285714285714285714285714%" class="text-center">{{
        $t('mo')
      }}</span>
      <span style="width: 14.285714285714285714285714285714%" class="text-center">{{
        $t('tu')
      }}</span>
      <span style="width: 14.285714285714285714285714285714%" class="text-center">{{
        $t('we')
      }}</span>
      <span style="width: 14.285714285714285714285714285714%" class="text-center">{{
        $t('th')
      }}</span>
      <span style="width: 14.285714285714285714285714285714%" class="text-center">{{
        $t('fr')
      }}</span>
      <span style="width: 14.285714285714285714285714285714%" class="text-center">{{
        $t('sa')
      }}</span>
      <span style="width: 14.285714285714285714285714285714%" class="text-center">{{
        $t('su')
      }}</span>
    </div>
    <div>
      <div class="flex flex-wrap align-items-center justify-content-between py-2 text-900">
        <div
          @click="showOverlayPanel($event, day)"
          style="width: 14.285714285714285714285714285714%; padding: 2px 0"
          v-for="(day, i) in days"
          :key="i"
          class="flex justify-content-center align-items-center"
          :class="[
            { 'text-300': day.otherMonth },
            { 'text-s400': day.is_weekend && !day.is_workday }
          ]"
        >
          <p
            style="min-width: 40px; width: 40px; height: 40px"
            class="flex justify-content-center align-items-center cursor-pointer"
            :class="{
              'text-white bg-blue-600 border-round': day.holiday
            }"
            v-tooltip.bottom="day.holiday ? day.holiday.name : ''"
          >
            {{ day.day }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'TaskCalendar',
  props: {
    year: { type: Date, default: () => new Date() },
    month: { type: Number, default: 1 },
    disabledDays: { type: Array, default: () => [] },
    disabledDates: { type: Array, default: () => [] },
    items: { type: Array, default: () => [] },
    holidays: { type: Array, default: () => [] }
  },
  data() {
    return {
      date: '',
      today: new Date(),
      months: [
        { name: 'january', value: 1, short: 'jan' },
        { name: 'february', value: 2, short: 'feb' },
        { name: 'march', value: 3, short: 'mar' },
        { name: 'april', value: 4, short: 'apr' },
        { name: 'may', value: 5, short: 'may' },
        { name: 'june', value: 6, short: 'jun' },
        { name: 'july', value: 7, short: 'jul' },
        { name: 'august', value: 8, short: 'aug' },
        { name: 'september', value: 9, short: 'sep' },
        { name: 'october', value: 10, short: 'oct' },
        { name: 'november', value: 11, short: 'nov' },
        { name: 'december', value: 12, short: 'dec' }
      ],
      lastDay: 0,
      prevLastDay: 0,
      firstDayIndex: 0,
      lastDayIndex: 0,
      nextDays: 0,
      activeMonth: 0,
      days: [],
      selected_day: {},
      month_dialog: false,
      filtered_holidays: [],
      holiday_id: null,
      holiday_info: {},
      holiday_skeleton: false,
      is_workday: null
    }
  },
  watch: {
    year() {
      this.renderCalendar()
    },
    items() {
      this.renderCalendar()
    }
  },

  methods: {
    ...mapActions(['fetchYearlyCalendarEdit', 'fetchGetMothCalendar']),
    renderCalendar() {
      this.activeMonth = this.month - 1
      this.date = new Date(this.year.getFullYear(), this.activeMonth, 1)
      this.date.setDate(1)
      this.lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate() // last day of the month
      this.prevLastDay = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate() // last day of the previous month
      this.firstDayIndex = this.date.getDay() // first day of the month
      this.lastDayIndex = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay() // last day of the month index (0 - 6)
      this.nextDays = 7 - this.lastDayIndex // next days of the month  (0 - 6)

      let days = []
      if (this.firstDayIndex === 0) {
        this.firstDayIndex = 7
      }
      for (let x = this.firstDayIndex - 1; x > 0; x--) {
        days.push({ day: this.prevLastDay - x + 1, otherMonth: true })
      }
      for (let i = 1; i <= this.lastDay; i++) {
        if (i === new Date().getDate() && this.date.getMonth() === new Date().getMonth()) {
          days.push({ day: i, today: true, otherMonth: false })
        } else {
          days.push({ day: i, otherMonth: false, month: this.date.getMonth() })
        }
      }

      if (days.length < 35) {
        for (let j = 1; j <= this.nextDays + 7; j++) {
          days.push({ day: j, otherMonth: true })
        }
      } else {
        for (let j = 1; j <= this.nextDays; j++) {
          days.push({ day: j, otherMonth: true })
        }
      }
      this.first_day_index = days.findIndex((d) => d.day == 1)
      this.last_day_index = days.lastIndexOf(
        days.find((d) => d.day == this.lastDay && !d.otherMonth)
      )
      this.items.forEach((item) => {
        for (let i = this.first_day_index; i <= this.last_day_index; i++) {
          if (days[i].day == new Date(item.calendar_date).getDate()) {
            days[i] = { ...days[i], ...item }
          }
        }
      })

      this.days = days
      this.first_day_index = null
      this.last_day_index = null
    },
    showOverlayPanel(e, day) {
      if (!this.$assent('yearly_calendar-update')) return
      if (day.otherMonth) return
      if (day.holiday) {
        this.holiday_id = day.holiday.id
        this.is_workday = day.is_workday
      } else {
        this.holiday_id = null
        this.is_workday = day.is_workday
      }
      this.$refs.holiday_days.toggle(e)
      this.selected_day = { ...day }
      this.filtered_holidays = this.holidays.filter((h) => {
        let h_date = this.year.getFullYear() + '-' + h.date
        if (new Date(h_date).getTime() == new Date(day.calendar_date).getTime() || !h.date) {
          if (new Date(h_date).getTime() == new Date(day.calendar_date).getTime())
            this.holiday_id = h.id
          return h
        }
      })
    },
    changeWorkday() {
      if (this.is_workday) {
        this.holiday_id = null
      }
    },
    cancel() {
      this.$refs.holiday_days.hide()
    },
    changeHolidayDays() {
      if (this.selected_day.otherMonth) return
      let data = {}
      if (this.holiday_id) {
        data = {
          id: this.selected_day.id,
          holiday_id: this.holiday_id
        }
      } else if (this.is_workday) {
        data = {
          id: this.selected_day.id,
          is_workday: true,
          holiday_id: null
        }
      } else {
        data = {
          id: this.selected_day.id,
          is_workday: false,
          holiday_id: null
        }
      }
      this.fetchYearlyCalendarEdit(data).then(() => {
        this.renderCalendar()
      })
      this.$refs.holiday_days.hide()
    },
    getMonthCalendar() {
      this.holiday_skeleton = false
      let date = `${this.year.getFullYear()}-${
        this.activeMonth + 1 < 10 ? '0' + (this.activeMonth + 1) : this.activeMonth + 1
      }`
      this.month_dialog = true
      this.fetchGetMothCalendar(date).then((res) => {
        this.holiday_info = res.data
        this.holiday_skeleton = true
      })
    }
  },
  mounted() {
    this.renderCalendar()
  }
}
</script>
<style scoped>
.holiday-day {
  padding: 6px 16px;
  border-radius: 24px;
  margin-bottom: 16px;
  text-align: center;
  color: #fff;
  min-width: 160px;
  cursor: pointer;
}
.holiday-day:last-child {
  margin-bottom: 0;
}
</style>
