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

html, body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
 
  overflow: auto; 
}

.main-content {
  
  padding-top: 100px; 
}
</style>