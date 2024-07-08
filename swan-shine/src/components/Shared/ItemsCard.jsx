import React from 'react'
import PropTypes from 'prop-types'
import '../Cart/CartPage.css'

const ItemsCard = ({ items, onRemoveItem, onUpdateQuantity }) => {
  return (
    <div className="items-card">
      {items.map((item) => (
        <div key={item.id} className="item-card">
          <img
            src={`https://via.placeholder.com/150?text=${item.title}`}
            alt={item.title}
          />
          <div className="item-details">
            <div className="item-header">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div className="item-footer">
              <p>Price: ${item.price.toFixed(2)}</p>
              <div className="quantity-control">
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button onClick={() => onRemoveItem(item.id)}>Remove</button>
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
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired
}

// ItemsCard.defaultProps = {
//   items: []
// }

export default ItemsCard
