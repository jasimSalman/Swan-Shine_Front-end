import React, { useState } from 'react'
import Review from './Review'
import './ItemDetailsPage.css'
import Client from '../../services/api'
import { Link } from 'react-router-dom'

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
      await Client.delete(`/items/${item._id}`)
    } catch (error) {
      console.error('Failed to remove item:', error)
    }
  }

  return (
    <div className="item-details-card-container">
      <div className="item-card-details">
        <img src={item.image} alt={item.name} className="item-details-image" />
        <div className="inner-details">
          <h2>{item.name}</h2>
          <p>Stock: {item.stock}</p>
          <p>Price: {item.price} BD</p>
        </div>
      </div>

      {userType === 'user' && (
        <div className="item-user-buttons">
          <button onClick={() => onAddToCart(item)}>Add to Cart</button>
          <button onClick={handleOpenModal}>Add Reviews</button>
        </div>
      )}

      {userType === 'owner' && (
        <div className="item-owner-buttons">
          <button onClick={removeItem} className="inner-button">
            Remove Item
          </button>
          <Link to={`/edit/${item._id}`} className="inner-button">
            update Item
          </Link>
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
