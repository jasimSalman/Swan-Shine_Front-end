import React from 'react'
import './homepage.css'
import NavScrollExample from '../header/header'
const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to Our Website</h1>
      </header>
      <div className="body">
        <div className="about-us">
          <h2>About Us</h2>
          <p>
            We are a company dedicated to providing the best services to our
            customers. Our team of experts works tirelessly to meet your needs
            and exceed your expectations.
          </p>
        </div>
        <div className="image-section">
          <img src="path_to_your_image.jpg" alt="About Us" />
        </div>
      </div>
    </div>
  )
}

export default Home
