import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

import API from '../../classes/api'

class PokedexList extends React.Component {
  componentDidMount () {
    API.fetchPokemonList()
  }

  render () {
    const { pokemon } = this.props
    return (
      <div className="pokedexList">
        {pokemon && pokemon.map && pokemon.map((pokemonItem) => {
          return (
            <Link to={`/pokedex/${pokemonItem.get('name')}`} className="pokedexListItem">{pokemonItem.get('name')}</Link>
          )
        })}
      </div>
    )
  }
}

export default connect(state => ({
  pokemon: state.get('pokemon')
}))(PokedexList)
