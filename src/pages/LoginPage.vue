<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');

const handleLogin = () => {
  // Aquí iría la lógica de autenticación
  router.push('/dashboard');
};
</script>

<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card" style="width: 400px;">
      <div class="card-body p-4">
        <h1 class="h3 mb-4 text-center">Iniciar Sesión</h1>

        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="email"
            placeholder="usuario@ejemplo.com"
          />
        </div>

        <div class="mb-4">
          <label for="password" class="form-label">Contraseña</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="password"
            placeholder="••••••••"
          />
        </div>

        <button
          @click="handleLogin"
          class="btn btn-primary w-100 py-2"
        >
          Entrar
        </button>
      </div>
    </div>
  </div>
</template>
