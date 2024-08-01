import React from 'react'
import './OwnerOrders.css'

const OrderCard = ({ orders }) => {
  return (
    <div className="order-card">
      {orders.map((order) => (
        <div key={order._id} className="order">
          <ul>
            {order.items.map((item) => (
              <li key={item.item._id}>
                <img src={item.item.image} alt="" />
                <p>{item.item.name}</p>
                <p>Quantity:{item.quantity} </p>
              </li>
            ))}
          </ul>
          <p>Total Price: {order.total_price}</p>
        </div>
      ))}
    </div>
  )
}

export default OrderCard
