import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

import { fetchPokemon } from '../../../actions/pokemon'

import PokedexContentStatPane from './pokedexContentStatPane'
import PokedexContentMovesPane from './pokedexContentMovesPane'
import PokedexContentTeamPane from './pokedexContentTeamPane'
import PokedexContentItemPane from './pokedexContentItemPane'

class PokedexContent extends React.Component {
  componentDidMount () {
    if(this.props.match.params.hasOwnProperty('name')
        && this.props.match.params.hasOwnProperty('format')) {
      this.props.fetchPokemon(this.props.match.params.name, this.props.match.params.format)
    }
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.match.params.hasOwnProperty('name')
        && this.props.match.params.hasOwnProperty('format')) {
      if(nextProps.match.params.name !== this.props.match.params.name) {
        if(!nextProps.pokemonAll.get(nextProps.match.params.name)) {
          this.props.fetchPokemon(nextProps.match.params.name, nextProps.match.params.format)
        }
      }
    }
  }

  render () {
    const { currentPokemon, pokemonAll, pokemonList } = this.props
    let pokemonData = pokemonAll.get(this.props.match.params.name)
    if(!this.props.match.params.hasOwnProperty('name') && pokemonList.first()) {
      pokemonData = pokemonList.first()
    }
    if(typeof pokemonData != 'undefined') {
      let types = pokemonData.get('types')
      let stats = pokemonData.get('stats')
      let moves = pokemonData.get('moves')
      let team = pokemonData.get('team')
      let items = pokemonData.get('items')
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
            <PokedexContentItemPane items={items} />
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
  pokemonAll: state.pokemon.get('pokemonAll'),
  pokemonList: state.pokemon.get('pokemonList')
}), {fetchPokemon})(PokedexContent)
