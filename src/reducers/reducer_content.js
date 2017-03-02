import { FETCH_CONTENT } from '../actions/index';

// initialize state as null object
const INITIAL_STATE = { content: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_CONTENT:
    return { ...state, content: action.payload.data };
  default:
    return state;
  }
}
