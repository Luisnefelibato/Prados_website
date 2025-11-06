# 🌸 PRADOS - Fresh Flowers and Party Supply

## 📖 Descripción del Proyecto

**PRADOS** es un sitio web profesional, responsivo y bilingüe (Español/Inglés) diseñado para un negocio con sede en **Florida** que se especializa en:

1. **🌺 Arreglos Florales** - Flores frescas y arreglos personalizados para toda ocasión
2. **🎉 Artículos para Fiestas** - Distribución de piñatas, arreglos con globos, decoración y accesorios
3. **🪑 Renta de Mesas y Sillas** - Mobiliario de calidad para eventos y celebraciones
4. **💸 Servicios Comunitarios** - Envíos de dinero y paquetería
5. **💄 Productos iEvolution** - Distribuidores oficiales de productos de belleza y bienestar

## ✨ Características Principales

### 🎨 Diseño y Estética
- ✅ Diseño elegante y moderno acorde al logo PRADOS
- ✅ Paleta de colores profesional:
  - Primario: `#B77A4B` (marrón cobrizo)
  - Secundario: `#E7B7A0` (rosa suave)
  - Complementario: `#D9A47C` (oro rosado)
  - Fondo: `#F7F3EE` (marfil)
  - Detalle natural: `#9FAE9B` (verde suave)
- ✅ Tipografías elegantes: **Noto Serif** (títulos) + **Poppins** (texto)
- ✅ **18 imágenes reales de Unsplash** que se cargan correctamente
- ✅ Animaciones suaves y transiciones elegantes

### 🌍 Funcionalidad Multilingüe
- ✅ Soporte completo para **Español** e **Inglés**
- ✅ Cambio de idioma dinámico sin recargar la página
- ✅ Persistencia del idioma preferido (LocalStorage)
- ✅ Archivos de traducción JSON modulares (`es.json`, `en.json`)
- ✅ "Artículos para Fiestas" en español / "Party Supplies" en inglés

### 📱 Diseño Responsivo
- ✅ **Mobile-first** approach
- ✅ Menú hamburguesa funcional en dispositivos móviles
- ✅ Grid responsivo que se adapta a todos los tamaños de pantalla
- ✅ Imágenes optimizadas con lazy loading

### 🎭 Hero Slider Automático
- ✅ Slider con 3 diapositivas (una por categoría principal)
- ✅ Transición automática cada **3 segundos**
- ✅ Navegación manual con dots
- ✅ Soporte para swipe en dispositivos táctiles
- ✅ Pausa automática al hacer hover

### 💬 Botón Flotante de WhatsApp
- ✅ **Nuevo**: Botón flotante verde de WhatsApp
- ✅ Posición: Esquina inferior derecha
- ✅ Visible en todas las páginas
- ✅ Link directo a WhatsApp con mensaje predefinido
- ✅ Animación hover elegante
- ✅ Responsive: Se ajusta en móviles

### 🏷️ Logo Optimizado
- ✅ Logo en **navbar** (superior izquierda) - clickeable, redirige al home
- ✅ Logo en **footer** con dimensiones originales sin distorsión
- ✅ Fondo blanco en footer para mejor visualización
- ✅ Padding adecuado para respetar proporciones

### 🎯 Secciones Implementadas
1. **Header/Navbar** - Sticky, con logo clickeable y selector de idiomas
2. **Hero Section** - Slider automático con llamadas a la acción
3. **Arreglos Florales** - 6 imágenes reales de Unsplash
4. **Artículos para Fiestas** - 6 imágenes de piñatas y globos
5. **Renta de Mesas y Sillas** - 6 imágenes de mobiliario
6. **Servicios Comunitarios** - Cards de envíos y paquetería
7. **Productos iEvolution** - Link directo con referencia: `ref=Rosalinda0423`
8. **Ubicación** - Mapa de Google Maps (Florida) + información de contacto
9. **Footer** - Logo optimizado, redes sociales y créditos
10. **WhatsApp Flotante** - Botón de contacto directo

### 🔗 Integración con iEvolution
- ✅ Enlace directo: https://home.ievolutionpro.com/product/registration/?ref=Rosalinda0423
- ✅ Referencia de distribuidor: `Rosalinda0423`
- ✅ Botón destacado con iconos
- ✅ Se abre en nueva pestaña

### 🗺️ Ubicación y Contacto
- ✅ Mapa de Google Maps integrado (Florida)
- ✅ Sin formulario de contacto
- ✅ Información de contacto completa
- ✅ Horarios de atención
- ✅ Enlaces directos a teléfono y email
- ✅ **Botón flotante de WhatsApp** para contacto rápido

### 🚀 Optimizaciones
- ✅ **Todas las imágenes de Unsplash funcionan correctamente**
- ✅ URLs confiables: `images.unsplash.com` con parámetros optimizados
- ✅ Lazy loading de imágenes
- ✅ Código limpio y bien comentado
- ✅ Animaciones con Intersection Observer
- ✅ Scroll suave con offset para header fijo
- ✅ Active navigation links
- ✅ Botón "Scroll to top"
- ✅ Navbar optimizado con espaciado uniforme

## 📂 Estructura del Proyecto

```
prados/
├── index.html              # Página principal completa
├── README.md              # Documentación del proyecto
├── .gitignore             # Configuración Git
├── css/
│   └── style.css          # Estilos + WhatsApp flotante
├── js/
│   ├── es.json            # Traducciones en español
│   ├── en.json            # Traducciones en inglés
│   ├── language.js        # Sistema de cambio de idioma
│   ├── slider.js          # Hero slider automático
│   └── main.js            # Funcionalidad principal
└── images/
    └── logo.png           # Logo oficial de PRADOS
```

## 🎯 URIs y Navegación

### Secciones Principales (Anchors)
- `#home` - Hero section con slider
- `#flowers` - Arreglos Florales
- `#party` - Artículos para Fiestas / Party Supplies
- `#rental` - Renta de Mesas y Sillas
- `#community` - Servicios Comunitarios
- `#products` - Productos iEvolution (link externo)
- `#contact` - Ubicación y contacto

### Enlaces Externos
- **Tienda iEvolution**: https://home.ievolutionpro.com/product/registration/?ref=Rosalinda0423
- **WhatsApp**: Botón flotante con mensaje predefinido (personalizable)

### Sistema de Idiomas
- Selector visual: 🇪🇸 ES / 🇺🇸 EN en el navbar
- Cambio instantáneo sin recarga de página
- Persistencia en LocalStorage

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica moderna
- **CSS3** - Estilos con variables CSS, Grid, Flexbox
- **JavaScript (ES6+)** - Funcionalidad interactiva sin frameworks

### Librerías CDN
- **Google Fonts** - Noto Serif + Poppins
- **Font Awesome 6.4.0** - Iconos vectoriales (incluye WhatsApp)
- **Unsplash** - 18 imágenes de alta calidad con URLs optimizadas

### APIs y Servicios
- **Google Maps Embed API** - Mapa de ubicación
- **WhatsApp Business API** - Botón flotante de contacto
- **Fetch API** - Carga de traducciones JSON
- **LocalStorage API** - Persistencia de preferencias
- **Intersection Observer API** - Animaciones on scroll

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Marrón Cobrizo | `#B77A4B` | Color primario - botones, títulos, iconos |
| Rosa Suave | `#E7B7A0` | Color secundario - acentos, detalles |
| Oro Rosado | `#D9A47C` | Color complementario - gradientes |
| Marfil | `#F7F3EE` | Fondo principal |
| Verde Suave | `#9FAE9B` | Detalles naturales |
| Verde WhatsApp | `#25d366` | Botón flotante de WhatsApp |

## 📋 Servicios Ofrecidos

### 🌺 Arreglos Florales
- Arreglos florales personalizados
- Ramos de novia y decoración de bodas
- Centros de mesa elegantes
- Flores para eventos corporativos
- **Arreglos románticos**
- Flores para graduaciones
- Ramos para aniversarios
- Decoración floral completa

### 🎉 Artículos para Fiestas
- Piñatas de todos los personajes
- **Arreglos con globos**
- Decoración temática
- Globos y helio
- Vajilla desechable
- Manteles y servilletas
- Accesorios de fiesta
- Juegos y entretenimiento

### 🪑 Renta de Mesas y Sillas
- Mesas rectangulares y redondas
- Sillas plegables y de banquete
- Carpas para eventos al aire libre
- Mantelería elegante
- Entrega y recolección
- Montaje profesional
- Limpieza incluida
- Precios competitivos

### 💸 Servicios Comunitarios
- Envíos de dinero rápidos y seguros
- Paquetería con seguimiento

### 💄 Productos iEvolution
- Productos de belleza
- Productos de bienestar
- Cuidado personal
- Compra con referencia de distribuidor

## 🖼️ Imágenes Utilizadas

### ✅ Todas las imágenes funcionan correctamente

**Fuente**: Unsplash CDN (`images.unsplash.com`)  
**Formato**: URLs optimizadas con parámetros `w=400&h=400&fit=crop&q=80`  
**Total**: 18 imágenes de alta calidad

#### Arreglos Florales (6):
1. Ramos de Boda
2. Arreglos Románticos
3. Centros de Mesa
4. Ramos de Rosas
5. Arreglos Elegantes
6. Ocasiones Especiales

#### Artículos para Fiestas (6):
1. Piñatas
2. Arreglos con Globos
3. Piñatas Coloridas
4. Decoración con Globos
5. Piñatas Mexicanas
6. Arcos de Globos

#### Renta de Mesas y Sillas (6):
1. Mesas y Sillas
2. Sillas Plegables
3. Mesas para Niños
4. Eventos
5. Carpas y Toldos
6. Sillas Blancas

## 💬 Contacto por WhatsApp

### Botón Flotante
- **Posición**: Esquina inferior derecha
- **Color**: Verde WhatsApp (#25d366)
- **Ícono**: Font Awesome WhatsApp
- **Funcionalidad**: Abre WhatsApp con mensaje predefinido
- **Responsive**: Se adapta a móviles (tamaño reducido)

### Personalización
Para cambiar el número de WhatsApp, edita en `index.html`:
```html
<a href="https://api.whatsapp.com/send?phone=TU_NUMERO&text=TU_MENSAJE">
```

Ejemplo con número real:
```html
<a href="https://api.whatsapp.com/send?phone=13055551234&text=Hola,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios">
```

## 🚀 Cómo Usar

### Despliegue Local
1. Descarga todos los archivos del proyecto
2. Abre `index.html` en tu navegador web
3. El sitio funcionará completamente sin necesidad de servidor

### Despliegue en Producción
El sitio es **100% estático** y puede ser desplegado en:
- **GitHub Pages** (gratis)
- **Netlify** (gratis)
- **Vercel** (gratis)
- **Firebase Hosting**
- Cualquier servidor web tradicional

## 📝 Personalización

### Actualizar Número de WhatsApp
Edita el enlace en `index.html` línea aproximada 450:
```html
<a href="https://api.whatsapp.com/send?phone=1234567890&text=...">
```

### Actualizar Información de Contacto
En `index.html` y archivos de traducción (`es.json`, `en.json`):
- Dirección física específica
- Número de teléfono real
- Email real
- Horarios de atención exactos

### Actualizar Mapa de Google Maps
En `index.html`, busca el iframe del mapa y actualiza con la ubicación específica de la tienda.

### Agregar Enlaces de Redes Sociales
En el footer de `index.html`, actualiza los atributos `href`:
```html
<a href="https://facebook.com/tu-pagina">...</a>
<a href="https://instagram.com/tu-cuenta">...</a>
```

## 🌐 Navegadores Soportados

- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)
- ✅ Opera (últimas 2 versiones)
- ⚠️ Internet Explorer 11 (funcionalidad limitada)

## 📱 Breakpoints Responsivos

- **Desktop**: > 1024px (navbar compacto optimizado)
- **Tablet**: 769px - 1024px
- **Mobile**: < 768px (menú hamburguesa)
- **Small Mobile**: < 480px (botón WhatsApp más pequeño)

## 🎉 Últimas Actualizaciones

### ✅ Versión 2.0 - Correcciones Visuales
- **Imágenes corregidas**: Todas las imágenes ahora usan Unsplash CDN
- **Logo optimizado**: Footer con dimensiones originales sin distorsión
- **Logo clickeable**: Navbar con redirección al home
- **WhatsApp flotante**: Botón de contacto siempre visible
- **URLs confiables**: Todas las imágenes se cargan correctamente
- **Sin imágenes rotas**: 18 imágenes funcionando al 100%

## 📄 Licencia

© **Luisfercpde 2025**. Todos los derechos reservados.

---

## 👤 Autor

**Desarrollador**: Luisfercpde  
**Cliente**: PRADOS - Fresh Flowers and Party Supply  
**Ubicación**: Florida, USA  
**Año**: 2025

---

## 💡 Notas Técnicas

### Performance
- Primera carga optimizada con recursos CDN
- Imágenes de Unsplash con URLs optimizadas
- CSS y JS minificables para producción
- Navbar optimizado para mejor UX

### Accesibilidad
- Etiquetas ARIA apropiadas
- Navegación por teclado funcional
- Contraste de colores accesible
- Textos alternativos en todas las imágenes
- Botón WhatsApp con aria-label

### SEO
- Meta tags apropiados
- Estructura semántica HTML5
- URLs amigables con anchors
- Contenido bilingüe
- Mapa integrado para SEO local

### Integración de Negocios
- Link directo a tienda iEvolution con referencia
- Mapa de ubicación para facilitar visitas
- Botón flotante de WhatsApp para contacto inmediato
- Información de contacto clara
- Enfoque en servicios principales

---

**¿Necesitas ayuda?** Contacta al desarrollador para soporte técnico o personalizaciones adicionales.

🌸 **¡Gracias por elegir PRADOS!** 🎉
