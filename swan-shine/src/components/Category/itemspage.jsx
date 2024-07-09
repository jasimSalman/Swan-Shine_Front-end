import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ItemsCard from '../Category/ItemsCard'
import './CategoryPage.css'
import { BASE_URL } from '../../services/api'

const ItemsPage = () => {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])

  useEffect(() => {
    fetchItems()
  }, [categoryId])

  const fetchItems = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/items/${categoryId}`)
      console.log('Fetched items:', response.data)
      setItems(response.data)
    } catch (error) {
      console.error(`Error fetching items for category ${categoryId}:`, error)
    }
  }

  return (
    <div className="items-page">
      <h1>Items for Category {categoryId}</h1>
      {items.length > 0 ? (
        <ItemsCard items={items} />
      ) : (
        <p>No items found for this category.</p>
      )}
    </div>
  )
}

export default ItemsPage
