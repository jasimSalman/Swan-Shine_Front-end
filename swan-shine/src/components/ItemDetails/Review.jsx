import React, { useState } from 'react'
import Modal from 'react-modal'
import './Review.css'

const Review = ({ isOpen, onRequestClose, onSubmitReview }) => {
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')

  const handleStarClick = (index) => {
    setRating(index + 1)
  }

  const handleSubmit = () => {
    onSubmitReview({ rating, review })
    setRating(0)
    setReview('')
    onRequestClose()
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
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review here"
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>
    </Modal>
  )
}

export default Review
