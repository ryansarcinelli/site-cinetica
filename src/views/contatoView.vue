<template>
  <AppHeader /> 
  
  <main class="contato-page">
    
    <div class="page-title-container">
      <h1 class="page-title">contato</h1>
    </div>

    <div class="contato-content">

      <section class="info-section">
        <h2>Cinética Jr</h2>
        <hr class="separator">

        <div class="contact-details">
          <p>
            <span class="icon-text">📍</span> Alegre - ES - Brasil
          </p>
          <p>
            <span class="icon-text">📞</span> 25 99 99 999 99
          </p>
          <p>
            <span class="icon-text">✉️</span> comercialcineticajunior@gmail.com
          </p>
          <p>
            <span class="icon-text">📷</span> instagram.com/cineticajunior
          </p>
        </div>
      </section>

      <section class="form-section">
        <form @submit.prevent="submitForm">
          
          <div class="form-group">
            <label for="nome">Nome*</label>
            <input type="text" id="nome" required>
          </div>
          
          <div class="form-group">
            <label for="email">Email*</label>
            <input type="email" id="email" required>
          </div>
          
          <div class="form-group">
            <label for="como-conheceu">Como conheceu a Cinética?</label>
            <input type="text" id="como-conheceu">
          </div>
          
          <div class="form-group">
            <label for="mensagem">Mensagem*</label>
            <textarea id="mensagem" rows="6" required></textarea>
          </div>

          <button type="submit" class="submit-button">Enviar</button>
        </form>
      </section>
    </div>


  </main>
</template>

<script>

import AppHeader from '../components/header.vue'; 

export default {
  name: 'ContatoView',
  components: {
    AppHeader
  },
  methods: {
    
    submitForm() {
      alert('Formulário enviado! (A lógica de envio real deve ser implementada aqui.)');
      // LOGICA DE ENVIO DO FORMULARIO ... FAZER ;( ...
     
    }
  }
}
</script>

<style scoped>

.contato-page {
 
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: left; 
}


.page-title-container {
  display: flex;
  align-items: center;
  gap: 5px; 
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
}




.contato-content {
  display: flex;
  justify-content: space-between;
  gap: 80px; 
  margin-top: 50px;
}


.info-section {
  flex: 1; 
  max-width: 40%; 
}

.info-section h2 {
  font-size: 1.8em;
  margin-bottom: 5px;
  color: #8A0808;
}

.separator {
  border: 0;
  height: 1px;
  background: #ccc;
  margin: 10px 0 20px 0;
}

.contact-details p {
  line-height: 1.8;
  color: #555;
}

.icon-text {
  font-size: 1.2em;
  margin-right: 5px;
  color: #8A0808; 
}


.form-section {
  flex: 1.5; 
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-weight: bold;
  font-size: 0.9em;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  box-sizing: border-box; 
  font-family: Arial, sans-serif;
  font-size: 1em;
  background-color: #F6E8CD;
}

textarea {
  resize: vertical; 
}

.submit-button {
  background-color: #8A0808;
  color: white;
  padding: 10px 30px;
  border: none;
  cursor: pointer;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: bold;
  float: right; 
}



@media (max-width: 768px) {
    .contato-content {
        
        flex-direction: column;
        gap: 40px;
    }

    .info-section {
        max-width: 100%; 
    }
    
    .submit-button {
        float: none; 
        width: 100%; 
    }
}
</style>