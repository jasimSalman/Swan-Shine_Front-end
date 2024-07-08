import React from 'react'
import PropTypes from 'prop-types'
import './CategoryPage.css'

const ItemsCard = ({ items }) => {
  return (
    <div className="items-grid">
      {items.map((item) => (
        <div key={item.id} className="items-card">
          <img
            src={`https://via.placeholder.com/300x200?text=${item.title}`}
            alt={item.title}
          />
          <div className="item-details">
            <div className="item-header">
              <h2>{item.title}</h2>
            </div>
            <p>{item.description}</p>
            <div className="item-footer">
              <p>Price: ${item.price.toFixed(2)}</p>
            </div>
          </div>
import './CategoryPage.css'

const items = [
  { id: 1, title: 'Item 1', description: 'Description of Item 1' },
  { id: 2, title: 'Item 2', description: 'Description of Item 2' },
  { id: 3, title: 'Item 3', description: 'Description of Item 3' }
]

const ItemsCard = () => {
  return (
    <div className="items-card">
      {items.map((item) => (
        <div key={item.id} className="item-card">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <button>Buy Now</button>
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
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired
}

ItemsCard.defaultProps = {
  items: []
}

export default ItemsCard
