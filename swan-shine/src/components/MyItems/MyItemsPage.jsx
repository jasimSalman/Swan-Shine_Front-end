import React, { useEffect, useState } from 'react'
import AddItemButton from './AddItemButton'
import ItemsCard from '../Shared/ItemsCard'
import Client from '../../services/api'
// import './MyItemsPage.css'

const MyItemsPage = () => {
  const userId = localStorage.getItem('userId')

  const [items, setItems] = useState([])

  const getItems = async () => {
    const res = await Client.get(`users/shop/${userId}/items`)
    setItems(res.data)
  }

  useEffect(() => {
    getItems()
  }, [userId])

  return (
    <div className="my-items-page">
      <h1>My Items</h1>
      <AddItemButton />
      <ItemsCard items={items} />
    </div>
  )
}

export default MyItemsPage
