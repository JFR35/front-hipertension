<template>
  <div class="layout">
    <Header />
    <Navbar />

    <main class="flex-grow 1">
      <slot /> <!-- Aquí se carga el contenido de cada página -->
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
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
