import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

class PokedexHeader extends React.Component {
  componentDidMount () {

  }

  render () {
    const { formatList } = this.props
    return (
      <div className="pokedexHeader">
        {formatList.map( formatItem => {
          return (
            <Link to={`/pokedex/${formatItem}`} className="pokedexHeaderItem">{formatItem}</Link>
          )
        })}
      </div>
    )
  }
}

export default connect(state => ({
  formatList: state.format.get('formatList')
}))(PokedexHeader)
