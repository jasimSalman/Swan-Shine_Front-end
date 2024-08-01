import React, { useEffect, useState } from 'react'
import OrderCard from './OwnerOrderCard'
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
      <OrderCard orders={orders} />
    </div>
  )
}

export default OwnerOrdersPage
