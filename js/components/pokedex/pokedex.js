import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

import PokedexList from './pokedexList'
import PokedexContent from './pokedexContent/pokedexContent'
import PokedexHeader from './pokedexHeader'

import { BrowserRouter, Route, Switch, IndexRoute } from 'react-router-dom'

class Pokedex extends React.Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className="pokedex">
        <PokedexHeader />
        <PokedexList />
        <Switch>
          <Route path="/pokedex/:name" component={PokedexContent} />
          <Route path="/pokedex" component={PokedexContent} />
        </Switch>
      </div>
    )
  }
}

export default connect(state => ({

}))(Pokedex)
