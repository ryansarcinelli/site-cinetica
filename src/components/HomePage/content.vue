<template>
  <main class="content-page">
    
    <div class="page-title-container reveal-on-scroll">
      <h1 class="page-title">o que é uma empresa júnior</h1>
    </div>

    <div class="content-section reveal-on-scroll">
      <p>Uma Empresa Júnior é uma organização sem fins lucrativos formada e gerenciada por estudantes universitários, com o objetivo de aplicar na prática os conhecimentos adquiridos na graduação.</p>
      <p>Operam dentro das universidades, com a orientação de professores e profissionais da área. Elas funcionam como uma empresa real, com CNPJ, estrutura organizacional, execução de serviços e cultura interna, mas oferecem serviços com valores abaixo do mercado.</p>
    </div>

    <hr class="section-separator reveal-on-scroll">

    <div id="quem-somos" class="page-title-container reveal-on-scroll">
      <h1 class="page-title">quem somos</h1>
    </div>

    <div  class="content-section reveal-on-scroll">
      <p>A Cinética é a Empresa Júnior de Engenharia e Tecnologia da UFES, especializada em oferecer soluções tecnológicas, industriais e ambientais para empresas e empreendedores.</p>
      <p>Composta por estudantes das áreas de TI e engenharia de alimentos, químicas, florestais e madeireira, a Cinética aplica o conhecimento acadêmico na prática, desenvolvendo projetos inovadores que buscam eliminar processos, criar soluções tecnológicas e sustentáveis.</p>
    </div>

    <hr class="section-separator reveal-on-scroll">

    <div id="nossos-servicos" class="page-title-container reveal-on-scroll">
      <h1 class="page-title">nossos serviços</h1>
    </div>

    <div class="content-section reveal-on-scroll">
      <p>Oferecemos soluções integradas em Tecnologia e Engenharia para impulsionar o seu negócio de forma completa. No ambiente digital, construímos sua presença online com o desenvolvimento de sites de alta performance e landing pages estratégicas, focadas em converter visitantes em clientes.</p>
      <p>Ao mesmo tempo, garantimos a excelência e a conformidade dos seus produtos com serviços de engenharia que vão desde a implementação de soluções sustentáveis, como o Jardim Filtrante, até a elaboração de documentação técnica essencial, como o Manual de Boas Práticas, Rotulagem Nutricional e Testes de Prateleira, assegurando qualidade e segurança em todas as etapas.</p>
    </div>

    <div class="cta-container reveal-on-scroll">
      <div class="cta-image-wrapper">
        <div class="polaroid-frame">
            <div class="image-container">
                <img src="../../assets/img/cici.png" alt="mascote" class="polaroid-image" />
            </div>
        </div>
      </div>
      <div class="cta-text-content">
        <h2 class="cta-title">vem ser cinético!</h2>
        <p class="cta-subtitle">Serviços de qualidade abaixo do preço do mercado feito por estudantes da Universidade Federal do Espírito Santo</p>
        <div class="cta-buttons">
          <a href="/portfolio" class="cta-btn">ver produtos</a>
          <a href="/contato" class="cta-btn">fale conosco</a>
        </div>
      </div>
    </div>
    
  </main>
</template>

<script>
export default {
  name: 'ContentView',
  data() {
    return {
      observer: null,
    };
  },
  mounted() {
   
    const options = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.1 
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
       
        if (entry.isIntersecting) {
          
          entry.target.classList.add('is-visible');
          
          this.observer.unobserve(entry.target);
        }
      });
    }, options);

    
    const elementsToAnimate = this.$el.querySelectorAll('.reveal-on-scroll');
    elementsToAnimate.forEach(el => {
      this.observer.observe(el);
    });

    this.scrollToHash(this.$route.hash);
  },
  beforeDestroy() {
    
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  watch: {
    '$route.hash'(newHash) {
      this.scrollToHash(newHash);
    }
  },
  methods:{
    scrollToHash(hash){
        this.$nextTick(()=>{
            if(hash){
                const element = document.getElementById(hash.substring(1));
                if(element){
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    )
    }
  }
}
</script>

<style scoped>

.reveal-on-scroll {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  will-change: opacity, transform; 
}


.reveal-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}


.section-separator.reveal-on-scroll {
  transform: scaleX(0); 
  transform-origin: left; 
  transition: transform 1.2s cubic-bezier(0.25, 1, 0.5, 1);
}


.section-separator.reveal-on-scroll.is-visible {
  transform: scaleX(1); 
}


.content-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: left;
  overflow-x: hidden; 
}

.page-title-container {
  scroll-margin-top: 100px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.page-title {
  background-color: #8A0808; 
  color: #F6E8CD;
  padding: 5px 15px;
  display: inline-block;
  font-size: 2.2em;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
}

.content-section {
  margin-bottom: 40px;
}

.content-section p {
  font-size: 1em;
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
  text-align: justify;
}

.section-separator {
  border: 0;
  height: 2px;
  background: #8A0808;
  margin: 80px 0;
}

.cta-container {
  display: flex;
  align-items: center;
  justify-content: space-around; 
  gap: 60px; 
  flex-wrap: wrap;
  padding: 60px 20px;
  margin-top: 40px;
}

.cta-image-wrapper {
  flex-shrink: 0;
}

.polaroid-frame {
  background-color: #8A0808;
  padding: 25px 25px 50px 25px;
  border-radius: 4px;
  box-shadow: 5px 8px 20px rgba(0, 0, 0, 0.25);
  transform: rotate(-4deg);
  position: relative;
  overflow: hidden; 
}

.polaroid-image {
  display: block; 
  width: 250px;
  height: 250px;
  object-fit: contain; 
  transition: transform 0.4s ease; 
}

.image-container {
  background: white;
  width: 250px;
  height: 250px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}


.polaroid-frame:hover .polaroid-image {
  transform: scale(1.1); 
}

.cta-text-content {
  max-width: 500px;
  text-align: left;
}

.cta-title {
  background-color: #8A0808;
  color: #F6E8CD;
  padding: 8px 18px;
  display: inline-block;
  font-size: 2em;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 0 20px 0;
}

.cta-subtitle {
  font-size: 1.1em;
  color: #333;
  line-height: 1.5;
  margin-bottom: 30px;
}

.cta-buttons {
  display: flex;
  gap: 15px;
}

.cta-btn {
  background-color: #8A0808;
  color: #F6E8CD;
  border: none;
  padding: 10px 25px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9em;
  text-transform: lowercase;
  transition: background-color 0.3s ease;
}

.cta-btn:hover {
  background-color: #6d0606;
}

/* RESPONSIVIDADE */
@media (max-width: 960px) {
  .cta-container {
    justify-content: center; 
  }
}

@media (max-width: 768px) {
  .content-page {
    padding: 20px 15px;
  }
  
  .page-title {
    font-size: 1.8em;
  }
  
  .content-section p {
    font-size: 0.95em;
  }

  .cta-container {
    flex-direction: column;
    gap: 40px;
    padding: 40px 20px 20px 20px;
  }

  .polaroid-frame {
    transform: rotate(0);
  }

  .cta-text-content {
    text-align: center;
  }

  .cta-buttons {
    justify-content: center;
  }
}
</style>