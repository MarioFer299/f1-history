# 🏎️ F1 History

Sitio web dedicado a la historia de la Fórmula 1, enfocado en el catálogo de las 10 escuderías y sus pilotos de la temporada 2025. Permite explorar la información de cada equipo (historia, base, campeonatos y pilotos actuales) y suscribirse a un boletín.

🔗 **Sitio en producción:** [PEGAR URL DE VERCEL]

## Decisiones Técnicas

**1. ¿Dónde usaste Flexbox y dónde Grid, y por qué?**  
Usé **Flexbox** en el `.navbar` porque necesitaba alinear el logo y los enlaces en una sola dimensión horizontal, con `justify-content: space-between` para separarlos. Usé **CSS Grid** en `.catalogo-grid` porque es ideal para cuadrículas bidimensionales. Con `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))` logré que las tarjetas pasaran de 1 columna en móvil a 4 en pantallas grandes sin media queries complicadas.

**2. ¿Qué hace tu JavaScript?**  
Tres funciones principales:
- **Renderizado dinámico:** Lee un arreglo de objetos `escuderias` y crea las tarjetas con `document.createElement`. Esto me sirve de base para la Entrega 2, donde ese arreglo será reemplazado por un `fetch()` a mi API REST.
- **Menú hamburguesa:** Un `addEventListener` de tipo 'click' que alterna la clase `.active` en el menú móvil.
- **Validación de formulario:** Intercepta el `submit` con `preventDefault()`, valida longitud mínima y email con Regex, e inyecta los errores en `<span>` junto a cada campo (sin usar `alert`).

**3. Uso de IA:**  
Usé IA como tutor para entender cómo detectar automáticamente el nombre de la página actual con `window.location.pathname` y así reutilizar el mismo HTML para las 10 escuderías. Yo escribí manualmente la lógica de renderizado y adapté los colores de cada escudería usando variables CSS dinámicas (`--accent`).

**4. Lo más difícil:**  
Hacer que el dropdown funcionara en escritorio (con hover) y en móvil (con click) sin romperse. Lo resolví separando la lógica: CSS `:hover` para escritorio y un `addEventListener` en JS que solo activa la clase `.active` si `window.innerWidth <= 768px`.

## ✨ Características

- 📊 Catálogo completo de las 10 escuderías de la temporada 2025
- 👨‍️ Perfiles detallados de 20 pilotos con estadísticas completas
- 🌓 Modo claro/oscuro con persistencia en localStorage
- 📱 Diseño 100% responsive (móvil, tablet, desktop)
- 🔍 Filtros dinámicos para explorar escuderías (Todas / Top 5)
- 📧 Formulario de contacto con validación en tiempo real
- 🎨 Interfaz moderna con animaciones y transiciones suaves
- ⚡ Carga rápida sin frameworks pesados
- 🖼️ Imagen de fondo dinámica en la sección hero

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica y accesible
- **CSS3** - Variables CSS, Flexbox, Grid, animaciones y temas
- **JavaScript (ES6+)** - Renderizado dinámico, validación y manejo del DOM
- **Git & GitHub** - Control de versiones
- **Vercel** - Hosting y despliegue continuo

## 🚀 Instalación y Uso Local

### Opción 1: Abrir directamente

- git clone https://github.com/MarioFer299/f1-history.git
- cd f1-history

## 📁 Estructura del Proyecto
```bash

f1-history/
├── 📄 index.html # Página principal
├── 📄 styles.css # Hoja de estilos global
├── 📄 vercel.json # Configuración de Vercel
├── 📁 js/
│ └── 📄 script.js # Lógica JavaScript principal
├── 📁 pages/
│ ├── 📁 pilotos/ # Perfiles de pilotos
│ │ ├── norris.html
│ │ ├── 📄 verstappen.html
│ │ ├── 📄 leclerc.html
│ │ └── 📄 ... (20 pilotos)
│ ├── 📁 escuderias/ # Páginas de escuderías
│ │ ├── 📄 mclaren.html
│ │ ├── 📄 redbull.html
│ │ └── ... (10 escuderías)
│ └── 📁 historia/ # Historia de cada equipo
│ ├── 📄 mclaren.html
│ └── ... (10 equipos)
── 📁 images/
├── f1.jpg # Imagen de fondo hero
├── 📁 logo/ # Logos de escuderías
├── pilotos/ # Fotos de pilotos
── 📁 escuderias/ # Imágenes de equipos