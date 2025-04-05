<template>
  <MainLayout>
    <div class="container mt-4">
      <h1 class="mb-4">Dashboard de Pacientes</h1>
      <div class="list-group">
        <router-link
          v-for="patient in store.patients"
          :key="patient.id"
          :to="`/patient/${patient.id}`"
          class="list-group-item list-group-item-action"
        >
          {{ patient.name }} - {{ patient.age }} años
        </router-link>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { usePatientStore } from '@/stores/patientStore';
import MainLayout from '@/layouts/MainLayout.vue';

const store = usePatientStore();
store.fetchPatients();
</script>
