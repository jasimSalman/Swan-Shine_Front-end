import React from 'react'
import './ItemDetailsPage.css'

const Rating = ({ rating }) => {
  return (
    <div className="rating-container">
      <h2>Review</h2>
      <p>all reviews about the items and shop: {rating}</p>
    </div>
  )
}

export default Rating
