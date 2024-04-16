import React from 'react';

function BoxColor  ({ color, value })  {
  return (
    <div className={`box ${color}`}>
      <p>{inputValue}</p>
      <p>{inputValue === color ? 'Soy ese color' : 'No soy ese color'}</p>
    </div>
  );
};

export default BoxColor;