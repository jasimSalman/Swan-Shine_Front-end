import React, { useEffect, useState } from 'react'
import './CategoryPage.css'
import axios from 'axios'
import { BASE_URL } from '../../services/api'
import CategoryCard from './CategoryCard'

const CategoryPage = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/category`)
      setCategories(response.data)
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  return (
    <div className="category-page">
      <h1>Categories</h1>
      <div className="categories-grid">
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
    </div>
  )
}

export default CategoryPage
