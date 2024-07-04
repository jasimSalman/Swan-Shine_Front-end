import React from 'react'
import ItemsCard from './ItemsCard'
import './FavoriteListPage.css'

const FavoriteListPage = () => {
  return (
    <div className="favorite-list-page">
      <h1>Favorites</h1>
      <ItemsCard />
    </div>
  )
}

export default FavoriteListPage
