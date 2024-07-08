import React, { useState } from 'react'
import './CartPage.css'
import ItemsCard from '../Shared/ItemsCard'

const CartPage = () => {
  const initialItems = [
    {
      id: 1,
      title: 'Gold Necklace',
      description:
        'Really huge description to show case my css cause I can and will flex my css the second i have a chance to do so and no one can stop me now :D',
      price: 29.99,
      quantity: 1
    },
    {
      id: 2,
      title: 'Item 2',
      description: 'Description of Item 2',
      price: 49.99,
      quantity: 2
    },
    {
      id: 3,
      title: 'Item 3',
      description: 'Description of Item 3',
      price: 19.99,
      quantity: 1
    }
  ]

  const [items, setItems] = useState(initialItems)

  const handleRemoveItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId))
  }

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return
    setItems(
      items.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      <ItemsCard
        items={items}
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
      />
      <div className="cart-total">Total: ${totalPrice.toFixed(2)}</div>
      <div className="cart-checkout">
        <button>Proceed to Checkout</button>
      </div>
    </div>
  )
}

export default CartPage
