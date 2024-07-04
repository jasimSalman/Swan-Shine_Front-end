import React, { useState, useContext } from 'react'
import styles from './Category.module.css'
import Item from './Item'
import { CategoryContext } from '../../contexts/CategoryContext'

const Category = ({ title, description, initialItems }) => {
  const [items, setItems] = useState(initialItems)
  const { addItem } = useContext(CategoryContext)

  const handleAddItem = () => {
    const newItem = `Item ${items.length + 1}`
    addItem(newItem)
    setItems([...items, newItem])
  }

  return (
    <div className={styles.categoryContainer}>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ul>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  )
}

export default Category
