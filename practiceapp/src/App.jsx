import React from 'react'
import './App.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
// import setBodyColor from './setBodyColor.jsx'
// import Greetings from "./Greetings.jsx"
import UseState from "./UseState.jsx"
// import ChildComponent from './Components/ChildComponent'
// import data from ''
import UseEffect from './UseEffect.jsx'

const App = () => {
   // setBodyColor({color: "#000000"})
  return (
    <>
    <div className='Container'>
    <Home />
    <About />
    <Contact />
    </div>
    {/* <Greetings name="Akshat" /> */}
    <div><h1><font color="white">Hey there 👋, Welcome to the React Tutorial</font></h1></div>
    <div className='box'></div>
    <h1><font color="white">This is the UseState Function</font></h1>
    <UseState />
    <h1><font color="white">This is the UseEffect Function</font></h1>

    <UseEffect />
    </>
  )
}

export default App;
