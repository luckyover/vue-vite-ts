import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/app.css'
import 'boxicons'
//boxicons
import 'boxicons/css/boxicons.min.css';
import router from '@/router'
const app = createApp(App)
app.use(router)
app.mount('#app')
