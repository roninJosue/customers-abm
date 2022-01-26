import {createAction} from 'redux-actions'
import {FETCH_CUSTOMERS} from "../constants";

const customers = [
  {
    "dni": "121212",
    "name": "Rey",
    "age": 33
  },
  {
    "dni": "121214",
    "name": "Rolando",
    "age": 9
  },
  {
    "dni": "121215",
    "name": "Eli",
    "age": 8
  }
]

export const fetchCustomers = createAction(FETCH_CUSTOMERS)