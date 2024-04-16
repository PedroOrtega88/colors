import React, { useState,useRef, } from 'react';
import BoxColor from '/BoxColor'; 
import { colors } from '../colors'; 



useEffect(() =>{

  preview.BoxColor.current = color;

}[ colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];]
 
const MyFormChallenge = () => {



  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.current);
  };



  return (
    <div>
      <input type="text" placeholder="Escribe un color" value={inputValue} onChange={handleChange} />
      <div className="box-container">
        {colors.map((color, index) => (
          <BoxColor key={index} color={color} inputValue={inputValue} />
        ))}
      </div>
    </div>
  );
};

export default MyFormChallenge;

