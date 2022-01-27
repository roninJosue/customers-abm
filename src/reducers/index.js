import {combineReducers} from "redux";
import {reducer as reduxForm} from "redux-form";
import {customers} from './customers'

export default combineReducers({
  customers,
  form: reduxForm
})