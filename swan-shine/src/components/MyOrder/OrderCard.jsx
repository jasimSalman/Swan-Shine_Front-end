import React from 'react'
import './MyOrdersPage.css'

const OrderCard = ({ order }) => {
  return (
    <div className="order-card">
      <h2>{order.user.username}</h2>
      <p>Total Price: {order.total_price}</p>
      <ul>
        {order.items.map((item) => (
          <li key={item.item._id}>
            <p>{item.item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>{item.date}</p>
            <img
              src={item.item.image}
              alt={item.item.name}
              className="item-image"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OrderCard
