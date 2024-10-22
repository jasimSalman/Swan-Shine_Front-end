import React, { useEffect, useState } from 'react'
import ItemsCard from '../Shared/ItemsCard'
import './MyItemsPage.css'
import Client from '../../services/api'
import { Link } from 'react-router-dom'

const MyItemsPage = () => {
  const userId = localStorage.getItem('userId')
  const [items, setItems] = useState([])

  useEffect(() => {
    getItems()
  }, [userId])

  const getItems = async () => {
    const res = await Client.get(`/users/shop/${userId}/items`)

    if (res.data) {
      setItems(res.data)
    }
  }

  return (
    <div className="my-items-page">
      <h1>My Items</h1>
      <Link to={'/add-items'} className="add-item-button">
        Add Item
      </Link>
      <ItemsCard items={items} />
    </div>
  )
}

export default MyItemsPage
