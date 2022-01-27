import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Frame from "./Frame";
import CustomersList from "./CustomersList";
import CustomersActions from "./CustomersActions";
import {useNavigate} from "react-router-dom";
import * as actions from '../actions/fetchCustomers'
import {getCustomers} from "../selectors/customers";

const CustomersContainer = () => {
  const customers = useSelector(getCustomers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchCustomers())
  }, [dispatch])

  const navigate = useNavigate()
  const handleAddNew = () => {
    navigate('/customers/new')
  }

  const renderCustomers = arrCustomers => (
    <>
      <CustomersList customers={arrCustomers} urlPath='/customers/'/>
      <CustomersActions>
        <button onClick={handleAddNew}>Add Customer</button>
      </CustomersActions>
    </>
  )

  return (
    <div>
      <Frame
        header='Customers list'
        body={renderCustomers(customers)}
      >

      </Frame>
    </div>
  );
};


CustomersContainer.defaultProps = {
  customers: []
}

export default CustomersContainer;
