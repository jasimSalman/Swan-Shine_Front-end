import { useState, useEffect } from 'react'
import Client, { BASE_URL } from '../../services/api'
import { useParams, useNavigate } from 'react-router-dom'
import './UpdateItemForm.css'

const UpdateItem = () => {
  let navigate = useNavigate()
  const initialState = {
    name: '',
    image: '',
    price: 0,
    stock: 0
  }
  const [formValues, setFormValues] = useState(initialState)
  const { itemId } = useParams()

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await Client.get(`${BASE_URL}/items/show/${itemId}`)
        const item = response.data
        setFormValues({
          name: item.name,
          image: item.image,
          price: item.price,
          stock: item.stock
        })
      } catch (error) {
        console.error('Error fetching place details:', error)
      }
    }
    fetchItemDetails()
  }, [itemId])

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await Client.put(`${BASE_URL}/items/${itemId}`, formValues)
      setFormValues(initialState)
      navigate('/my-shop')
    } catch (error) {
      console.error('Error updating place:', error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="placeName" className="label">
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

        <label htmlFor="placePoster" className="label">
          Item Image
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
        <label htmlFor="placePrice" className="label">
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
        <label htmlFor="placeDescription" className="label">
          Stock
        </label>
        <input
          onChange={handleChange}
          name="stock"
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
          className="authButton"
        >
          Save Place
        </button>
      </form>
    </div>
  )
}

export default UpdateItem
