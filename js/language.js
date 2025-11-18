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
            // Usar innerHTML si contiene tags HTML, sino textContent
            if (translation.includes('<br>') || translation.includes('<')) {
                element.innerHTML = translation;
                element.prepend(icon);
            } else {
                element.textContent = translation;
                element.prepend(icon);
            }
        } else {
            // Usar innerHTML si contiene tags HTML, sino textContent
            if (translation.includes('<br>') || translation.includes('<')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    }
}
    });
    
    // Actualizar enlaces de WhatsApp después de aplicar traducciones
    updateWhatsAppLinks();
}

// Actualizar enlaces de WhatsApp con mensajes personalizados según idioma
function updateWhatsAppLinks() {
    const phone = '13238028920';
    
    const messages = {
        es: {
            flowers: 'Hola, me gustaría saber más sobre sus arreglos florales y ver el catálogo disponible.',
            party: 'Hola, me interesa conocer más sobre sus suministros para fiestas y arreglos con globos.',
            rental: 'Hola, quisiera solicitar una cotización para renta de mesas y sillas.',
            money: 'Hola, necesito información sobre el servicio de envío de dinero.',
            shipping: 'Hola, me gustaría saber más sobre su servicio de paquetería.'
        },
        en: {
            flowers: 'Hello, I would like to know more about your floral arrangements and see the available catalog.',
            party: 'Hello, I am interested in learning more about your party supplies and balloon arrangements.',
            rental: 'Hello, I would like to request a quote for table and chair rentals.',
            money: 'Hello, I need information about the money transfer service.',
            shipping: 'Hello, I would like to know more about your package shipping service.'
        }
    };
    
    const lang = currentLanguage;
    
    // Actualizar botón de flores
    const flowersBtn = document.querySelector('#flowers .btn-secondary');
    if (flowersBtn) {
        flowersBtn.href = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(messages[lang].flowers)}`;
    }
    
    // Actualizar botón de party supplies
    const partyBtn = document.querySelector('#party .btn-secondary');
    if (partyBtn) {
        partyBtn.href = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(messages[lang].party)}`;
    }
    
    // Actualizar botón de renta
    const rentalBtn = document.querySelector('#rental .btn-secondary');
    if (rentalBtn) {
        rentalBtn.href = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(messages[lang].rental)}`;
    }
    
    // Actualizar botones de servicios comunitarios
    const moneyBtns = document.querySelectorAll('#community .btn-outline');
    if (moneyBtns[0]) {
        moneyBtns[0].href = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(messages[lang].money)}`;
    }
    if (moneyBtns[1]) {
        moneyBtns[1].href = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(messages[lang].shipping)}`;
    }
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
        logoImg.style.height = '70px';
        logoImg.style.width = 'auto';
        logoImg.style.objectFit = 'contain';
        logoImg.alt = 'PRADOS Logo';
        
        // Verificar que la imagen sea correcta (nuevo logo)
        if (!logoImg.src.includes('Logo_Prados.png')) {
            logoImg.src = 'images/Logo_Prados.png';
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
        if (!footerLogo.src.includes('Logo_Prados.png')) {
            footerLogo.src = 'images/Logo_Prados.png';
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
