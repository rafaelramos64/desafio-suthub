<template>
  <v-app-bar
    color="white accent-4"
    dark
    height="100"
    max-height="100"
    class="pl-7 pr-8"
  >
    <v-toolbar-title>
      <NuxtLink to="/">
        <v-img max-width="200" src="/suthub.png" alt="SutHub logo" />
      </NuxtLink>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn text tile color="secondary">
      Ir para Formluário
    </v-btn>
    <v-btn text tile color="secondary" nuxt to="/countries" @click="goToCountriesPage()">
      Listar Países
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {}
  },

  methods: {
    ...mapActions(['searchCountries']),

    goToCountriesPage () {
      this.searchCountries('alpha/br')
    }
  }
}
</script>

<style scoped lang="scss">
.btn {
  text-transform: none;
}
</style>