import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

class PokedexContentMovesPane extends React.Component {
  componentDidMount () {

  }

  render () {
    const { moves } = this.props
    return (
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
    )
  }
}

export default connect(state => ({

}))(PokedexContentMovesPane)
