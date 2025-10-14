<template>
    <footer class="app-footer">
        <div class="footer-content">
            <p>&copy; 2025 Cinetica. Todos os direitos reservados.</p>
            <nav class="footer-nav">
                <a href="#" @click.prevent="scrollTo('quem-somos')">Sobre nós</a>
                <router-link to="/servicos">Serviços</router-link>
                <router-link to="/feedback">Feedback</router-link>
                <router-link to="/contato">Fale conosco</router-link>
                <router-link to="/portfolio">Portfólio</router-link>
            </nav>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.app-footer {
    background-color: #8A0808;
    color: #F6E8CD;
    text-align: center;
    padding: 50px 0;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.footer-nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap; 
    margin-top: 20px;
    gap: 10px 30px; 
}

.footer-nav a {
    color: #F6E8CD;
    text-decoration: none;
    
}

.footer-nav a:hover {
    text-decoration: underline;
}


@media (max-width: 768px) {
    .app-footer {
        
        padding: 30px 20px;
    }

    .footer-nav {
      
        flex-direction: column;
       
        gap: 15px;
       
        align-items: center;
    }

    .footer-content p {
        
        font-size: 0.9em;
    }
}
</style>