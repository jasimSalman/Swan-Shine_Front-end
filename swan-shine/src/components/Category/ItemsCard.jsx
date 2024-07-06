import React from 'react'
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

export default ItemsCard
