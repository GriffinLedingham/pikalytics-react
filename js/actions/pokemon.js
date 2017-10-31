import { Map, fromJS, List } from 'immutable'

export const CHANGE_POKEMON = 'CHANGE_POKEMON'

export default {
  changePokemon (pokemon) {
    return {
      type: CHANGE_POKEMON,
      pokemon: pokemon,
    }
  },
}
