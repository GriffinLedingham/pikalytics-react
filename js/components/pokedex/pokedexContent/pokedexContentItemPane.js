import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

class PokedexContentItemPane extends React.Component {
  componentDidMount () {

  }

  render () {
    const { items } = this.props
    return (
      <div className="pokemonContentStatContainer">
        <div className="pokemonContentStatContainerHeader">Items</div>
        <div className="pokemonContentCategoryWrapper">
          <div className="pokemonContentItemWrapper">
            {items.map( item => {
              return (
                <div className="pokemonContentItemEntry">
                  <div className="pokemonContentItemEntryIcon">
                    <span className={'sprite-xyitems ' + item.get('item_us') }></span>
                  </div>
                  <div className="pokemonContentItemEntryText">{item.get('item')}</div>
                  <span className="pokemonContentItemEntryPercent">{item.get('percent')}%</span>
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

}))(PokedexContentItemPane)
