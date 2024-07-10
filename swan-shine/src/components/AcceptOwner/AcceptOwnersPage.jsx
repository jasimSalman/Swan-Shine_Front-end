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
    try {
      const response = await Client.post(
        `${BASE_URL}/users/admin/accept-shop-owner/:userId`
      )
      console.log(response.data)

      setRequests(requests.filter((request) => request._id !== userId))
    } catch (err) {
      console.error('Error accepting shop owner:', err)
    }
  }

  const handleReject = async (userId) => {
    try {
      const response = await Client.delete(
        `${BASE_URL}/users/admin/reject-shop-owner/${userId}`
      )

      console.log('Shop owner has been rejected')

      setRequests(requests.filter((request) => request._id !== userId))
    } catch (err) {
      console.error('Error rejecting shop owner', err)
    }
  }

  return (
    <div className="accept-owners-page">
      <h1>Accept Owners</h1>
      {requests.map((request) => (
        <RequestCard
          key={request._id}
          request={request}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      ))}
    </div>
  )
}

export default AcceptOwnersPage
