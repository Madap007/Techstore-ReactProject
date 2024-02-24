import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {ProductContext} from '../context/ProductContext'
import './Sidebar.css'


function Sidebar() {
  const value = useContext(ProductContext);
  const { links, sidebarOpen, handleSidebar, isLoggedIn, logout } = value;

  return (
    <div className={`side-wrapper ${sidebarOpen ? 'show' : ''}`}>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link
              to={link.path}
              className="sidebar-link"
              onClick={handleSidebar}
            >
              {link.text}
            </Link>
          </li>
        ))}
         <li>
          {isLoggedIn ? (
            <button className="sidebar-link" onClick={logout}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="sidebar-link" onClick={handleSidebar}>
              Login
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;