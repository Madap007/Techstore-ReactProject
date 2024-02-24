import React, {useContext} from 'react'
import {ProductContext} from '../context/ProductContext'
import {Link} from 'react-router-dom'
import './Sidecart.css'



function Sidecart() {
  const value = useContext(ProductContext);
  const { cartOpen, closeCart, cart, cartTotal } = value;
  console.log(cart)
  
  return (
    <div className={`cart-wrapper ${cartOpen ? 'show' : ''}`} onClick={closeCart}>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-item mb-4">
            <img width="35px" src={item.image} alt="cart item" />
            <div className="mt-3">
              <h6 className="text-uppercase">{item.title}</h6>
              <h6 className="text-title text-capitalize">Amount: {item.count}</h6>
            </div>
          </li>
        ))}
      </ul>
      <h4 className="text-capitalize text-main">Cart Total: Rs.{cartTotal} </h4>
      <div className="text-center my-5">
        <Link to="/cart" className="main-link">
          Cart Page
        </Link>
      </div>
    </div>
  );
}

export default Sidecart;