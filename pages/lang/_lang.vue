<template>
  <div>
    <v-row justify="center">
      <v-col cols="6" class="d-flex justify-center align-center">
        <PageTitle title="Lingua Seleconada" :subtitle="getSelectedLanguage.name"/>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col cols="12" class="d-flex justify-center align-center">
        <h3 class="ml-2 mt-1 h3">Países que falam </h3>
        <h4 class="ml-2 mt-2 capitalize-native-name">{{getSelectedLanguage.nativeName }}</h4>
      </v-col>

      <v-col cols="4" v-for="country in getCountries" :key="country.name">
        {{ country.name }}
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Lang',
  data () {
    return {}
  },

  mounted () {
    this.searchCountries(this.$route.path)
  },

  computed: {
    ...mapGetters(['getCountries', 'getSelectedLanguage']),
  },

  methods: {
    ...mapActions(['searchCountries']),
  }
}
</script>

<style scoped lang="scss">
@import '~assets/scss/main.scss';

.capitalize-native-name {
  text-transform: capitalize;
}
</style>