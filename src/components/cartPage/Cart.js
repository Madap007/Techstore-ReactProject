import React from 'react'
import Title from '../title'
import CartColoumns from './CartColumns'
import CartList from './CartList'
import CartTotals from './CartTotals'

function Cart({history}) {
    return (
        <section className="py-5">
            {/* title */}
            <div className="container">
                <Title title="your cart items" center></Title>

            </div>
        {/* cart coloumns */}

            <CartColoumns></CartColoumns>
            {/* cart lists */}

            <CartList></CartList>
            {/* cart total */}
            <CartTotals history={history}></CartTotals>
        </section>
    )
}

export default Cart
