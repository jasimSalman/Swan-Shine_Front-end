import React from 'react'
// import './OrderCard.css'

const OrderCard = ({ orders }) => {
  return (
    <div className="order-card">
      {orders.map((order) => (
        <div key={order._id} className="order">
          <p>Total Price: {order.total_price}</p>
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
        </div>
      ))}
    </div>
  )
}

export default OrderCard
