import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Frame from "./Frame";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {getCustomersByDni} from "../selectors/customers";
import CustomerEdit from "./CustomerEdit";
import CustomerData from "./CustomerData";
import * as actions from "../actions/fetchCustomers";
import {updateCustomer} from "../actions/updateCustomer";
import {SubmissionError} from "redux-form";


const CustomerContainer = () => {

  const {pathname} = useLocation()
  const isEdit = pathname.includes('edit')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {dni} = useParams()
  const currentCustomer = useSelector(state => getCustomersByDni(state, dni))

  useEffect(() => {
    if (!currentCustomer) {
      dispatch(actions.fetchCustomers())
    }
  }, [dispatch])

  const handleSubmit = values => {
    const {id} = values
    return dispatch(updateCustomer(id, values))
      .then(r => {
        if (r.payload && r.payload.error) {
          throw new SubmissionError(r.payload.error)
        }
      })
  }

  const handleOnBack = () => {
    navigate(-1)
  }

  const renderBody = () => {
    const Customer = isEdit ? CustomerEdit : CustomerData
    return <Customer
      {...currentCustomer}
      onSubmit={handleSubmit}
      onBack={handleOnBack}
      onSubmitSuccess={() => navigate(-1)}
    />
  }

  return (
    <>
      <Frame
        header={`Customer ${dni}`}
        body={renderBody()}
      />
    </>
  );
};


export default CustomerContainer
