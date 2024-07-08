import React from 'react'

const LoginForm = () => {
  return (
    <form className="login-form">
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm
