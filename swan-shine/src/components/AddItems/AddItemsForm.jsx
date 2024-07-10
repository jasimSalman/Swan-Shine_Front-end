import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Client, { BASE_URL } from '../../services/api'
import './AddItemsForm.css'

const AddItemsForm = () => {
  const userId = localStorage.getItem('userId')
  const navigate = useNavigate()
  const initialState = {
    name: '',
    image: '',
    reqCategory: '',
    price: '',
    stock: ''
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await Client.post(`${BASE_URL}/items/${userId}`, formValues)
    setFormValues(initialState)
    if (res) {
      navigate('/my-shop')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="label">
          Item Name
        </label>
        <input
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Item Name"
          value={formValues.name}
          required
          className="inputFeild"
        />

        <label htmlFor="reqCategory" className="label">
          Item Category
        </label>
        <select
          name="reqCategory"
          id="reqCategory"
          value={formValues.reqCategory}
          onChange={handleChange}
          className="inputFeild"
        >
          <option value="Earrings">Earrings</option>
          <option value="Necklaces">Necklaces</option>
          <option value="Rings">Rings</option>
          <option value="Bracelets">Bracelets</option>
          <option value="Anklets">Anklets</option>
        </select>

        <label htmlFor="image" className="label">
          Item Image URL
        </label>
        <input
          onChange={handleChange}
          name="image"
          type="text"
          placeholder="Item Image URL"
          value={formValues.image}
          required
          className="inputFeild"
        />

        <label htmlFor="price" className="label">
          Item Price
        </label>
        <input
          onChange={handleChange}
          name="price"
          type="number"
          placeholder="Item Price"
          value={formValues.price}
          required
          className="inputFeild"
        />

        <label htmlFor="stock" className="label">
          Stock
        </label>
        <input
          onChange={handleChange}
          name="stock"
          type="number"
          placeholder="Stock"
          value={formValues.stock}
          required
          className="inputFeild"
        />

        <button
          disabled={
            !formValues.name ||
            !formValues.image ||
            !formValues.price ||
            !formValues.stock
          }
        >
          Add Item
        </button>
      </form>
    </div>
  )
}

export default AddItemsForm
