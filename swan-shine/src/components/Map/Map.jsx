import React from 'react'
import './Map.css'

const Map = ({ location }) => {
  return (
    <div className="map">
      <iframe src={location} width="600" height="450"></iframe>
    </div>
  )
}

export default Map
