import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

class PokedexContentTeamPane extends React.Component {
  componentDidMount () {

  }

  render () {
    const { team } = this.props
    return (
      <div className="pokemonContentStatContainer">
        <div className="pokemonContentStatContainerHeader">Teammates</div>
        <div className="pokemonContentCategoryWrapper">
          <div className="pokemonContentTeamWrapper">
            {team.map( teamItem => {
              let types = teamItem.get('types')
              return (
                <div className="pokemonContentTeamEntry">
                  <div className="pokemonContentTeamEntryIcon">
                    <span className={'sprite-xyicons ' + teamItem.get('pokemon') }></span>
                  </div>
                  <div className="pokemonContentTeamEntryText">{teamItem.get('pokemon')}</div>
                  {types.map(type=>{
                    return (
                      <span className={'type ' + type}>{type}</span>
                    )
                  })}
                  <span className="pokemonContentTeamEntryPercent">{teamItem.get('percent')}%</span>
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

}))(PokedexContentTeamPane)
