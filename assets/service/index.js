import Axios from 'axios'

export const api = Axios.create({
  baseURL: 'https://ws.apicep.com/cep/'
})

