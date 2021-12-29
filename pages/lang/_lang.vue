<template>
  <div>
    <v-row justify="center">
      <v-col cols="6" class="d-flex justify-center align-center">
        <PageTitle title="Língua Selecionada" :subtitle="getSelectedLanguage.name" />
      </v-col>
    </v-row>

    <v-row class="text-center mb-2" justify="center">
      <v-col cols="12" md="9" xl="8" class="d-flex justify-center align-center">
        <v-card max-width="1200px" class="card-lang py-5">
          <v-row justify="center">
            <v-col cols="12">
              <h3 class="ml-2 mt-1 h3">
                Países que falam <span class="capitalize-native-name">{{ getSelectedLanguage.nativeName }}</span>
              </h3>
            </v-col>

            <v-divider></v-divider>

            <v-col cols="6" sm="4" v-for="country in getCountries" :key="country.name">
              {{ country.name }}
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
  border-radius: 0.9rem;
}
</style>