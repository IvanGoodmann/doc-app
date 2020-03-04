<template>
  <v-app id="inspire">
    <app-header></app-header>
    <app-nav></app-nav>
    <v-content>
      <v-container
        class="fill-height align-items-start"
      >
        <transition
            appear
            mode="in-out"
        >
          <router-view />
        </transition>
      </v-container>
    </v-content>

    <app-footer></app-footer>
  </v-app>
</template>

<script>
import { db } from './main'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import AppNav from '@/components/AppNav'

export default {
  components: {
    AppHeader,
    AppFooter,
    AppNav
  },
  data: (vm) => ({
    userAuth: false
  }),
  computed: {
    isUserAuthenticated () {
      return this.$store.getters.isUserAuthenticated
    }
  },
  methods: {
    updateRouter (val) {
      this.$router.push(val)
    }
  },
  watch: {},
  firestore () {
    return {
      templates: db.collection('templates').orderBy('createdAt')
    }
  },
  render (h) { return h(this.ViewComponent) }
}

</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Kelly+Slab&display=swap&subset=cyrillic');
    @import './assets/scss/main';
</style>
