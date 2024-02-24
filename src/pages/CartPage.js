import React from 'react'
import CartSection from '../components/cartPage'
import Hero from '../components/Hero'
import CartBcg from '../images/storeBcg.jpeg'

function CartPage(props) {
    console.log(props)
    return (
        <>
            <Hero img={CartBcg}></Hero>
            <CartSection history={props.history}></CartSection>
        </>
    )
}

export default CartPage
