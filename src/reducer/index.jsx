import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import data from './data';


export default combineReducers({
  form: reduxFormReducer,
  data,
});
