import React from 'react';

function Spinner() {
  return (
    <div className="text-center mb-5 my-5">
      <div
        className="spinner-border"
        style={{ width: '20rem', height: '20rem' }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
