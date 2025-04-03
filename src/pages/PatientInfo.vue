<script setup lang="ts">
import { useRoute } from 'vue-router'
import { usePatientStore } from '@/stores/patientStore'

const route = useRoute()
const store = usePatientStore()
const patient = store.patients.find((p) => p.id === Number(route.params.id))
</script>

<template>
  <div class="container mt-5">
    <div v-if="patient" class="card">
      <div class="card-header bg-primary text-white">
        <h3>{{ patient.name }}</h3>
      </div>
      <div class="card-body">
        <p class="card-text"><strong>Edad:</strong> {{ patient.age }} años</p>
        <router-link to="/dashboard" class="btn btn-secondary">Volver al Dashboard</router-link>
      </div>
    </div>

    <div v-else class="alert alert-danger mt-4" role="alert">Paciente no encontrado</div>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
}

.card-header {
  text-align: center;
}

.card-body {
  text-align: center;
}

.alert {
  text-align: center;
}
</style>
