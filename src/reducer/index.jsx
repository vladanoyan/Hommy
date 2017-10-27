import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import todos from './todos';
import counterDe from './counterDe';
import counter from './counter';
import visibilityFilter from './visibilityFilter';
import dispatCheck from './dispatCheck';


export default combineReducers({
  form: reduxFormReducer,
  todos,
  visibilityFilter,
  counterDe,
  counter,
  dispatCheck,
});
