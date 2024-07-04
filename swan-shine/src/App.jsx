import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import './App.css'

const App = () => {
  const handleLogOut = () => {
    console.log('User logged out')
  }

  const user = {
    email: 'user@example.com'
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage user={user} handleLogOut={handleLogOut} />}
        />
      </Routes>
    </Router>
  )
}

export default App
