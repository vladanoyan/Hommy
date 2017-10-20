import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import todos from './todos';
import visibilityFilter from './visibilityFilter';


export default combineReducers({
  form: reduxFormReducer,
  todos,
  visibilityFilter,
});
