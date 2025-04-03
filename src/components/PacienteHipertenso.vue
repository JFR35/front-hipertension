<template>
  <div class="container">
    <h1>Paciente Hipertenso</h1>
    <button @click="cargarDatos" class="btn btn-primary">Cargar Datos</button>
    <div v-if="datos">
      <pre>{{ datos }}</pre>
    </div>
    <div v-if="error">
      <p class="text-danger">{{ error }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import api from '../services/axios.ts'

export default {
  data() {
    return {
      datos: null,
      error: null as string | null,
    }
  },
  methods: {
    async cargarDatos() {
      try {
        const respuesta = await api.get('/paciente/1')
        this.datos = respuesta.data
        this.error = null
      } catch (error) {
        this.datos = null
        if (error instanceof Error) {
          this.error = error.message
        } else {
          this.error = 'Ocurrió un error desconocido.'
        }
      }
    },
  },
}
</script>
