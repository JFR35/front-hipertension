import { defineStore } from 'pinia'
import api from '../axios'

interface Patient {
  id: number
  name: string
  age: number
  // Agrega otros campos según necesites
}

export const usePatientStore = defineStore('patientStore', {
  state: () => ({
    patients: [] as Patient[],
  }),
  actions: {
    async fetchPatients() {
      try {
        const response = await api.get<Patient[]>('/patients')
        this.patients = response.data.map((patient) => ({
          id: patient.id,
          name: patient.name,
          age: patient.age,
        }))
      } catch (error) {
        console.error('Error fetching patients:', error)
      }
    },
  },
})
