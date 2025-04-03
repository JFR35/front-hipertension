// src/axios.ts
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8085/api', // Reemplaza con tu URL base
  headers: {
    'Content-Type': 'application/json',
    // Aquí puedes añadir otros headers como tokens de autenticación
  },
})

export default api
