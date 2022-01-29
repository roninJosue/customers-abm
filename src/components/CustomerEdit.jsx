import React from 'react';
import {Field, reduxForm} from "redux-form";
import {setPropsAsInitial} from "../helpers/setPropsAsInitial";

const isRequired = value => (
  !value && 'Field is required'
)

const isNumber = value => (
  isNaN(Number(value)) && 'Field must be a number '
)

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

const CustomerEdit = () => {
  return (
    <div>
      <h2>Customer Edit</h2>
      <form action="">
        <Field
          name='name'
          component={MyField}
          type='text'
          validate={isRequired}
          label='Name'
        />
        <Field
          name='dni'
          component={MyField}
          type='text'
          validate={[isRequired, isNumber]}
          label='DNI'
        />
        <Field
          name='age'
          component={MyField}
          type='number'
          validate={isNumber}
          label='Age'
        />
      </form>
    </div>
  );
};

const CustomerEditForm = reduxForm({form: 'CustomerEdit'})(CustomerEdit)

export default setPropsAsInitial(CustomerEditForm)
