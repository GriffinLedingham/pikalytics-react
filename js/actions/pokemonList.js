import { Map, fromJS, List } from 'immutable'

export const CHANGE_POKEMON_LIST = 'CHANGE_POKEMON_LIST'

export default {
  changePokemonList (pokemon) {
    return {
      type: CHANGE_POKEMON_LIST,
      pokemon: pokemon,
    }
  },
}
