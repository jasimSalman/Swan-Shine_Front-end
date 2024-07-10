import React from 'react'
import './OwnerOrders.css'
import MyOrdersPage from '../MyOrder/MyOrdersPage'

const OrderCard = () => {
  return (
    <div className="order-card">
      {MyOrdersPage.map((order) => (
        <div key={order._id} className="order">
          <img
            src={order.items[0].item.image}
            alt={order.items[0].item.image}
            className="item-image"
          />
          <p>Total Price: {order.total_price}</p>
          <ul>
            {order.items.map((item) => (
              <li key={item.item._id}>
                <p>{item.item.name}</p>
                <p>Quantity:{item.quantity} </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default OrderCard
