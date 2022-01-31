import React from 'react';
import Frame from "./Frame";
import CustomerEdit from "./CustomerEdit";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {insertCustomer} from "../actions/insertCustomer";
import {SubmissionError} from "redux-form";

const NewCustomerContainer = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = values => {
    return dispatch(insertCustomer(values)).then(r => {
      if (r.payload && r.payload.error) {
        throw new SubmissionError(r.payload.error)
      }
    })
  }

  const handleOnBack = () => {
    navigate(-1)
  }

  const renderBody = () => {
    return <CustomerEdit
      onSubmit={handleSubmit}
      onSubmitSuccess={() => navigate(-1)}
      onBack={handleOnBack}
    />
  }
  return (
    <Frame
      header='New Customer'
      body={renderBody()}
    >

    </Frame>
  );
};

export default NewCustomerContainer;
