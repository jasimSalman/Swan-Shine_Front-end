import React from 'react'
import './RegistrationForm.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { RegisterUser } from '../../services/Auth'

const RegistrationForm = () => {
  let navigate = useNavigate()

  const { type } = useParams()

  const initValues = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    cr: ''
  }

  const [formValues, setFormValues] = useState(initValues)
  const [password, setPassword] = useState('')
  const [matchPassword, setMatchPassword] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
    if (name === 'password') {
      setPassword(value)
    } else if (name === 'confirmPassword') {
      setMatchPassword(value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== matchPassword) {
      return
    }

    await RegisterUser({
      username: formValues.username,
      first_name: formValues.firstName,
      last_name: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
      type: type,
      cr: type === 'owner' ? formValues.cr : null
    })
    setFormValues(initValues)
    {
      type === 'user' ? navigate('/login') : navigate('/confirm-message')
    }
  }

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      {type === 'owner' ? (
        <h1>Owner Registration</h1>
      ) : (
        <h1>User Registration</h1>
      )}

      <label htmlFor="username" className="label">
        Username
      </label>
      <input
        onChange={handleChange}
        name="username"
        type="text"
        placeholder="Username"
        value={formValues.username}
        required
        className="inputFeild"
      />

      <label htmlFor="email" className="label">
        Email
      </label>
      <input
        onChange={handleChange}
        name="email"
        type="email"
        placeholder="example@example.com"
        value={formValues.email}
        required
        className="inputFeild"
      />

      <label htmlFor="firstName" className="label">
        First Name
      </label>
      <input
        onChange={handleChange}
        name="firstName"
        type="text"
        placeholder="First Name"
        value={formValues.firstName}
        required
        className="inputFeild"
      />

      <label htmlFor="lastName" className="label">
        Last Name
      </label>
      <input
        onChange={handleChange}
        name="lastName"
        type="text"
        placeholder="Last Name"
        value={formValues.lastName}
        required
        className="inputFeild"
      />
      {type === 'owner' ? (
        <div>
          <label htmlFor="lastName" className="label">
            CR (commercial registration )
          </label>
          <input
            onChange={handleChange}
            name="cr"
            type="text"
            placeholder="commercial registration"
            value={formValues.cr}
            required
            className="inputFeild"
          />
        </div>
      ) : null}

      <label htmlFor="password" className="label">
        Password
      </label>
      <input
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="password"
        value={formValues.password}
        required
        className="inputFeild"
      />

      <label htmlFor="confirmPassword" className="label">
        Confirm Password
      </label>
      <input
        onChange={handleChange}
        type="password"
        name="confirmPassword"
        placeholder="confirmPassword"
        value={formValues.confirmPassword}
        required
        className="inputFeild"
      />

      <button
        type="submit"
        disabled={
          !formValues.username ||
          !formValues.firstName ||
          !formValues.lastName ||
          !formValues.email ||
          !formValues.password ||
          !formValues.confirmPassword ||
          formValues.password !== formValues.confirmPassword
        }
      >
        Register
      </button>
    </form>
  )
}

export default RegistrationForm
