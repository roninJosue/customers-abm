import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Frame from "./Frame";
import CustomersList from "./CustomersList";
import CustomersActions from "./CustomersActions";
import {useNavigate} from "react-router-dom";
import {fetchCustomers} from "../actions/fetchCustomers";
import {getCustomers} from "../selectors/customers";

const CustomersContainer = ({fetchCustomers, customers}) => {

  useEffect(() => {
    fetchCustomers()
  }, [fetchCustomers])

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

CustomersContainer.propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired
};

CustomersContainer.defaultProps = {
  customers: []
}

const mapStateToProps = state => ({
  customers: getCustomers(state)
})

export default connect(mapStateToProps, {fetchCustomers})(CustomersContainer);
