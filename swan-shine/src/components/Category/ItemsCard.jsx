import React from 'react'
import PropTypes from 'prop-types'
import './CategoryPage.css'

const ItemsCard = ({ items }) => {
  return (
    <div className="items-grid">
      {items.map((item) => (
        <div key={item.id} className="items-card">
          <img src={item.image} alt={item.title} />
          <div className="item-details">
            <div className="item-header">
              <h2>{item.title}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

ItemsCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired
}

ItemsCard.defaultProps = {
  items: []
}

export default ItemsCard
