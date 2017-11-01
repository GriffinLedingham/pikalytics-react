import { Map, fromJS, List } from 'immutable'
import uniq from 'lodash/uniq'
import update from 'react-addons-update'
import {CHANGE_FORMAT_LIST} from '../actions/format'

let defaultState = new Map({
  formatList: new List()
})

export default function (state = defaultState, action) {
  let newState
  let change = true
  switch (action.type) {
    case CHANGE_FORMAT_LIST:
      newState = state.set('formatList', action.formats)
      break
    default:
      change = false
      newState = state
      break
  }
  return newState
}
