import React from 'react'
import PropTypes from 'prop-types'
import './CategoryPage.css'

const ItemsCard = ({ items }) => {
  console.log('ItemsCard received items:', items)
  return (
    <div className="items-grid">
      {items.map((item) => (
        <div key={item._id} className="item-card">
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
