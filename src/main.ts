import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// import router from '.router'; Si se usa Vue Router
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)
app.use(createPinia())

app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
