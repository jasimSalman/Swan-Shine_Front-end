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
    <div className="order-card">
      <h2>{order.user.username}</h2>
      <p>Total Price: {order.total_price}</p>
      <ul>
        {order.items.map((item) => (
          <li key={item.item._id}>
            <div className="order-item">
              <img
                src={item.item.image}
                alt={item.item.name}
                className="item-image"
                onClick={() => handleImageClick(item.item.image)}
              />
              <div className="order-item-details">
                <p>{item.item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>{item.date}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

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
