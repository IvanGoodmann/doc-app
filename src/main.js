import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import vuetify from '@/plugins/vuetify'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

new Vue({
  vuetify,
  router,
  store,
  components: { App },
  render: h => h(App)
}).$mount('#app')

Vue.use(firestorePlugin)
firebase.initializeApp({
  projectId: 'doc-app-a6f3f',
  databaseURL: 'https://doc-app-a6f3f.firebaseio.com'
})

export const db = firebase.firestore()

Vue.prototype.$http = Axios
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
