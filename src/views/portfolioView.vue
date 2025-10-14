<template>
    
  <section id="projects" class="portfolio-page">
    <div class="page-title-container">
      <h2 class="page-title">Portfólio</h2>
    </div>

    <div class="projects-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <div class="project-image-container">
          <img
            :src="project.image"
            :alt="project.title"
            class="project-image"
          />
        </div>
        <div class="project-details">
          <div class="project-tags">
            <span
              v-for="(tag, key) in project.tags"
              :key="key"
              class="project-tag"
            >
              {{ tag }}
            </span>
          </div>

          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">
            {{ project.description }}
          </p>

          <div class="project-links">
            <a
              v-if="project.demourl"
              :href="project.demourl"
              target="_blank"
              class="project-link"
              title="Demo"
            >
              🔗
            </a>
            <a
              v-if="project.githuburl"
              :href="project.githuburl"
              target="_blank"
              class="project-link"
              title="GitHub"
            >
              🐙
            </a>
          </div>
        </div>
      </div>
    </div>

    
  </section>
</template>

<script setup>
import { ref } from "vue";


const projects = [
  {
    id: 1,
    title: "Este Portfólio",
    description: "Descrição do Projeto 1.",
    image: "/imagens/placeholder.png ",
    tags: ["Vue.js", "CSS"],
    demourl: "",
  },
  {
    id: 2,
    title: "Projeto 2",
    description: "Descrição do Projeto 2.",
    image: "/imagens/placeholder.png ",
    tags: ["HTML", "CSS", "JavaScript"],
    demourl: "",
    githuburl: "",
  },
  {
    id: 3,
    title: "Projeto 3",
    description: "Descrição do Projeto 3.",
    image: "/imagens/placeholder.png ",
    tags: ["React", "Node.js"],
    demourl: "",
    githuburl: "",
  },
  {
    id: 4,
    title: "Projeto 4",
    description: "Descrição do Projeto 4.",
    image: "/imagens/placeholder.png ",
    tags: ["Python", "Django"],
    demourl: "",
    githuburl: "",
  },
  {
    id: 5,
    title: "Projeto 5",
    description: "Descrição do Projeto 5.",
    image: "/imagens/placeholder.png ",
    tags: ["Java", "Spring Boot"],
    demourl: "",
    githuburl: "",
  },
];
</script>

<style scoped>
/* Estilos globais do portfolio */
.portfolio-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: left;
  background-color: #f6e8cd; /* Cor de fundo adaptada do contato-page */
}

/* Estilos do título da página */
.page-title-container {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 30px;
  border-bottom: 1px solid #ccc; /* Linha divisória adaptada */
  padding-bottom: 10px;
}

.page-title {
  color: #8a0808;
  padding: 5px 15px;
  display: inline-block;
  font-size: 2.2em;
  font-weight: bold;
  text-transform: uppercase;
}

/* Estilos da grade de projetos */
.projects-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 30px; /* Espaçamento entre os cards */
  justify-content: center;
  margin-top: 50px;
}

/* Estilos de cada card de projeto */
.project-card {
  background-color: #fff; /* Fundo branco para os cards */
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Sombra mais suave */
  width: 100%; /* Default para mobile */
  transition: transform 0.3s ease-in-out;
  flex: 1 1 300px; /* Flexbox para layout responsivo */
  max-width: calc(33.333% - 20px); /* 3 itens por linha com gap */
  box-sizing: border-box; /* Garante que padding e border estão dentro do width */
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image-container {
  height: 200px; /* Altura fixa para a imagem */
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

.project-details {
  padding: 20px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

.project-tag {
  background-color: rgba(138, 8, 8, 0.1); /* Cor de tag adaptada */
  color: #8a0808;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8em;
  font-weight: 500;
}

.project-title {
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 5px;
  color: #333;
}

.project-description {
  font-size: 0.9em;
  color: #666;
  margin-bottom: 15px;
  line-height: 1.5;
}

.project-links {
  display: flex;
  justify-content: flex-end; /* Alinha links à direita */
  gap: 15px;
  font-size: 1.2em; /* Tamanho dos ícones */
}

.project-link {
  color: #8a0808;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: #333;
}

/* Botão "Veja meu Github" */
.github-button-container {
  text-align: center;
  margin-top: 50px;
}

.github-button {
  background-color: #8a0808;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: background-color 0.3s ease;
}

.github-button:hover {
  background-color: #5f0606;
}

/* Media Queries para responsividade */
@media (max-width: 1024px) {
  .project-card {
    max-width: calc(50% - 20px); /* 2 itens por linha */
  }
}

@media (max-width: 768px) {
  .projects-grid {
    gap: 20px;
  }
  .project-card {
    max-width: 100%; /* 1 item por linha */
  }

  .page-title {
    font-size: 1.8em;
  }
}

@media (max-width: 480px) {
  .portfolio-page {
    padding: 20px 15px;
  }

  .project-details {
    padding: 15px;
  }

  .project-title {
    font-size: 1.3em;
  }

  .project-description {
    font-size: 0.85em;
  }

  .github-button {
    width: 100%;
    padding: 10px 15px;
    font-size: 1em;
  }
}
</style>
