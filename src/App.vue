<template>
    <v-app id="inspire">
        <v-app-bar
                app
                clipped-left
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title>Документация</v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer
                v-model="drawer"
                @change="updateRouter($event)"
                app
                clipped
                :expand-on-hover="expandOnHover"
                :mini-variant="miniVariant"
                absolute
                dark
        >
            <v-list
                    dense
                    nav
                    class="px-0 py-0"
            >
                <v-list-item
                        link
                        :to="item.link"
                        v-for="(item, idx) in menuItems"
                        :key="idx"
                        class="pl-4 pr-3 mb-0"
                >
                    <v-list-item-action
                        class="mr-4"
                    >
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{item.title}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-content>
            <v-container
                    class="fill-height align-items-start"
                    fluid
            >
                <router-view />
            </v-container>
        </v-content>

        <v-footer
            app
        >
            <div class="current-date">&copy; {{ new Date().getFullYear() }}</div>
            <v-switch
                v-model="$vuetify.theme.dark"
                hide-details
                inset
                label="Theme Dark"
                class="mt-0 pt-0"
            ></v-switch>
        </v-footer>
    </v-app>
</template>

<script>
import { db } from './main'

export default {
  props: {
    source: String
  },
  data: (vm) => ({
    drawer: null,
    initialDark: vm.$vuetify ? vm.$vuetify.theme.dark : false,
    menuItems: [
      {
        icon: 'mdi-view-dashboard',
        title: 'Верстка',
        link: '/layout'
      },
      {
        icon: 'mdi-folder-upload',
        title: 'Заливка креативов',
        link: '/creative'
      },
      {
        icon: 'mdi-numeric-2-box-multiple-outline',
        title: 'Second Page',
        link: '/second-page'
      },
      {
        icon: 'mdi-numeric-3-box-multiple-outline',
        title: 'Success Page',
        link: '/success-page'
      },
      {
        icon: 'mdi-file-video',
        title: 'Video',
        link: '/video'
      },
      {
        icon: 'mdi-keyboard',
        title: 'Работа с формами',
        link: '/forms'
      },
      {
        icon: 'mdi-information-outline',
        title: 'Общие вопросы',
        link: '/others'
      }
    ],
    miniVariant: true,
    expandOnHover: true
  }),
  beforeDestroy () {
    if (!this.$vuetify) return
    this.$vuetify.theme.dark = this.initialDark
  },
  methods: {
    updateRouter (val) {
      this.$router.push(val)
    }
  },
  created () {
    this.$vuetify.theme.dark = true
  },
  firestore () {
    return {
      templates: db.collection('templates').orderBy('createdAt')
    }
  }
}

</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Kelly+Slab&display=swap&subset=cyrillic');
    @import './assets/scss/main';
</style>
