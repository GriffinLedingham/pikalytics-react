import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

import API from '../classes/api'

import { BrowserRouter, Route, Switch, IndexRoute } from 'react-router-dom'

import Header from './header.js'

import Home from './home/home.js'

import Pokedex from '../routes/pokedex.js'

class App extends React.Component {
  componentDidMount () {

  }

  render () {
    return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/pokedex/:format" component={Pokedex} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
    )
  }
}

export default connect(state => ({

}))(App)
