<template>
  <v-row justify="center" class="mt-5">
    <v-col cols="12" class="d-flex justify-center">
      <Flag selectedCountry :country="getCountries" />
    </v-col>

    <v-col cols="11">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th v-for="title in titles" :key="title" class="text-center thead-title">
                {{ title }}
              </th>
            </tr>
          </thead>

          <tbody>
            <tr class="text-center">
              <td> {{ getCountries.name }}</td>
              <td>{{ getCountries.capital }}</td>
              <td>{{ getCountries.callingCodes }}</td>
              <td>{{ getCountries.region }}</td>
              <td>{{ getCountries.subregion }}</td>
              <td>{{ getCountries.population }}</td>
              <td>{{ getCountries.area }}</td>
              <td>{{ getCountries.alpha2Code }}</td>
              <td v-for="currency in getCountries.currencies" :key="currency.name">
                {{ currency.name }}, {{ currency.symbol }}
              </td>
              <td v-for="lang in getCountries.languages" :key="lang.name">
                {{ lang.name }}
              </td>
              <div class="borders text-left">
                <td
                v-for="border in getBorders"
                :key="border.name"
                class="d-flex "
              >
                {{ border.nativeName }}
              </td>
              </div>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      titles: [
        'Nome',
        'Capital',
        'Código de Ligação',
        'Região',
        'Sub-Região',
        'População',
        'Área',
        'Código Alfa',
        'Moeda',
        'Língua',
        'Países Vizinhos'
      ]
    }
  },

  computed: {
    ...mapGetters(['getCountries', 'getBorders']),
  },
}
</script>

<style scoped lang="scss">
 @import '~assets/scss/main.scss';

.thead-title {
  font-size: 0.9rem !important;
  color: $primary !important;
}

.borders {
  max-height: 70px;
  overflow: auto;
}

::-webkit-scrollbar {
  width: 6px !important;
  background-color: #f8f8f8 !important;
}

@media screen and (max-width: 550px) {
  .country-info {
    margin-top: 10px !important;
  }
}

ul {
  list-style-type: none !important;
  height: 242px;
  min-width: 213px;
  padding: 0 !important;
  margin: 0 !important;
}

.region {
  color: $primary;
}


.region:hover {
  text-decoration: underline;
  cursor: pointer;
}

.text-title-color {
  color: $secondary;
  font-weight: bold;
}

.country-info {
  height: 242px;
}
</style>