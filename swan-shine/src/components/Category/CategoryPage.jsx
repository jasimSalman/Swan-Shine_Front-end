import React, { useEffect, useState } from 'react'
import ItemsCard from '../Category/ItemsCard'
import './CategoryPage.css'
import { BASE_URL } from '../../services/api'
import axios from 'axios'

const CategoryPage = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/category`)
      console.log(response.data)
      setItems(response.data)
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  return (
    <div className="category-page">
      <h1>Category</h1>
      <ItemsCard items={items} />
    </div>
  )
}

export default CategoryPage
