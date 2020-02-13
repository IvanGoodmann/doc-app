import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import vuetify from '@/plugins/vuetify'
import { firestorePlugin } from 'vuefire'
import * as firebase from 'firebase'
import 'firebase/firestore'

new Vue({
  vuetify,
  router,
  store,
  components: { App },
  render: h => h(App)
}).$mount('#app')

const configOptions = {
  apiKey: 'AIzaSyCUgHHrjAxbehYk8ibR5du5LY5zfidv18Y',
  authDomain: 'doc-app-a6f3f.firebaseapp.com',
  databaseURL: 'https://doc-app-a6f3f.firebaseio.com',
  projectId: 'doc-app-a6f3f',
  storageBucket: 'doc-app-a6f3f.appspot.com',
  messagingSenderId: '889538448677',
  appId: '1:889538448677:web:79a32c1dba3e492e565ecc'
}

Vue.use(firestorePlugin)
firebase.initializeApp(configOptions)

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user)
})

export const db = firebase.firestore()

Vue.prototype.$http = Axios
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
