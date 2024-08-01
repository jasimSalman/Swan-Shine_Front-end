import React from 'react'
import ShopsCard from './ShopsCard'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../../services/api'
import './AllShopsPage.css'

const AllShopsPage = () => {
  const [shops, setShops] = useState([])

  useEffect(() => {
    GetAllShops()
  }, [])

  const GetAllShops = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/shop`)
      setShops(response.data)
    } catch (err) {
      console.error('Error fetching shops:', err)
    }
  }

  return (
    <div className="all-shops-page">
      <h1>All Shops</h1>
      <ShopsCard shops={shops} />
    </div>
  )
}
export default AllShopsPage
