import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

class PokedexContentStatPane extends React.Component {
  componentDidMount () {

  }

  render () {
    const { stats } = this.props
    return (
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
    )
  }
}

export default connect(state => ({

}))(PokedexContentStatPane)
