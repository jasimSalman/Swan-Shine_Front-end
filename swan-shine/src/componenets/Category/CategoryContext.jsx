import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const CategoryContext = createContext()

export const CategoryProvider = ({ children }) => {
  const [items, setItems] = useState([])

  const addItem = (item) => {
    setItems([...items, item])
  }

  return (
    <CategoryContext.Provider value={{ items, addItem }}>
      {children}
    </CategoryContext.Provider>
  )
}

CategoryProvider.propTypes = {
  children: PropTypes.node.isRequired
}
