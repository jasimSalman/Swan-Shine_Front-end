import React from 'react'
import { Link } from 'react-router-dom'
import App from './App'

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/category">Go to Category</Link>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

export default HomePage
