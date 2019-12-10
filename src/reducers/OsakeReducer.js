import { GET_OSAKE_LIST, CHANGE_OSAKE_LIST } from '../utils/actionTypes'
import { getOsakeList } from '../actions'
const initialState = []
  
export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_OSAKE_LIST:
      return action.osakeList
    default:
      return state;
  }
};