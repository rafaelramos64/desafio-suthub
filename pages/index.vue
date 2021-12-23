<template>
  <h1>

  {{ getCountries }}</h1>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'IndexPage',

  computed: {
    ...mapGetters(['getCountries']),
    /* getCountries () {
      return this.$store.state.countries
    }, */
  },

  watch: {
    getCountries () {
      console.log('123', this.$store.state.countries)
    }
  }

}
</script>
