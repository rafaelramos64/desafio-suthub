<template>
  <div>
    <v-list
      nav
      dense
      color="#fff"
      tile
    >
      <v-list-item-group
        active-class="terciary--text text--accent-4"
        :class="$vuetify.breakpoint.mdAndUp ? 'd-flex' : ''"
      >
        <v-list-item
          v-for="button in buttons"
          :key="button.text"
          color="primary"
          nuxt
          :to="button.to"
          :class="$vuetify.breakpoint.mdAndUp ? 'mb-0 mr-2' : 'mb-3'"
        >
          <v-icon v-text="button.icon" class="mr-3"/>

          <v-list-item-title v-text="button.text" class="title" />

        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'NavBarButton',
  props: {
    drawer: {
      type: Boolean,
      default: false
    },
  },

  data () {
    return {
      buttons: [
        { text: 'Formulário', to: '/form', icon: 'mdi-form-select' },
        { text: 'Brasil', to: '/country', icon: 'mdi-flag-outline' },
        { text: 'Blocos Regionais', to: '/regional-blocks', icon: 'mdi-cube-outline' },
        { text: 'Buscar Países', to: '/countries-research', icon: 'mdi-magnify' },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
@import '~assets/scss/main.scss';

.title {
  font-size: 1.1rem !important;
  line-height: 1.2rem !important;
  color: $secondary !important;
}
</style>