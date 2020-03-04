import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import vuetify from '@/plugins/vuetify'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './config/firebase'

new Vue({
  vuetify,
  router,
  store,
  components: { App },
  render: h => h(App)
}).$mount('#app')

Vue.use(firestorePlugin)

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
