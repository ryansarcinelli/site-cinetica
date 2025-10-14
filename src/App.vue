<template>
  <div>
    <AppHeader />
    <main class="main-content">
      <router-view/>
    </main>
  </div>
</template>

<script>
import AppHeader from './components/header.vue';

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>
/* Estilos globais para a aplicação */
html, body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  /* Permitimos a rolagem normal no body novamente */
  overflow: auto; 
}

/* Esta é a regra principal para as páginas de conteúdo */
.main-content {
  /* Isso conserta TODAS as páginas (Portfolio, Feedback, etc.) */
  padding-top: 100px; /* Use a altura exata do seu header */
}
</style>