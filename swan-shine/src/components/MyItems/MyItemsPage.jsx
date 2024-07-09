import React from 'react'
import AddItemButton from './AddItemButton'
import ItemsCard from './ItemsCard'
import Client from '../../services/api'
// import './MyItemsPage.css'

const MyItemsPage = () => {
  const getItems = (async) => {
    const res = Client.get(`user/shop/${shopId}/items`)
  }

  return (
    <div className="my-items-page">
      <h1>My Items</h1>
      <AddItemButton />
      <ItemsCard />
    </div>
  )
}

export default MyItemsPage
