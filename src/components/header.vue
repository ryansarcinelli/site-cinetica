<template>
  <header class="app-header">
    <div class="header-content">
      <router-link to="/" class="site-logo-link">
        <img src="../../public/imagens/logoCinetica.png" alt="Logo do Site" class="site-logo">
      </router-link>
      
      <button 
        class="menu-toggle" 
        @click="isMenuOpen = !isMenuOpen" 
        aria-label="Abrir Menu"
      >
        {{ isMenuOpen ? '✕' : '☰' }}
      </button>
      
      <nav 
        class="navigation" 
        :class="{ 'is-active': isMenuOpen }"
        @click="closeMenu"
      >
        <a href="#" @click.prevent="scrollTo('quem-somos')">Sobre nós</a>
        <router-link to="/servicos">Serviços</router-link>
        <router-link to="/feedback">Feedback</router-link>
        <router-link to="/contato">Fale conosco</router-link>
        <router-link to="/portfolio">Portfólio</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isMenuOpen: false 
    };
  },
  methods: {
   
    closeMenu() {
      this.isMenuOpen = false;
    },
    
    scrollTo(sectionId) {
      
      if (this.$route.path === '/') {
       
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        
        this.$router.push(`/#${sectionId}`);
      }
    }
  }
}
</script>

<style scoped>

.app-header {
  background-color: #8A0808; 
  color: #fff; 
  padding: 20px 0; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  width: 100vw;
  margin-left: calc(50% - 50vw); 
 
  left: 0;
 
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.header-content {
  max-width: 1800px; 
  margin: 0 auto; 
  padding: 0 10px; 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
}


.site-logo-link {
  text-decoration: none; 
  display: flex; 
  align-items: center;
}
.site-logo {
  height: 60px; 
  width: auto; 
  display: block; 
}

.navigation {
  display: flex;
  align-items: center;
}


.navigation a, .navigation .router-link-active {
  color: #fff;
  text-decoration: none;
  margin-left: 5px; 
  padding: 5px 30px; 
  transition: color 0.3s ease; 
  cursor: pointer;
}
.navigation a:hover {
  color: #ffffffbe; 
}


.menu-toggle {
    display: none; 
}


@media (max-width: 768px) {
    
    
    .header-content {
        justify-content: space-between; 
        flex-direction: row; 
    }

    
    .menu-toggle {
        display: block; 
        background: none;
        border: none;
        color: #fff;
        font-size: 2.2em; 
        cursor: pointer;
        z-index: 1000;
    }

 
    .navigation {
        display: none; 
        
        
        position: fixed; 
        top: 100px; 
        left: 0;
        width: 100%;
        height: calc(100vh - 100px); 
        background-color: #8A0808; 
        flex-direction: column; 
        align-items: center;
        padding: 20px 0;
        z-index: 1001;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    
    .navigation.is-active {
        display: flex; 
    }
    
    .navigation a {
        padding: 15px 30px; 
        margin: 10px 0;
        width: 80%; 
        text-align: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
}
</style>