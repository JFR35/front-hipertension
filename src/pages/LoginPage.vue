<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="login">
    <h1>Iniciar Sesión</h1>
    <button @click="router.push('/dashboard')">Entrar</button>
  </div>
</template>

<style scoped>
.login {
  text-align: center;
  margin-top: 100px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
}
</style>
