import React from 'react'
import Review from './Review'
import Rating from './Rating'
import ItemDetailsCard from './ItemDetailsCard'
import './ItemDetailsPage.css'

const ItemDetailsPage = () => {
  return (
    <div className="item-details-page">
      <h1>Item Details</h1>
      <ItemDetailsCard />
      <Review />
      <Rating />
    </div>
  )
}

export default ItemDetailsPage
