import { Map, fromJS, List } from 'immutable'

export const CHANGE_POKEMON = 'CHANGE_POKEMON'
export const CHANGE_POKEMON_LIST = 'CHANGE_POKEMON_LIST'

export default {
  changePokemon (pokemon) {
    return {
      type: CHANGE_POKEMON,
      pokemon: pokemon,
    }
  },

  changePokemonList (pokemon) {
    return {
      type: CHANGE_POKEMON_LIST,
      pokemon: pokemon,
    }
  },

}
