<template>
  
  <HeroSection />
  <ContentView />
  <AppFooter />
</template>

<script>


import HeroSection from '../components/HomePage/HeroSection.vue';
import ContentView from '../components/HomePage/content.vue';
import AppFooter from '../components/footer.vue';

export default {
  name: 'App',
 
  components: {
    
    HeroSection,
    ContentView,
    AppFooter
  }
}
</script>

<style >

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #F6E8CD;
}

main {
    
    text-align: center;
}
</style>

