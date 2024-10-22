import React from 'react'
import '../Cart/CartPage.css'

const CartItemsCard = ({ item, onRemoveItem, onUpdateQuantity }) => {
  return (
    <div className="cart-items-card">
      <div key={item.item._id} className="cart-item-card">
        <img src={item.item.image} alt={item.item.name} />
        <div className="cart-item-details">
          <div className="cart-item-header">
            <h2>{item.item.name}</h2>
          </div>
          <div className="cart-item-footer">
            <p>Price: {item.item.price} BHD</p>
            <div className="quantity-control">
              <button
                onClick={() => onUpdateQuantity(item._id, item.quantity - 1)}
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() => onUpdateQuantity(item._id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <button onClick={() => onRemoveItem(item.item._id)}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItemsCard
