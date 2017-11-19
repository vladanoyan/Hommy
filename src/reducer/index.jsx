import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import todos from './todos';
import counterDe from './counterDe';
import counter from './counter';
import visibilityFilter from './visibilityFilter';
import dispatCheck from './dispatCheck';
import radioDispatch from './radioDispatch';
import dispatchRadioHome from './dispatchRadioHome';


export default combineReducers({
  form: reduxFormReducer,
  todos,
  visibilityFilter,
  counterDe,
  counter,
  dispatCheck,
  radioDispatch,
  dispatchRadioHome,
});
