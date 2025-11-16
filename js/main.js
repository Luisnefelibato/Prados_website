// ===================================
// Funcionalidad principal del sitio
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    
    // ===== Hamburger Menu =====
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Cerrar menú al hacer click en un link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // ===== Smooth Scroll con offset para el header fijo =====
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const headerHeight = document.getElementById('header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'auto' // Cambiado a 'auto' para eliminar scroll suave
                    });
                }
            }
        });
    });
    
    // ===== Active Link on Scroll =====
    const sections = document.querySelectorAll('.section, .hero');
    
    function setActiveLink() {
        const scrollPosition = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', setActiveLink);
    
    // ===== Header Shadow on Scroll =====
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(183, 122, 75, 0.25)';
        } else {
            header.style.boxShadow = '0 4px 12px rgba(183, 122, 75, 0.15)';
        }
    });
    
    // ===== Scroll Animations (DESACTIVADAS - todo estático) =====
    // Desactivado para hacer la página completamente estática
    /*
    const scrollObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, scrollObserverOptions);
    */
    
    // Observar elementos para animaciones - DESACTIVADO
    const animatedElements = document.querySelectorAll('.gallery-item, .community-card, .wellness-card, .info-item');
    
    // Desactivado - elementos siempre visibles y estáticos
    animatedElements.forEach((el, index) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.transition = 'none';
        // scrollObserver.observe(el); // DESACTIVADO
    });
    
    // ===== Lazy Loading de imágenes =====
    if (!('loading' in HTMLImageElement.prototype)) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
    
    // ===== Scroll to Top Button =====
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(183, 122, 75, 0.3);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto' // Cambiado a 'auto' para eliminar scroll suave
        });
    });
    
    // ===== Performance: Reducir animaciones si el usuario lo prefiere =====
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.scrollBehavior = 'auto';
        const style = document.createElement('style');
        style.textContent = '* { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }';
        document.head.appendChild(style);
    }
    
    // ===================================
    // EFECTOS DINÁMICOS NUEVOS
    // ===================================
    
    // ===== Navbar Scroll Effect =====
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // ===== Scroll Animations para nuevos elementos - DESACTIVADO =====
    // Desactivado para hacer la página completamente estática
    /*
    const animationObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, animationObserverOptions);
    */
    
    // Elementos siempre visibles y estáticos
    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.classList.add('visible');
        // animationObserver.observe(el); // DESACTIVADO
    });
    
    // ===== Contador Animado =====
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }
    
    // Observar cuando los contadores sean visibles
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                    if (counter.textContent === '0') {
                        animateCounter(counter);
                    }
                });
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
    
    // ===== Parallax Effect en Hero =====
    let parallaxTicking = false;
    
    window.addEventListener('scroll', () => {
        if (!parallaxTicking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const heroSlides = document.querySelectorAll('.hero-slide');
                
                heroSlides.forEach(slide => {
                    if (slide.classList.contains('active') && window.innerWidth > 768) {
                        slide.style.backgroundPositionY = scrolled * 0.5 + 'px';
                    }
                });
                
                parallaxTicking = false;
            });
            
            parallaxTicking = true;
        }
    });
    
    console.log('🌸 PRADOS website loaded successfully!');
    
}); // ← AQUÍ CIERRA EL DOMContentLoaded (esto faltaba)
