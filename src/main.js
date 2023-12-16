import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Button from './components/Button.vue'
import Tag from './components/TagComp.vue'
import Input from './components/Input.vue'
import Dropdown from './components/Dropdown.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('Button', Button)
app.component('Tag', Tag)
app.component('Input', Input)
app.component('Dropdown', Dropdown)

app.mount('#app')
