import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Review from './Review'
import Rating from './Rating'
import ItemDetailsCard from './ItemDetailsCard'
import './ItemDetailsPage.css'
import Client, { BASE_URL } from '../../services/api'

const ItemDetailsPage = () => {
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()
  const userId = localStorage.getItem('userId')

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

  useEffect(() => {
    fetchItemDetails()
  }, [id])

  const handleAddToCart = async (item) => {
    try {
      await Client.post(`${BASE_URL}/cart/${userId}`, {
        items: [{ item: item, quantity: 1 }]
      })
      navigate('/cart')
    } catch (error) {
      console.error('Error adding item to cart:', error)
    }
  }

  const handleAddReview = (review) => {
    setItem((prevItem) => ({
      ...prevItem,
      reviews: [...prevItem.reviews, review]
    }))
    setIsReviewModalOpen(false)
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
        onAddReview={() => setIsReviewModalOpen(true)}
      />
      <Review
        isOpen={isReviewModalOpen}
        onRequestClose={() => setIsReviewModalOpen(false)}
        itemId={id}
        onReviewSubmitted={handleAddReview}
      />
      <Rating rating={item.rating} />
    </div>
  )
}

export default ItemDetailsPage
