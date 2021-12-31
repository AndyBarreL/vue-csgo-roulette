import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutDefault from '../layouts/LayoutDefault.vue'
import RegistrationForm from '../components/auth/Registration.vue';
import LoginForm from '../components/auth/Login.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LayoutDefault',
    component: LayoutDefault
  },
  {
    path: '/registration',
    name: 'RegistrationForm',
    component: RegistrationForm
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginForm
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
