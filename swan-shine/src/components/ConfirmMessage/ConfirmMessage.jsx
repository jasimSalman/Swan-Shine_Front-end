import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const ConfirmMessage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/category')
    }, 2000)
  }, [])

  return (
    <div>
      <h1>
        Your request is under consideration. Thanks for registering with us.
      </h1>
    </div>
  )
}

export default ConfirmMessage
