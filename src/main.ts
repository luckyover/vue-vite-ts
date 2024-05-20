import { createApp } from 'vue'
import App from './App.vue'
// import {BootstrapVue3} from 'bootstrap-vue-3'
import './assets/index.css'
import 'boxicons'
//Import Bootstrap and BootstrapVue CSS files
// import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
//boxicons
//  import 'boxicons/css/boxicons.min.css';
//common css
// import './assets/scss/theme-default.scss'
// import './assets/scss/core.scss'
// import './assets/scss/common.scss'
const app = createApp(App)
 //app.use(BootstrapVue3)
app.mount('#app')
