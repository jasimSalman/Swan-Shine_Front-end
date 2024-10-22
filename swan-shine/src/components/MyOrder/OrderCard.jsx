import React, { useState } from 'react'
import './MyOrdersPage.css'

const OrderCard = ({ order }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState('')

  const handleImageClick = (image) => {
    setModalImage(image)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      {/* <h2>{order.user.username}</h2> */}
      <div className="order-card">
        <ul className="order-details">
          {order.items.map((item) => (
            <li key={item.item._id} className="order-item">
              <img
                src={item.item.image}
                alt={item.item.name}
                className="item-image"
                onClick={() => handleImageClick(item.item.image)}
              />
              <div className="order-item-details">
                <p>{item.item.name}</p>
                <p>Price {item.item.price} BD</p>
                <p>Quantity {item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="order-card-footer-details">
          <p>Total Price: {order.total_price} DB</p>
          <p>
            Ordered Date: {new Date(order.date).toLocaleDateString()} at{' '}
            {new Date(order.date).toLocaleTimeString()}
          </p>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <span className="close" onClick={handleCloseModal}>
            &times;
          </span>
          <div className="modal-content">
            <img src={modalImage} alt="Expanded view" />
          </div>
        </div>
      )}
    </div>
  )
}

export default OrderCard
