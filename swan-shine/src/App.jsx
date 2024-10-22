import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AcceptOwnersPage from './components/AcceptOwner/AcceptOwnersPage'
import MyItemsPage from './components/MyItems/MyItemsPage'
import Receipt from './components/Receipt/Receipt'
import CartPage from './components/Cart/CartPage'
import AllShopsPage from './components/AllShops/AllShopsPage'
import CategoryPage from './components/Category/CategoryPage'
import ItemDetailsPage from './components/ItemDetails/ItemDetailsPage'
import LoginPage from './components/Login/LoginPage'
import WishListPage from './components/WishList/WishListPage'
import MyOrdersPage from './components/MyOrder/MyOrdersPage'
import './App.css'
import { CheckSession } from './services/Auth'
import RegistrationForm from './components/Login/RegistrationForm'
import ConfirmMessage from './components/ConfirmMessage/ConfirmMessage'
import Home from './components/Home page/homepage'
import Nav from './components/Nav/Nav'
import ItemsPage from './components/CategoryItemsPage/itemspage'
import AddItemsForm from './components/AddItems/AddItemsForm'
import AddShopForm from './components/AddShop/AddShopForm'
import ShopItemsPage from './components/ShopItems/ShopItemsPage'
import UpdateItem from './components/UpdateItem/UpdateItemForm'
import UpdatePassword from './components/Login/UpdatePassword'
import OwnerOrdersPage from './components/OwnerOrders/OwnerOrdersPage'

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
          <Nav user={user} handleLogOut={handleLogOut} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accept-owners" element={<AcceptOwnersPage />} />
            <Route path="/my-shop" element={<MyItemsPage />} />
            <Route path="/receipt" element={<Receipt />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/shops" element={<AllShopsPage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/item-details/:id" element={<ItemDetailsPage />} />
            <Route path="/login" element={<LoginPage setUser={setUser} />} />
            <Route path="/Register/:type" element={<RegistrationForm />} />
            <Route
              path="/favorites"
              element={<WishListPage userId={user ? user.id : null} />}
            />{' '}
            <Route path="/orders" element={<MyOrdersPage />} />
            <Route path="/category-items/:id" element={<ItemsPage />} />{' '}
            <Route path="/confirm-message" element={<ConfirmMessage />} />
            {/* <Route path="/all-orders" element={<AllOrders />} /> */}
            <Route path="/add-items" element={<AddItemsForm />} />
            <Route path="/new-shop" element={<AddShopForm />} />
            <Route path="/:shopId/items" element={<ShopItemsPage />} />
            <Route path="/edit/:itemId" element={<UpdateItem />} />
            <Route path="/update-password" element={<UpdatePassword />} />
            <Route path="/all-orders" element={<OwnerOrdersPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
