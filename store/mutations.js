export default {
  changeSearchedCountries (state, payload) {
    state.countries = payload
  },

  changeBorders (state, payload) {
    state.borders = payload
  },

  changeCountriesByRegionalBlock (state, payload) {
    state.countriesByRegionalBlock = payload
  },

  changeLoadingCountries (state, payload) {
    state.loadingCountries = payload
  },

  changeSelectedLanguage (state, payload) {
    state.selectedLanguage = payload
  }
}