import React, { useState } from 'react'
import Review from './Review'
import './ItemDetailsPage.css'

const ItemDetailsCard = ({ item, onAddToCart, onAddReview }) => {
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

  return (
    <div className="item-details-card">
      <img src={item.image} alt={item.name} className="item-image" />
      <h2>{item.name}</h2>
      <p>Category: {item.category.name}</p>
      <p>Price: ${item.price}</p>
      <button onClick={() => onAddToCart(item)}>Add to Cart</button>
      <button onClick={handleOpenModal}>Add Reviews</button>

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
