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
const LoginForm = ({ handleChange, handleSubmit, formValues }) => {
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          onChange={handleChange}
          type="text"
          placeholder=" please enter your username"
          value={formValues.username}
          required
          name="username"
        />
      </label>
      <label>
        Password:
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder=" please enter your password"
          value={formValues.password}
          required
        />
      </label>
      <button
        disabled={!formValues.username || !formValues.password}
        type="submit"
      >
        Login
      </button>
    </form>
  )
}

export default LoginForm
