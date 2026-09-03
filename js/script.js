/* ============================================
   BASE DE DATOS DE ESCUDERÍAS - TEMPORADA 2025
   ============================================ */
const escuderias = [
    {
        id: "mclaren",
        nombre: "McLaren Formula 1 Team",
        emoji: "🧡",
        puntos2025: 833,
        fundacion: 1963,
        base: "Woking, Reino Unido",
        campeonatos: 9,
        color: "#FF8700",
        categoria: ["top", "historicas"],
        historia: "Fundada en 1963 por Bruce McLaren. Es el segundo equipo en activo más antiguo. Resurgió con fuerza en esta década, logrando revalidar su título en 2025 con Norris y Piastri.",
        pilotos: [
            { nombre: "Lando Norris", numero: 4, rol: "Titular" },
            { nombre: "Oscar Piastri", numero: 81, rol: "Titular" }
        ]
    },
    {
        id: "mercedes",
        nombre: "Mercedes-AMG PETRONAS",
        emoji: "",
        puntos2025: 469,
        fundacion: 2010,
        base: "Brackley, Reino Unido",
        campeonatos: 8,
        color: "#00D2BE",
        categoria: ["top", "historicas"],
        historia: "Regresó en 2010 comprando Brawn GP. Entre 2014 y 2021 ganó 8 títulos consecutivos. En 2025 afronta una era de reconstrucción tras la salida de Hamilton.",
        pilotos: [
            { nombre: "George Russell", numero: 63, rol: "Titular" },
            { nombre: "Andrea Kimi Antonelli", numero: 12, rol: "Rookie" }
        ]
    },
    {
        id: "redbull",
        nombre: "Oracle Red Bull Racing",
        emoji: "🔵",
        puntos2025: 451,
        fundacion: 2005,
        base: "Milton Keynes, Reino Unido",
        campeonatos: 6,
        color: "#0600EF",
        categoria: ["top"],
        historia: "Ingresó a la F1 en 2005 comprando Jaguar Racing. Época dorada con Vettel (2010-2013) y con Verstappen. En 2025 vivió un año de transición.",
        pilotos: [
            { nombre: "Max Verstappen", numero: 1, rol: "Titular" },
            { nombre: "Liam Lawson", numero: 30, rol: "Titular" }
        ]
    },
    {
        id: "ferrari",
        nombre: "Scuderia Ferrari HP",
        emoji: "❤️",
        puntos2025: 398,
        fundacion: 1950,
        base: "Maranello, Italia",
        campeonatos: 16,
        color: "#DC0000",
        categoria: ["top", "historicas"],
        historia: "Fundada por Enzo Ferrari, es la escudería más longeva y exitosa, presente desde 1950. En 2025 debutó Lewis Hamilton vestido de rojo.",
        pilotos: [
            { nombre: "Charles Leclerc", numero: 16, rol: "Titular" },
            { nombre: "Lewis Hamilton", numero: 44, rol: "Titular" }
        ]
    },
    {
        id: "williams",
        nombre: "Williams Racing",
        emoji: "🩵",
        puntos2025: 137,
        fundacion: 1977,
        base: "Grove, Reino Unido",
        campeonatos: 9,
        color: "#005AFF",
        categoria: ["historicas"],
        historia: "Fundada por Sir Frank Williams en 1977, con 9 títulos entre los 80s y 90s. En 2025 dio un salto de calidad atrayendo a Carlos Sainz Jr.",
        pilotos: [
            { nombre: "Alexander Albon", numero: 23, rol: "Titular" },
            { nombre: "Carlos Sainz Jr.", numero: 55, rol: "Titular" }
        ]
    },
    {
        id: "racing-bulls",
        nombre: "Visa Cash App RB",
        emoji: "🤍",
        puntos2025: 92,
        fundacion: 2006,
        base: "Faenza, Italia",
        campeonatos: 0,
        color: "#6692FF",
        categoria: [],
        historia: "Nació como Minardi. En 2006 Red Bull la convirtió en su filial (Toro Rosso, luego AlphaTauri). Hoy opera con estrecha colaboración técnica con Red Bull.",
        pilotos: [
            { nombre: "Isack Hadjar", numero: 6, rol: "Rookie" },
            { nombre: "Liam Lawson", numero: 30, rol: "Titular" }
        ]
    },
    {
        id: "aston-martin",
        nombre: "Aston Martin Aramco",
        emoji: "💚",
        puntos2025: 89,
        fundacion: 2021,
        base: "Silverstone, Reino Unido",
        campeonatos: 0,
        color: "#006F62",
        categoria: [],
        historia: "La base de Silverstone pasó por Jordan, Midland, Spyker, Force India y Racing Point. En 2021 Lawrence Stroll la rebautizó como Aston Martin.",
        pilotos: [
            { nombre: "Fernando Alonso", numero: 14, rol: "Titular" },
            { nombre: "Lance Stroll", numero: 18, rol: "Titular" }
        ]
    },
    {
        id: "haas",
        nombre: "MoneyGram Haas F1 Team",
        emoji: "🔴",
        puntos2025: 79,
        fundacion: 2016,
        base: "Kannapolis, Estados Unidos",
        campeonatos: 0,
        color: "#B6BABD",
        categoria: [],
        historia: "Fundada por Gene Haas en 2016. Modelo de negocio basado en alianza técnica con Ferrari. En 2025 renovó alineación con Ocon y Bearman.",
        pilotos: [
            { nombre: "Esteban Ocon", numero: 31, rol: "Titular" },
            { nombre: "Oliver Bearman", numero: 87, rol: "Rookie" }
        ]
    },
    {
        id: "sauber",
        nombre: "Stake F1 Team Kick Sauber",
        emoji: "🟢",
        puntos2025: 70,
        fundacion: 1993,
        base: "Hinwil, Suiza",
        campeonatos: 0,
        color: "#52E252",
        categoria: ["historicas"],
        historia: "Peter Sauber fundó el equipo en 1993. Conocido por descubrir talentos como Räikkönen. En 2025 se prepara para su transición a Audi.",
        pilotos: [
            { nombre: "Nico Hülkenberg", numero: 27, rol: "Titular" },
            { nombre: "Gabriel Bortoleto", numero: 5, rol: "Rookie" }
        ]
    },
    {
        id: "alpine",
        nombre: "Alpine F1 Team",
        emoji: "🔵",
        puntos2025: 22,
        fundacion: 2021,
        base: "Enstone, Reino Unido",
        campeonatos: 2,
        color: "#0090FF",
        categoria: ["historicas"],
        historia: "Estructura oficial de Renault, ganadora de los mundiales 2005-2006 con Alonso. Se renombró Alpine en 2021. Año complejo en 2025.",
        pilotos: [
            { nombre: "Pierre Gasly", numero: 10, rol: "Titular" },
            { nombre: "Franco Colapinto", numero: 43, rol: "Titular" }
        ]
    }
];

/* ============================================
   GRUPO A: RENDERIZADO DINÁMICO DEL CATÁLOGO
   ============================================ */
const contenedorCatalogo = document.getElementById('catalogo-grid');

function renderizarCatalogo(filtro = 'todas') {
    if (!contenedorCatalogo) return;
    contenedorCatalogo.innerHTML = '';

    let datos = escuderias;
    if (filtro === 'top') {
        datos = [...escuderias].sort((a, b) => b.puntos2025 - a.puntos2025).slice(0, 5);
    }

    datos.forEach(escuderia => {
        const article = document.createElement('article');
        article.classList.add('card');
        article.style.setProperty('--accent', escuderia.color);

        const pilotosHTML = escuderia.pilotos.map(p => 
            `<span class="piloto-tag">#${p.numero} ${p.nombre}</span>`
        ).join('');

        article.innerHTML = `
            <img src="images/escuderias/${escuderia.id}.jpg" 
                 alt="Logo de ${escuderia.nombre}" 
                 class="card-img"
                 onerror="this.style.backgroundColor='${escuderia.color}'; this.alt='${escuderia.emoji}'">
            <div class="card-body">
                <h3>${escuderia.emoji} ${escuderia.nombre}</h3>
                <div class="card-puntos">${escuderia.puntos2025} pts</div>
                <p>${escuderia.historia.substring(0, 90)}...</p>
                <a href="pages/escuderias/${escuderia.id}.html" class="card-link">Ver más →</a>
            </div>
        `;
        contenedorCatalogo.appendChild(article);
    });
}

// Filtros (GRUPO C: addEventListener)
document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderizarCatalogo(e.target.dataset.filtro);
    });
});

/* ============================================
   GRUPO C: MENÚ HAMBURGUESA
   ============================================ */
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });

    // Desplegables en móvil
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const button = dropdown.querySelector('.dropdown-button');
        if (button) {
            button.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
    });
}

/* ============================================
   GRUPO B: VALIDACIÓN DE FORMULARIO
   ============================================ */
const form = document.getElementById('form-contacto');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let esValido = true;

        document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
        document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

        const nombre = document.getElementById('nombre');
        if (nombre.value.trim().length < 3) {
            document.getElementById('error-nombre').textContent = 'Mínimo 3 caracteres.';
            nombre.classList.add('error');
            esValido = false;
        }

        const email = document.getElementById('email');
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email.value)) {
            document.getElementById('error-email').textContent = 'Correo no válido.';
            email.classList.add('error');
            esValido = false;
        }

        const mensaje = document.getElementById('mensaje');
        if (mensaje.value.trim().length < 10) {
            document.getElementById('error-mensaje').textContent = 'Mínimo 10 caracteres.';
            mensaje.classList.add('error');
            esValido = false;
        }

        if (esValido) {
            const success = document.getElementById('success-msg');
            success.textContent = '¡Suscrito con éxito! 🏎️';
            success.style.display = 'block';
            form.reset();
            setTimeout(() => { success.style.display = 'none'; }, 3000);
        }
    });
}

/* ============================================
   RENDERIZADO PARA PÁGINAS INDIVIDUALES
   Detecta automáticamente en qué página estás
   ============================================ */
const contenedorEscuderia = document.getElementById('info-escuderia');
if (contenedorEscuderia) {
    const paginaActual = window.location.pathname.split('/').pop().replace('.html', '');
    const escuderia = escuderias.find(e => e.id === paginaActual);

    if (escuderia) {
        document.documentElement.style.setProperty('--accent', escuderia.color);

        const h1 = document.querySelector('h1');
        if (h1) h1.textContent = `${escuderia.emoji} ${escuderia.nombre}`;

        const pilotosHTML = escuderia.pilotos.map(p => `
            <article class="piloto-card">
                <div class="piloto-numero" style="background-color: ${escuderia.color}">${p.numero}</div>
                <div class="piloto-info">
                    <h3>${p.nombre}</h3>
                    <span class="piloto-rol">${p.rol}</span>
                </div>
            </article>
        `).join('');

        contenedorEscuderia.innerHTML = `
            <section class="escuderia-header">
                <div class="escuderia-titulo">
                    <span class="escuderia-emoji">${escuderia.emoji}</span>
                    <h2>${escuderia.nombre}</h2>
                </div>
                <div class="escuderia-puntos">
                    <span class="puntos-numero">${escuderia.puntos2025}</span>
                    <span class="puntos-label">pts · Temporada 2025</span>
                </div>
            </section>

            <article class="escuderia-historia">
                <h3>Historia</h3>
                <p>${escuderia.historia}</p>
            </article>

            <section class="escuderia-datos">
                <div class="dato"><strong>Fundación:</strong> ${escuderia.fundacion}</div>
                <div class="dato"><strong>Base:</strong> ${escuderia.base}</div>
                <div class="dato"><strong>Campeonatos:</strong> ${escuderia.campeonatos}</div>
            </section>

            <section class="escuderia-pilotos">
                <h3>Pilotos 2025</h3>
                <div class="pilotos-grid">${pilotosHTML}</div>
            </section>
        `;
    }
}

/* ============================================
   INICIALIZACIÓN
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    renderizarCatalogo();
});