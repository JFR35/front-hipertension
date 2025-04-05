<script lang="ts">
export default {
  name: 'AppHeader',
}
</script>

<template>
  <header class="bg-primary text-white p-4 shadow">
    <div class="container">
      <h1 class="m-0">Sistema de Gestión de Pacientes</h1>
    </div>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>
