import React, { useEffect, useState } from 'react'
import RequestCard from './RequestCard'
import './AcceptOwnersPage.css'
import Client, { BASE_URL } from '../../services/api'

const AcceptOwnersPage = () => {
  const [requests, setRequests] = useState([])

  useEffect(() => {
    getAcceptRequests()
  }, [])

  const getAcceptRequests = async () => {
    try {
      const response = await Client.get(`/users/admin/shop-owners`)
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

  const handleAccept = async (userId) => {
    try {
      await Client.post(`/users/admin/accept-shop-owner/${userId}`)
      setRequests(requests.filter((request) => request._id !== userId))
    } catch (err) {
      console.error('Error accepting shop owner:', err)
    }
  }

  const handleReject = async (userId) => {
    try {
      await Client.delete(`/users/admin/reject-shop-owner/${userId}`)
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
