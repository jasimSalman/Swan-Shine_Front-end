import React from 'react'
import './ItemDetailsPage.css'

const Rating = ({ rating }) => {
  return (
    <div className="rating-container">
      <h2>Rating</h2>
      <p>User rating goes here: {rating}</p>
    </div>
  )
}

export default Rating
