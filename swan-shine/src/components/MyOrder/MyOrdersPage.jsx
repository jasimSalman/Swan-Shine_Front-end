import React from 'react'
import OrderCard from './OrderCard'
import './MyOrdersPage.css'

const MyOrdersPage = () => {
  return (
    <div className="my-orders-page">
      <h1>My Orders</h1>
      <OrderCard />
    </div>
  )
}

export default MyOrdersPage
