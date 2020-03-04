<template>
  <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      :expand-on-hover="expandOnHover"
      :mini-variant="miniVariant"
      absolute
      dark
      @change="updateRouter($event)"
  >
    <v-list
        dense
        nav
        class="px-0 py-0"
    >
      <v-list-group
          v-for="(item, idx) in menuItems"
          :key="idx"
          v-model="item.active"
          value="true"
          no-action
      >
        <template v-slot:activator>
          <v-list-item-action
              class="ml-2 mr-4"
          >
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item
            v-for="subItem in item.items"
            :key="subItem.title"
            link
            :to="subItem.link"
        >
          <v-list-item-content>
            <v-list-item-title>{{subItem.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    currentRoute: window.location.pathname,
    drawer: null,
    miniVariant: true,
    expandOnHover: true,
    menuItems: [
      {
        icon: 'mdi-view-dashboard',
        title: 'Верстка',
        // active: true,
        items: [
          {
            title: 'AdCombo',
            link: '/layout/adc'
          },
          {
            title: 'CTR',
            link: '/layout/ctr'
          },
          {
            title: 'E-commerce',
            link: '/layout/ecommerce'
          }
        ]
      },
      {
        icon: 'mdi-numeric-2-box-multiple-outline',
        title: 'Second Page',
        items: [
          {
            title: 'Подключение',
            link: '/second-plug'
          },
          {
            title: 'Добавить новое',
            link: '/second-add'
          },
          {
            title: 'Каталог версий',
            link: '/second-versions'
          }
        ]
      },
      {
        icon: 'mdi-numeric-3-box-multiple-outline',
        title: 'Success Page',
        items: [
          {
            title: 'Подключение',
            link: '/success-plug'
          },
          {
            title: 'Добавить новое',
            link: '/success-add'
          },
          {
            title: 'Каталог версий',
            link: '/success-versions'
          }
        ]
      },
      {
        icon: 'mdi-file-video',
        title: 'Video',
        items: [
          {
            title: 'Подключение',
            link: '/video-plug'
          },
          {
            title: 'Добавить новое',
            link: '/video-add'
          }
        ]
      },
      {
        icon: 'mdi-keyboard',
        title: 'Работа с формами',
        items: [
          {
            title: 'Общие вопросы',
            link: '/form-others'
          },
          {
            title: 'Плагины',
            link: '/form-plugin'
          }
        ]
      },
      {
        icon: 'mdi-information-outline',
        title: 'Общие вопросы',
        items: [
          {
            title: 'Пресеты',
            link: '/presets'
          },
          {
            title: 'Ошибки',
            link: '/errors'
          }
        ]
      }
    ]
  })
}
</script>

<style scoped>

</style>
