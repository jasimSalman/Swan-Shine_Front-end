import React from 'react'
import './MyOrdersPage.css'

const OrderCard = ({ order }) => {
  return (
    <div className="order-card">
      <ul>
        {order.items.map((item) => (
          <li key={item.item._id} className="order-item">
            <img
              src={item.item.image}
              alt={item.item.name}
              className="item-image"
            />
            <p>{item.item.name}</p>
            <p>Quantity: {item.quantity}</p>
          </li>
        ))}
      </ul>
      <p className="total-price">
        Total Price: {order.total_price.toFixed(2)} BD
      </p>
    </div>
  )
}

export default OrderCard
