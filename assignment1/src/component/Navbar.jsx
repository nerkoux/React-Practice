import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Akshat Mehta
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Functional Components</Link>
          </li>
          <li className="nav-item">
            <Link to="/routingcheck" className="nav-link">Routing Check</Link>
            <Link to="/userlist" className="nav-link">User List</Link>

          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar