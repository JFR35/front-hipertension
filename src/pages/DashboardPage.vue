<script setup lang="ts">
import { onMounted } from 'vue'
import { usePatientStore } from '@/stores/patientStore'

const store = usePatientStore()

onMounted(() => {
  store.fetchPatients() // Obtiene los pacientes desde el backend de Spring Boot
})
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <ul>
      <li v-for="patient in store.patients" :key="patient.id">
        {{ patient.name }} - {{ patient.age }} años
      </li>
    </ul>
  </div>
</template>
