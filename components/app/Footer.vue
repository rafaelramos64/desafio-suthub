<template>
  <v-footer
    :absolute="!fixed"
    app
  >
    <span>&copy; Copyleft || Rafael Ramos</span>
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
