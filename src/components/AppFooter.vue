<template>
  <v-footer
      app
  >
    <div class="current-date">
      &copy; {{ new Date().getFullYear() }}
    </div>
    <v-switch
        v-model="$vuetify.theme.dark"
        hide-details
        inset
        label="Theme Dark"
        class="mt-0 pt-0"
    />
  </v-footer>
</template>

<script>
export default {
  created () {
    this.$vuetify.theme.dark = true
  },
  beforeDestroy () {
    if (!this.$vuetify) return
    this.$vuetify.theme.dark = this.initialDark
  }
}
</script>

<style scoped>

</style>
