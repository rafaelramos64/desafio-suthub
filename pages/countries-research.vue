<template>
  <div>
    <v-row>
      <v-col>
        <PageTitle title="Busca de Países" />
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-3 mb-5">
      <v-col cols="8" sm="4" lg="3" xl="2">
        <v-text-field
          label="Buscar País"
          placeholder="Digite o nome de um país em inglês"
          color="terciary"
          autocomplete="off"
          prepend-inner-icon="mdi-magnify"
          :rules="rules"
          v-model="countriesResearch"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row v-if="countriesResearch.length > 2" class="px-5 mb-5" justify="center" no-gutters>
      <v-col cols="12" md="10" xl="7">
        <v-row justify="center">
          <v-col cols="12" md="6" lg="4" v-for="country in contriesFound" :key="country.name">
            <CountryCard :country="country" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row v-if="countriesResearch.length > 2 && contriesFound.length < 1" justify="center">
      <v-col cols="12" md="10" xl="7">
        <v-card-title class="none-country-found justify-center">Nenhum país encontrado.</v-card-title>
      </v-col>
    </v-row>

    <v-row v-if="countriesResearch.length < 3" justify="center">
      <v-col cols="11" md="10" xl="7">
        <v-card-title class="none-country-found justify-center">Nenhum país buscado.</v-card-title>
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