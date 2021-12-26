import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export const state = () => ({
  countries: [],
  borders: [],
  countriesByRegionalBlock: [],
  loadingCountries: false,
})

export default {
  namespace: true,
  getters,
  state,
  mutations,
  actions,
}