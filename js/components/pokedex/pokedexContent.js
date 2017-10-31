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
    const { currentPokemon, pokemonItems } = this.props
    let pokemonData = pokemonItems.get(currentPokemon)
    let types = pokemonData.get('types')
    let stats = pokemonData.get('stats')
    let moves = pokemonData.get('moves')
    if(typeof pokemonData != 'undefined') {
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
            <div className="pokemonContentStatContainer">
              <div className="pokemonContentStatContainerHeader">Base Stats</div>
              <div className="pokemonContentCategoryWrapper">
                <div className="pokemonContentBattleStatsWrapper">
                  {stats.entrySeq().map( o => {
                    return (
                      <div>
                        <div className="pokemonContentBattleStatsName">
                        {o[0]}
                        </div>
                        <div className="pokemonContentBattleStatsBar">
                          <span className={'pokemonContentBattleStatsBarInner '+o[0]} style={{width:((o[1]/255)*100)+'%'}}></span>
                        </div>
                        <div className="pokemonContentBattleStatValue">
                          {o[1]}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="pokemonContentStatContainer">
              <div className="pokemonContentStatContainerHeader">Moves</div>
              <div className="pokemonContentCategoryWrapper">
                <div className="pokemonContentMovesWrapper">
                  {moves.map( move => {
                    return (
                      <div className="pokemonContentMoveEntry">
                        <div className="pokemonContentMoveEntryText">{move.get('move')}</div>
                        <span className={'type ' + move.get('type')}>{move.get('type')}</span>
                        <span className="pokemonContentMoveEntryPercent">{move.get('percent')}%</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>


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
