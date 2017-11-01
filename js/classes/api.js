import pokemon from '../actions/pokemon'
import store from '../store'
import { List, Map } from 'immutable'

const HOST = 'http://localhost:3000/api'
const toJSON = response => response.json();

let API = {
  _apiRequest: (url)=>{
    return fetch(`${HOST}${url}`).then(toJSON)
  },

  fetchPokemon: (name)=>{
    return API._apiRequest (`/p/2017-06/vgc2017-1760/${name}`).then((r)=>{
      store.dispatch(pokemon.changePokemon(r))
      return new Map(r)
    })
  },

  fetchPokemonList: ()=>{
    return API._apiRequest ('/l/2017-06/vgc2017-1760').then((r)=>{
      store.dispatch(pokemon.changePokemonList(r))
      return new List(r)
    })
  },
}

document.API = API

export default API
