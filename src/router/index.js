import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'
import Creative from '../views/Creative.vue'
import SecondPage from '../views/SecondPage.vue'
import SuccessPage from '../views/SuccessPage.vue'
import Video from '../views/Video.vue'
import Forms from '../views/Forms.vue'
import Others from '../views/Others.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/layout',
    name: 'layout',
    component: Layout
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
  routes
})

export default router
