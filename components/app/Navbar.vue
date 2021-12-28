<template>
  <v-app-bar
    color="white accent-4"
    dark
    height="100"
    max-height="100"
    class="pl-7 pr-8 nav-shadow"
  >
    <v-toolbar-title>
      <NuxtLink to="/">
        <v-img max-width="200" src="/suthub.png" alt="SutHub logo" />
      </NuxtLink>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <NavBarButton />
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

.nav-shadow {
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
}
</style>
