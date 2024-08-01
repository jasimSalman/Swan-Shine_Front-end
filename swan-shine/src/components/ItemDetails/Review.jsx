import React, { useState } from 'react'
import Modal from 'react-modal'
import './Review.css'
import Client from '../../services/api'

const Review = ({ isOpen, onRequestClose, itemId, onReviewSubmitted }) => {
  const userId = localStorage.getItem('userId')
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')

  const handleStarClick = (index) => {
    setRating(index + 1)
  }

  const handleSubmit = async () => {
    try {
      const response = await Client.post(`/items/${itemId}/reviews/${userId}`, {
        review: review.toString(),
        rating: rating,
        userId: userId
      })
      onReviewSubmitted(response.data)
      setRating(0)
      setReview('')
      onRequestClose()
    } catch (error) {
      console.error('Error submitting review:', error)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      className="modal"
    >
      <h2>Add a Review</h2>

      <div className="stars">
        {[...Array(5)].map((star, index) => (
          <span
            key={index}
            className={`star ${index < rating ? 'filled' : ''}`}
            onClick={() => handleStarClick(index)}
          >
            &#9733;
          </span>
        ))}
      </div>

      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review here"
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>
    </Modal>
  )
}

export default Review
