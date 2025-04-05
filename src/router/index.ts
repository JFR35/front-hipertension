import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/LoginPage.vue'
//import { useAuthStore } from '@/stores/auth' Para autenticacion
import DashboardPage from '@/pages/DashboardPage.vue'
import PatientInfo from '@/pages/PatientInfo.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage,
  },
  {
    path: '/patient/:id',
    name: 'PatientInfo',
    component: PatientInfo,
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
