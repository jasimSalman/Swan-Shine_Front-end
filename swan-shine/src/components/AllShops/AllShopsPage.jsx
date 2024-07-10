import React from 'react'
import ShopsCard from './ShopsCard'
import Map from './Map'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './AllShopsPage.css'
import { BASE_URL } from '../../services/api'

const AllShopsPage = () => {
  const [shops, setShops] = useState([])

  useEffect(() => {
    const GetAllShops = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/shop`)
        setShops(response.data)
      } catch (err) {
        console.error('Error fetching shops:', err)
      }
    }
    GetAllShops()
  }, [])

  return (
    <div className="all-shops-page">
      <h1>All Shops</h1>

      <ShopsCard shops={shops} />
      <Map />
    </div>
  )
}
export default AllShopsPage
