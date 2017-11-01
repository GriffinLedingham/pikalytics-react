import { Map, fromJS, List } from 'immutable'
import uniq from 'lodash/uniq'
import update from 'react-addons-update'
import {CHANGE_POKEMON, CHANGE_POKEMON_LIST, PAGINATE_POKEMON_LIST, CHANGE_POKEDEX_FORMAT} from '../actions/pokemon'

let defaultState = new Map({
  pokemonList: new List(),
  pokemonAll: new Map(),
  page: 1
})

export default function (state = defaultState, action) {
  let newState
  let change = true
  switch (action.type) {
    case CHANGE_POKEMON_LIST:
      newState = state.set('pokemonList', action.pokemon)
      break
    case CHANGE_POKEMON:
      newState = state.mergeIn(['pokemonAll', action.pokemon.get('name')], action.pokemon)
      break
    case PAGINATE_POKEMON_LIST:
      newState = state.set('pokemonList', state.get('pokemonList').concat(action.pokemon)).set('page', state.get('page') + 1)
      break
    case CHANGE_POKEDEX_FORMAT:
      newState = state.set('pokemonList', action.pokemon).set('pokemonAll', new Map())
      break
    default:
      change = false
      newState = state
      break
  }
  return newState
}
