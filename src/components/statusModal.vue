<template>
  <div class="modal-backdrop" v-if="isVisible" @click.self="$emit('close')">
    <div class="modal-content" :class="statusClass">
      
      <div class="modal-icon">{{ statusIcon }}</div>

      <h3 class="modal-title">{{ title }}</h3>
      <p class="modal-message">{{ message }}</p>
      
      <button class="modal-close-button" @click="$emit('close')">OK</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatusModal',

  props: {
    isVisible: { type: Boolean, default: false },
    status: { type: String, required: true }, 
    title: { type: String, required: true },
    message: { type: String, required: true }
  },
  computed: {
  
    statusClass() {
      return `modal-${this.status}`;
    },

    statusIcon() {
      switch (this.status) {
        case 'success':
          return '✅';
        case 'error':
          return '❌';
        case 'sending':
          return '⏳';
        default:
          return 'ℹ️';
      }
    }
  }
}
</script>

<style scoped>

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; 
}

.modal-content {
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transform: scale(0.9);
  transition: all 0.3s ease-in-out;
}


.modal-success .modal-icon { color: #4CAF50; /* Verde */ }
.modal-error .modal-icon { color: #F44336; /* Vermelho */ }
.modal-sending .modal-icon { color: #FFC107; /* Amarelo */ }

.modal-icon {
  font-size: 3em;
  margin-bottom: 15px;
}

.modal-title {
  color: #333;
  margin-bottom: 10px;
}

.modal-message {
  color: #666;
  margin-bottom: 20px;
}

.modal-close-button {
  background-color: #8A0808;
  color: white;
  padding: 8px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}


.modal-sending .modal-icon {
    animation: pulse 1s infinite alternate;
}
@keyframes pulse {
  from { opacity: 1; }
  to { opacity: 0.5; }
}
</style>