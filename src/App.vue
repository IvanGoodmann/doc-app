<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
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
                    class=""
            >
                <v-list-item
                        link
                        v-for="(item, idx) in menuItems"
                        :key="idx"
                        class="pl-4 pr-3"
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
        <v-app-bar
                app
                clipped-left
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title>Документация</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col class="shrink">

                    </v-col>
                </v-row>
            </v-container>
        </v-content>

        <v-footer app>
            <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>

export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    menuItems: [
      {
        icon: 'mdi-view-dashboard',
        title: 'Верстка',
        link: ''
      },
      {
        icon: 'mdi-folder-upload',
        title: 'Заливка креативов',
        link: ''
      },
      {
        icon: 'mdi-numeric-2-box-multiple-outline',
        title: 'Second Page',
        link: ''
      },
      {
        icon: 'mdi-numeric-3-box-multiple-outline',
        title: 'Success Page',
        link: ''
      },
      {
        icon: 'mdi-file-video',
        title: 'Video',
        link: ''
      },
      {
        icon: 'mdi-keyboard',
        title: 'Работа с формами',
        link: ''
      },
      {
        icon: 'mdi-information-outline',
        title: 'Общие вопросы',
        link: ''
      }
    ],
    miniVariant: true,
    expandOnHover: true
  }),
  created () {
    this.$vuetify.theme.dark = true
  }
}

</script>

<style lang="scss">
    @import './assets/scss/main';
</style>
