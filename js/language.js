// ===================================
// Sistema de cambio de idioma dinámico
// ===================================

let currentLanguage = 'es';
let translations = {};

// Cargar traducciones
async function loadTranslations(lang) {
    try {
        const response = await fetch(`js/${lang}.json`);
        translations = await response.json();
        applyTranslations();
        updateHTMLLang(lang);
        
        // Proteger logos después de aplicar traducciones
        setTimeout(() => {
            protectLogos();
        }, 50);
    } catch (error) {
        console.error('Error cargando traducciones:', error);
    }
}

// Aplicar traducciones a todos los elementos con data-i18n
function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        // 🛡️ SOLO saltar el logo y elementos marcados como no-traducibles
        if (element.hasAttribute('data-no-translate')) {
            return;
        }
        
        // 🛡️ Si el elemento ES el logo o está DENTRO del logo, saltar
        if (element.classList.contains('logo') || element.closest('.logo')) {
            return;
        }
        
        // 🛡️ Si el elemento ES una imagen del logo, saltar
        if (element.tagName === 'IMG' && 
            (element.alt === 'PRADOS Logo' || element.classList.contains('footer-logo'))) {
            return;
        }

        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(key);

        if (translation) {
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translation;
    } else if (!element.querySelector('img')) {
        // Para elementos <li> con iconos, preservar el icono
        if (element.tagName === 'LI' && element.querySelector('i')) {
            const icon = element.querySelector('i');
            element.textContent = translation;
            element.prepend(icon);
        } else {
            element.textContent = translation;
        }
    }
}
    });
}

// Función dedicada a proteger los logos
function protectLogos() {
    // Logo principal del header
    const logoLink = document.querySelector('.logo');
    const logoImg = document.querySelector('.logo img');
    
    if (logoLink) {
        logoLink.removeAttribute('data-i18n');
    }
    
    if (logoImg) {
        logoImg.removeAttribute('data-i18n');
        logoImg.style.height = '90px';
        logoImg.style.width = 'auto';
        logoImg.style.objectFit = 'contain';
        logoImg.alt = 'PRADOS Logo';
        
        // Verificar que la imagen sea correcta (nuevo logo)
        if (!logoImg.src.includes('WhatsApp_Image_2025-11-14_at_4.30.01_PM-removebg-preview.png')) {
            logoImg.src = 'images/WhatsApp_Image_2025-11-14_at_4.30.01_PM-removebg-preview.png';
        }
    }

    // Logo del footer
    const footerLogo = document.querySelector('.footer-logo');
    if (footerLogo) {
        footerLogo.removeAttribute('data-i18n');
        footerLogo.style.width = 'auto';
        footerLogo.style.height = 'auto';
        footerLogo.style.maxWidth = '200px';
        footerLogo.alt = 'PRADOS Logo';
        
        // Verificar que la imagen sea correcta (nuevo logo)
        if (!footerLogo.src.includes('WhatsApp_Image_2025-11-14_at_4.30.01_PM-removebg-preview.png')) {
            footerLogo.src = 'images/WhatsApp_Image_2025-11-14_at_4.30.01_PM-removebg-preview.png';
        }
    }
}

// Obtener traducción anidada usando notación de punto (ej: "nav.home")
function getNestedTranslation(key) {
    return key.split('.').reduce((obj, k) => obj?.[k], translations);
}

// Actualizar atributo lang del HTML
function updateHTMLLang(lang) {
    document.documentElement.setAttribute('lang', lang);
}

// Cambiar idioma
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);

    // Actualizar botones activos
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Cargar nuevas traducciones
    loadTranslations(lang);
}

// Event listeners para botones de idioma
document.addEventListener('DOMContentLoaded', () => {
    // Proteger logos al cargar
    protectLogos();

    // Obtener idioma guardado o usar español por defecto
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'es';

    // Cargar traducciones iniciales
    loadTranslations(savedLanguage);

    // Configurar botones de cambio de idioma
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            changeLanguage(lang);
            
            // Proteger logos después del cambio
            setTimeout(() => protectLogos(), 100);
        });

        // Marcar botón activo inicial
        if (btn.getAttribute('data-lang') === savedLanguage) {
            btn.classList.add('active');
        }
    });
});
