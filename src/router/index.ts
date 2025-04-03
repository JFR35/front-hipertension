import { createRouter, createWebHistory } from 'vue-router'
import PatientInfo from '@/pages/PatientInfo.vue'
import Login from '@/pages/LoginPage.vue'
import Dashboard from '@/pages/DashboardPage.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/patient/:id', component: PatientInfo, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
