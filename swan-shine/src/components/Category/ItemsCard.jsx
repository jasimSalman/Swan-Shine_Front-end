import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import './CategoryPage.css'

const ItemsCard = ({ items }) => {
  const navigate = useNavigate()

  const handleCardClick = (id) => {
    navigate(`/item-details/${id}`)
  }

  return (
    <div className="items-grid">
      {items.map((item) => (
        <div
          key={item._id}
          className="item-card"
          onClick={() => handleCardClick(item._id)}
        >
          <img src={item.image} alt={item.title} />
          <div className="item-details">
            <h2>{item.title}</h2>
            <p>${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

ItemsCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired
}

ItemsCard.defaultProps = {
  items: []
}

export default ItemsCard
