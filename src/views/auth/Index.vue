<script setup>
import { useDataStore } from '@/stores/data'
import { onBeforeMount, onMounted, ref, watchEffect } from 'vue'
import Dialog from '@/components/Dialog.vue'
import Message from '@/components/icons/Message.vue'
import Chat from '@/components/icons/Chat.vue'
import AuthPhone from '@/components/AuthPhone.vue'
import CookiesModal from '@/components/CookiesModal.vue'
const dataStore = useDataStore()
const language = ref('')

onBeforeMount(() => {
  watchEffect(() => {
    language.value = dataStore.getLanguages[0].value
  })
})
const show_modal = ref(false)
const show_cookie = ref(false)
onMounted(() => {
  setTimeout(() => {
    show_cookie.value = true
  }, 5000)
})
</script>

<template>
  <main class="h-screen flex">
    <div
      class="md:max-w-[645px] flex-shrink-0 w-full md:pr-[130px] md:pl-[135px] md:py-14 p-8 relative flex flex-col justify-between gap-3"
    >
      <div>
        <div class="md:block mb-8 flex justify-between items-center">
          <div
            class="order-2 md:absolute md:top-0 md:right-0 md:w-auto md:order-1 md:mt-[30px] md:mr-[30px]"
          >
            <Dropdown
              :options="dataStore.getLanguages"
              v-model:value="language"
              leftIcon
              optionValue="value"
            />
          </div>
          <h3 class="text-2xl leading-7 font-ubuntu font-bold order-1">docmed.space</h3>
        </div>
        <h1 class="text-[40px] max-w-[370px] leading-[44px] font-ubuntu font-bold mb-8">
          <span class="block text-[#7646FF]">Closed</span>
          Evidence-based Medicine Club
        </h1>
        <AuthPhone @showModal="show_modal = true" />
      </div>
      <div class="text-[#968FA9] w-[320px]">
        <div class="leading-5 flex gap-6 mb-6">
          <a href="mailto:help@decmed.space" class="flex items-center gap-3">
            <Message />
            <span>help@decmed.space</span>
          </a>
          <a href="https://web.telegram.org" target="_blank" class="flex items-center gap-3">
            <Chat />
            <span>Chatbot</span>
          </a>
        </div>
        <div class="text-sm leading-4">
          <span class="mr-6">ООО МЕДТЕХ</span>
          <span>Personal data protection</span>
        </div>
      </div>
      <CookiesModal @close="show_cookie = false" v-if="show_cookie" />
    </div>
    <div class="md:block hidden flex-grow">
      <img src="/auth.png" alt="" class="xl:object-fill object-cover w-full h-full" />
    </div>
  </main>

  <Dialog
    title="What should I do if the code doesn't arrive?"
    :open="show_modal"
    @close="show_modal = false"
  >
    <div class="flex flex-col gap-8">
      <div class="leading-5 text-[#78708F]">
        <div class="mb-4 flex gap-1">
          <span>1.</span>
          <p>
            You may have entered the wrong number or made a mistake in the number. Check everything
            again.
          </p>
        </div>
        <div class="flex gap-1">
          <span>2.</span>
          <p>The problem may be on the part of your mobile operator. Contact customer support.</p>
        </div>
      </div>
      <div class="leading-5 text-[#78708F] flex gap-6">
        <a href="mailto:help@decmed.space" class="flex items-center gap-3">
          <Message />
          <span>help@decmed.space</span>
        </a>
        <a href="https://web.telegram.org" target="_blank" class="flex items-center gap-3">
          <Chat />
          <span>Chatbot</span>
        </a>
      </div>
    </div>
  </Dialog>
</template>
