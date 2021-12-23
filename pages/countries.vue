<template>
  <v-row>
    <v-col>
      <h1>fsdfdf</h1>
      {{ getCountries }}
      <!-- <Country :country="getCountries" /> -->
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Country',
  data () {
    return {
    }
  },

  computed: {
    /* ...mapGetters(['getCountries']), */
    getCountries () {
      return this.$store.getters.getCountries
    },
  },

  watch: {
    getCountries() {
      console.log('123', this.getCountries)
    }
 },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>