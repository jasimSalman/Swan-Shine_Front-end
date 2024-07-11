import axios from 'axios'
import { useParams } from 'react-router-dom'
import Client, { BASE_URL } from '../../services/api'
import { useEffect, useState } from 'react'
import ItemsCard from './ItemsCard'
import Map from '../AllShops/Map'

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
        items.map((item) => (
          <>
            <ItemsCard
              itemId={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
            <Map location={item.shop.location} />
          </>
        ))
      ) : (
        <p>No items in this shop.</p>
      )}
    </div>
  )
}

export default ShopItemsPage
