import React, {useContext} from 'react'
import { ProductContext } from '../../context/ProductContext'
import CartItem from './CartItem'


function CartList() {
    console.log("carlist start");
  
  const value = useContext(ProductContext);
  const { cart, increment, decrement, removeItem } = value;

  return (
    <div className="container-fluid">
      {/* row */}
      <div className="row">
        <div className="col">
          {cart.length === 0 ? (
            <h1 className="text-title text-center my-4">Your cart is Currently Empty</h1>
          ) : (
            <>
              {cart.map((item) => (
                <CartItem key={item.id} increment={increment} decrement={decrement} cartItem={item} removeItem={removeItem} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartList
