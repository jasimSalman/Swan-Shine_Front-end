import React from 'react'
import OrderCard from './OrderCard'
import './MyOrdersPage.css'
import Client, { BASE_URL } from '../../services/api'
import { useState, useEffect } from 'react'
import axios from 'axios'

const MyOrdersPage = () => {
  const userId = localStorage.getItem('userId')
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getShopOrders = async () => {
      try {
        const response = await Client.get(`${BASE_URL}/cart/orders/${userId}`)
        setOrders(response.data)
        console.log(response.data)
      } catch (err) {
        console.error('Error fetching orders', err)
      }
    }
    getShopOrders()
  }, [userId])

  return (
    <div className="my-orders-page">
      <h1>My Orders</h1>
      <OrderCard orders={orders} />
    </div>
  )
}

export default MyOrdersPage
