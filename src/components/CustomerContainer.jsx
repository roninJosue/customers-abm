import React from 'react';
import {connect} from "react-redux";

import Frame from "./Frame";
import {useParams} from "react-router-dom";
import {getCustomersByDni} from "../selectors/customers";


const CustomerContainer = ({customer}) => {

  const {dni} =useParams()
  const currentCustomer = customer()(dni)
  return (
    <>
      <Frame
        header={`Customer ${dni}`}
        body={
          <p>Data customer {currentCustomer.name}</p>
        }
      >

      </Frame>
    </>
  );
};


const mapStateToProps = (state) => (
  {
    customer: () => {
      return function (dni){
        return getCustomersByDni(state, dni)
      }
    }
  }
)

export default connect(mapStateToProps, null)(CustomerContainer)
