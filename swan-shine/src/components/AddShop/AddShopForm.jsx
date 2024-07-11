import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './AddShop.css'
import Client, { BASE_URL } from '../../services/api'
// import axios from 'axios'

const AddShopForm = () => {
  const userId = localStorage.getItem('userId')
  const shopId = localStorage.getItem('shopId')
  let navigate = useNavigate()

  const initValues = {
    shopname: '',
    email: '',
    poster: '',
    location: ''
  }

  const [formValues, setFormValues] = useState(initValues)

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await Client.post(
        `${BASE_URL}/shop/${userId}`,
        formValues
      )

      if (response.data) {
        navigate('/my-shop')
      }
    } catch (error) {
      console.error('Error creating a shop:', error)
    }
  }
  return (
    <div>
      <form className="addshop-form" onSubmit={handleSubmit}>
        <label>Shop Name:</label>
        <input
          onChange={handleChange}
          type="text"
          placeholder=" please enter your shop name"
          value={formValues.shopname}
          required
          name="shopname"
        />

        <label>Email:</label>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder=" please enter your email"
          value={formValues.email}
          required
        />

        <label>Shop Profile Image:</label>
        <input
          onChange={handleChange}
          type="text"
          name="poster"
          placeholder=" please upload your shop's image"
          value={formValues.poster}
          required
        />

        <label>Location:</label>
        <input
          onChange={handleChange}
          type="text"
          name="location"
          placeholder=" please insert your location"
          value={formValues.location}
          required
        />

        <button
          disabled={
            !formValues.shopname ||
            !formValues.email ||
            !formValues.poster ||
            !formValues.location
          }
          type="submit"
        >
          Create My Shop
        </button>
      </form>
    </div>
  )
}
export default AddShopForm
