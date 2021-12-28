<template>
  <div>
    <v-btn
      v-for="button in buttons"
      :key="button.text"
      text
      tile
      nuxt
      :to="button.to"
      color="secondary"
      class="mr-2"
    >
      {{ button.text }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'NavBarButton',

  data () {
    return {
      buttons: [
        { text: 'Formluário', to: '/form' },
        { text: 'Brasil', to: '/country' },
        { text: 'Blocos Regionais', to: '/regional-blocks' },
        { text: 'Buscar Países', to: '/countries-research' },
      ]
    }
  }
}
</script>