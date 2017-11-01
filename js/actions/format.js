import { Map, fromJS, List } from 'immutable'
import { apiRequest } from '../classes/api'

export const CHANGE_FORMAT_LIST = 'CHANGE_FORMAT_LIST'

function fetchFormatsComplete (formatsList) {
  return {
    type: CHANGE_FORMAT_LIST,
    formats: fromJS(formatsList),
  }
}

export function fetchFormats (name) {
  return dispatch => {
    return apiRequest(`/f`).then((r)=>{
      dispatch(fetchFormatsComplete(r))
    })
  }
}
