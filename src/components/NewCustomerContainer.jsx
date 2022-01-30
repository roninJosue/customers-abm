import React from 'react';
import Frame from "./Frame";
import CustomerEdit from "./CustomerEdit";
import {useNavigate} from "react-router-dom";

const NewCustomerContainer = () => {
  const navigate = useNavigate()

  const handleSubmit = () => {

  }

  const handleSubmitSuccess = () => {

  }

  const handleOnBack = () => {
    navigate(-1)
  }

  const renderBody = () => {
    return <CustomerEdit
      onSubmit={handleSubmit}
      obSubmitSuccess={handleSubmitSuccess}
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
