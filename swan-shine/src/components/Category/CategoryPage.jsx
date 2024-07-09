import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  return (
    <div className="category-page">
      <h1>Categories</h1>
      <div className="category-grid">
        {categories.map((category) => (
          <Link key={category._id} to={`/category-items/${category._id}`}>
            <div className="category-card">
              <img src={category.poster} alt={category.name} />
              <div className="category-details">
                <h2>{category.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryPage
