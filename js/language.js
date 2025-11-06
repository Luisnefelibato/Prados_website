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
    } catch (error) {
        console.error('Error cargando traducciones:', error);
    }
}

// Aplicar traducciones a todos los elementos con data-i18n
function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(key);
        
        if (translation) {
            // Verificar si es un input o textarea con placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
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
        });
        
        // Marcar botón activo inicial
        if (btn.getAttribute('data-lang') === savedLanguage) {
            btn.classList.add('active');
        }
    });
});
