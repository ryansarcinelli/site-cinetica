<template>
    <section class="hero-section">
        <div class="hero-content">
            <h1 class="hero-title">Cinética Junior</h1>
            <p class="hero-subtitle">Inteligência em Movimento</p>
            
            <div class="circles-container">
                <div class="circles-track">
                 
                    <div class="circle circle-1"></div>
                    <div class="circle circle-2"></div>
                    <div class="circle circle-3"></div>
                    
                  
                    <div class="circle circle-1"></div>
                    <div class="circle circle-2"></div>
                    <div class="circle circle-3"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>



.hero-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #F6E8CD;
    padding: 20px;
    position: relative;
    overflow: hidden;
}

.hero-content {
    text-align: center;
    
}

.hero-title {
    font-size: 48px;
    color: #8A0808;
    margin-bottom: 30px; /* Reduzido o espaçamento */
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}
.hero-subtitle{
    font-size: 18px;
    color: #A52A2A;
    margin-bottom: 40px; /* Reduzido o espaçamento */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.circles-container {
    width: 100%;
    max-width: 500px; /* Container menor */
    overflow: hidden;
    position: relative;
    margin-top: 0; /* Removido margin extra */
}

.circles-track {
    display: flex;
    animation: scroll 1s linear infinite; /* Mais rápido */
}

.circle {
    width: 80px; /* Círculos menores */
    height: 80px;
    border-radius: 50%;
    margin: 0 20px;
    flex-shrink: 0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.circle-1 {
    background-color: #8A0808;
}

.circle-2 {
    background-color: #A52A2A;
}

.circle-3 {
    background-color: #8B0000;
}

@keyframes scroll {
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(20%);
    }
}

/* Responsividade */
@media (max-width: 768px) {
    .hero-title {
        font-size: 36px;
        margin-bottom: 30px;
    }
    
    .circle {
        width: 60px;
        height: 60px;
        margin: 0 15px;
    }
    
    .circles-container {
        max-width: 400px;
    }
}
</style>