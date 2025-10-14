<template>
  <AppHeader />
  <section id="feedbacks" class="feedback-page">
    <div class="page-title-container">
      <h2 class="page-title">Feedbacks</h2>
    </div>

    <div class="feedback-carousel">
      <div class="carousel-nav">
        <span @click="previousFeedback" class="nav-arrow">←</span>
        <span @click="nextFeedback" class="nav-arrow">→</span>
      </div>

      <div v-if="currentFeedback" class="feedback-card">
        <div class="feedback-image-placeholder">
          </div>
        <div class="feedback-content">
          <p class="feedback-text">"{{ currentFeedback.text }}"</p>
          <p class="feedback-author">{{ currentFeedback.author }}</p>
          <p class="feedback-role">{{ currentFeedback.role }}</p>
        </div>
      </div>

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
import { ref, computed } from "vue";
import AppHeader from '../components/header.vue'; // Verifique se o caminho está correto

// Dados mocados para os feedbacks
const feedbacks = ref([
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Giorgian de Arrascaeta",
    role: "Diretor sei la o que - 2024",
    image: "/imagens/placeholder-avatar.png", // Caminho para a imagem do autor
  },
  {
    id: 2,
    text: "A equipe foi extremamente profissional e entregou o projeto antes do prazo. Estamos muito satisfeitos com o resultado final e a qualidade do trabalho.",
    author: "Gabriel Barbosa",
    role: "CEO da Gávea - 2023",
    image: "/imagens/placeholder-avatar.png",
  },
  {
    id: 3,
    text: "Uma experiência de colaboração fantástica. A comunicação foi clara e eficiente durante todo o processo. Recomendo fortemente os seus serviços.",
    author: "Bruno Henrique",
    role: "CTO da Ninho Corp - 2025",
    image: "/imagens/placeholder-avatar.png",
  },
]);

// Lógica do Carrossel
const currentIndex = ref(0);

const currentFeedback = computed(() => feedbacks.value[currentIndex.value]);

const nextFeedback = () => {
  currentIndex.value = (currentIndex.value + 1) % feedbacks.value.length;
};

const previousFeedback = () => {
  currentIndex.value = (currentIndex.value - 1 + feedbacks.value.length) % feedbacks.value.length;
};

const goToFeedback = (index) => {
  currentIndex.value = index;
};
</script>

<style scoped>
/* Estilos principais da página, adaptados do portfolio-page */
.feedback-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #f6e8cd; /* Mesma cor de fundo */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o conteúdo da página */
}

/* Estilos do título da página, reutilizados do portfolio */
.page-title-container {
  width: 100%;
  max-width: 900px; /* Alinha com a largura do card */
  display: flex;
  align-items: center;
  margin-bottom: 20px; /* Reduzido para aproximar do carrossel */
}

.page-title {
  color: #8a0808;
  font-size: 2.2em;
  font-weight: bold;
  text-transform: uppercase;
}

/* Container principal do carrossel */
.feedback-carousel {
  width: 100%;
  max-width: 900px; /* Largura máxima do componente de feedback */
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Navegação por setas */
.carousel-nav {
  width: 100%;
  display: flex;
  justify-content: flex-start; /* Alinha à esquerda como na imagem */
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

/* Estilo do card de feedback */
.feedback-card {
  background-color: transparent; /* Fundo transparente */
  border: 1px solid #c9c0b1; /* Borda sutil */
  border-radius: 8px;
  padding: 25px 30px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 30px; /* Espaço entre a imagem e o texto */
  box-sizing: border-box;
}

/* Placeholder para a imagem do autor */
.feedback-image-placeholder {
  width: 100px;
  height: 100px;
  background-color: #e0e0e0; /* Cinza claro para o placeholder */
  border-radius: 4px;
  flex-shrink: 0; /* Impede que o placeholder encolha */
}

/* Conteúdo de texto do feedback */
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
  color: #8a0808; /* Cor de destaque */
  margin: 0;
}

.feedback-role {
  font-size: 0.9em;
  color: #666;
  margin: 4px 0 0 0;
}

/* Indicadores de paginação (bolinhas) */
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
  background-color: #8a0808; /* Ponto ativo preenchido */
}

/* Responsividade */
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
</style>