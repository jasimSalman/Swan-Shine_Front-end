import React, { useState, useEffect } from 'react'
import './CartPage.css'
import CartItemsCard from '../Cart/CartItemsCard'
import Client from '../../services/api'
import { BASE_URL } from '../../services/api'

const CartPage = () => {
  const id = localStorage.getItem('userId')

  const [cartItems, setCartItems] = useState([])

  const getCartItems = async () => {
    try {
      const res = await Client.get(`${BASE_URL}/cart/${id}`)
      console.log(res.data)
      setCartItems(res.data)
    } catch (err) {
      console.log('Error fetching items cart:', err)
    }
  }

  useEffect(() => {
    getCartItems()
  }, [id])

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item._id !== itemId))
  }

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems(
      cartItems.map((item) =>
        item._id === itemId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.item.price * item.quantity,
    0
  )

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {cartItems.map((item) => (
        <CartItemsCard
          key={item._id}
          item={item}
          onRemoveItem={handleRemoveItem}
          onUpdateQuantity={handleUpdateQuantity}
        />
      ))}
      <div className="cart-total">Total: ${totalPrice}</div>
      <div className="cart-checkout">
        <button>Proceed to Checkout</button>
      </div>
    </div>
  )
}

export default CartPage
