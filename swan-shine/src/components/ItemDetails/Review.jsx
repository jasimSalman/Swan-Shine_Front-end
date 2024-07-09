import React from 'react'
import './ItemDetailsPage.css'

const Review = ({ reviews }) => {
  return (
    <div className="reviews-container">
      <h2>Reviews</h2>
      {reviews.map((review, index) => (
        <p key={index}>{review}</p>
      ))}
    </div>
  )
}

export default Review
