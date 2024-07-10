import React, { useEffect } from 'react'
import OrderCard from './OrderCard'
import './OwnerOrders.css'
import { BASE_URL } from '../../services/api'
import axios from 'axios'

const OwnerOrdersPage = () => {
  const shopId = localStorage.getItem('shopId')
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getShopOrders = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/users/shop/:shopId/orders`
        )
        setOrders(response.data)
      } catch (err) {
        console.error('Error fetching orders', err)
      }
    }
    getShopOrders()
  }, [shopId])

  return (
    <div className="owner-orders-page">
      <h1>All Shop's Orders</h1>
      <OrderCard orders={orders} />
    </div>
  )
}

export default OwnerOrdersPage
