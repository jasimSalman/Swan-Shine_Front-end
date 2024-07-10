import React, { useState } from 'react'
import Modal from 'react-modal'
import './Review.css'
import Client, { BASE_URL } from '../../services/api'

const Review = ({ isOpen, onRequestClose, itemId, onReviewSubmitted }) => {
  const [rating, setRating] = useState(0)
  const [content, setContent] = useState('')
  const userId = localStorage.getItem('userId')

  const handleStarClick = (index) => {
    setRating(index + 1)
  }

  const handleSubmit = async () => {
    const newReview = { content: content.toString(), rating: rating }
    console.log('Submitting review:', newReview)

    try {
      const response = await Client.post(
        `${BASE_URL}/items/${itemId}/reviews/${userId}`,
        {
          content: content.toString(),
          rating: rating,
          userId: userId
        }
      )

      onReviewSubmitted(response.data)
      setRating(0)
      setContent('')
      onRequestClose()
    } catch (error) {
      console.error('Error submitting review:', error)
    }
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal">
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
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your review here"
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>
    </Modal>
  )
}

export default Review
