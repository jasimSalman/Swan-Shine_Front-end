import React from 'react'
import Header from '../components/Header'

const HomePage = ({ user, handleLogOut }) => {
  return (
    <div className="test">
      <Header user={user} handleLogOut={handleLogOut} />
      <main className="main-content">
        <h1>Welcome to the Home Page</h1>
        <p>swan shine </p>
      </main>
    </div>
  )
}

export default HomePage
