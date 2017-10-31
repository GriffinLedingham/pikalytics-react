import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

import API from '../../classes/api'

class PokedexContent extends React.Component {
  componentDidMount () {
    if(this.props.match.params.hasOwnProperty('name')) {
      API.fetchPokemon(this.props.match.params.name)
    }
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.match.params.hasOwnProperty('name')) {
      if(nextProps.match.params.name != this.props.match.params.name) {
        API.fetchPokemon(nextProps.match.params.name)
      }
    }
  }

  render () {
    const { pokemon, currentPokemon } = this.props
    let pokemonData = {}
    pokemon.map((pokemonItem)=>{
      if(pokemonItem.get('name') == currentPokemon) {
        pokemonData = pokemonItem
      }
    })
    return (
      <div className="pokemonContent">
        {typeof pokemonData['get'] != 'undefined' && pokemonData.get('name')}<br />
        {typeof pokemonData['get'] != 'undefined' && pokemonData.get('moves')}<br />
      </div>
    )
  }
}

export default connect(state => ({
  pokemon: state.get('pokemon'),
  currentPokemon: state.get('currentPokemon')
}))(PokedexContent)
