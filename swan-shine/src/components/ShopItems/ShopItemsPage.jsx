import axios from 'axios'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../services/api'
import { useEffect, useState } from 'react'
import ItemsCard from '../Shared/ItemsCard'
import Map from '../Map/Map'

const ShopItemsPage = () => {
  const { shopId } = useParams()
  const [items, setItems] = useState('')

  useEffect(() => {
    getItems()
  }, [shopId])

  const getItems = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/shop/${shopId}/items`)
      setItems(res.data)
    } catch (error) {
      console.log('cannot retrive shop items')
    }
  }

  return (
    <div className="items-page">
      {items.length > 0 ? (
        <>
          <ItemsCard items={items} />
          <Map location={items[0].shop.location} />
        </>
      ) : (
        <p>No items in this shop.</p>
      )}
    </div>
  )
}

export default ShopItemsPage
