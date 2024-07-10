import React from 'react'
// import './OrderCard.css'

const OrderCard = ({ orders }) => {
  return (
    <div className="order-card">
      {orders.map((order) => (
        <div key={order._id} className="order">
          <img
            src={order.items[0].item.image}
            alt={order.items[0].item.name}
            className="item-image"
          />
          <h2>{order.user.username}</h2>
          <p>Total Price: {order.total_price}</p>
          <ul>
            {order.items.map((item) => (
              <li key={item.item._id}>
                <p>{item.item.name}</p>
                <p>Quantity:{item.quantity}</p>
                <p>{item.date}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default OrderCard
