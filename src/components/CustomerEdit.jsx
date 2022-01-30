import React from 'react';
import {Field, reduxForm} from "redux-form";
import {setPropsAsInitial} from "../helpers/setPropsAsInitial";
import CustomersActions from "./CustomersActions";

const isRequired = value => (
  !value && 'Field is required'
)

const isNumber = value => {
  return isNaN(Number(value)) && 'Field must be a number '
}

const validate = (values) => {
  const error = {}

  if (!values.name) {
    error.name = 'Name is required'
  }

  if (!values.dni) {
    error.dni = 'DNI is required'
  }

  return error
}

const toNumber = value => value && Number(value)
const toUpper = value => value && value.toUpperCase()
const toLower = value => value && value.toLowerCase()
const onlyGrow = (value, prev, values) => value && prev && (value > prev ? value : prev)

const MyField = ({input, meta, type, label, name}) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input {...input} type={!type ? 'text' : type}/>
    {
      meta.touched &&
      meta.error &&
      <span>{meta.error}</span>
    }
  </div>
)

const CustomerEdit = ({handleSubmit, submitting, onBack}) => {
  console.count('Test')
  return (
    <div>
      <h2>Customer Edit</h2>
      <form onSubmit={handleSubmit}>
        <Field
          name='name'
          component={MyField}
          type='text'
          label='Name'
          parse={toUpper}
          format={toLower}
        />
        <Field
          name='dni'
          component={MyField}
          type='text'
          label='DNI'
        />
        <Field
          name='age'
          component={MyField}
          type='number'
          validate={isNumber}
          label='Age'
          parse={toNumber}
          normalize={onlyGrow}
        />
        <CustomersActions>
          <button type='submit' disabled={submitting}>Submit</button>
          <button type='button' onClick={onBack}>Cancel</button>
        </CustomersActions>
      </form>
    </div>
  );
};

const CustomerEditForm = reduxForm(
  {
    form: 'CustomerEdit',
    validate,
  }
)(CustomerEdit)

export default setPropsAsInitial(CustomerEditForm)
