<template>
    <section class="hero-section">
        <div class="hero-content">
            <h1 class="hero-title">Cinética Junior</h1>
            <p class="hero-subtitle">Inteligência em Movimento</p>

            <div class="circles-container">
                <div class="circles-track-continuous">
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
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
}

.hero-content {
  text-align: center;
  z-index: 2;
  position: relative;
  padding-bottom: 100px; 
}



.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #8A0808;
}

.hero-subtitle {
  font-size: 1rem;
  color: #8A0808;
  margin-bottom: 4rem; 
}

.circles-container {
  position: absolute;
  bottom: 50px; 
  left: 0;
  width: 100%;
  height: 60px;
  overflow: hidden;
  z-index: 2100;
}

.circles-track {
  display: flex;
  position: absolute;
  align-items: center;
  gap: 50px;
  height: 100%;
  animation: moveCirclesFast 6s linear infinite;
}

.circle {
  border-radius: 50%;
  flex-shrink: 0;
  
}

.circle-1 {
  width: 40px;
  height: 40px;
  background: linear-gradient(45deg,#8A0808, #8A0808); 
  border: 3px solid white; 
  box-shadow: 0 0 10px rgba(255, 107, 107, 0.5); 
}

.circle-2 {
  width: 35px;
  height: 35px;
  background: linear-gradient(45deg, #8A0808, #8A0808); 
  border: 7px solid white; 
  box-shadow: 0 0 10px rgba(128, 34, 34, 0.5); 
}


.circle-3 {
  width: 40px;
  height: 40px;
  background: white; 
  border: 1px solid #f0f0f0; 
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
}

@keyframes moveCirclesFast {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Versão alternativa - movimento mais suave */
.circles-track-continuous {
  display: flex;
  position: absolute;
  align-items: center;
  gap: 50px;
  height: 100%;
  animation: moveContinuous 5s linear infinite;
}

@keyframes moveContinuous {
  0% {
    transform: translateX(-150px);
  }
  100% {
    transform: translateX(calc(100vw + 150px));
  }
}

/* Responsividade */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 3rem;
  }
  
  .hero-content {
    padding-bottom: 80px;
  }
  
  .circles-container {
    bottom: 40px;
    height: 50px;
  }
  
  .circle-1 {
    width: 30px;
    height: 30px;
  }
  
  .circle-2 {
    width: 20px;
    height: 20px;
  }
  
  .circle-3 {
    width: 25px;
    height: 25px;
  }
  
  .circles-track,
  .circles-track-continuous {
    gap: 30px;
  }
}
</style>
