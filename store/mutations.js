export default {
  changeSearchedCountries (state, payload) {
    state.countries = payload
  },

  changeBorders (state, payload) {
    state.borders = payload
  }
}