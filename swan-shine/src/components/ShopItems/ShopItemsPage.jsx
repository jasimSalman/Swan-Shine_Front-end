import axios from 'axios'
import { useParams } from 'react-router-dom'
import Client, { BASE_URL } from '../../services/api'
import { useEffect, useState } from 'react'
import ItemsCard from '../Shared/ItemsCard'

const ShopItemsPage = () => {
  const { shopId } = useParams()
  const [items, setItems] = useState('')

  const getItems = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/shop/${shopId}/items`)
      setItems(res.data)
    } catch (error) {}
  }

  useEffect(() => {
    getItems()
  }, [shopId])
  return (
    <div className="items-page">
      {items.length > 0 ? (
        <ItemsCard items={items} />
      ) : (
        <p>No items found for this category.</p>
      )}
    </div>
  )
}

export default ShopItemsPage
