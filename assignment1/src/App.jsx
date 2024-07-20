import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import ToggleFunc from './component/ToggleFunc'
import RoutingCheck from './component/RoutingCheck'
import UserList from './component/UserList'
import DataFetch from './component/DataFetch'
import Hooks from './component/Hooks'
import ContextAPI from './component/ContextAPI'
// import { ThemeContext } from './ContextAPI/ThemeContext'

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
            <Route path="/datafetch" element={<DataFetch />} />
            <Route path="/hooks" element={<Hooks />} />
            <Route path="/contextapi" element={<ContextAPI />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App