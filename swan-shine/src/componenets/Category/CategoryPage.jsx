import React from 'react'
import { Category } from '../components/Category'

const CategoryPage = () => {
  const initialItems = ['Item 1', 'Item 2', 'Item 3']

  return (
    <div>
      <Category
        title="My Category"
        description="This is a description."
        initialItems={initialItems}
      />
    </div>
  )
}

export default CategoryPage
