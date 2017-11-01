import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

import { fetchFormats } from '../actions/format'

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

const headerLogo = {
    display: 'inline-block',
    color: '#fdd800',
    fontWeight: '300',
    verticalAlign: 'top',
    marginRight: '40px',
    paddingTop: '25px',
    fontSize: '20px',
    paddingBottom: '20px',
    letterSpacing: '1px',
    textDecoration: 'none'
}

class Header extends React.Component {
  componentDidMount () {
    this.props.fetchFormats()
  }

  render () {
    const { formatList } = this.props
    if(!formatList) return null
    return (
      <div style={headerStyle}>
        <img src="/assets/header-icon_v2.png" className="headerLogo" />
        <Link to={`/`} style={headerLogo} >Pikalytics</Link>
        <Link to={`/pokedex/${formatList.first()}`} className="headerItem" >Pokedex</Link>
      </div>
    )
  }
}

export default connect(state => ({
  formatList: state.format.get('formatList')
}), {fetchFormats})(Header)
