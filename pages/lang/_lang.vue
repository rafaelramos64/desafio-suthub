<template>
  <div>
    <v-row justify="center">
      <v-col cols="11" sm="6" class="d-flex justify-center align-center">
        <PageTitle title="Língua Selecionada" :subtitle="getSelectedLanguage.name" />
      </v-col>
    </v-row>

    <v-row class="text-center mb-2" justify="center">
      <v-col cols="12" md="9" xl="8" class="d-flex justify-center align-center">
        <v-card
          max-width="1200px"
          :min-width="$vuetify.breakpoint.xs ? '340px' : '600px'"
          class="card-lang py-5">
          <v-row>
            <v-col cols="12" class="pa-0">
              <v-card-title class="justify-center pt-3 pb-7">
                Países que falam <span class="capitalize-native-name ml-1"> {{ getSelectedLanguage.nativeName }}</span>
              </v-card-title>
            </v-col>
          </v-row>

          <v-divider class="mb-3"></v-divider>

          <v-row justify="center">
            <v-col cols="6" sm="4" v-for="country in getCountries" :key="country.name">
              <v-card-text class="terciary--text">{{ country.name }}</v-card-text>
            </v-col>
          </v-row>
        </v-card>
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

.card-lang {
  border-radius: 4px;
  border-top: 3px solid $terciary;
}
</style>