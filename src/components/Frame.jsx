import React from 'react';
import Header from "./Header";

const Frame = ({header, body}) => {
  return (
    <div className='frame'>
      <Header title={header} />
      <div>{body}</div>
      <div>Customer App</div>
    </div>
  );
};

export default Frame;
