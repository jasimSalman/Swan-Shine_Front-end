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
    <div className="item-details-card-details">
      {userType === 'owner' && (
        <>
          <button onClick={removeItem}>Remove Item</button>
          <Link to={`/edit/${item._id}`}>
            <button>update Item</button>
          </Link>
        </>
      )}

      <img src={item.image} alt={item.name} className="item-details-image" />
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
