import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from "./CustomerListItem";

const CustomersList = ({customers, urlPath}) => {
  return (
    <div>
      <div className="customers-list">
        {customers.map((customer) => (
          <CustomerListItem
            key={customer.id}
            dni={customer.dni}
            urlPath={urlPath}
            editAction='Edit'
            name={customer.name}
            delAction='Delete'
          />
        ))}
      </div>
    </div>
  );
};

CustomersList.propTypes = {
  customers: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired
};

export default CustomersList;
