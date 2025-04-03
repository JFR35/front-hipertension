import axios, { type AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: 'http://tu-backend-api.com/api', // Reemplaza con la URL de tu backend
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
