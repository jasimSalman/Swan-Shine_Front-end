import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavScrollExample from './components/NavBar'
import HomePage from '../Home page/homepage'
import CategoryPage from '../Category/CategoryPage'
import MyItemsPage from '../MyItems/MyItemsPage'
import FavoriteListPage from '../FavoriteList/FavoriteListPage'
import CartPage from '../Cart/CartPage'
import RegistrationForm from '../Login/RegistrationForm'
import LoginForm from '../Login/LoginForm'

import './App.css'

const App = () => {
  const user = null
  const handleLogOut = () => {}

  return (
    <Router>
      <div>
        <NavScrollExample user={user} handleLogOut={handleLogOut} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CategoryPage" element={<CategoryPage />} />
          <Route path="/MyItemsPage" element={<MyItemsPage />} />
          <Route path="/FavoriteListPage" element={<FavoriteListPage />} />
          <Route path="/basCartPageket" element={<CartPage />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/signin" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
