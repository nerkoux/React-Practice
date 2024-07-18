import React, { useState } from 'react';
import './App.css';

function UseState() {
  const [count, setCount] = useState(0);
  console.log(count);

  const handleDecrement=()=>{
    setCount(count-1);
  }

  const handleIncrement=()=>{
    setCount(count+1);
  }

  return (
    <div className='incr'>
      <h1>Count:{count}</h1>
      <button onClick={handleDecrement}><p><font color="black">Decrement</font></p></button>
      <button onClick={handleIncrement}><p><font color="black">Increment</font></p></button>
    </div>
  );
}

export default UseState;