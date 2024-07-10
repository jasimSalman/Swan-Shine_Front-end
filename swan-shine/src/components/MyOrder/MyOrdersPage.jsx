import React, { useState, useEffect } from 'react'
import OrderCard from './OrderCard'
import './MyOrdersPage.css'
import Client, { BASE_URL } from '../../services/api'

const MyOrdersPage = () => {
  const userId = localStorage.getItem('userId')
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getShopOrders = async () => {
      try {
        const response = await Client.get(`${BASE_URL}/cart/orders/${userId}`)
        setOrders(response.data)
      } catch (err) {
        console.error('Error fetching orders', err)
      }
    }
    getShopOrders()
  }, [userId])

  return (
    <div className="my-orders-page">
      <h1>My Orders</h1>
      {orders.length > 0 ? (
        orders
          .filter((order) => order.items.length > 0)
          .map((order) => <OrderCard key={order._id} order={order} />)
      ) : (
        <p>You have no orders yet.</p>
      )}
    </div>
  )
}

export default MyOrdersPage
