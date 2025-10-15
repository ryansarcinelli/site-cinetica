<template>
  <div>
    <section class="hero-section">
      <div class="hero-content">
        <div class="circles-container">
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
          <div class="circle circle-3"></div>
        </div>
        
        <h1 class="hero-title">
          <span class="highlight-bg">
            <span class="text">Cinética Junior</span>
          </span>
        </h1>
        <p class="hero-subtitle">Inteligência em Movimento</p>
      </div>
    </section>

    <section class="carousel-section" ref="carouselSection">
      <div class="carousel">
        <div class="carousel-track" :style="trackStyle">
          <img v-for="(img, i) in images" :key="i" :src="img" />
        </div>

        <div class="carousel-controls">
          <button @click="prevSlide" class="carousel-btn">‹</button>
          <button @click="nextSlide" class="carousel-btn">›</button>
        </div>

        <div class="carousel-indicators">
          <span
            v-for="(img, i) in images"
            :key="i"
            :class="['indicator', { active: currentSlide === i }]"
            @click="goToSlide(i)"
          ></span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import img1 from '../../assets/img/img1.jpeg'
import img2 from '../../assets/img/img2.jpeg'
import img3 from '../../assets/img/img3.jpeg'
import img4 from '../../assets/img/img4.jpeg'

export default {
  name: 'HeroSection',
  data() {
    return {
      images: [img1, img2, img3, img4],
      currentSlide: 0,
      autoPlayInterval: null,
      scrollTimeout: null,
      trackStyle: {
        transform: 'translateX(0%)',
        transition: 'transform 0.8s ease-in-out'
      },
      imageHeights: [] 
    }
  },
  mounted() {
    this.setupTextAnimation()
    this.startAutoCarousel()
    this.loadImageDimensions() 
  },
  beforeUnmount() {
    if (this.autoPlayInterval) clearInterval(this.autoPlayInterval)
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    setupTextAnimation() {
      window.addEventListener('scroll', this.handleScroll)
    },
    handleScroll() {
      if (!this.scrollTimeout) {
        this.scrollTimeout = setTimeout(() => {
          const text = this.$el.querySelector('.text')
          const scrollY = window.scrollY
          const heroHeight = window.innerHeight
          const stickPoint = 100

          if (scrollY <= stickPoint) {
            text.style.transform = 'translateY(0px)'
            text.style.opacity = '1'
          } else if (scrollY > stickPoint && scrollY < heroHeight) {
            const progress = (scrollY - stickPoint) / (heroHeight - stickPoint)
            text.style.transform = `translateY(${progress * 150}px)`
            text.style.opacity = `${1 - progress}`
          } else {
            text.style.opacity = '0'
          }

          this.scrollTimeout = null
        }, 10)
      }
    },
    startAutoCarousel() {
      this.autoPlayInterval = setInterval(() => this.nextSlide(), 4000)
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length
      this.updateCarousel()
    },
    prevSlide() {
      this.currentSlide =
        this.currentSlide === 0 ? this.images.length - 1 : this.currentSlide - 1
      this.updateCarousel()
    },
    goToSlide(slideIndex) {
      this.currentSlide = slideIndex
      this.updateCarousel()
    },
    updateCarousel() {
      this.trackStyle.transform = `translateX(-${this.currentSlide * 100}%)`
      this.updateCarouselHeight() 
    },
    
    loadImageDimensions() {
      this.images.forEach((imgSrc, index) => {
        const img = new Image()
        img.onload = () => {
          const aspectRatio = img.naturalHeight / img.naturalWidth
          const containerWidth = this.$refs.carouselSection ? this.$refs.carouselSection.offsetWidth : window.innerWidth
          let calculatedHeight = containerWidth * aspectRatio
          
          calculatedHeight = Math.min(calculatedHeight, 800)
        
          calculatedHeight = Math.max(calculatedHeight, 300)
          this.imageHeights[index] = calculatedHeight
          
          if (index === this.currentSlide) {
            this.updateCarouselHeight()
          }
        }
        img.onerror = () => {
          
          this.imageHeights[index] = 500
        }
        img.src = imgSrc
      })
    },
    
    updateCarouselHeight() {
      const height = this.imageHeights[this.currentSlide] || 500 
      if (this.$refs.carouselSection) {
        this.$refs.carouselSection.style.height = `${height}px`
      }
    }
  }
}
</script>

<style scoped>

@keyframes rotate-right {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes rotate-left {
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
}

.hero-section {
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8A0808;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}



.hero-content {
  text-align: center;
  position: relative;
  
}


.circles-container {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 2rem;
}

.circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-sizing: border-box; 
}

.circle-1 {
  border: 2px solid white;
  animation: rotate-right 5s linear infinite;
}

.circle-2 {
  border: 8px solid white;
  animation: rotate-left 5s linear infinite;
}

.circle-3 {
  background-color: white;
  animation: rotate-right 5s linear infinite;
}

.hero-title {
  
  font-size: 6rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;
  color: var(--header-color, #F6E8CD); 
}

.highlight-bg {
  background: transparent;
}

.text {
  
  display: inline-block;
  transition: transform 0.3s ease, opacity 0.3s ease;
  color: var(--header-color, #F6E8CD); 
}

.hero-subtitle {
  font-size: 2rem;
  color: #F6E8CD; 
  margin-top: 1rem;
}


.carousel-section {
  width: 100%;
  min-height: 500px; 
  max-height: 800px; 
  overflow: hidden;
  background-color: #8A0808;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: height 0.8s ease-in-out; 
}

.carousel {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.8s ease-in-out;
}

.carousel-track img {
  flex: 0 0 100%; 
  height: 100%;
  width: 100%; 
  object-fit: contain; 
  object-position: center; 
}


.carousel-controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  transform: translateY(-50%);
  z-index: 10;
}

.carousel-btn {
  background: rgba(255, 255, 255, 0.3);
  border: none;
  color: white;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.carousel-btn:hover {
  background: rgba(255, 255, 255, 0.6);
  transform: scale(1.1);
}


.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  z-index: 10;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: white;
  transform: scale(1.2);
}


@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }
  .hero-subtitle {
    font-size: 1.4rem;
  }

  .carousel-section {
    min-height: 300px; 
    max-height: 600px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.5rem;
  }
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .circle {
    width: 45px;
    height: 45px;
  }

  .carousel-section {
    min-height: 250px; 
  }
}
</style>

