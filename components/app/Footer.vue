<template>
  <v-footer
    :absolute="!fixed"
    app
  >
    <span class="rafael-ramos">&copy; Copyleft || <b> Rafael Ramos </b> </span>
  </v-footer>
</template>

<script>

export default {
  name: 'Footer',
  data () {
    return {
      fixed: false,
    } 
  }
}
</script>

<style scoped lang="scss">
@import '~assets/scss/main.scss';

.rafael-ramos {
  color: $secondary !important;
}
</style>
