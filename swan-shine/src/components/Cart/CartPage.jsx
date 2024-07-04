import React from 'react'
import CartItemsCard from './CartItemsCard'
import './CartPage.css'

const CartPage = () => {
  return (
    <div className="cart-page">
      <h1>Cart</h1>
      <CartItemsCard />
    </div>
  )
}

export default CartPage
