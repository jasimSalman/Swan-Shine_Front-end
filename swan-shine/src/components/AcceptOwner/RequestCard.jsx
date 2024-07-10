import React from 'react'
import AcceptOwnersPage from './AcceptOwnersPage'

const RequestCard = ({ request, onAccept, onReject }) => {
  return (
    <div className="request-card">
      <h2>Owner Request</h2>
      <p>
        Name: {request.first_name} {request.last_name}
      </p>
      <p>Email: {request.email}</p>
      <p>CR: {request.cr}</p>
      <button onClick={() => onAccept(request._id)}>Accept</button>
      <button onClick={() => onReject(request._id)}>Reject</button>
    </div>
  )
}

export default RequestCard
