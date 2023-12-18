import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEventStore = defineStore('event', () => {
  const todayEvents = ref({
    date: new Date('09.03.2023'),
    events: [
      {
        id: 1,
        title:
          'Patient with AF and diabetes mellitus. How to improve the life prognosis of a comorbid patient?',
        date: new Date('03.09.2023'),
        desc: 'Webinar: "Direct line with an expert". The influence of the modern nature of nutrition on cardiovascular complications: Russian accents of the section "Epidemiology and prevention"',
        tags: ['Offline', 'Cardiology']
      }
    ]
  })

  const comingEvents = ref([
    {
      date: new Date('09.04.2023'),
      events: [
        {
          id: 2,
          title:
            'Patient with AF and diabetes mellitus. How to improve the life prognosis of a comorbid patient?',
          date: new Date('09.04.2023'),
          desc: 'Webinar: "Direct line with an expert". The influence of the modern nature of nutrition on cardiovascular complications: Russian accents of the section "Epidemiology and prevention"',
          tags: ['Offline', 'Cardiology']
        },
        {
          id: 2,
          title:
            'Patient with AF and diabetes mellitus. How to improve the life prognosis of a comorbid patient?',
          date: new Date('09.04.2023'),
          desc: 'Webinar: "Direct line with an expert". The influence of the modern nature of nutrition on cardiovascular complications: Russian accents of the section "Epidemiology and prevention"',
          tags: ['Offline', 'Cardiology']
        }
      ]
    }
    // {
    //   date: new Date('09.08.2023'),
    //   events: [
    //     {
    //       id: 2,
    //       title:
    //         'Patient with AF and diabetes mellitus. How to improve the life prognosis of a comorbid patient?',
    //       date: new Date('09.04.2023'),
    //       desc: 'Webinar: "Direct line with an expert". The influence of the modern nature of nutrition on cardiovascular complications: Russian accents of the section "Epidemiology and prevention"',
    //       tags: ['Offline', 'Cardiology']
    //     },
    //     {
    //       id: 2,
    //       title:
    //         'Patient with AF and diabetes mellitus. How to improve the life prognosis of a comorbid patient?',
    //       date: new Date('09.04.2023'),
    //       desc: 'Webinar: "Direct line with an expert". The influence of the modern nature of nutrition on cardiovascular complications: Russian accents of the section "Epidemiology and prevention"',
    //       tags: ['Offline', 'Cardiology']
    //     }
    //   ]
    // }
  ])
  return {
    todayEvents,
    comingEvents
  }
})
