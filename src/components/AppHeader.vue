<template>
  <v-app-bar
      app
      clipped-left
  >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <v-toolbar-title
        @click="goHome"
    >Документация</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon color="orange">
      <v-icon>mdi-login</v-icon>
    </v-btn>
    <v-btn icon color="orange">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data: (vm) => ({
    initialDark: vm.$vuetify ? vm.$vuetify.theme.dark : false
  }),
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
