import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutDefault from '../layouts/LayoutDefault.vue'
import AuthLayout from '../layouts/AuthLayout.vue';
import RegistrationForm from '../components/auth/Registration.vue';
import LoginForm from '../components/auth/Login.vue';
import auth from '../store/modules/auth';

Vue.use(VueRouter)

const routes = [
  {
    path: '/market',
    name: 'LayoutDefault',
    component: LayoutDefault,
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/auth',
    name: 'AuthLayout',
    component: AuthLayout,
    meta: { 
      requiresAuth: false
    },
    children: [
      {
        path: '/login',
        component: LoginForm
      },
      {
        path: '/registration',
        component: RegistrationForm
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (auth.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router
