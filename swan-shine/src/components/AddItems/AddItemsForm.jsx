import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Client from '../../services/api'
import './AddItemsForm.css'

const AddItemsForm = () => {
  const initialState = {
    name: '',
    image: '',
    reqCategory: '',
    price: 0,
    stock: 0
  }

  const userId = localStorage.getItem('userId')
  const navigate = useNavigate()

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await Client.post(`/items/${userId}`, formValues)
    setFormValues(initialState)
    if (res) {
      navigate('/my-shop')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="add-item-form">
        <label htmlFor="name" className="add-item-labels">
          Item Name
        </label>
        <input
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Item Name"
          value={formValues.name}
          required
          className="add-item-input-field"
        />

        <label htmlFor="reqCategory" className="add-item-labels">
          Item Category
        </label>
        <select
          name="reqCategory"
          id="reqCategory"
          value={formValues.reqCategory}
          onChange={handleChange}
          className="add-item-input-field"
        >
          <option value="Earrings">Earrings</option>
          <option value="Necklaces">Necklaces</option>
          <option value="Rings">Rings</option>
          <option value="Bracelets">Bracelets</option>
          <option value="Anklets">Anklets</option>
        </select>

        <label htmlFor="image" className="add-item-labels">
          Item Image URL
        </label>
        <input
          onChange={handleChange}
          name="image"
          type="text"
          placeholder="Item Image URL"
          value={formValues.image}
          required
          className="add-item-input-field"
        />

        <label htmlFor="price" className="add-item-labels">
          Item Price
        </label>
        <input
          onChange={handleChange}
          name="price"
          type="number"
          placeholder="Item Price"
          value={formValues.price}
          required
          className="add-item-input-field"
        />

        <label htmlFor="stock" className="add-item-labels">
          Stock
        </label>
        <input
          onChange={handleChange}
          name="stock"
          type="number"
          placeholder="Stock"
          value={formValues.stock}
          required
          className="add-item-input-field"
        />

        <button
          disabled={
            !formValues.name ||
            !formValues.image ||
            !formValues.price ||
            !formValues.stock
          }
          className="add-items-button"
        >
          Add Item
        </button>
      </form>
    </div>
  )
}

export default AddItemsForm
