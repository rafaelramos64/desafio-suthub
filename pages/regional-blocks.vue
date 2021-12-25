<template>
  <div>
    <v-row justify="center">
      <v-col cols="3">
        <v-card-title class="justify-center regional-blocks-title my-3">Blocos Regionais</v-card-title>
        <ul class="text-left d-flex justify-center">
          <li v-for="(block, index) in regionalBlocks" :key="index">
            <RegionalBlockBtn :block="block"/>
          </li>
        </ul>

        <ul class="text-left d-flex justify-center">
          <li v-for="(block, index) in regionalBlocks2" :key="index">
            <v-tooltip top color="terciary">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-if="block.text"
                  class="mx-1 mb-1 block-regional"
                  rounded text color="primary"
                  v-bind="attrs"
                  v-on="on"
                  @click.prevent.stop="searchCountriesByRegionalBlock(block.text)"
                >
                  {{ block.text }}
                </v-btn>
              </template>
              <span>{{ block.description }}</span>
            </v-tooltip>
          </li>
        </ul>

        <ul class="text-left d-flex justify-center">
          <li v-for="(block, index) in regionalBlocks3" :key="index">
            <v-tooltip top color="terciary">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-if="block.text"
                  class="mx-1 mb-1 block-regional"
                  rounded text color="primary"
                  v-bind="attrs"
                  v-on="on"
                  @click.prevent.stop="activeRegionalBlockBtn(block.text)"
                >
                  {{ block.text }}
                </v-btn>
              </template>
              <span>{{ block.description }}</span>
            </v-tooltip>
          </li>
        </ul>
      </v-col>
    </v-row>

    <v-row v-if="getCountriesByRegionalBlock.length > 0" justify="center">
      <v-col cols="5">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="thead-title">Nome</th>
                <th class="thead-title">Coordenadas</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="country in getCountriesByRegionalBlock" :key="country.name">
                <td >
                  {{ country.name }}
                </td>
                <td>
                  {{ spreadCordinates(country.latlng) }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      regionalBlocks: [
        { text: 'EU', description: 'União Européia' },
        { text: 'EFTA', description: 'Assossiação Européia de Livre Comércio' },
        { text: 'CARICOM', description: 'Comunidade Caribenha' },
        { text: 'PA', description: 'Aliança do Pacífico' },
        { text:'AU', description: 'União Africana' },
        { text: 'USAN', description: 'União das Nações Sul-Americanas' },
      ],
      regionalBlocks2: [
        { text: 'EEU', description: 'União Econômica da Eurásia' },
        { text: 'AL', description: 'Liga Arábica' },
        { text: 'ASEAN', description: 'Associação das Nações do Sudeste Asiático' },
        { text: 'CAIS', description: 'Sistema de Integração Centro-americana' },
        { text: 'CEFTA', description: 'Acordo de Livre Comércio da Europa Central' },
      ],
      regionalBlocks3: [
        { text: 'NAFTA', description: 'Acordo de Livre Comércio da América do Norte' },
        { text: 'SAARC', description: 'Associação do Sul da Ásia para Cooperação Regional' },
      ],
      btnActive: '',
    }
  },

  computed: {
    ...mapGetters(['getCountriesByRegionalBlock', 'getLoadingCountries']),
  },

  methods: {
    ...mapActions(['searchCountriesByRegionalBlock']),

    activeRegionalBlockBtn (block) {
      this.btnActive = block
      this.searchCountriesByRegionalBlock(block)
    },

    spreadCordinates (cordinate) {
      return cordinate.join()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/main.scss';

ul {
  list-style-type: none;
}

.regional-blocks-title {
  color: $secondary;
  font-size: 1.6rem;
}

.reginal-blocks {
  color: $primary;
}

.block-regional:hover, .block-regional-active {
  background-color: $primary !important;
  color: #fff !important;
  transform: scale(1.1) !important;
  box-shadow: 0px 8px 10px -5px rgb(0 0 0 / 20%),
    0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%);
}

.block-regional-active {
  background-color: $secondary !important;
}

.thead-title {
  font-size: 0.9rem !important;
  color: $primary !important;
}
</style>