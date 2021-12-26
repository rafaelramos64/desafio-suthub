<template>
  <div>
    <v-row justify="center" class="mt-3 mb-5">
      <v-col cols="4">
        <v-text-field
          label="Buscar País"
          color="terciary"
          autocomplete="off"
          :rules="rules"
          v-model="countriesResearch"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row v-if="countriesResearch.length > 2" class="px-5">
      <v-col cols="12" sm="6" md="4" v-for="country in contriesFound" :key="country.name">
        <CountryCard :country="country" />
      </v-col>
    </v-row>

    <v-row v-if="countriesResearch.length > 2 && contriesFound.length < 1" justify="center">
      <v-col cols="4">
        <v-card-title class="none-country-found">Nenhum país encontrado.</v-card-title>
      </v-col>
    </v-row>

    <v-row v-if="countriesResearch.length < 3" justify="center">
      <v-col cols="4">
        <v-card-title class="none-country-found">Nenhum país buscado.</v-card-title>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from  'vuex'

export default {
  data () {
    return {
      countriesResearch: '',
      searchCountriesCorrect: '',
      contriesFound: [],
      rules: [
        value => (value && value.length >= 3) || 'Digite ao menos 3 caracteres!',
      ],
    }
  },

  mounted () {
    this.searchCountries('/all')
  },

  computed: {
    ...mapGetters(['getCountries']),
  },

  watch: {
    countriesResearch () {
      if (this.countriesResearch.length > 2) {
        this.filterCountries()
      }
    }
  },

  methods: {
    ...mapActions(['searchCountries']),

    filterCountries () {
      if (this.countriesResearch) {
        this.searchCountriesCorrect = this.removeAccent(this.countriesResearch)
        this.searchByValueLabelTags()
      }
    },

    removeAccent (currentString) {
      return currentString
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
    },

    searchByValueLabelTags () {
      this.contriesFound = this.getCountries.filter(country => {
        return this.removeAccent(country.name).includes(this.searchCountriesCorrect)
      })
    },
  },
}
</script>

<style scoped lang="scss">
@import '~assets/scss/main.scss';

.none-country-found {
  color: $secondary;
  font-size: 1.3rem;
}
</style>