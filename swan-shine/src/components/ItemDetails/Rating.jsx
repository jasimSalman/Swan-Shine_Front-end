// Rating.jsx
import React from 'react'

const Rating = ({ rating }) => {
  const stars = [...Array(rating)].map((_, index) => (
    <span key={index}>&#9733;</span>
  ))

  return <div className="rating">{stars}</div>
}

export default Rating
