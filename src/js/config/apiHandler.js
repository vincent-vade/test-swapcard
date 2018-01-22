import axios from 'axios'
import { TOKEN } from './constantes/token';

export default (opts = {}) => {
  return axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
      Authorization: `Bearer ${TOKEN}`
    },
    ...opts
  })
}
