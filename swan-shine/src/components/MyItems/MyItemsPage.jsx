import React from 'react'
import AddItemButton from './AddItemButton'
import ItemsCard from './ItemsCard'
import './MyItemsPage.css'

const MyItemsPage = () => {
  return (
    <div className="my-items-page">
      <h1 className="page-title">My Items</h1>
      <div className="add-item-container">
        <AddItemButton />
      </div>
      <div className="items-list">
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
      </div>
    </div>
  )
}

export default MyItemsPage
