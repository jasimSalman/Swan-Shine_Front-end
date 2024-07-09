import React from 'react'
import OrderCard from './OrderCard'
import './MyOrdersPage.css'
import { BASE_URL } from '../../services/api'

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getShopOrders = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/user/shop/${shopId}/orders`
        )
        setOrders(response.data)
      } catch (err) {
        console.error('Error fetching orders', err)
      }
    }
    getShopOrders()
  }, [shopId])

  return (
    <div className="my-orders-page">
      <h1>My Orders</h1>
      <OrderCard orders={orders} />
    </div>
  )
}

export default MyOrdersPage
