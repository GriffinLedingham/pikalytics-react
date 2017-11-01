import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

import PokedexList from '../components/pokedex/pokedexList'
import PokedexContent from '../components/pokedex/pokedexContent/pokedexContent'
import PokedexHeader from '../components/pokedex/pokedexHeader'

import { BrowserRouter, Route, Switch, IndexRoute } from 'react-router-dom'

class Pokedex extends React.Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className="pokedex">
        <PokedexHeader />
        <PokedexList format={this.props.match.params.format} />
        <Switch>
          <Route path="/pokedex/:format/:name" component={PokedexContent} />
          <Route path="/pokedex/:format" component={PokedexContent} />
        </Switch>
      </div>
    )
  }
}

export default connect(state => ({

}))(Pokedex)
