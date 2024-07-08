import './App.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AcceptOwnersPage from './components/AcceptOwner/AcceptOwnersPage'
import MyItemsPage from './components/MyItems/MyItemsPage'
import Receipt from './components/Receipt/Receipt'
import CartPage from './components/Cart/CartPage'
import AllShopsPage from './components/AllShops/AllShopsPage'
import CategoryPage from './components/Category/CategoryPage'
import ItemDetailsPage from './components/ItemDetails/ItemDetailsPage'
import LoginPage from './components/Login/LoginPage'
import FavoriteListPage from './components/FavoriteList/FavoriteListPage'
import MyOrdersPage from './components/MyOrder/MyOrdersPage'
// import NavScrollExample from './components/header/header'
import './App.css'
import { CheckSession } from './services/Auth'
import RegistrationForm from './components/Login/RegistrationForm'
import ConfirmMessage from './components/ConfirmMessage/ConfirmMessage'
import Home from './components/Home page /homepage'
import Nav from './components/Nav/Nav'

function App() {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <Router>
      <div className="App">
        <header>
          <Nav handleLogOut={handleLogOut} />
        </header>
        {/* <NavScrollExample user={user} handleLogOut={handleLogOut} /> */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accept-owners" element={<AcceptOwnersPage />} />
            <Route path="/my-items" element={<MyItemsPage />} />
            <Route path="/receipt" element={<Receipt />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/shops" element={<AllShopsPage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/item-details" element={<ItemDetailsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/Register/:type" element={<RegistrationForm />} />
            <Route path="/favorites" element={<FavoriteListPage />} />
            <Route path="/orders" element={<MyOrdersPage />} />
            <Route path="/confirm-message" element={<ConfirmMessage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
