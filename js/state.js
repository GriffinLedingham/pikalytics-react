import { Map, fromJS, List } from 'immutable'
import uniq from 'lodash/uniq'
import update from 'react-addons-update'
import {CHANGE_POKEMON_LIST} from './actions/pokemonList'
import {CHANGE_POKEMON} from './actions/pokemon'

let defaultState = window.localStorage.getItem('state')
if (defaultState) {
  defaultState = fromJS(JSON.parse(defaultState))
} else {
  defaultState = new Map({
    pokemon: new List(),
    currentPokemon: 'Arcanine'
    // comments: new Map(),
  })
}

export default function (state = defaultState, action) {
  let newState
  let change = true
  switch (action.type) {
    case CHANGE_POKEMON_LIST:
      newState = state.mergeIn(['pokemon'], action.pokemon)
      break
    case CHANGE_POKEMON:
      let index = 0
      let pokemon = state.get('pokemon')
      pokemon.map((pokemonItem, key)=>{
        if(pokemonItem.get('name') == action.pokemon.name) {
          index = key
        }
      })
      newState = state.mergeIn(['pokemon', index], action.pokemon).set('currentPokemon', action.pokemon.name)
      break
    default:
      change = false
      newState = state
      break
  }

  if (change) {
    window.localStorage.setItem('state', JSON.stringify(newState.toJS()))
  }
  return newState
}
