import { ERRORS } from '@/config/errors'
import axios from 'axios'
export const createUser = async (payload) => {
  try {
    const { data } = await axios.post('/api/users',
      { ...payload },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })

    return data
  } catch (error) {
    const code = error?.response?.data?.code || ERRORS.SERVER_ERROR

    if (code === ERRORS.EMAIL_REGISTER) return true

    const message = ERRORS.BAD_REQUEST ? 'Por favor, verifica que todos los datos esten correctos.' : 'Parece que tuvimos un problema para registar tus datos, por favor intenta nuevamente.'

    throw new Error(message)
  }
}

export const sendEmails = async (path) => {
  try {
    const { data } = await axios.post(`/api/emails/${path}`)

    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const sendEmail = async (id, path) => {
  try {
    const { data } = await axios.post(`/api/emails/${id}/${path}`)

    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const getVideo = async (token) => {
  try {
    const { data } = await axios.post('/api/verifyToken',
      { token },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })

    return data
  } catch (error) {
    throw new Error(error?.response?.data?.message || ERRORS.BAD_REQUEST)
  }
}
