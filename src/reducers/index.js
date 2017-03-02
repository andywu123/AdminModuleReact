import { combineReducers } from 'redux';
import ContentReducer from './reducer_content';

const rootReducer = combineReducers({
  contents: ContentReducer
});

export default rootReducer;
