import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

import API from '../classes/api'

const headerStyle = {
    background: '#373737',
    boxSizing: 'border-box',
    color: '#795548',
    fontWeight: '700',
    height: '70px',
    left: '0',
    position: 'static',
    right: '0',
    top: '0',
    width: '100%',
}

const headerItem = {
    borderBottom: '7px solid #373737',
    boxSizing: 'border-box',
    color: '#c4c4c4',
    display: 'inline-block',
    fontFamily: 'Lato',
    fontSize: '12px',
    fontWeight: 'initial',
    height: '100%',
    marginRight: '-3px',
    padding: '32px 30px 0',
    textShadow: '0 1px rgba(0,0,0,0.45)',
    textTransform: 'uppercase',
    verticalAlign: 'top'
}

const headerLogo = {
    display: 'inline-block',
    color: '#fdd800',
    fontWeight: '300',
    verticalAlign: 'top',
    marginRight: '40px',
    paddingTop: '25px',
    fontSize: '20px',
    paddingBottom: '20px',
    letterSpacing: '1px'
}

class Header extends React.Component {
  componentDidMount () {

  }

  render () {
    return (
      <div style={headerStyle}>
        <Link to={`/`} style={headerLogo} >Pikalytics</Link>
        <Link to={`/pokedex`} style={headerItem} >Pokedex</Link>
      </div>
    )
  }
}

export default connect(state => ({
  stories: state.get('stories'),
  comments: state.get('comments'),
  items: state.get('items')
}))(Header)
