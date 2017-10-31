import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

import RankingList from './rankingList'

const homeStyle = {
    display: 'block',
    minWidth: '1240px',
    maxWidth: '1240px',
    margin: '0 auto',
    position: 'relative',
    marginTop: '20px',
    boxShadow: '0 1px 1px 0 rgba(0,0,0,0.12)',
    boxSizing: 'border-box'
}

class Home extends React.Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className="Home" style={homeStyle}>
        <div className="pokemonRankingContainer">
            <RankingList title="vgc2017 trending" />
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  stories: state.get('stories'),
  comments: state.get('comments'),
  items: state.get('items')
}))(Home)
