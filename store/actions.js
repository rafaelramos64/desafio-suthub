export default {
  async searchCountries (context, payload) {

    let countries

    try {
      const { data } = await this.$axios.get(payload)
      countries = data

      payload === '/all' ? context.commit('changeSearchedCountries', countries) :
        context.commit('changeSearchedCountries', ...countries)
        
    } catch (erro) {
      console.error(erro)
    }

    try {
      let paramsToGetBorders = countries[0]
      paramsToGetBorders = paramsToGetBorders.borders.join()

      const { data } = await this.$axios.get(`/alpha?codes=${paramsToGetBorders}`)

      context.commit('changeBorders', data)
    } catch (erro) {
      console.error(erro)
    }
  },

  async searchCountriesByRegionalBlock (context, payload) {
    const params = 'regionalbloc/' + payload

    try {
      context.commit('changeLoadingCountries', true)

      const { data } = await this.$axios.get(params)

      context.commit('changeCountriesByRegionalBlock', data)
    } catch (erro) {
      console.error(erro)
    } finally {
      context.commit('changeLoadingCountries', false)
    }
  },

  saveSelectedLanguage conte) {

  }
}