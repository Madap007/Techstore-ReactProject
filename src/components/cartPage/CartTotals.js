import React, {useContext} from 'react'
import {ProductContext} from '../../context/ProductContext'

function CartTotals({history}) {
    const value = useContext(ProductContext);
  const { clearCart, cartSubTotal, cartTax, cartTotal } = value;

  return (
    <div className="container">
      <div className="row">
        <div className="col text-title text-center my-4">
          <button className="btn btn-outline-danger text-capitalize my-4" onClick={clearCart}>
            Clear Cart
          </button>
          <h3>Subtotal: Rs.{cartSubTotal}</h3>
          <h3>Tax: Rs.{cartTax}</h3>
          <h3>Total: Rs.{cartTotal}</h3>
        </div>
      </div>
    </div>
  )
}

export default CartTotals
