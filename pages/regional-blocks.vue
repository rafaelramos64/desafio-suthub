<template>
  <div>
    <v-row justify="center">
      <v-col cols="3">
        <PageTitle title="Blocos Regionais" />
        
        <ul class="text-left d-flex justify-center">
          <li v-for="(block, index) in regionalBlocks" :key="index" @click="activeRegionalBlockBtn(block)">
            <RegionalBlockBtn :block="block" :btnActive="btnActive"  />
          </li>
        </ul>

        <ul class="text-left d-flex justify-center">
          <li v-for="(block, index) in regionalBlocks2" :key="index" @click="activeRegionalBlockBtn(block)">
            <RegionalBlockBtn :block="block" :btnActive="btnActive"  />
          </li>
        </ul>

        <ul class="text-left d-flex justify-center">
          <li v-for="(block, index) in regionalBlocks3" :key="index" @click="activeRegionalBlockBtn(block)">
            <RegionalBlockBtn :block="block" :btnActive="btnActive"  />
          </li>
        </ul>
      </v-col>
    </v-row>

    <v-row v-if="getCountriesByRegionalBlock.length > 0" justify="center" class="mt-3">
      <v-col cols="5">
          <v-card-title class="py-1">Bloco Selecionado:</v-card-title>
          <v-card-text>{{ btnActive.description }}</v-card-text>

        <v-simple-table class="table-area">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="thead-title">Países do Bloco</th>
                <th class="thead-title">Coordenadas do País</th>
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
  name: 'regional-blocks',
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
      this.searchCountriesByRegionalBlock(block.text)
    },

    spreadCordinates (cordinate) {
      return cordinate !== undefined ? cordinate.join('') : ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/main.scss';

ul {
  list-style-type: none;
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

.table-area {
  max-height: 350px;
  overflow: auto
}

::-webkit-scrollbar {
  width: 6px !important;
  background-color: #f8f8f8 !important;
}
</style>