<template>
  <v-row justify="center" class="mt-5">
    <v-col cols="12" class="d-flex justify-center">
      <Flag selectedCountry :country="getCountries" />
    </v-col>

    <!-- <v-col
      cols="12"
      md="4"
      class="text-left py-1 ml-5 country-info"
      :class="$vuetify.breakpoint.mdAndDown ? 'd-flex justify-center' : ''"
    >
      <ul>
        <li class="mb-5">
          <span class="text-title-color">Nome:</span>
          {{ getCountries.name }}

          <span class="text-title-color">Nome Nativo:</span>
          {{ getCountries.nativeName }}
        </li>

        <li class="mb-5">
          <span class="text-title-color">Capital:</span>
          {{ getCountries.capital }}

          <span class="text-title-color">Código de ligação:</span>
          {{ getCountries.callingCodes }}
        </li>

        <li class="mb-5 d-flex">
          <span class="text-title-color">Região:</span>
          <div @click="changeToHome(getCountries.region)" class="region ml-1">
              {{ getCountries.region }}
          </div>

          <span class="text-title-color">Sub-Região:</span>
          <div @click="changeToHome(getCountries.region)" class="region ml-1">
              {{ getCountries.subregion }}
          </div>
        </li>

        <li class="mb-5">
          <span class="text-title-color">População:</span>
          {{ getCountries.population }}

          <span class="text-title-color">Área:</span>
          {{ getCountries.area }}
        </li>

        <li>
          <span class="text-title-color">Código Alfa:</span>
          {{ getCountries.alpha2Code }}

          <span class="text-title-color">Moeda:</span>
          <span v-for="currency in getCountries.currencies" :key="currency.name">
            {{ currency.name }}, {{  }}
          </span>

           <span class="text-title-color">Símbolo:</span>
           <span v-for="currency in getCountries.currencies" :key="currency.symbol">
            {{ currency.symbol }}, {{  }}
          </span>
        </li>

        <li>
          <span class="text-title-color">Linguas:</span>
          <span v-for="lang in getCountries.languages" :key="lang.name">{{ lang.name }}, {{  }}</span>

          <span class="text-title-color">Países vizinhos:</span>
          <span v-for="(border, key) in getCountries.borders" :key="key">{{ border}}, {{  }}</span>
        </li>
      </ul>
    </v-col> -->

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

.thead-title {
  font-size: 0.9rem !important;
  color: #007C74 !important;
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
  color: #007C74;
}

.region:hover {
  text-decoration: underline;
  cursor: pointer;
}

.text-title-color {
  color: #004F49;
  font-weight: bold;
}

.country-info {
  height: 242px;
}
</style>