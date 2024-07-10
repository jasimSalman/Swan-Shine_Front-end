import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Review from './Review'
import Rating from './Rating'
import ItemDetailsCard from './ItemDetailsCard'
import './ItemDetailsPage.css'
import { BASE_URL } from '../../services/api'

const ItemDetailsPage = () => {
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  const navigate = useNavigate()

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

  const handleAddToCart = async (item) => {
    try {
      const userId = localStorage.getItem('userId')
      await Client.post(`${BASE_URL}/cart/${userId}`, {
        items: [{ item: item._id, quantity: 1 }]
      })
      navigate('/cart')
    } catch (error) {
      console.error('Error adding item to cart:', error)
    }
  }

  const handleAddReview = (review) => {
    // تحديث حالة العنصر ليتم عرض الريفيو الجديد بعد إضافته
    setItem((prevItem) => ({
      ...prevItem,
      reviews: [...prevItem.reviews, review] // إضافة الريفيو الجديد إلى قائمة الريفيوهات
    }))
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (!item) {
    return <div>Error loading item details</div>
  }

  return (
    <div className="item-details-page">
      <h1>Item Details</h1>
      <ItemDetailsCard
        item={item}
        onAddToCart={handleAddToCart}
        onAddReview={handleAddReview}
        الريفيو
      />

      <Review reviews={item.reviews} />
      <Rating rating={item.rating} />
    </div>
  )
}

export default ItemDetailsPage
