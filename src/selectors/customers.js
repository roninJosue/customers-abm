import {createSelector} from "reselect";

export const getCustomers = state => state.customers

export const getCustomersByDni = createSelector(
  (state, dni) => state.customers.find(customer => customer.dni === dni),
  customer => customer
)