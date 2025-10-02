<template>
  <AppHeader /> 
  
  <main class="servicos-page">
    
    <div class="page-title-container">
      <h1 class="page-title">serviços</h1>
    </div>

    <div class="servicos-content">

      <h2 class="section-title full-width">Serviços de Tecnologia</h2>
      

      <div class="service-item">
        <div class="service-details">
          <h3>Landing page</h3>
          <p>Uma landing page é uma página desenvolvida estrategicamente para converter visitantes em clientes, guiando-os a uma ação específica. Com um design atrativo, conteúdo persuasivo e estrutura otimizada, ela foca na comunicação direta e eficaz, destacando os principais benefícios da sua oferta e potencializando seus resultados.</p>
        </div>
        <span class="price-box">R$1500,00</span>
      </div>
      <hr class="item-separator">

      <div class="service-item">
        <div class="service-details">
          <h3>Desenvolvimento Web</h3>
          <p>O desenvolvimento web é o processo de criação, manutenção e otimização de sites e sistemas online, garantindo que sua empresa tenha uma presença digital eficiente, segura e de alto desempenho. Ele abrange tanto a parte visual e interativa, que proporciona uma boa experiência para os usuários, quanto a parte funcional, que processa dados, gerencia informações e conecta seu sistema a um banco de dados seguro.</p>
        </div>
        <router-link to="/contato" class="budget-button">REALIZAR ORÇAMENTO</router-link>
      </div>
      
      <h2 class="section-title full-width">Serviços de Engenharia</h2>
      

      <div class="service-item">
        <div class="service-details">
          <h3>Jardim Filtrante</h3>
          <p>Um jardim filtrante é um sistema natural de tratamento de águas residuais que utiliza plantas e substratos para filtrar e purificar a água. Ele funciona como uma solução sustentável para o tratamento de efluentes domésticos ou industriais, removendo impurezas por meio de processos biológicos, físicos e químicos. Além de ser eficiente e de baixo custo de manutenção, um jardim filtrante contribui para a preservação ambiental, promovendo a reutilização da água e a valorização paisagística do espaço.</p>
        </div>
        <span class="price-box">R$1500,00</span>
      </div>
      <hr class="item-separator">
      
      <div class="service-item">
        <div class="service-details">
          <h3>Desenvolvimento Web</h3>
          <p>O desenvolvimento web é o processo de criação, manutenção e otimização de sites e sistemas online, garantindo que sua empresa tenha uma presença digital eficiente, segura e de alto desempenho. Ele abrange tanto a parte visual e interativa, que proporciona uma boa experiência para os usuários, quanto a parte funcional, que processa dados, gerencia informações e conecta seu sistema a um banco de dados seguro.</p>
        </div>
        <span class="price-box">R$1500,00</span>
      </div>
      <hr class="item-separator">

      <div class="service-item">
        <div class="service-details">
          <h3>Manual de Boas Práticas</h3>
          <p>O Manual de Boas Práticas de Fabricação (BPF) é um documento essencial para garantir a qualidade e segurança dos seus produtos, estabelecendo padrões de higiene, armazenamento e produção conforme as normas sanitárias. Com um manual bem estruturado, sua produção se torna mais eficiente, reduzindo riscos de contaminação, desperdícios e problemas com fiscalização.</p>
        </div>
        <span class="price-box">R$1500,00</span>
      </div>
      <hr class="item-separator">
      
      <div class="service-item">
        <div class="service-details">
          <h3>Rotulagem Nutricional</h3>
          <p>A rotulagem nutricional deve seguir as exigências dos órgãos reguladores, como a Anvisa no Brasil, garantindo que as informações sejam claras, precisas e padronizadas. A legislação define quais dados devem estar no rótulo, como quantidade de calorias, macronutrientes, fibras, sódio e valores diários recomendados, além de regras específicas para alegações nutricionais, como "zero açúcar" ou "fonte de proteínas". Uma rotulagem bem-feita transmite credibilidade e valor ao seu produto, conquistando a confiança dos consumidores e te mantendo a par da legislação.</p>
        </div>
        <span class="price-box">R$1500,00</span>
      </div>
      <hr class="item-separator">

      <div class="service-item">
        <div class="service-details">
          <h3>Teste de Prateleira</h3>
          <p>O Manual de Boas Práticas de Fabricação (BPF) é um documento essencial para garantir a qualidade e segurança dos seus produtos, estabelecendo padrões de higiene, armazenamento e produção conforme as normas sanitárias. Com um manual bem estruturado, sua produção se torna mais eficiente, reduzindo riscos de contaminação, desperdícios e problemas com fiscalização.</p>
        </div>
        <span class="price-box">R$1500,00</span>
      </div>
      
      <div class="bottom-button-container">
        <router-link to="/contato" class="contact-team-button">Venha conversar com nossa equipe de vendas!</router-link>
      </div>

    </div>
  </main>
</template>

<script>
import AppHeader from '../components/header.vue'; 

export default {
  name: 'ServicosView',
  components: {
    AppHeader
  }
}
</script>

<style scoped>

.servicos-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: left;
}


.page-title-container {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
.page-title {
  background-color: #8A0808; 
  color: white;
  padding: 5px 15px;
  display: inline-block;
  font-size: 2.2em;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
}


.section-title {
  background-color: #8A0808; 
  color: white;
  padding: 5px 15px;
  display: inline-block;
  font-size: 1.4em;
  font-weight: bold;
  text-transform: uppercase;
  margin: 40px 0 20px 0;
}


.section-title.full-width {
    display: block; 
    width: 100%; 
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box; 
}


.section-separator {
  border: 0;
  height: 1px;
  background: #000; 
  margin: 0 0 30px 0;
}
.item-separator {
  border: 0;
  height: 1px;
  background: #000; 
  margin: 20px 0;
}



.service-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.service-details {
  flex-grow: 1; 
  margin-right: 20px;
}

.service-details h3 {
  font-size: 1.2em;
  color: #8A0808; 
  margin: 0 0 5px 0;
}

.service-details p {
  font-size: 0.9em;
  color: #555;
  line-height: 1.4;
  margin: 0;
}


.price-box,
.budget-button {
  display: inline-block;
  white-space: nowrap; 
  text-decoration: none;
  font-weight: bold;
  padding: 8px 15px;
  text-transform: uppercase;
  font-size: 0.9em;
  border-radius: 4px;
}


.price-box {
  background-color: #8A0808;
  color: white;
}


.budget-button {
  background-color: #333;
  color: white;
  transition: background-color 0.3s;
}
.budget-button:hover {
  background-color: #555;
}


.bottom-button-container {
    text-align: center;
    margin-top: 60px;
}

.contact-team-button {
    background-color: #8A0808;
    color: white;
    text-decoration: none;
    padding: 15px 40px;
    font-size: 1.1em;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 4px;
    transition: background-color 0.3s;
    display: inline-block;
}

.contact-team-button:hover {
    background-color: #6a0606;
}


@media (max-width: 768px) {
    .service-item {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 30px;
    }
    
    .service-details {
        margin-right: 0;
        margin-bottom: 10px;
    }

    .price-box,
    .budget-button {
        width: 100%; 
        text-align: center;
        padding: 12px 0;
    }
    
    .section-title {
        width: 100%;
        text-align: center;
    }
}
</style>