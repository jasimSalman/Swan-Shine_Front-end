import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CartItemsCard from '../Cart/CartItemsCard'
import Client from '../../services/api'
import './CartPage.css'

const CartPage = () => {
  const userId = localStorage.getItem('userId')
  const navigate = useNavigate()

  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    getCartItems()
  }, [userId])

  useEffect(() => {
    updateCartItems()
  }, [cartItems])

  const getCartItems = async () => {
    try {
      const res = await Client.get(`/cart/${userId}`)
      setCartItems(res.data)
    } catch (err) {
      console.log('Error fetching items cart:', err)
    }
  }

  const updateCartItems = async () => {
    try {
      await Client.post(`/cart/${userId}`, { items: cartItems })
    } catch (err) {
      console.log('Error updating items cart:', err)
    }
  }

  const checkOut = async () => {
    try {
      const res = await Client.put(`/cart/checkout/${userId}`)
      if (res) {
        navigate('/orders')
      }
    } catch (err) {
      console.log('Error updating items cart:', err)
    }
  }

  const removeItem = async (itemId) => {
    try {
      await Client.delete(`/cart/${userId}/${itemId}`)
    } catch (err) {
      console.log('Error deleteing items cart:', err)
    }
  }

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.item._id !== itemId))
    removeItem(itemId)
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
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <CartItemsCard
              key={item._id}
              item={item}
              onRemoveItem={handleRemoveItem}
              onUpdateQuantity={handleUpdateQuantity}
            />
          ))}

          <div className="cart-total">Total: {totalPrice} BHD</div>
          <div className="cart-checkout">
            <button onClick={checkOut}>Proceed to Checkout</button>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  )
}

export default CartPage
