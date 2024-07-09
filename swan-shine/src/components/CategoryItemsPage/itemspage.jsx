import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ItemsCard from '../Shared/ItemsCard'
import { BASE_URL } from '../../services/api'
// import '../Category/CategoryPage.css'

const ItemsPage = () => {
  const { id } = useParams()
  const [items, setItems] = useState([])

  const fetchItems = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/items/${id}`)
      setItems(response.data)
    } catch (error) {
      console.error(`Error fetching items for category ${id}:`, error)
    }
  }

  useEffect(() => {
    fetchItems()
  }, [id])

  return (
    <div className="items-page">
      {items.length > 0 ? (
        <ItemsCard items={items} />
      ) : (
        <p>No items found for this category.</p>
      )}
    </div>
  )
}

export default ItemsPage
