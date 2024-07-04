import React, { useState } from 'react'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'
import './LoginPage.css'

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true)

  const toggleForm = () => {
    setIsLogin(!isLogin)
  }

  return (
    <div className="login-page">
      <h1>{isLogin ? 'Login' : 'Register'}</h1>
      {isLogin ? <LoginForm /> : <RegistrationForm />}
      <button onClick={toggleForm}>
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </div>
  )
}

export default LoginPage
