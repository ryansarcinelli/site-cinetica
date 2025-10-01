<template>
  <AppHeader />

  <main class="contato-page">
    <div class="page-title-container">
      <h1 class="page-title">contato</h1>
    </div>

    <div class="contato-content">
      <section class="info-section">
        <h2>Cinética Jr</h2>
        <hr class="separator" />

        <div class="contact-details">
          <p><span class="icon-text">📍</span> Alegre - ES - Brasil</p>
          <p><span class="icon-text">📞</span> (28) 99946-0521</p>
          <p>
            <span class="icon-text">✉️</span> comercialcineticajunior@gmail.com
          </p>
          <p><span class="icon-text">📷</span> instagram.com/cineticajunior</p>
        </div>
      </section>

      <section class="form-section">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="nome">Nome*</label>
            <input type="text" id="nome" v-model="formData.nome" required />
          </div>

          <div class="form-group">
            <label for="email">Email*</label>
            <input type="email" id="email" v-model="formData.email" required />
          </div>

          <div class="form-group">
            <label for="como-conheceu">Como conheceu a Cinética?</label>
            <input
              type="text"
              id="como-conheceu"
              v-model="formData.comoConheceu"
            />
          </div>

          <div class="form-group">
            <label for="mensagem">Mensagem*</label>
            <textarea
              id="mensagem"
              rows="6"
              v-model="formData.message"
              required
            ></textarea>
          </div>

          <button type="submit" class="submit-button" :disabled="isSubmitting">
            {{ isSubmitting ? "Enviando..." : "Enviar" }}
          </button>
        </form>
      </section>
    </div>
  </main>

  <StatusModal
    :is-visible="modal.isVisible"
    :status="modal.status"
    :title="modal.title"
    :message="modal.message"
    @close="closeModal"
  />
</template>

<script>
import AppHeader from "../components/header.vue";

import axios from "axios";
import StatusModal from "../components/StatusModal.vue";

export default {
  name: "ContatoView",
  components: {
    AppHeader,
    StatusModal,
  },
  data() {
    return {
      formData: {
        nome: "",
        email: "",
        comoConheceu: "",
        message: "",
      },
      isSubmitting: false,

      modal: {
        isVisible: false,
        status: "sending",
        title: "",
        message: "",
      },
    };
  },
  methods: {
    showModal(status, title, message) {
      this.modal.status = status;
      this.modal.title = title;
      this.modal.message = message;
      this.modal.isVisible = true;
    },

    closeModal() {
      this.modal.isVisible = false;
    },

    async submitForm() {
      if (this.isSubmitting) return;

      this.isSubmitting = true;
      this.showModal(
        "sending",
        "Enviando Mensagem",
        "Por favor, aguarde enquanto processamos seu formulário."
      );

      const EMAIL_ACCESS_KEY = import.meta.env.VITE_EMAIL_ACCESS_KEY;
      const ENDPOINT_DE_EMAIL = import.meta.env.VITE_ENDPOINT_DE_EMAIL;

      const payload = {
        ...this.formData,
        email_access_key: EMAIL_ACCESS_KEY,
        subject: `Nova mensagem de contato de ${this.formData.nome}`,

        botcheck: false,
      };

      try {
        const response = await axios.post(ENDPOINT_DE_EMAIL, payload);

        if (response.data.success) {
          this.showModal(
            "success",
            "Sucesso!",
            "Sua mensagem foi enviada! Responderemos em breve."
          );
          this.formData = {
            nome: "",
            email: "",
            comoConheceu: "",
            message: "",
          };
        } else {
          this.showModal(
            "error",
            "Erro no Envio",
            response.data.message || "Houve uma falha interna no envio."
          );
        }
      } catch (error) {
        console.error("Erro de comunicação:", error);
        this.showModal(
          "error",
          "Falha na Comunicação",
          "Não foi possível conectar ao servidor de envio. Verifique sua chave."
        );
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
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
  margin-bottom: 30px;
}

.page-title {
  background-color: #8a0808;
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
  color: #8a0808;
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
  color: #8a0808;
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
  background-color: #f6e8cd;
}

textarea {
  resize: vertical;
}

.submit-button {
  background-color: #8a0808;
  color: white;
  padding: 10px 30px;
  border: none;
  cursor: pointer;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: bold;

  display: block;
  margin-left: auto;
  margin-top: 20px;
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
    width: 100%;
    margin-left: 0;
  }
}
</style>
