import { Map, fromJS, List } from 'immutable'
import { apiRequest } from '../classes/api'

export const CHANGE_POKEMON = 'CHANGE_POKEMON'
export const CHANGE_POKEMON_LIST = 'CHANGE_POKEMON_LIST'
export const PAGINATE_POKEMON_LIST = 'PAGINATE_POKEMON_LIST'
export const CHANGE_POKEDEX_FORMAT = 'CHANGE_POKEDEX_FORMAT'

function fetchListComplete (pokemonList) {
  return {
    type: CHANGE_POKEMON_LIST,
    pokemon: fromJS(pokemonList),
  }
}

function fetchPokemonComplete (pokemonData) {
  return {
    type: CHANGE_POKEMON,
    pokemon: fromJS(pokemonData),
  }
}

function paginatePokemonListComplete (pokemonList) {
  return {
    type: PAGINATE_POKEMON_LIST,
    pokemon: fromJS(pokemonList),
  }
}

function changeFormatComplete (pokemonList) {
  return {
    type: CHANGE_POKEDEX_FORMAT,
    pokemon: fromJS(pokemonList),
  }
}

export function fetchPokemonList (format, limit = '', page = 1) {
  return dispatch => {
    return apiRequest(`/l/2017-06/${format}-1760`, limit, page).then((r)=>{
      dispatch(fetchListComplete(r))
    })
  }
}

export function fetchPokemon (name, format) {
  return dispatch => {
    return apiRequest(`/p/2017-06/${format}-1760/${name}`).then((r)=>{
      dispatch(fetchPokemonComplete(r))
    })
  }
}

export function paginatePokemonList (format, limit, page) {
  return dispatch => {
    return apiRequest(`/l/2017-06/${format}-1760`, limit, page).then((r)=>{
      dispatch(paginatePokemonListComplete(r))
    })
  }
}

export function changeFormat (format, limit, page) {
  return dispatch => {
    return apiRequest(`/l/2017-06/${format}-1760`, limit, page).then((r)=>{
      dispatch(changeFormatComplete(r))
    })
  }
}
