<template>
  <AppHeader /> 
  
  <main>

    <HeroSection />


   
    </main>
</template>

<script>

import AppHeader from '../components/header.vue';
import HeroSection from '../components/HomePage/HeroSection.vue';

export default {
  name: 'App',
 
  components: {
    AppHeader,
    HeroSection
  }
}
</script>

<style>

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #F6E8CD;
}

main {
    padding: 20px;
    text-align: center;
}
</style>