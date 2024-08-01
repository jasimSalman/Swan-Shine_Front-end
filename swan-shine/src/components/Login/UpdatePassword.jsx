import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { updatePassword } from '../../services/Auth'
import './UpdatePassword.css'

const UpdatePassword = () => {
  let navigate = useNavigate()

  const initValues = { username: '', newPassword: '', confirmPassword: '' }
  const [formValues, setFormValues] = useState(initValues)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      username: formValues.username,
      newPassword: formValues.newPassword
    }
    await updatePassword(payload)
    setFormValues(initValues)
    navigate('/login')
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username" className="label">
            Username:
          </label>
          <input
            onChange={handleChange}
            name="username"
            type="text"
            placeholder="Username"
            value={formValues.username}
            required
            className="inputField"
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="newPassword" className="label">
            New Password:
          </label>
          <input
            onChange={handleChange}
            name="newPassword"
            type="password"
            placeholder="New Password"
            value={formValues.newPassword}
            required
            className="inputField"
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="confirmPassword" className="label">
            Confirm New Password:
          </label>
          <input
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formValues.confirmPassword}
            required
            className="inputField"
          />
        </div>

        <button
          disabled={
            !formValues.username ||
            !formValues.newPassword ||
            !formValues.confirmPassword ||
            formValues.newPassword !== formValues.confirmPassword
          }
          className="authButton"
        >
          Update Password
        </button>
      </form>
    </div>
  )
}

export default UpdatePassword
