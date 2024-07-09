import React from 'react'
import './ShopCard.css'

const shopsData = [
  {
    id: 1,
    name: 'Golden Gems',
    category: 'Gold & Jewelry',
    location: 'Manama, Bahrain',
    rating: 4.8,
    reviewCount: 250,
    image: 'https://via.placeholder.com/300x200?text=Golden+Gems'
  },
  {
    id: 2,
    name: 'Bahrain Baubles',
    category: 'Gold & Jewelry',
    location: 'Muharraq, Bahrain',
    rating: 4.6,
    reviewCount: 180,
    image: 'https://via.placeholder.com/300x200?text=Bahrain+Baubles'
  },
  {
    id: 3,
    name: 'Luminous Luster',
    category: 'Gold & Jewelry',
    location: 'Riffa, Bahrain',
    rating: 4.9,
    reviewCount: 320,
    image: 'https://via.placeholder.com/300x200?text=Luminous+Luster'
  },
  {
    id: 4,
    name: 'Shimmering Sands',
    category: 'Gold & Jewelry',
    location: 'Isa Town, Bahrain',
    rating: 4.7,
    reviewCount: 210,
    image: 'https://via.placeholder.com/300x200?text=Shimmering+Sands'
  },
  {
    id: 5,
    name: 'Gleaming Golds',
    category: 'Gold & Jewelry',
    location: 'Hamad Town, Bahrain',
    rating: 4.5,
    reviewCount: 140,
    image: 'https://via.placeholder.com/300x200?text=Gleaming+Golds'
  }
]

const ShopsCard = () => {
  return (
    <div className="shops-card">
      {shopsData.map((shop) => (
        <div key={shop.id} className="shop">
          <img src={shop.image} alt={shop.name} className="shop-image" />
          <h2>{shop.name}</h2>
          <p>Category: {shop.category}</p>
          <p>Location: {shop.location}</p>
          <p>
            Rating: {shop.rating} (Reviews: {shop.reviewCount})
          </p>
        </div>
      ))}
    </div>
  )
}

export default ShopsCard
