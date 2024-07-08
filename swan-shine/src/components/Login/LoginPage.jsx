import React, { useState } from 'react'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'
import './LoginPage.css'

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true)

  const toggleForm = () => {
    setIsLogin(!isLogin)
import './LoginPage.css'
import { SignInUser } from '../../services/Auth'
import { useNavigate, Link } from 'react-router-dom'

const LoginPage = () => {
  let navigate = useNavigate()
  const initialState = { username: '', password: '' }

  const [isLogin, setIsLogin] = useState(true)
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues(initialState)
    {
      if (payload.type === 'user') {
        navigate('/category')
      } else if (payload.type === 'owner') {
        navigate('/my-items')
      } else {
        navigate('/admin')
      }
    }
  }

  return (
    <div className="login-page">
      <h1>{isLogin ? 'Login' : 'Register'}</h1>
      {isLogin ? <LoginForm /> : <RegistrationForm />}
      <button onClick={toggleForm}>
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
      <LoginForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formValues={formValues}
      />

      <div>
        <Link to="/updatePassword">
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
