import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layouts/Layout.vue'
import LayoutAdc from '../views/layouts/LayoutAdc.vue'
import LayoutCTR from '../views/layouts/LayoutCTR.vue'
import LayoutEcommerce from '../views/layouts/LayoutEcommerce.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Creative from '../views/Creative.vue'
import SecondPage from '../views/SecondPage.vue'
import SuccessPage from '../views/SuccessPage.vue'
import Video from '../views/Video.vue'
import Forms from '../views/Forms.vue'
import Others from '../views/Others.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/layout/',
    component: Layout,
    children: [
      {
        path: 'adc',
        name: 'adc',
        component: LayoutAdc
      },
      {
        path: 'ctr',
        name: 'ctr',
        component: LayoutCTR
      },
      {
        path: 'ecommerce',
        name: 'ecommerce',
        component: LayoutEcommerce
      }
    ]
  },
  {
    path: '/creative',
    name: 'creative',
    component: Creative
  },
  {
    path: '/second-page',
    name: 'second-page',
    component: SecondPage
  },
  {
    path: '/success-page',
    name: 'success-page',
    component: SuccessPage
  },
  {
    path: '/video',
    name: 'video',
    component: Video
  },
  {
    path: '/forms',
    name: 'forms',
    component: Forms
  },
  {
    path: '/others',
    name: 'others',
    component: Others
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
