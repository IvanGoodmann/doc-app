import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'highlight.js/styles/default.css'
import Highlight from 'vue-markdown-highlight'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(firestorePlugin)
firebase.initializeApp({
  projectId: 'doc-app-a6f3f',
  databaseURL: 'https://doc-app-a6f3f.firebaseio.com'
})

export const db = firebase.firestore()

Vue.use(Highlight)
