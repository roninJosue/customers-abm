import React from 'react';
import {Field, reduxForm} from "redux-form";
import PropTypes from 'prop-types';

const CustomerEdit = ({name, dni, age}) => {
  return (
    <div>
      <h2>Customer Edit</h2>
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <Field name='name' component='input' type='text'/>
        </div>
        <div>
          <label htmlFor="dni">DNI</label>
          <Field name='dni' component='input' type='text'/>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <Field name='age' component='input' type='number'/>
        </div>
      </form>
    </div>
  );
};

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number
};

export default reduxForm({form: 'CustomerEdit'})(CustomerEdit);
