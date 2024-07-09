import React from 'react'
// import './OrderCard.css'

const OrderCard = ({ orders }) => {
  return (
    <div className="order-card">
      {orders.map((order) => (
        <div key={order._id} className="order">
          <img src={shop.poster} alt={shop.name} className="shop-image" />
          <h2>{order.name}</h2>
          <p>Category: {shop.category}</p>
        </div>
      ))}

      <h2>Order</h2>
      <p>Details about the order go here.</p>
    </div>
  )
}

export default OrderCard
