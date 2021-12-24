export default {
  async searchCountries (context, payload) {

    let countries

    try {
      const { data } = await this.$axios.get(payload)
      countries = data

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
}