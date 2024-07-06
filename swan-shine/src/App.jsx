import React from 'react'
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
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/accept-owners" element={<AcceptOwnersPage />} />
          <Route path="/my-items" element={<MyItemsPage />} />
          <Route path="/receipt" element={<Receipt />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/shops" element={<AllShopsPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/item-details" element={<ItemDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/favorites" element={<FavoriteListPage />} />
          <Route path="/orders" element={<MyOrdersPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
