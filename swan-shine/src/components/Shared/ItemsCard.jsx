import React from 'react'
// import PropTypes from 'prop-types'
import '../Cart/CartPage.css'

const ItemsCard = ({ items }) => {
  return (
    <div className="items-card">
      {items.map((item) => (
        <div key={item._id} className="item-card">
          <img src={item.image} alt={item.name} />
          <div className="item-details">
            <div className="item-header">
              <h2>{item.name}</h2>
            </div>
            <div className="item-footer">
              <p>Price: ${item.price.toFixed(2)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// ItemsCard.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       quantity: PropTypes.number.isRequired
//     })
//   ).isRequired,
//   onRemoveItem: PropTypes.func.isRequired,
//   onUpdateQuantity: PropTypes.func.isRequired
// }

// ItemsCard.defaultProps = {
//   items: []
// }

export default ItemsCard
