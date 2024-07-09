import React from 'react'
import AddItemButton from './AddItemButton'
import ItemsCard from './ItemsCard'
// import './MyItemsPage.css'

const MyItemsPage = () => {
  return (
    <div className="my-items-page">
      <h1>My Items</h1>
      <AddItemButton />
      <ItemsCard />
    </div>
  )
}

export default MyItemsPage
