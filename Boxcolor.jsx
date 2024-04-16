import React from 'react';

const BoxColor = ({ color, inputValue }) => {
  return (
    <div className={`box ${color}`}>
      <p>{inputValue}</p>
      <p>{inputValue === color ? 'Soy el color' : 'No soy el color'}</p>
    </div>
  );
};

export default BoxColor;