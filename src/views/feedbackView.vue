<template>
  <section id="feedbacks" class="feedback-page">
    <div class="page-title-container">
      <h2 class="page-title">Feedbacks</h2>
    </div>

    <div class="feedback-carousel">
      <div class="carousel-nav">
        <span @click="previousFeedback" class="nav-arrow">←</span>
        <span @click="nextFeedback" class="nav-arrow">→</span>
      </div>

      <transition :name="transitionName" mode="out-in">
        <div v-if="currentFeedback" class="feedback-card" :key="currentFeedback.id">
          <div class="feedback-image-placeholder"></div>
          <div class="feedback-content">
            <p class="feedback-text">"{{ currentFeedback.text }}"</p>
            <p class="feedback-author">{{ currentFeedback.author }}</p>
            <p class="feedback-role">{{ currentFeedback.role }}</p>
          </div>
        </div>
      </transition>

      <div class="carousel-indicators">
        <span
          v-for="(feedback, index) in feedbacks"
          :key="feedback.id"
          @click="goToFeedback(index)"
          :class="{ active: index === currentIndex }"
          class="indicator-dot"
        ></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const feedbacks = ref([
  { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", author: "Giorgian de Arrascaeta", role: "Diretor sei la o que - 2024", image: "/imagens/placeholder-avatar.png", },
  { id: 2, text: "A equipe foi extremamente profissional e entregou o projeto antes do prazo. Estamos muito satisfeitos com o resultado final e a qualidade do trabalho.", author: "Gabriel Barbosa", role: "CEO da Gávea - 2023", image: "/imagens/placeholder-avatar.png", },
  { id: 3, text: "Uma experiência de colaboração fantástica. A comunicação foi clara e eficiente durante todo o processo. Recomendo fortemente os seus serviços.", author: "Bruno Henrique", role: "CTO da Ninho Corp - 2025", image: "/imagens/placeholder-avatar.png", },
]);

const currentIndex = ref(0);
const currentFeedback = computed(() => feedbacks.value[currentIndex.value]);
const AUTOPLAY_INTERVAL = 5000;
let intervalId = null;

// --- NOVA LÓGICA DE TRANSIÇÃO ---
// Variável para guardar o nome da animação (slide-left ou slide-right)
const transitionName = ref('slide-left');

const startAutoplay = () => {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    nextFeedback();
  }, AUTOPLAY_INTERVAL);
};

const nextFeedback = () => {
  // Define a animação para a DIREITA antes de trocar o slide
  transitionName.value = 'slide-left';
  currentIndex.value = (currentIndex.value + 1) % feedbacks.value.length;
};

const previousFeedback = () => {
  // Define a animação para a ESQUERDA antes de trocar o slide
  transitionName.value = 'slide-right';
  currentIndex.value = (currentIndex.value - 1 + feedbacks.value.length) % feedbacks.value.length;
  startAutoplay();
};

const goToFeedback = (index) => {
  // Define a direção da animação comparando os índices
  if (index > currentIndex.value) {
    transitionName.value = 'slide-left';
  } else {
    transitionName.value = 'slide-right';
  }
  currentIndex.value = index;
  startAutoplay();
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.feedback-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #f6e8cd;
  text-align: left;
}
.page-title-container {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 30px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
.page-title {
  background-color: #8A0808; 
  color: #f6e8cd;
  padding: 5px 15px;
  display: inline-block;
  font-size: 2.2em;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
}
.feedback-carousel {
  width: 100%;
  max-width: 900px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  /* Adicionado para conter a animação */
  position: relative;
  overflow-x: hidden;
}
.carousel-nav {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  margin-bottom: 10px;
}
.nav-arrow {
  font-size: 1.5em;
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease;
}
.nav-arrow:hover {
  color: #8a0808;
}
.feedback-card {
  background-color: transparent;
  border: 1px solid #c9c0b1;
  border-radius: 8px;
  padding: 25px 30px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
  box-sizing: border-box;
}
.feedback-image-placeholder {
  width: 100px;
  height: 100px;
  background-color: #e0e0e0;
  border-radius: 4px;
  flex-shrink: 0;
}
.feedback-content {
  text-align: left;
}
.feedback-text {
  font-size: 1em;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.6;
  font-style: italic;
}
.feedback-author {
  font-size: 1.1em;
  font-weight: bold;
  color: #8a0808;
  margin: 0;
}
.feedback-role {
  font-size: 0.9em;
  color: #666;
  margin: 4px 0 0 0;
}
.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 25px;
}
.indicator-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #8a0808;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.indicator-dot.active {
  background-color: #8a0808;
}

@media (max-width: 768px) {
  .feedback-card {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: 20px;
  }
  .feedback-content {
    width: 100%;
  }
  .page-title {
    font-size: 1.8em;
  }
}

/* --- NOVOS ESTILOS DE ANIMAÇÃO (SLIDE) --- */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.4s ease-out;
}

/* Animação para AVANÇAR (slide-left) */
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Animação para VOLTAR (slide-right) */
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>