<template>
  <v-app dark>
    <Navbar />

    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    
    <Footerbar />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
