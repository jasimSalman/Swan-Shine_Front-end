import React from 'react'
// import PropTypes from 'prop-types'
import '../Cart/CartPage.css'

const CartItemsCard = ({ item, onRemoveItem, onUpdateQuantity }) => {
  return (
    <div className="items-card">
      <div key={item.item._id} className="item-card">
        <img src={item.item.image} alt={item.item.name} />
        <div className="item-details">
          <div className="item-header">
            <h2>{item.item.name}</h2>
          </div>
          <div className="item-footer">
            <p>Price: ${item.item.price}</p>
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
            <button onClick={() => onRemoveItem(item._id)}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItemsCard
