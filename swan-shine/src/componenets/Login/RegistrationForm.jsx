import React from 'react'

const RegistrationForm = () => {
  return (
    <form className="registration-form">
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  )
}

export default RegistrationForm
