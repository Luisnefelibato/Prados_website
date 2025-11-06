// ===================================
// Hero Slider automático
// ===================================

class HeroSlider {
    constructor() {
        this.slides = document.querySelectorAll('.hero-slide');
        this.dots = document.querySelectorAll('.slider-dot');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.autoplayDelay = 3000; // 3 segundos
        
        this.init();
    }
    
    init() {
        // Event listeners para los dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
                this.resetAutoplay();
            });
        });
        
        // Iniciar autoplay
        this.startAutoplay();
        
        // Pausar en hover
        const heroSlider = document.querySelector('.hero-slider');
        heroSlider.addEventListener('mouseenter', () => this.stopAutoplay());
        heroSlider.addEventListener('mouseleave', () => this.startAutoplay());
        
        // Soporte para touch/swipe en móviles
        this.addTouchSupport();
    }
    
    goToSlide(index) {
        // Remover clase active de slide y dot actual
        this.slides[this.currentSlide].classList.remove('active');
        this.dots[this.currentSlide].classList.remove('active');
        
        // Actualizar índice
        this.currentSlide = index;
        
        // Añadir clase active al nuevo slide y dot
        this.slides[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].classList.add('active');
    }
    
    nextSlide() {
        const next = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(next);
    }
    
    prevSlide() {
        const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prev);
    }
    
    startAutoplay() {
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoplayDelay);
    }
    
    stopAutoplay() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }
    
    resetAutoplay() {
        this.stopAutoplay();
        this.startAutoplay();
    }
    
    addTouchSupport() {
        const heroSlider = document.querySelector('.hero-slider');
        let touchStartX = 0;
        let touchEndX = 0;
        
        heroSlider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        heroSlider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });
        
        const handleSwipe = () => {
            if (touchEndX < touchStartX - 50) {
                // Swipe left - next slide
                this.nextSlide();
                this.resetAutoplay();
            }
            if (touchEndX > touchStartX + 50) {
                // Swipe right - prev slide
                this.prevSlide();
                this.resetAutoplay();
            }
        };
        
        this.handleSwipe = handleSwipe;
    }
}

// Inicializar slider cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new HeroSlider();
});
