<template>
  <div class="layout">
    <AppHeader />
    <AppNavbar />

    <main class="flex-grow 1">
      <slot /> <!-- Aquí se carga el contenido de cada página -->
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">

import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue'
import AppNavbar from '@/components/AppNavbar.vue'
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
}
</style>
