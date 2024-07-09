import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Review from './Review'
import Rating from './Rating'
import ItemDetailsCard from './ItemDetailsCard'
import './ItemDetailsPage.css'

const BASE_URL = 'http://localhost:3001'

const ItemDetailsPage = () => {
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/items/show/${id}`)
        setItem(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching the item details:', error)
        setLoading(false)
      }
    }

    fetchItemDetails()
  }, [id])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!item) {
    return <div>Error loading item details</div>
  }

  return (
    <div className="item-details-page">
      <h1>Item Details</h1>
      <ItemDetailsCard item={item} />
      <Review reviews={item.reviews} />
      <Rating rating={item.rating} />
    </div>
  )
}

export default ItemDetailsPage
