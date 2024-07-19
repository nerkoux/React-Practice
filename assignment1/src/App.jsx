import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import ToggleFunc from './component/ToggleFunc'
import RoutingCheck from './component/RoutingCheck'
import UserList from './component/UserList'

const Funnt = () => (
  <>
    <h1>Welcome to the React Practice Webpage</h1>
    <marquee>Click on the navbar links to see all the functions</marquee>
  </>
)

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Funnt />} />
            <Route path="/routingcheck" element={<RoutingCheck />} />
            <Route path="/userlist" element={<UserList />} />
            <Route path="/togglefunc" element={<ToggleFunc />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App