import React from 'react';
import { Spinner as SpinnerItem } from 'react-bootstrap';

const Spinner = () => {
  return (
    <div className="text-center mb-5 my-5">
      <SpinnerItem
        animation="grow"
        style={{ width: '20rem', height: '20rem' }}
      />
    </div>
  );
};

export default Spinner;
