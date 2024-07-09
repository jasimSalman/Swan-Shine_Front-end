// MyItemsPage.jsx
import React from 'react'
import AddItemButton from './AddItemButton'
import ItemsCard from './ItemsCard'
import './MyItemsPage.css'

const MyItemsPage = () => {
  const fakeItems = [
    { title: 'Item 1', description: 'This is the description for item 1.' },
    { title: 'Item 2', description: 'This is the description for item 2.' },
    { title: 'Item 3', description: 'This is the description for item 3.' },
    { title: 'Item 4', description: 'This is the description for item 4.' },
    { title: 'Item 5', description: 'This is the description for item 5.' },
    { title: 'Item 6', description: 'This is the description for item 6.' }
  ]

  return (
    <div className="my-items-page">
      <h1 className="page-title">My Items</h1>
      <div className="add-item-container">
        <AddItemButton />
      </div>
      <div className="items-list">
        {fakeItems.map((item, index) => (
          <ItemsCard
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}

export default MyItemsPage
