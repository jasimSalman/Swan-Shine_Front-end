import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './AddShop.css'

const AddShopForm = ({
  handleChange,
  handleImageChange,
  handleSubmit,
  formValues
}) => {
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

  const handleImageChange = (event) => {
    setFormValues({ ...formValues, image: e.target.files[0] })
    setImg(URL.createObjectURL(e.target.files[0]))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const createShop = {
      shopname: formValues.shopname,
      email: formValues.email,
      poster: formValues.poster,
      location: formValues.location
    }
    if (
      !createShop.shopname ||
      !createShop.email ||
      !createShop.poster ||
      !createShop.location
    ) {
      console.log('Please fill in all fields')
      return
    }
    try {
      const response = await fetch('يمكنك وضع الإند بوينت هنا يا جاسم', {
        method: 'POST',
        body: createShop
      })
      if (response.ok) {
        console.log('Shop created successfully')
      } else {
        console.error('Failed to create shop')
      }
    } catch (error) {
      console.error('Error creating a shop:', error)
    }

    return (
      <form className="addshop-form" onSubmit={handleSubmit}>
        <label>
          Shop Name:
          <input
            onChange={handleChange}
            type="text"
            placeholder=" please enter your shop name"
            value={formValues.shopname}
            required
            name="shopname"
          />
        </label>
        <label>
          Email:
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder=" please enter your email"
            value={formValues.email}
            required
          />
        </label>
        <label>
          Shop Profile Image:
          <input
            onChange={handleImageChange}
            type="file"
            name="poster"
            placeholder=" please upload your shop's image"
            value={formValues.poster}
            required
          />
        </label>
        <label>
          Location:
          <input
            onChange={handleChange}
            type="text"
            name="location"
            placeholder=" please insert your location"
            value={formValues.location}
            required
          />
        </label>
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
    )
  }
}
export default AddShopForm
