import React from 'react'
import './homepage.css'

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>SWAN SHINE</h1>
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
        <div className="about-us">
          <h2>Check the gold price forecast before you buy</h2>
          <p>
            We are a company dedicated to providing the best services to our
            customers. Our team of experts works tirelessly to meet your needs
            and exceed your expectations.
          </p>
          <iframe
            src="https://goldbroker.com/widget/live/XAU?currency=USD"
            scrolling="no"
            frameBorder="0"
            width="100%"
            height="320"
            style={{ border: '0', overflow: 'hidden' }}
          ></iframe>
        </div>
        <div className="gold-prices">
          <h2>Gold Prices</h2>
          <table>
            <thead>
              <tr>
                <th>Unit</th>
                <th>Price in Dinars</th>
                <th>Price in Dollars</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>24K Gold Gram Price</td>
                <td>29.04</td>
                <td>76.42</td>
              </tr>
              <tr>
                <td>22K Gold Gram Price</td>
                <td>26.62</td>
                <td>70.06</td>
              </tr>
              <tr>
                <td>21K Gold Gram Price</td>
                <td>25.41</td>
                <td>66.87</td>
              </tr>
              <tr>
                <td>18K Gold Gram Price</td>
                <td>21.78</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home
