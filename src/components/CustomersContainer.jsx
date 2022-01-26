import React from 'react';
import PropTypes from 'prop-types';
import Frame from "./Frame";
import CustomersList from "./CustomersList";
import CustomersActions from "./CustomersActions";
import {useNavigate} from "react-router-dom";

const customers = [
  {
    "dni": "121212",
    "name": "Rey",
    "age": 33
  }
]

const CustomersContainer = props => {

  const navigate = useNavigate()
  const handleAddNew = () => {
    navigate('/customers/new')
  }

  const renderCustomers = arrCustomers => (
    <>
      <CustomersList customers={arrCustomers} urlPath='/customers/' />
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

CustomersContainer.propTypes = {

};

export default CustomersContainer;
