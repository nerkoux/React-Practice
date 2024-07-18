import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

const UseEffect = () => {
    const[count,setCount] = useState(0)
    const[countTwo,setCountTwo] = useState(0)

    useEffect(() => {
        alert(`Counter Increased by 1`)
    },[count])

    const handleIncrement = () => {
        setCount(count + 1)
    }
    const Increment = () => {
        setCountTwo(countTwo + 1)
    }
    
  return (
    <div className='incr'>
        <h1><p><font color="white">Count:{count}</font></p></h1>
        <button onClick={handleIncrement}>Increment</button>
        <h1><font color="white"><p>Count Two:{countTwo}</p></font></h1>
        <button onClick={Increment}>Increment Two</button>
    </div>
  )
}

export default UseEffect