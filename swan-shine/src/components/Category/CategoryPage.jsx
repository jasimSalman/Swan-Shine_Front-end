import React from 'react'
import ItemsCard from '../Category/ItemsCard'
import './CategoryPage.css'

const CategoryPage = () => {
  const items = [
    {
      id: 1,
      title: 'Item 1',
      description: 'Description of Item 1',
      price: 29.99
    },
    {
      id: 2,
      title: 'Item 2',
      description: 'Description of Item 2',
      price: 49.99
    },
    {
      id: 3,
      title: 'Item 3',
      description: 'Description of Item 3',
      price: 19.99
    },
    {
      id: 4,
      title: 'Item 4',
      description: 'Description of Item 4',
      price: 99.99
    },
    {
      id: 5,
      title: 'Item 5',
      description: 'Description of Item 5',
      price: 59.99
    }
  ]

  return (
    <div className="category-page">
      <h1>Category</h1>
      <ItemsCard items={items} />

import ItemsCard from './ItemsCard'
import './CategoryPage.css'

const CategoryPage = () => {
  return (
    <div className="category-page">
      <h1>Category</h1>
      <ItemsCard />
    </div>
  )
}

export default CategoryPage
