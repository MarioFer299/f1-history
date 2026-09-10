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
        pilotos: [
            { nombre: "Lando Norris", numero: 4 },
            { nombre: "Oscar Piastri", numero: 81 }
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
        pilotos: [
            { nombre: "George Russell", numero: 63 },
            { nombre: "Andrea Kimi Antonelli", numero: 12 }
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
        pilotos: [
            { nombre: "Max Verstappen", numero: 1 },
            { nombre: "Yuki Tsunoda", numero: 22 }
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
        pilotos: [
            { nombre: "Charles Leclerc", numero: 16 },
            { nombre: "Lewis Hamilton", numero: 44 }
        ]
    },
    {
        id: "williams",
        nombre: "Williams Racing",
        emoji: "",
        puntos2025: 137,
        fundacion: 1977,
        base: "Grove, Reino Unido",
        campeonatos: 9,
        color: "#005AFF",
        categoria: ["historicas"],
        pilotos: [
            { nombre: "Alexander Albon", numero: 23 },
            { nombre: "Carlos Sainz Jr.", numero: 55 }
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
        pilotos: [
            { nombre: "Isack Hadjar", numero: 6 },
            { nombre: "Liam Lawson", numero: 30 }
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
        pilotos: [
            { nombre: "Fernando Alonso", numero: 14 },
            { nombre: "Lance Stroll", numero: 18 }
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
        pilotos: [
            { nombre: "Esteban Ocon", numero: 31 },
            { nombre: "Oliver Bearman", numero: 87 }
        ]
    },
    {
        id: "stake-kick-sauber",  
        nombre: "Stake F1 Team Kick Sauber",
        emoji: "",
        puntos2025: 70,
        fundacion: 1993,
        base: "Hinwil, Suiza",
        campeonatos: 0,
        color: "#52E252",
        categoria: ["historicas"],
        imagenLogo: "sauber",
        pilotos: [
            { nombre: "Nico Hülkenberg", numero: 27 },
            { nombre: "Gabriel Bortoleto", numero: 5 }
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
        pilotos: [
            { nombre: "Pierre Gasly", numero: 10 },
            { nombre: "Franco Colapinto", numero: 43 }
        ]
    }
];

/* ============================================
   BASE DE DATOS COMPLETA DE PILOTOS
   ============================================ */
const pilotosData = {
    norris: {
        nombre: "Lando Norris", numero: 4, escuderiaActual: "McLaren", nacionalidad: "Británico",
        fechaNacimiento: "13 de noviembre de 1999", lugarNacimiento: "Bristol, Reino Unido",
        biografia: "Lando Norris es uno de los pilotos más prometedores de su generación. Conocido por su carisma y habilidad bajo presión, ha demostrado ser un piloto completo capaz de luchar por victorias.",
        estadisticas: { carreras: 118, victorias: 4, podios: 22, poles: 6, vueltasRapidas: 8, puntos: 834 },
        historialEscuderias: [{ escuderia: "McLaren", años: "2019-Presente", carreras: 118 }],
        logros: "Campeón de la F1 en 2025 con McLaren. Considerado uno de los mejores pilotos jóvenes de la década."
    },
    piastri: {
        nombre: "Oscar Piastri", numero: 81, escuderiaActual: "McLaren", nacionalidad: "Australiano",
        fechaNacimiento: "6 de abril de 2001", lugarNacimiento: "Melbourne, Australia",
        biografia: "Oscar Piastri llegó a la F1 tras ganar los campeonatos de F3 y F2 de manera consecutiva. Su adaptación a la categoría reina ha sido excepcional.",
        estadisticas: { carreras: 42, victorias: 2, podios: 9, poles: 0, vueltasRapidas: 3, puntos: 292 },
        historialEscuderias: [{ escuderia: "McLaren", años: "2023-Presente", carreras: 42 }],
        logros: "Subcampeón de la F1 en 2025. Rookie del Año 2023."
    },
    russell: {
        nombre: "George Russell", numero: 63, escuderiaActual: "Mercedes", nacionalidad: "Británico",
        fechaNacimiento: "15 de febrero de 1998", lugarNacimiento: "King's Lynn, Reino Unido",
        biografia: "George Russell demostró su talento en Williams antes de unirse a Mercedes. Conocido por su consistencia y velocidad pura.",
        estadisticas: { carreras: 108, victorias: 2, podios: 12, poles: 3, vueltasRapidas: 7, puntos: 567 },
        historialEscuderias: [{ escuderia: "Williams", años: "2019-2021", carreras: 60 }, { escuderia: "Mercedes", años: "2022-Presente", carreras: 48 }],
        logros: "Victoria en GP de Brasil 2022. Primer piloto de Williams en conseguir pole desde 2018."
    },
    antonelli: {
        nombre: "Andrea Kimi Antonelli", numero: 12, escuderiaActual: "Mercedes", nacionalidad: "Italiano",
        fechaNacimiento: "25 de agosto de 2006", lugarNacimiento: "Bolonia, Italia",
        biografia: "El joven prodigio italiano llegó a la F1 directamente desde la F2, siendo considerado uno de los talentos más prometedores de los últimos años.",
        estadisticas: { carreras: 3, victorias: 0, podios: 0, poles: 0, vueltasRapidas: 0, puntos: 8 },
        historialEscuderias: [{ escuderia: "Mercedes", años: "2025-Presente", carreras: 3 }],
        logros: "Rookie de la temporada 2025. Campeón de F2 en 2024."
    },
    verstappen: {
        nombre: "Max Verstappen", numero: 1, escuderiaActual: "Red Bull Racing", nacionalidad: "Neerlandés",
        fechaNacimiento: "30 de septiembre de 1997", lugarNacimiento: "Hasselt, Bélgica",
        biografia: "Max Verstappen es uno de los pilotos más dominantes de la historia de la F1. Campeón mundial en 2021, 2022, 2023 y 2024.",
        estadisticas: { carreras: 198, victorias: 62, podios: 107, poles: 40, vueltasRapidas: 33, puntos: 2841 },
        historialEscuderias: [{ escuderia: "Toro Rosso", años: "2015", carreras: 1 }, { escuderia: "Red Bull Racing", años: "2016-Presente", carreras: 197 }],
        logros: "4 veces Campeón Mundial. Piloto más joven en ganar un GP (18 años)."
    },
    lawson: {
        nombre: "Liam Lawson", numero: 30, escuderiaActual: "Red Bull Racing", nacionalidad: "Neozelandés",
        fechaNacimiento: "11 de febrero de 2002", lugarNacimiento: "Hastings, Nueva Zelanda",
        biografia: "Liam Lawson llegó a la F1 tras años como piloto de reservas de Red Bull. Su oportunidad llegó en 2025.",
        estadisticas: { carreras: 12, victorias: 0, podios: 1, poles: 0, vueltasRapidas: 1, puntos: 48 },
        historialEscuderias: [{ escuderia: "AlphaTauri", años: "2023", carreras: 5 }, { escuderia: "Red Bull Racing", años: "2025-Presente", carreras: 7 }],
        logros: "Podio en GP de Singapur 2023. Subcampeón de Super Formula 2024."
    },
    leclerc: {
        nombre: "Charles Leclerc", numero: 16, escuderiaActual: "Ferrari", nacionalidad: "Monegasco",
        fechaNacimiento: "16 de octubre de 1997", lugarNacimiento: "Monte Carlo, Mónaco",
        biografia: "Charles Leclerc es considerado uno de los pilotos más talentosos de su generación. Ha logrado múltiples victorias con Ferrari.",
        estadisticas: { carreras: 138, victorias: 8, podios: 38, poles: 26, vueltasRapidas: 9, puntos: 1247 },
        historialEscuderias: [{ escuderia: "Sauber", años: "2018", carreras: 21 }, { escuderia: "Ferrari", años: "2019-Presente", carreras: 117 }],
        logros: "Subcampeón Mundial 2022. Múltiples victorias con Ferrari."
    },
    hamilton: {
        nombre: "Lewis Hamilton", numero: 44, escuderiaActual: "Ferrari", nacionalidad: "Británico",
        fechaNacimiento: "7 de enero de 1985", lugarNacimiento: "Stevenage, Reino Unido",
        biografia: "Lewis Hamilton es siete veces campeón del mundo y el piloto con más victorias en la historia de la F1. En 2025 dio el salto histórico a Ferrari.",
        estadisticas: { carreras: 358, victorias: 105, podios: 201, poles: 105, vueltasRapidas: 67, puntos: 4847 },
        historialEscuderias: [{ escuderia: "McLaren", años: "2007-2012", carreras: 102 }, { escuderia: "Mercedes", años: "2013-2024", carreras: 243 }, { escuderia: "Ferrari", años: "2025-Presente", carreras: 13 }],
        logros: "7 veces Campeón Mundial. Máximo ganador de la historia de la F1."
    },
    albon: {
        nombre: "Alexander Albon", numero: 23, escuderiaActual: "Williams", nacionalidad: "Tailandés",
        fechaNacimiento: "23 de marzo de 1996", lugarNacimiento: "Londres, Reino Unido",
        biografia: "Alexander Albon ha demostrado gran consistencia y habilidad. Su regreso a Williams en 2025 marcó un nuevo capítulo en su carrera.",
        estadisticas: { carreras: 89, victorias: 0, podios: 2, poles: 0, vueltasRapidas: 1, puntos: 238 },
        historialEscuderias: [{ escuderia: "Toro Rosso", años: "2019", carreras: 12 }, { escuderia: "Red Bull Racing", años: "2019-2020", carreras: 26 }, { escuderia: "Williams", años: "2022-Presente", carreras: 51 }],
        logros: "Podios con Red Bull Racing. Rescate de Williams en 2022-2024."
    },
    sainz: {
        nombre: "Carlos Sainz Jr.", numero: 55, escuderiaActual: "Williams", nacionalidad: "Español",
        fechaNacimiento: "1 de septiembre de 1994", lugarNacimiento: "Madrid, España",
        biografia: "Carlos Sainz Jr. es conocido por su consistencia y habilidad en condiciones difíciles. En 2025 se unió a Williams buscando un nuevo desafío.",
        estadisticas: { carreras: 198, victorias: 4, podios: 24, poles: 6, vueltasRapidas: 5, puntos: 1247 },
        historialEscuderias: [{ escuderia: "Toro Rosso", años: "2015-2017", carreras: 52 }, { escuderia: "Renault", años: "2017-2018", carreras: 33 }, { escuderia: "McLaren", años: "2019-2020", carreras: 39 }, { escuderia: "Ferrari", años: "2021-2024", carreras: 64 }, { escuderia: "Williams", años: "2025-Presente", carreras: 10 }],
        logros: "Victoria en GP de Singapur 2022. Múltiples podios con Ferrari."
    },
    hadjar: {
        nombre: "Isack Hadjar", numero: 6, escuderiaActual: "Racing Bulls", nacionalidad: "Francés",
        fechaNacimiento: "28 de septiembre de 2004", lugarNacimiento: "París, Francia",
        biografia: "Joven talento francés que llegó a la F1 tras destacar en las categorías inferiores del automovilismo.",
        estadisticas: { carreras: 3, victorias: 0, podios: 0, poles: 0, vueltasRapidas: 0, puntos: 2 },
        historialEscuderias: [{ escuderia: "Racing Bulls", años: "2025-Presente", carreras: 3 }],
        logros: "Rookie 2025. Tercer lugar en F2 2024."
    },
    alonso: {
        nombre: "Fernando Alonso", numero: 14, escuderiaActual: "Aston Martin", nacionalidad: "Español",
        fechaNacimiento: "29 de julio de 1981", lugarNacimiento: "Oviedo, España",
        biografia: "Fernando Alonso es dos veces campeón del mundo y uno de los pilotos más respetados de la parrilla. Su experiencia es invaluable.",
        estadisticas: { carreras: 398, victorias: 32, podios: 106, poles: 22, vueltasRapidas: 26, puntos: 2357 },
        historialEscuderias: [{ escuderia: "Minardi", años: "2001", carreras: 1 }, { escuderia: "Renault", años: "2003-2006, 2008-2009", carreras: 107 }, { escuderia: "McLaren", años: "2007, 2015-2018", carreras: 73 }, { escuderia: "Ferrari", años: "2010-2014", carreras: 95 }, { escuderia: "Aston Martin", años: "2023-Presente", carreras: 62 }],
        logros: "2 veces Campeón Mundial (2005, 2006). 32 victorias en F1."
    },
    stroll: {
        nombre: "Lance Stroll", numero: 18, escuderiaActual: "Aston Martin", nacionalidad: "Canadiense",
        fechaNacimiento: "29 de octubre de 1998", lugarNacimiento: "Montreal, Canadá",
        biografia: "Lance Stroll ha demostrado ser un piloto sólido y consistente, con varios podios en su carrera.",
        estadisticas: { carreras: 158, victorias: 0, podios: 3, poles: 1, vueltasRapidas: 0, puntos: 287 },
        historialEscuderias: [{ escuderia: "Williams", años: "2017-2018", carreras: 39 }, { escuderia: "Racing Point", años: "2019-2020", carreras: 34 }, { escuderia: "Aston Martin", años: "2021-Presente", carreras: 85 }],
        logros: "Podio en GP de Azerbaiyán 2021. Pole en GP de Turquía 2020."
    },
    ocon: {
        nombre: "Esteban Ocon", numero: 31, escuderiaActual: "Haas", nacionalidad: "Francés",
        fechaNacimiento: "17 de septiembre de 1996", lugarNacimiento: "Évreux, Francia",
        biografia: "Esteban Ocon es campeón del mundo de GP3 y ha demostrado gran talento en la F1, logrando una victoria memorable.",
        estadisticas: { carreras: 148, victorias: 1, podios: 3, poles: 0, vueltasRapidas: 1, puntos: 458 },
        historialEscuderias: [{ escuderia: "Manor", años: "2016", carreras: 9 }, { escuderia: "Force India/Racing Point", años: "2017-2018", carreras: 39 }, { escuderia: "Renault/Alpine", años: "2020-2024", carreras: 89 }, { escuderia: "Haas", años: "2025-Presente", carreras: 11 }],
        logros: "Victoria en GP de Hungría 2021. Podios múltiples."
    },
    bearman: {
        nombre: "Oliver Bearman", numero: 87, escuderiaActual: "Haas", nacionalidad: "Británico",
        fechaNacimiento: "8 de mayo de 2005", lugarNacimiento: "Chelmsford, Reino Unido",
        biografia: "Oliver Bearman es uno de los rookies más prometedores de 2025, llegando tras destacar en las categorías inferiores.",
        estadisticas: { carreras: 8, victorias: 0, podios: 0, poles: 0, vueltasRapidas: 0, puntos: 12 },
        historialEscuderias: [{ escuderia: "Ferrari", años: "2024 (Reemplazo)", carreras: 1 }, { escuderia: "Haas", años: "2025-Presente", carreras: 7 }],
        logros: "Puntos en su debut con Ferrari 2024. Rookie 2025."
    },
    hulkenberg: {
        nombre: "Nico Hülkenberg", numero: 27, escuderiaActual: "Sauber", nacionalidad: "Alemán",
        fechaNacimiento: "19 de agosto de 1987", lugarNacimiento: "Emmerich, Alemania",
        biografia: "Nico Hülkenberg es conocido como uno de los pilotos más experimentados sin victoria, pero con gran consistencia.",
        estadisticas: { carreras: 218, victorias: 0, podios: 0, poles: 1, vueltasRapidas: 2, puntos: 567 },
        historialEscuderias: [{ escuderia: "Williams", años: "2010", carreras: 19 }, { escuderia: "Force India", años: "2011-2012, 2014-2016", carreras: 95 }, { escuderia: "Sauber", años: "2013", carreras: 19 }, { escuderia: "Renault", años: "2017-2019", carreras: 59 }, { escuderia: "Aston Martin", años: "2020", carreras: 0 }, { escuderia: "Haas", años: "2023-2024", carreras: 44 }, { escuderia: "Sauber", años: "2025-Presente", carreras: 10 }],
        logros: "Pole en GP de Brasil 2010. 24 horas de Le Mans ganador 2015."
    },
    bortoleto: {
        nombre: "Gabriel Bortoleto", numero: 5, escuderiaActual: "Sauber", nacionalidad: "Brasileño",
        fechaNacimiento: "14 de octubre de 2004", lugarNacimiento: "São Paulo, Brasil",
        biografia: "Gabriel Bortoleto es campeón de F3 y llegó a la F1 como uno de los rookies más esperados de 2025.",
        estadisticas: { carreras: 3, victorias: 0, podios: 0, poles: 0, vueltasRapidas: 0, puntos: 0 },
        historialEscuderias: [{ escuderia: "Sauber", años: "2025-Presente", carreras: 3 }],
        logros: "Campeón de F3 2023. Rookie 2025."
    },
    gasly: {
        nombre: "Pierre Gasly", numero: 10, escuderiaActual: "Alpine", nacionalidad: "Francés",
        fechaNacimiento: "7 de febrero de 1996", lugarNacimiento: "Ruan, Francia",
        biografia: "Pierre Gasly ha demostrado gran talento y consistencia, logrando victorias y podios a lo largo de su carrera.",
        estadisticas: { carreras: 148, victorias: 1, podios: 4, poles: 0, vueltasRapidas: 3, puntos: 412 },
        historialEscuderias: [{ escuderia: "Toro Rosso", años: "2017-2018, 2019", carreras: 43 }, { escuderia: "Red Bull Racing", años: "2019", carreras: 12 }, { escuderia: "AlphaTauri", años: "2020-2022", carreras: 62 }, { escuderia: "Alpine", años: "2023-Presente", carreras: 31 }],
        logros: "Victoria en GP de Italia 2020. Múltiples podios."
    },
    colapinto: {
        nombre: "Franco Colapinto", numero: 43, escuderiaActual: "Alpine", nacionalidad: "Argentino",
        fechaNacimiento: "27 de mayo de 2003", lugarNacimiento: "Pilar, Argentina",
        biografia: "Franco Colapinto es el primer piloto argentino en F1 en décadas. Llegó como reemplazo en 2024 y se ganó un asiento titular.",
        estadisticas: { carreras: 12, victorias: 0, podios: 0, poles: 0, vueltasRapidas: 1, puntos: 27 },
        historialEscuderias: [{ escuderia: "Williams", años: "2024", carreras: 9 }, { escuderia: "Alpine", años: "2025-Presente", carreras: 3 }],
        logros: "Primer argentino en F1 desde 1997. Puntos en su debut."
    },
    tsunoda: {
        nombre: "Yuki Tsunoda", numero: 22, escuderiaActual: "AlphaTauri", nacionalidad: "Japonés",
        fechaNacimiento: "11 de julio de 2000", lugarNacimiento: "Saitama, Japón",
        biografia: "Yuki Tsunoda es un piloto japonés que ha mostrado gran potencial en F1, destacando por su habilidad en circuitos cerrados.",
        estadisticas: { carreras: 36, victorias: 0, podios: 0, poles: 0, vueltasRapidas: 0, puntos: 72 },
        historialEscuderias: [{ escuderia: "Toro Rosso", años: "2021-2022", carreras: 18 }, { escuderia: "AlphaTauri", años: "2023-Presente", carreras: 18 }],
        logros: "Primer piloto japonés en F1 desde 2021. Puntos en su debut."
    }
};
        
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
            <div class="card-img-container">
                <img src="/images/logo/${escuderia.imagenLogo || escuderia.id}.jpg" 
                     alt="Logo de ${escuderia.nombre}" 
                     class="card-logo"
                     onerror="this.style.display='none'">
            </div>
            <div class="card-body">
                <h3>${escuderia.nombre}</h3>
                <div class="card-puntos">${escuderia.puntos2025} pts</div>
                <a href="/pages/escuderias/${escuderia.id}.html" class="card-link">Ver más →</a>
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
   RENDERIZADO PARA PÁGINAS DE ESCUDERÍAS
   ============================================ */
const contenedorEscuderia = document.getElementById('info-escuderia');
if (contenedorEscuderia) {
    const paginaActual = window.location.pathname.split('/').pop().replace('.html', '');
    const escuderia = escuderias.find(e => e.id === paginaActual);

    if (escuderia) {
        document.documentElement.style.setProperty('--accent', escuderia.color);

        const h1 = document.querySelector('h1');
        if (h1) {
            h1.innerHTML = `<img src="/images/logo/${escuderia.imagenLogo || escuderia.id}.jpg" alt="Logo ${escuderia.nombre}" style="width: 40px; vertical-align: middle; margin-right: 10px;"> ${escuderia.nombre}`;
        }

        const pilotosHTML = escuderia.pilotos.map(p => {
            let apellido = p.nombre.toLowerCase().split(' ').pop();
            apellido = apellido.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            
            return `
                <article class="piloto-card">
                    <img src="/images/pilotos/${apellido}.jpg" 
                         alt="Foto de ${p.nombre}" 
                         class="piloto-imagen"
                         onerror="this.style.display='none'">
                    <div class="piloto-info">
                        <h3>${p.nombre} <span style="color: ${escuderia.color}; font-weight: bold;">#${p.numero}</span></h3>
                        <a href="/pages/pilotos/${apellido}.html" class="piloto-link">Ver perfil →</a>
                    </div>
                </article>
            `;
        }).join('');

        contenedorEscuderia.innerHTML = `
            <section class="escuderia-header">
                <div class="escuderia-titulo">
                    <img src="/images/logo/${escuderia.imagenLogo || escuderia.id}.jpg" 
                         alt="Logo ${escuderia.nombre}" 
                         class="escuderia-logo"
                         onerror="this.style.display='none'">
                    <h2>${escuderia.nombre}</h2>
                </div>
                <div class="escuderia-puntos">
                    <span class="puntos-numero">${escuderia.puntos2025}</span>
                    <span class="puntos-label">pts · Temporada 2025</span>
                </div>
            </section>

            <article class="escuderia-imagen-container">
                <img src="/images/escuderias/${escuderia.imagenLogo || escuderia.id}.jpg" 
                     alt="Imagen de ${escuderia.nombre}" 
                     class="escuderia-imagen"
                     onerror="this.style.display='none'">
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
   RENDERIZADO PARA PÁGINAS DE PILOTOS
   ============================================ */
const contenedorPiloto = document.getElementById('info-piloto');
if (contenedorPiloto) {
    let paginaActual = window.location.pathname.split('/').pop().replace('.html', '');
    paginaActual = paginaActual.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    
    const piloto = pilotosData[paginaActual];

    if (piloto) {
        const escuderiaColor = escuderias.find(e => e.nombre === piloto.escuderiaActual)?.color || '#e10600';
        document.documentElement.style.setProperty('--accent', escuderiaColor);

        const historialHTML = piloto.historialEscuderias.map(h => `
            <div class="historial-item">
                <span class="historial-anos">${h.años}</span>
                <span class="historial-escuderia">${h.escuderia}</span>
                <span class="historial-carreras">${h.carreras} carreras</span>
            </div>
        `).join('');

        contenedorPiloto.innerHTML = `
            <article class="piloto-perfil">
                <div class="piloto-header">
                    <img src="/images/pilotos/${paginaActual}.jpg" 
                         alt="Foto de ${piloto.nombre}" 
                         class="piloto-foto-principal"
                         onerror="this.style.display='none'">
                    <div class="piloto-info-principal">
                        <h1>${piloto.nombre}</h1>
                        <div class="piloto-numero-grande" style="color: ${escuderiaColor}">#${piloto.numero}</div>
                        <p class="piloto-escuderia">${piloto.escuderiaActual}</p>
                    </div>
                </div>

                <div class="piloto-biografia">
                    <h3>Biografía</h3>
                    <p>${piloto.biografia}</p>
                </div>

                <div class="piloto-datos-personales">
                    <div class="dato"><strong>Nacionalidad:</strong> ${piloto.nacionalidad}</div>
                    <div class="dato"><strong>Fecha de nacimiento:</strong> ${piloto.fechaNacimiento}</div>
                    <div class="dato"><strong>Lugar de nacimiento:</strong> ${piloto.lugarNacimiento}</div>
                </div>

                <section class="piloto-estadisticas">
                    <h3>Estadísticas de Carrera</h3>
                    <div class="stats-grid">
                        <div class="stat-box">
                            <span class="stat-number">${piloto.estadisticas.carreras}</span>
                            <span class="stat-label">Carreras</span>
                        </div>
                        <div class="stat-box">
                            <span class="stat-number">${piloto.estadisticas.victorias}</span>
                            <span class="stat-label">Victorias</span>
                        </div>
                        <div class="stat-box">
                            <span class="stat-number">${piloto.estadisticas.podios}</span>
                            <span class="stat-label">Podios</span>
                        </div>
                        <div class="stat-box">
                            <span class="stat-number">${piloto.estadisticas.poles}</span>
                            <span class="stat-label">Pole Positions</span>
                        </div>
                        <div class="stat-box">
                            <span class="stat-number">${piloto.estadisticas.vueltasRapidas}</span>
                            <span class="stat-label">Vueltas Rápidas</span>
                        </div>
                        <div class="stat-box">
                            <span class="stat-number">${piloto.estadisticas.puntos}</span>
                            <span class="stat-label">Puntos</span>
                        </div>
                    </div>
                </section>

                <section class="piloto-historial">
                    <h3>Historial de Escuderías</h3>
                    <div class="historial-lista">
                        ${historialHTML}
                    </div>
                </section>

                ${piloto.logros ? `
                <section class="piloto-logros">
                    <h3>Logros Destacados</h3>
                    <p>${piloto.logros}</p>
                </section>
                ` : ''}
            </article>
        `;
    }
}

/* ============================================
   MEJORAS DE UX - CERRAR MENÚS AUTOMÁTICAMENTE
   ============================================ */

// 1. Cerrar menú al seleccionar un enlace (piloto, escudería, historia)
document.querySelectorAll('.dropdown-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
        const navMenu = document.getElementById('nav-menu');
        if (navMenu) navMenu.classList.remove('active');
        const menuToggle = document.getElementById('menu-toggle');
        if (menuToggle) menuToggle.textContent = '☰';
    });
});

// 2. Cerrar menú al hacer clic fuera de la barra de navegación
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
        const navMenu = document.getElementById('nav-menu');
        if (navMenu) navMenu.classList.remove('active');
        const menuToggle = document.getElementById('menu-toggle');
        if (menuToggle) menuToggle.textContent = '☰';
    }
});

// 3. Cerrar menú al hacer scroll (con un pequeño retraso para no ser molesto)
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
    }, 100);
});

/* ============================================
   INICIALIZACIÓN
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    renderizarCatalogo();
    /* ============================================
   CAMBIO DE TEMA (CLARO/OSCURO)
   ============================================ */
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle?.querySelector('.icon');
const themeText = themeToggle?.querySelector('.text');

// Función para aplicar el tema
function aplicarTema(tema) {
    if (tema === 'light') {
        document.documentElement.classList.add('light-theme');
        if (themeIcon) themeIcon.textContent = '☀️';
        if (themeText) themeText.textContent = 'Claro';
        localStorage.setItem('tema', 'light');
    } else {
        document.documentElement.classList.remove('light-theme');
        if (themeIcon) themeIcon.textContent = '🌙';
        if (themeText) themeText.textContent = 'Oscuro';
        localStorage.setItem('tema', 'dark');
    }
}

// Cargar tema guardado al iniciar
const temaGuardado = localStorage.getItem('tema');
if (temaGuardado) {
    aplicarTema(temaGuardado);
}

// Evento click para cambiar tema
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const esTemaClaro = document.documentElement.classList.contains('light-theme');
        aplicarTema(esTemaClaro ? 'dark' : 'light');
    });
}
});