<template>
  <v-row>
    <v-col>
      <h1>fsdfdf</h1>
      {{ getCountries }}
      <Country :country="getCountries" />
      <Flag :country="getCountries" />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Country',
  data () {
    return {
      ret: this.getCountries
    }
  },

  computed: {
    ...mapGetters(['getCountries']),
  },
}
</script>

<style lang="scss" scoped>

</style>