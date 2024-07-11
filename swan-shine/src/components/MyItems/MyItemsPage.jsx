import React, { useEffect, useState } from 'react'
import AddItemButton from './AddItemButton'
import ItemsCard from '../Shared/ItemsCard'
import './MyItemsPage.css'
import Client, { BASE_URL } from '../../services/api'

const MyItemsPage = () => {
  const userId = localStorage.getItem('userId')

  const [items, setItems] = useState([])

  const getItems = async () => {
    const res = await Client.get(`${BASE_URL}/users/shop/${userId}/items`)

    if (res.data) {
      setItems(res.data)
    }
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
