<template>
  <v-app dark>
    <Navbar />

    <v-main class="bg-main">
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    
    <Footer />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style scoped>
.bg-main {
  background-color:#F9FAFF;
}
</style>
