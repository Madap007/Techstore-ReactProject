
import React from 'react'
import { FaBars, FaCartPlus } from 'react-icons/fa'
import { ProductContext } from '../context/ProductContext'
import { useContext } from 'react'
import './Navbar.css'
function Navbar() {
  const value = useContext(ProductContext);
  const {  cartItems,  handleSidebar, handleCart, username, isLoggedIn } = value
  return (
    <nav className="NavWrapper">
      <div className="nav-center">
        <FaBars className="nav-icon" onClick={handleSidebar} />
        <h1 className="logo">TechVerse</h1>
        <div className="nav-cart">
          <FaCartPlus className="nav-icon " onClick={handleCart} />
          <div className="cart-items mr-3">{cartItems}</div>
          {isLoggedIn ? (
          <p className="username" style={{textAlign:"right"}}>{`Welcome, ${username}`}</p>
        ) : (
          <p className="username">Guest</p>
        )}
        </div>
       
        
      </div>
      

    </nav>
  )

}
export default Navbar
