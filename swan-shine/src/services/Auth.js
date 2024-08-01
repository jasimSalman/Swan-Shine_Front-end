import Client from './api'

export const SignInUser = async (data) => {
  try {
    const res = await Client.post('/users/login', data)
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('userId', res.data.user.id)
    localStorage.setItem('userType', res.data.user.type)
    localStorage.setItem('username', res.data.user.username)

    if (res.data.user.type === 'owner') {
      localStorage.setItem('ownerState', res.data.user.state)
      localStorage.setItem('shopId', res.data.user.shop)
    }

    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/users/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updatePassword = async (data) => {
  try {
    const res = await Client.put('/users/reset-password', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get('/users/session')
    return res.data
  } catch (error) {
    throw error
  }
}
