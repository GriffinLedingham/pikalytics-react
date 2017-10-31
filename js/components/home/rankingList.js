import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

class RankingList extends React.Component {
  componentDidMount () {

  }

  render () {
    const { title } = this.props
    return (
      <div className="pokemonRankingBox">
        {title}
      </div>
    )
  }
}

export default connect(state => ({

}))(RankingList)
