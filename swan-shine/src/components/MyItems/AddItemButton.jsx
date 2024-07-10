import React from 'react'
import './MyItemsPage.css'
import { Link } from 'react-router-dom'

const AddItemButton = () => {
  return <Link to={'/add-items'}>Add Item</Link>
}

export default AddItemButton
