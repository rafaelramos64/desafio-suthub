<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm="8" lg="5" ><!-- :class="$vuetify.breakpoint.xs ? 'px-5' : 'pr-10'" -->
        <PageTitle title="Blocos Regionais"  />

        <v-list class="d-flex justify-center " rounded color="transparent">
          <v-list-item dense class="px-0 " :class="$vuetify.breakpoint.xs ? 'mx-0' : 'mx-2'"
            v-for="(block, index) in blocks.regionalBlocks" :key="index"
            @click="activeRegionalBlockBtn(block)"
          >
            <RegionalBlockBtn :block="block" :btnActive="btnActive" />
          </v-list-item>
        </v-list>

        <v-list class="d-flex justify-center" rounded color="transparent">
          <v-list-item dense class="px-0" :class="$vuetify.breakpoint.xs ? 'mx-0' : 'mx-2'"
            v-for="(block, index) in blocks.regionalBlocks2" :key="index"
            @click="activeRegionalBlockBtn(block)"
          >
            <RegionalBlockBtn :block="block" :btnActive="btnActive" />
          </v-list-item>
        </v-list>

        <v-list class="d-flex justify-center" rounded color="transparent">
          <v-list-item dense class="px-0" :class="$vuetify.breakpoint.xs ? 'mx-0' : 'mx-2'"
            v-for="(block, index) in blocks.regionalBlocks3" :key="index"
            @click="activeRegionalBlockBtn(block)"
          >
            <RegionalBlockBtn :block="block" :btnActive="btnActive" />
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <v-row v-if="getCountriesByRegionalBlock.length > 0" justify="center" class="mt-3">
      <v-col cols="11" sm="9" md="7" lg="6" xl="4">
          <v-card-title class="py-1">Bloco Selecionado:</v-card-title>
          <v-card-text>{{ btnActive.description }}</v-card-text>

        <v-simple-table height="350" fixed-header>
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
import Blocks from '../assets/js/regionalBlocks'

export default {
  name: 'regional-blocks',
  data () {
    return {
      blocks: this.$vuetify.breakpoint.xs ? Blocks.blocksMobile : Blocks.blocks,
      btnActive: '',
    }
  },

  mounted () {
    console.log(this.$vuetify.breakpoint)
  },

  computed: {
    ...mapGetters(['getCountriesByRegionalBlock', 'getLoadingCountries']),

    verifyBreakpoint () {
      return this.$vuetify?.breakpoint.xs
    }
  },

  watch: {
    verifyBreakpoint () {
      this.$vuetify.breakpoint.xs ?
        this.blocks = Blocks.blocksMobile : this.blocks = Blocks.blocks
    }
  },

  methods: {
    ...mapActions(['searchCountriesByRegionalBlock']),

    activeRegionalBlockBtn (block) {
      this.btnActive = block
      this.searchCountriesByRegionalBlock(block.text)
    },

    spreadCordinates (cordinate) {
      return cordinate.join('')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/main.scss';

.v-list-item {
  flex: none !important;
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

::-webkit-scrollbar {
  width: 4px !important;
  background-color: #000 !important;
}
</style>