import React from 'react'
import ToggleFunc from './component/ToggleFunc'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import About from './component/About'

const Home = () => (
  <>
    <h1>Home</h1>
    <ToggleFunc />
  </>
)


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    </Routes>  {/* Above, we use Routes component to wrap all our routes */}
    </BrowserRouter>
    </>
  )
}

export default App