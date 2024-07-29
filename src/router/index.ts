import { createMemoryHistory, createRouter } from 'vue-router'
import HorizontalMenu from '@/components/menu/horizontal/MenuDropDown.vue'
const routes = [
  { path: '/', component: HorizontalMenu },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router