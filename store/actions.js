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
  }
}