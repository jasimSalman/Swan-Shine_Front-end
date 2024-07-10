// Review.jsx
import React, { useState } from 'react'
import Modal from 'react-modal'
import './Review.css'
import Client, { BASE_URL } from '../../services/api'

const Review = ({ isOpen, onRequestClose, itemId, onReviewSubmitted }) => {
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')
  const userId = localStorage.getItem('userId')

  const handleStarClick = (index) => {
    // Set the rating based on star index (index + 1)
    setRating(index + 1)
  }

  const handleSubmit = async () => {
    const newReview = { review: review.toString(), rating: rating }
    console.log('Submitting review:', newReview)

    try {
      const response = await Client.post(
        `${BASE_URL}/items/${itemId}/reviews/${userId}`,
        {
          review: review.toString(),
          rating: rating,
          userId: userId
        }
      )

      // Callback function when review is submitted successfully
      onReviewSubmitted(response.data)

      // Reset state after submission
      setRating(0)
      setReview('')

      // Close the modal after submission
      onRequestClose()
    } catch (error) {
      console.error('Error submitting review:', error)
    }
  }

  // Render the modal with star ratings, review textarea, and submit button
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal">
      <h2>Add a Review</h2>
      {/* Display stars based on rating */}
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
      {/* Textarea for writing the review */}
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review here"
      ></textarea>
      {/* Button to submit the review */}
      <button onClick={handleSubmit}>Submit</button>
    </Modal>
  )
}

export default Review
