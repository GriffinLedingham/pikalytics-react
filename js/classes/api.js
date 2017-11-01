import pokemon from '../actions/pokemon'
import store from '../store'
import { List, Map } from 'immutable'

const HOST = 'http://localhost:3000/api'
const toJSON = response => response.json();

let API = {
  apiRequest: (url, limit = '', page = 1)=>{
    url = API.buildFormat(url)
    let queryParams = ''
    if(limit != '' && page != '') {
      queryParams = `?limit=${limit}&page=${page}`
    }
    return fetch(`${HOST}${url}${queryParams}`).then(toJSON)
  },

  buildFormat: (url)=>{
    if(url.indexOf('/ou') != -1) {
      url = url.replace('1760', '1825')
    }
    return url
  }
}

document.API = API

export default API
