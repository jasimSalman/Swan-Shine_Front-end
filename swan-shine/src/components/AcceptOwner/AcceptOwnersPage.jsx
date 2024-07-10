import React, { useEffect } from 'react'
import RequestCard from './RequestCard'
import './AcceptOwnersPage.css'
import axios from 'axios'
import Client, { BASE_URL } from '../../services/api'

const AcceptOwnersPage = () => {
  const [requests, setRequests] = useState([])

  useEffect(() => {
    const getAcceptRequests = async () => {
      try {
        const response = await Client.get(`${BASE_URL}/users/admin/shop-owners`)
        const owners = response.data

        const ownerRequests = []
        owners.forEach((user) => {
          if (user.state === false) {
            ownerRequests.push(user)
          }
        })
        setRequests(ownerRequests)
      } catch (err) {
        console.error('Error fetching requests', err)
      }
    }
    getAcceptRequests()
  }, [])

  const handleAccept = async (userId) => {
    const response = await axios.post(
      `${BASE_URL}/users/admin/accept-shop-owner/:userId`
    )
  }

  return (
    <div className="accept-owners-page">
      <h1>Accept Owners</h1>

      <RequestCard />
    </div>
  )
}

export default AcceptOwnersPage
