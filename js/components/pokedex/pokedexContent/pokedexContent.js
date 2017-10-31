import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

import API from '../../../classes/api'

import PokedexContentStatPane from './pokedexContentStatPane'
import PokedexContentMovesPane from './pokedexContentMovesPane'
import PokedexContentTeamPane from './pokedexContentTeamPane'

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
    const { currentPokemon, pokemonItems } = this.props
    let pokemonData = pokemonItems.get(currentPokemon)
    if(typeof pokemonData != 'undefined') {
      let types = pokemonData.get('types')
      let stats = pokemonData.get('stats')
      let moves = pokemonData.get('moves')
      let team = pokemonData.get('team')
      return (
        <div className="pokemonContent">
          <div className="pokemonContentPanel">
            <div className="pokemonContentHeader">
              <div className="pokemonContentHeaderImage">
                <div className={'sprite-xyicons ' + pokemonData.get('name') }></div>
              </div>
              <div className="pokemonContentHeaderName">{pokemonData.get('name')}</div>
              <span className="pokemonContentHeaderTypes">
                {types.map(type=>{
                  return (
                    <span className={'type ' + type}>{type}</span>
                  )
                })}
              </span>
            </div>
            <PokedexContentStatPane stats={stats} />
            <PokedexContentMovesPane moves={moves} />
            <PokedexContentTeamPane team={team} />
          </div>
        </div>
      )
    } else {
      return (
        <div className="pokemonContent">
          <div className="pokemonContentPanel">
          </div>
        </div>
      )
    }
  }
}

export default connect(state => ({
  currentPokemon: state.get('currentPokemon'),
  pokemonItems: state.get('pokemonItems')
}))(PokedexContent)
