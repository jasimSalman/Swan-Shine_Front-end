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
      setCartItems(res.data)
    } catch (err) {
      console.log('Error fetching items cart:', err)
    }
  }

  const updateCartItems = async () => {
    try {
      await Client.post(`${BASE_URL}/cart/${id}`, { items: cartItems })
    } catch (err) {
      console.log('Error updating items cart:', err)
    }
  }

  const checkOut = async () => {
    try {
      await Client.put(`${BASE_URL}/cart/checkout/${id}`)
    } catch (err) {
      console.log('Error updating items cart:', err)
    }
  }

  const removeItem = async (itemId) => {
    try {
      await Client.delete(`${BASE_URL}/cart/${id}/${itemId}`)
    } catch (err) {
      console.log('Error deleteing items cart:', err)
    }
  }

  useEffect(() => {
    getCartItems()
  }, [id])

  useEffect(() => {
    updateCartItems()
  }, [cartItems])

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item._id !== itemId))
    removeItem(itemId)
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
          <div className="cart-total">Total: ${totalPrice}</div>
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
