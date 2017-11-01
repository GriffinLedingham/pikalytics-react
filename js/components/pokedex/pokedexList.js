import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

import { fetchPokemonList, paginatePokemonList } from '../../actions/pokemon'

import API from '../../classes/api'

class PokedexList extends React.Component {
  componentDidMount () {
    const { format } = this.props
    this.props.fetchPokemonList(format, 25)
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.hasOwnProperty('format')) {
      if(nextProps.format !== this.props.format) {
        this.props.fetchPokemonList(nextProps.format, 25)
      }
    }
  }

  handleOnScroll () {
    const { format, page } = this.props
    var scrollTop = document.querySelectorAll(".pokedexList")[0].scrollTop
    var scrollHeight = document.querySelectorAll(".pokedexList")[0].scrollHeight
    var clientHeight = document.querySelectorAll(".pokedexList")[0].clientHeight
    var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= (scrollHeight - 1000)
    if (scrolledToBottom) {
      this.props.paginatePokemonList(format, 25, page + 1)
    }
  }

  render () {
    const { pokemonList, formatList, format, page } = this.props
    if(document.querySelectorAll(".pokedexList").length > 0) {
      document.querySelectorAll(".pokedexList")[0].scrollTo(0,0)
    }
    return (
      <div className="pokedexList" onScroll={()=>{this.handleOnScroll()}}>
        {pokemonList && pokemonList.map && pokemonList.map((pokemonItem) => {
          return (
            <Link to={`/pokedex/${format}/${pokemonItem.get('name')}`} className="pokedexListItem">
              <div className="pokemonContentListItemIcon">
                <span className={'sprite-xyicons ' + pokemonItem.get('name') }></span>
              </div>
              <span className="pokemonContentListItemName">{pokemonItem.get('name')}</span>
              <span className="pokemonContentListItemPercent">{pokemonItem.get('percent')}%</span>
            </Link>
          )
        })}
      </div>
    )
  }
}

export default connect(state => ({
  pokemonList: state.pokemon.get('pokemonList'),
  formatList: state.format.get('formatList'),
  page: state.pokemon.get('page')
}), {fetchPokemonList, paginatePokemonList})(PokedexList)
