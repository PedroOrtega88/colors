import React, { useState, useRef } from 'react';
import BoxColor from './BoxColor.jsx'; 


function MyForm() {
  const inputRef = useRef(''); 
  const [value, setValue] = useState('');
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];


  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <input 
        type="text" 
        placeholder="Escribe un color" 
        value={value} 
        ref={inputRef}
        onChange={() => setValue(inputRef.current.value)} 
      />
      
      <div className="container">
        {colors.map((color, index) => (
          <BoxColor key={index} color={color} inputValue={value} />
        ))}
      </div>
    </>
  );
}

export default MyForm;
