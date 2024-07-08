import React from 'react'
import ShopsCard from './ShopsCard'
import Map from './Map'
import './AllShopsPage.css'

const AllShopsPage = () => {
  return (
    <div className="all-shops-page">
      <h1>All Shops</h1>
      <ShopsCard />
      <Map />
    </div>
  )
}

export default AllShopsPage
