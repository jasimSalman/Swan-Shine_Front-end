import React, { useEffect, useState } from 'react'
import OrderCard from '../MyOrder/OrderCard'
import './OwnerOrders.css'
import Client from '../../services/api'

const OwnerOrdersPage = () => {
  const shopId = localStorage.getItem('shopId')
  const [orders, setOrders] = useState([])

  useEffect(() => {
    getShopOrders()
  }, [shopId])

  const getShopOrders = async () => {
    try {
      const response = await Client.get(`/users/shop/orders/${shopId}`)
      setOrders(response.data)
    } catch (err) {
      console.error('Error fetching orders', err)
    }
  }

  return (
    <div className="owner-orders-page">
      <h1>All Shop's Orders</h1>
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

export default OwnerOrdersPage
