/* import getters from './getters' */
import mutations from './mutations'
import actions from './actions'

export const state = () => ({
  countries: [],
})

export const getters = {
  getCountries (state) {
    return state.countries
  }
}

export default {
  mutations,
  actions,
}