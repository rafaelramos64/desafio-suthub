<template>
  <div>
    <PageTitle title="Brasil" />
    <CountryInfo />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Country',
  data () {
    return {
    }
  },

  mounted () {
    this.searchCountries('name/brazil')
  },

  methods: {
    ...mapActions(['searchCountries']),
  }
}
</script>

<style lang="scss" scoped>

</style>