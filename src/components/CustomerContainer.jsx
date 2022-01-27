import React from 'react';
import {useSelector} from "react-redux";

import Frame from "./Frame";
import {useLocation, useParams} from "react-router-dom";
import {getCustomersByDni} from "../selectors/customers";
import CustomerEdit from "./CustomerEdit";
import CustomerData from "./CustomerData";


const CustomerContainer = () => {

  const {pathname} = useLocation()
  const isEdit = pathname.includes('edit')

  const {dni} = useParams()
  const currentCustomer = useSelector(state => getCustomersByDni(state, dni))

  const renderBody = () => {
    const Customer = isEdit ? CustomerEdit : CustomerData
    return <Customer {...currentCustomer} />
  }

  return (
    <>
      <Frame
        header={`Customer ${dni}`}
        body={renderBody()}
      >

      </Frame>
    </>
  );
};


export default CustomerContainer
