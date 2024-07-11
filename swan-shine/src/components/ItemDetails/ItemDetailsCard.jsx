import React, { useState } from 'react'
import Review from './Review'
import './ItemDetailsPage.css'
import Client, { BASE_URL } from '../../services/api'

const ItemDetailsCard = ({ item, onAddToCart, onAddReview }) => {
  const userType = localStorage.getItem('userType')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmitReview = (review) => {
    onAddReview(review)
    setIsModalOpen(false)
  }
  const removeItem = async () => {
    try {
      await Client.delete(`${BASE_URL}/items/${item._id}`)
    } catch (error) {
      console.error('Failed to remove item:', error)
    }
  }

  return (
    <div className="item-details-card">
      {userType === 'owner' && (
        <button onClick={removeItem}>Remove Item</button>
      )}

      <img src={item.image} alt={item.name} className="item-image" />
      <h2>{item.name}</h2>
      <p>Stock: {item.stock}</p>
      <p>Price: ${item.price}</p>
      {userType === 'user' && (
        <div>
          <button onClick={() => onAddToCart(item)}>Add to Cart</button>
          <button onClick={handleOpenModal}>Add Reviews</button>
        </div>
      )}

      <Review
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        itemId={item._id}
        onReviewSubmitted={handleSubmitReview}
      />
    </div>
  )
}

export default ItemDetailsCard
