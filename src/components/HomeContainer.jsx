import React from 'react';
import PropTypes from 'prop-types';
import {Link, useNavigate} from "react-router-dom";
import Frame from "./Frame";
import CustomersActions from "./CustomersActions";

const HomeContainer = props => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('customers/')
  }
  return (
    <div>
     <Frame
       header='Home'
       body={<div>
         Initial screen
         <CustomersActions>
           <button onClick={handleClick}>Customers List</button>
           <Link to='/customers' >Customers list</Link>
         </CustomersActions>
       </div>}
     >

     </Frame>
    </div>
  );
};

HomeContainer.propTypes = {
  
};

export default HomeContainer;
