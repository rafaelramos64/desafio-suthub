export default {
  getCountries (state) {
    return state.countries
  },

  getBorders (state) {
    return state.borders
  },

  getCountriesByRegionalBlock (state) {
    return state.countriesByRegionalBlock
  },

  getLoadingCountries (state) {
    return state.loadingCountries
  }
}