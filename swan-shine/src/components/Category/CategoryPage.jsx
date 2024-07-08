import React, { useEffect, useState } from 'react'
import ItemsCard from '../Category/ItemsCard'
import './CategoryPage.css'
import axios from 'axios'
import { BASE_URL } from '../../services/api'

const CategoryPage = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/category`)
      setCategories(response.data)
      console.log(response.data)
      setItems(response.data)
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  return (
    <div className="category-page">
      <h1>Categories</h1>
      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category._id} className="category-card">
            <img src={category.poster} alt={category.name} />
            <div className="category-details">
              <h2>{category.name}</h2>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default CategoryPage
