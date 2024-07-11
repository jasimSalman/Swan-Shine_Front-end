import React, { useState } from 'react'
import LoginForm from './LoginForm'
import './LoginPage.css'
import { SignInUser } from '../../services/Auth'
import { useNavigate, Link } from 'react-router-dom'

const LoginPage = ({ setUser }) => {
  let navigate = useNavigate()
  const initialState = { username: '', password: '' }
  const ownerState = localStorage.getItem('ownerState')

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setUser(payload)
    setFormValues(initialState)

    if (payload) {
      if (payload.type === 'user') {
        navigate('/category')
      } else if (payload.type === 'owner') {
        if (ownerState) {
          navigate('/my-shop')
        } else {
          navigate('/new-shop')
        }
      } else {
        navigate('/accept-owners')
      }
    }
  }

  return (
    <div className="login-page">
      <h1>Login</h1>
      <LoginForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formValues={formValues}
      />

      <div>
        <Link to="/update-password">
          <div className="font">Forget your password?</div>
        </Link>
        <hr />
        <div className="font">Don't have an accout?</div>
        <div className="felxSignin">
          <Link to="/register/user">
            <h6 className="color"> Register as a user</h6>
          </Link>
          <h5>OR </h5>
          <Link to="/register/owner">
            <h6 className="color"> Register as an Owner</h6>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
