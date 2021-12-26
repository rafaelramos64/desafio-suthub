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
    <v-btn text tile color="secondary" nuxt to="/countries" class="mx-1">
      Brasil
    </v-btn>
    <v-btn text tile color="secondary" nuxt to="/regional-blocks">
      Blocos Regionais
    </v-btn>
    <v-btn text tile color="secondary" nuxt to="/countries-research">
      Buscar Países
    </v-btn>
  </v-app-bar>
</template>

<script>

export default {
  name: 'Navbar',
  data () {
    return {}
  },
}
</script>

<style scoped lang="scss">
.btn {
  text-transform: none;
}
</style>