/* =====================================================
   VÓLEYRETRO
   SCRIPT PRINCIPAL
===================================================== */


/* =====================================================
   CONSEJOS
===================================================== */

const tips = [
    "En recepción, llega primero con los pies y después ajusta la plataforma de brazos.",
    "Para mejorar el saque, trabaja primero la consistencia del lanzamiento antes de buscar más potencia.",
    "Antes de atacar, observa el bloqueo y busca los espacios libres.",
    "La comunicación es parte de la técnica: habla antes de que el balón llegue a tu zona.",
    "En defensa, intenta leer al atacante antes del contacto con el balón.",
    "Cuando estés bajo presión, concéntrate en la siguiente jugada y no en el marcador.",
    "Practica con objetivos concretos: por ejemplo, dirigir 10 recepciones hacia una zona específica.",
    "Un buen ataque no siempre necesita máxima potencia; la dirección también puede ganar puntos."
];

const dailyTip = document.getElementById("dailyTip");
const newTip = document.getElementById("newTip");

if (newTip && dailyTip) {

    newTip.addEventListener("click", () => {

        const random =
            Math.floor(Math.random() * tips.length);

        dailyTip.style.opacity = "0";

        setTimeout(() => {

            dailyTip.textContent = tips[random];
            dailyTip.style.opacity = "1";

        }, 180);

    });

}


/* =====================================================
   DATOS DEPORTIVOS
===================================================== */

const volleyballData = {

    matches: [

        {
            competition: "VNL",
            status: "PRÓXIMO",
            team1: "Por confirmar",
            team2: "Por confirmar",
            time: "Calendario oficial"
        },

        {
            competition: "INTERNACIONAL",
            status: "PRÓXIMO",
            team1: "Por confirmar",
            team2: "Por confirmar",
            time: "Calendario oficial"
        },

        {
            competition: "CLUBES",
            status: "PRÓXIMO",
            team1: "Por confirmar",
            team2: "Por confirmar",
            time: "Calendario oficial"
        }

    ],


    news: [

        {
            number: "01",
            category: "VNL",
            title: "Volleyball Nations League",
            description:
                "Consulta resultados, posiciones, campeones y protagonistas de la VNL masculina y femenina."
        },

        {
            number: "02",
            category: "CAMPEONATOS",
            title: "Grandes campeonatos",
            description:
                "Descubre las principales competiciones internacionales y los equipos que han marcado su historia."
        },

        {
            number: "03",
            category: "HISTORIA",
            title: "Historia olímpica",
            description:
                "Repasa los campeones olímpicos desde la incorporación del voleibol a los Juegos Olímpicos."
        }

    ],


    competitions: [

        {
            short: "VNL",
            name: "Volleyball Nations League",
            description:
                "Competición internacional anual de selecciones masculinas y femeninas."
        },

        {
            short: "MUNDIAL",
            name: "Campeonato Mundial",
            description:
                "Una de las competiciones más importantes del voleibol internacional."
        },

        {
            short: "OLÍMPICOS",
            name: "Juegos Olímpicos",
            description:
                "El voleibol de sala forma parte del programa olímpico desde Tokio 1964."
        }

    ],


    /* =================================================
       LAS 5 POSICIONES
    ================================================= */

    positions: [

        {
            short: "COLOCADOR",
            name: "Colocador",

            description:
                "Es el jugador encargado de organizar el ataque del equipo. Normalmente realiza el segundo contacto y decide hacia qué atacante dirigir el balón. Necesita precisión, buena lectura del bloqueo rival, comunicación y capacidad para tomar decisiones rápidamente. También debe desplazarse constantemente para llegar a balones que no vienen perfectamente recibidos.",

            training:
                "Entrenamiento específico: realiza 30 colocaciones desde diferentes zonas de la cancha hacia las posiciones 2, 3 y 4. Después añade desplazamientos: parte desde posición defensiva, muévete hacia el balón y realiza la colocación. Finalmente practica decisiones rápidas: un compañero indica qué atacante debe recibir la colocación."
        },


        {
            short: "CENTRAL",
            name: "Central",

            description:
                "El central es uno de los principales especialistas en bloqueo y ataque rápido. Su función consiste en cerrar espacios en la red, leer al colocador contrario y coordinarse con los demás bloqueadores. En ataque suele utilizar balones rápidos por el centro, por lo que necesita velocidad de desplazamiento, salto y buena sincronización con el colocador.",

            training:
                "Entrenamiento específico: realiza series de desplazamientos laterales de bloqueo sobre la red. Después practica saltos de bloqueo y, al caer, vuelve rápidamente a la posición inicial. Para el ataque, trabaja 15 ataques rápidos por el centro intentando sincronizar el salto con el colocador."
        },


        {
            short: "OPUESTO",
            name: "Opuesto",

            description:
                "El opuesto es uno de los principales atacantes del equipo. Suele atacar desde la zona 2 y también puede participar en ataques desde la línea de zagueros. Una de sus responsabilidades importantes es enfrentarse al atacante exterior rival en el bloqueo. Necesita potencia, variedad de golpes, capacidad para atacar balones difíciles y buena lectura del bloqueo.",

            training:
                "Entrenamiento específico: realiza 20 ataques desde zona 2 alternando diagonal, línea y balón colocado. Después practica bloqueo individual contra un atacante exterior. Termina con situaciones de balón complicado, buscando zonas libres en lugar de golpear siempre con máxima potencia."
        },


        {
            short: "PUNTA",
            name: "Punta / Receptor",

            description:
                "El punta, también llamado receptor-atacante, tiene una de las funciones más completas del voleibol. Participa en la recepción del saque, defiende, ataca desde zona 4 y puede colaborar en el bloqueo. Por eso necesita dominar varias habilidades al mismo tiempo. La regularidad en recepción y la capacidad para atacar después de una recepción son especialmente importantes.",

            training:
                "Entrenamiento específico: realiza 20 recepciones dirigidas hacia la zona del colocador. Después de cada recepción, desplázate rápidamente hacia zona 4 y prepara un ataque. Alterna ataques diagonales, paralelos y colocados. Finaliza con ejercicios de defensa después del ataque."
        },


        {
            short: "LÍBERO",
            name: "Líbero",

            description:
                "El líbero es el especialista defensivo del equipo. Su principal responsabilidad es mejorar la recepción y mantener el balón controlado después de los ataques rivales. Necesita excelentes reflejos, lectura del atacante, desplazamiento y comunicación. Se especializa especialmente en recepción y defensa.",

            training:
                "Entrenamiento específico: recibe 30 saques dirigidos a diferentes zonas. Después realiza ejercicios de defensa ante ataques desde distintas posiciones. Trabaja también desplazamientos cortos hacia adelante, atrás y lateralmente. En cada repetición intenta controlar el balón hacia una zona objetivo."
        }

    ]

};


/* =====================================================
   HISTORIAL VNL
===================================================== */

const vnlHistory = {

    men: [

        {
            year: 2025,
            gold: "Polonia",
            silver: "Italia",
            bronze: "Brasil"
        },

        {
            year: 2024,
            gold: "Francia",
            silver: "Japón",
            bronze: "Polonia"
        },

        {
            year: 2023,
            gold: "Polonia",
            silver: "Estados Unidos",
            bronze: "Japón"
        },

        {
            year: 2022,
            gold: "Francia",
            silver: "Estados Unidos",
            bronze: "Polonia"
        },

        {
            year: 2021,
            gold: "Brasil",
            silver: "Polonia",
            bronze: "Francia"
        },

        {
            year: 2019,
            gold: "Rusia",
            silver: "Estados Unidos",
            bronze: "Polonia"
        },

        {
            year: 2018,
            gold: "Rusia",
            silver: "Francia",
            bronze: "Estados Unidos"
        }

    ],


    women: [

        {
            year: 2025,
            gold: "Italia",
            silver: "Brasil",
            bronze: "Polonia"
        },

        {
            year: 2024,
            gold: "Italia",
            silver: "Japón",
            bronze: "Polonia"
        },

        {
            year: 2023,
            gold: "Turquía",
            silver: "China",
            bronze: "Polonia"
        },

        {
            year: 2022,
            gold: "Italia",
            silver: "Brasil",
            bronze: "Serbia"
        },

        {
            year: 2021,
            gold: "Estados Unidos",
            silver: "Brasil",
            bronze: "Turquía"
        },

        {
            year: 2019,
            gold: "Estados Unidos",
            silver: "Brasil",
            bronze: "China"
        },

        {
            year: 2018,
            gold: "Estados Unidos",
            silver: "Turquía",
            bronze: "China"
        }

    ]

};


/* =====================================================
   HISTORIAL OLÍMPICO
===================================================== */

const olympicHistory = {

    men: [

        { year: 2024, gold: "Francia" },
        { year: 2020, gold: "Francia" },
        { year: 2016, gold: "Brasil" },
        { year: 2012, gold: "Rusia" },
        { year: 2008, gold: "Estados Unidos" },
        { year: 2004, gold: "Brasil" },
        { year: 2000, gold: "Yugoslavia" },
        { year: 1996, gold: "Países Bajos" },
        { year: 1992, gold: "Brasil" },
        { year: 1988, gold: "Estados Unidos" },
        { year: 1984, gold: "Estados Unidos" },
        { year: 1980, gold: "Unión Soviética" },
        { year: 1976, gold: "Polonia" },
        { year: 1972, gold: "Japón" },
        { year: 1968, gold: "Unión Soviética" },
        { year: 1964, gold: "Unión Soviética" }

    ],


    women: [

        { year: 2024, gold: "Italia" },
        { year: 2020, gold: "Estados Unidos" },
        { year: 2016, gold: "China" },
        { year: 2012, gold: "Brasil" },
        { year: 2008, gold: "Brasil" },
        { year: 2004, gold: "China" },
        { year: 2000, gold: "Cuba" },
        { year: 1996, gold: "Cuba" },
        { year: 1992, gold: "Cuba" },
        { year: 1988, gold: "Unión Soviética" },
        { year: 1984, gold: "China" },
        { year: 1980, gold: "Unión Soviética" },
        { year: 1976, gold: "Japón" },
        { year: 1972, gold: "Unión Soviética" },
        { year: 1968, gold: "Unión Soviética" },
        { year: 1964, gold: "Japón" }

    ]

};


/* =====================================================
   MATCH CENTER
===================================================== */

function renderMatches() {

    const section =
        document.getElementById("partidos");

    if (!section) return;

    const container =
        section.querySelector(".cards");

    if (!container) return;

    container.innerHTML = "";

    volleyballData.matches.forEach(
        (match, index) => {

            const card =
                document.createElement("article");

            card.className = "card reveal";

            card.innerHTML = `

                <strong>
                    ${index + 1}
                </strong>

                <h3>
                    ${match.team1}
                    <br>

                    <span style="color:#e52b2b">
                        VS
                    </span>

                    <br>

                    ${match.team2}
                </h3>

                <p>
                    <b>${match.competition}</b>
                    <br>
                    ${match.status}
                    <br>
                    ${match.time}
                </p>

            `;

            container.appendChild(card);

        }
    );

    observeAnimations();

}


/* =====================================================
   NOTICIAS
===================================================== */

function renderNews() {

    const section =
        document.getElementById("noticias");

    if (!section) return;

    const container =
        section.querySelector(".cards");

    if (!container) return;

    container.innerHTML = "";

    volleyballData.news.forEach(
        article => {

            const card =
                document.createElement("article");

            card.className = "card reveal";

            card.innerHTML = `

                <strong>
                    ${article.number}
                </strong>

                <h3>
                    ${article.title}
                </h3>

                <p>
                    ${article.description}
                </p>

                <button
                    class="btn secondary news-button"
                    data-category="${article.category}">

                    LEER MÁS

                </button>

            `;

            container.appendChild(card);

        }
    );


    container
        .querySelectorAll(".news-button")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    showNews(
                        button.dataset.category
                    );

                }
            );

        });

    observeAnimations();

}


/* =====================================================
   MOSTRAR NOTICIA
===================================================== */

function showNews(category) {

    const article =
        volleyballData.news.find(
            item => item.category === category
        );

    if (!article) return;

    alert(
        `${article.title}\n\n` +
        `${article.description}`
    );

}


/* =====================================================
   CALENDARIO
===================================================== */

function renderCompetitions() {

    const sections =
        document.querySelectorAll("section");

    let target = null;

    sections.forEach(section => {

        const title =
            section.querySelector(
                ".section-title h2"
            );

        if (!title) return;

        if (
            title.textContent
                .trim()
                .toUpperCase() === "CALENDARIO"
        ) {

            target =
                section.querySelector(".cards");

        }

    });

    if (!target) return;

    target.innerHTML = "";

    volleyballData.competitions
        .forEach(item => {

            const card =
                document.createElement("article");

            card.className =
                "card reveal";

            card.innerHTML = `

                <strong>
                    ${item.short}
                </strong>

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.description}
                </p>

                <button class="btn secondary">
                    VER COMPETICIÓN
                </button>

            `;

            target.appendChild(card);

        });

    observeAnimations();

}


/* =====================================================
   POSICIONES
===================================================== */

function renderPositions() {

    const sections =
        document.querySelectorAll("section");

    let target = null;

    sections.forEach(section => {

        const title =
            section.querySelector(
                ".section-title h2"
            );

        if (!title) return;

        if (
            title.textContent
                .trim()
                .toUpperCase() === "PLAYERS"
        ) {

            target =
                section.querySelector(".cards");

        }

    });

    if (!target) return;

    target.innerHTML = "";

    volleyballData.positions
        .forEach(position => {

            const card =
                document.createElement("article");

            card.className =
                "card reveal";

            card.innerHTML = `

                <strong>
                    ${position.short}
                </strong>

                <h3>
                    ${position.name}
                </h3>

                <p>
                    ${position.description}
                </p>

                <div class="position-training">

                    <strong>
                        🏐 ENTRENAMIENTO ESPECÍFICO
                    </strong>

                    <p>
                        ${position.training}
                    </p>

                </div>

            `;

            target.appendChild(card);

        });

    observeAnimations();

}


/* =====================================================
   HISTORIAL VNL
===================================================== */

function renderVNLHistory(gender = "men") {

    const container =
        document.getElementById("vnlHistory");

    if (!container) return;

    const data =
        vnlHistory[gender];

    if (!data) return;

    container.innerHTML = "";

    data.forEach(item => {

        const card =
            document.createElement("article");

        card.className =
            "vnl-year reveal";

        card.innerHTML = `

            <div class="vnl-year-number">
                ${item.year}
            </div>

            <div class="vnl-result">

                <div class="gold">

                    <span>
                        🥇 CAMPEÓN
                    </span>

                    <strong>
                        ${item.gold}
                    </strong>

                </div>

                <div>

                    <span>
                        🥈 PLATA
                    </span>

                    <strong>
                        ${item.silver}
                    </strong>

                </div>

                <div>

                    <span>
                        🥉 BRONCE
                    </span>

                    <strong>
                        ${item.bronze}
                    </strong>

                </div>

            </div>

        `;

        container.appendChild(card);

    });

    observeAnimations();

}


/* =====================================================
   BOTONES VNL
===================================================== */

document
    .querySelectorAll(".competition")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".competition")
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });

                button.classList.add("active");

                const gender =
                    button.dataset.gender;

                if (gender) {

                    renderVNLHistory(gender);

                }

            }
        );

    });


/* =====================================================
   HISTORIAL OLÍMPICO
===================================================== */

function renderOlympicHistory(
    gender = "men"
) {

    const container =
        document.getElementById(
            "olympicHistory"
        );

    if (!container) return;

    const data =
        olympicHistory[gender];

    if (!data) return;

    container.innerHTML = "";

    data.forEach(item => {

        const card =
            document.createElement("article");

        card.className =
            "vnl-year reveal";

        card.innerHTML = `

            <div class="vnl-year-number">
                ${item.year}
            </div>

            <div class="vnl-result">

                <div class="gold">

                    <span>
                        🥇 CAMPEÓN OLÍMPICO
                    </span>

                    <strong>
                        ${item.gold}
                    </strong>

                </div>

            </div>

        `;

        container.appendChild(card);

    });

    observeAnimations();

}


/* =====================================================
   BOTONES OLÍMPICOS
===================================================== */

document
    .querySelectorAll(".olympic-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".olympic-button"
                    )
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });

                button.classList.add("active");

                const gender =
                    button.dataset.olympic;

                if (gender) {

                    renderOlympicHistory(
                        gender
                    );

                }

            }
        );

    });


/* =====================================================
   =====================================================
   ENTRENADOR IA
   =====================================================
===================================================== */


/* =====================================================
   ELEMENTOS
===================================================== */

const messages =
    document.getElementById("messages");

const questionInput =
    document.getElementById("question");

const sendQuestion =
    document.getElementById("sendQuestion");


/* =====================================================
   HISTORIAL DE CONVERSACIÓN
===================================================== */

let coachHistory = [];


/* =====================================================
   AGREGAR MENSAJE
===================================================== */

function addMessage(text, type) {

    if (!messages) return;

    const message =
        document.createElement("div");

    message.className =
        `message ${type}`;

    message.innerHTML =
        text;

    messages.appendChild(message);

    messages.scrollTop =
        messages.scrollHeight;

}


/* =====================================================
   ESCAPAR HTML
===================================================== */

function escapeHTML(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =====================================================
   FORMATEAR RESPUESTA
===================================================== */

function formatCoachResponse(text) {

    let safe =
        escapeHTML(text);

    /*
       Negrita:
       **texto**
    */

    safe =
        safe.replace(
            /\*\*(.*?)\*\*/g,
            "<strong>$1</strong>"
        );

    /*
       Listas sencillas
    */

    safe =
        safe.replace(
            /^[-•]\s(.+)$/gm,
            "• $1"
        );

    /*
       Saltos de línea
    */

    safe =
        safe.replace(
            /\n/g,
            "<br>"
        );

    return safe;

}


/* =====================================================
   INDICADOR DE ESCRITURA
===================================================== */

function showTyping() {

    if (!messages) return;

    removeTyping();

    const typing =
        document.createElement("div");

    typing.id =
        "coachTyping";

    typing.className =
        "message bot";

    typing.innerHTML = `

        <b>ENTRENADOR:</b>

        <br><br>

        🏐 Pensando...

    `;

    messages.appendChild(
        typing
    );

    messages.scrollTop =
        messages.scrollHeight;

}


/* =====================================================
   QUITAR INDICADOR
===================================================== */

function removeTyping() {

    const typing =
        document.getElementById(
            "coachTyping"
        );

    if (typing) {

        typing.remove();

    }

}


/* =====================================================
   PREGUNTAR A LA IA
===================================================== */

async function askCoach(question) {

    showTyping();

    try {

        /*
           IMPORTANTE:

           Usamos una ruta relativa.

           En local:
           http://localhost:3000/api/coach

           En Render:
           https://tu-app.onrender.com/api/coach

           Así no necesitamos cambiar
           el código al publicar.
        */

        const response =
            await fetch(
                "/api/coach",
                {

                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify({

                            question:
                                question,

                            history:
                                coachHistory

                        })

                }
            );


        /*
           Intentamos leer JSON.
        */

        let data;

        try {

            data =
                await response.json();

        } catch (jsonError) {

            throw new Error(
                "El servidor no devolvió una respuesta válida."
            );

        }


        removeTyping();


        /*
           Si Express devuelve error.
        */

        if (!response.ok) {

            throw new Error(
                data?.error ||
                `Error HTTP ${response.status}`
            );

        }


        const answer =
            data?.answer;


        if (
            !answer ||
            typeof answer !== "string"
        ) {

            throw new Error(
                "La IA no devolvió una respuesta."
            );

        }


        /*
           Guardar conversación.
        */

        coachHistory.push({

            role: "user",

            content: question

        });


        coachHistory.push({

            role: "assistant",

            content: answer

        });


        /*
           Mantener únicamente
           las últimas 20 entradas.
        */

        if (
            coachHistory.length > 20
        ) {

            coachHistory =
                coachHistory.slice(-20);

        }


        /*
           Mostrar respuesta.
        */

        addMessage(

            `<b>ENTRENADOR:</b><br><br>` +
            formatCoachResponse(answer),

            "bot"

        );


    } catch (error) {

        removeTyping();

        console.error(
            "Error del entrenador IA:",
            error
        );


        let errorMessage =
            "⚠️ No pude conectarme con el entrenador de IA.";


        /*
           Mensajes más útiles
           para detectar el problema.
        */

        if (
            error.message.includes(
                "Failed to fetch"
            )
        ) {

            errorMessage +=
                "<br><br>" +
                "El servidor no está disponible. " +
                "Comprueba que VóleyRetro esté ejecutándose " +
                "desde el servidor Node.";

        } else {

            errorMessage +=
                "<br><br>" +
                escapeHTML(
                    error.message
                );

        }


        addMessage(

            `<b>ENTRENADOR:</b><br><br>` +
            errorMessage,

            "bot"

        );

    }

}


/* =====================================================
   ENVIAR PREGUNTA
===================================================== */

function sendQuestionMessage() {

    if (!questionInput) return;


    const question =
        questionInput.value.trim();


    if (!question) return;


    /*
       Mostrar pregunta inmediatamente.
    */

    addMessage(

        escapeHTML(question),

        "user"

    );


    /*
       Limpiar campo.
    */

    questionInput.value = "";


    /*
       Evitar múltiples solicitudes.
    */

    if (sendQuestion) {

        sendQuestion.disabled =
            true;

    }


    askCoach(question)
        .finally(() => {

            if (sendQuestion) {

                sendQuestion.disabled =
                    false;

            }

            if (questionInput) {

                questionInput.focus();

            }

        });

}


/* =====================================================
   BOTÓN ENVIAR
===================================================== */

if (sendQuestion) {

    sendQuestion.addEventListener(
        "click",
        sendQuestionMessage
    );

}


/* =====================================================
   ENTER PARA ENVIAR
===================================================== */

if (questionInput) {

    questionInput.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter" &&
                !event.shiftKey
            ) {

                event.preventDefault();

                sendQuestionMessage();

            }

        }
    );

}


/* =====================================================
   BOTONES RÁPIDOS DEL ENTRENADOR
===================================================== */

const quickCoachQuestions = {

    recepcion:
        "¿Cómo puedo mejorar mi recepción y qué errores debería evitar?",

    saque:
        "¿Cómo puedo mejorar mi saque y conseguir más precisión?",

    ataque:
        "¿Cómo puedo mejorar mi ataque y tomar mejores decisiones frente al bloqueo?",

    bloqueo:
        "¿Cómo puedo mejorar mi bloqueo y leer mejor al atacante?",

    defensa:
        "¿Cómo puedo mejorar mi defensa y reaccionar mejor ante los ataques?",

    mental:
        "¿Cómo puedo controlar los nervios y mantener la concentración durante un partido?",

    plan:
        "Hazme una sesión de entrenamiento de voleibol adaptada para mejorar mi técnica general."

};


document
    .querySelectorAll(
        ".coach-menu button"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const type =
                    button.dataset.question;

                const question =
                    quickCoachQuestions[type];


                if (!question) return;


                /*
                   Mostrar pregunta.
                */

                addMessage(

                    escapeHTML(question),

                    "user"

                );


                /*
                   Mandar a la IA.
                */

                askCoach(question);

            }
        );

    });


/* =====================================================
   MENSAJE INICIAL DEL ENTRENADOR
===================================================== */

function initializeCoach() {

    if (!messages) return;

    /*
       Solo mostrarlo si el chat está vacío.
    */

    if (
        messages.children.length === 0
    ) {

        addMessage(

            `
            <b>ENTRENADOR:</b><br><br>
            🏐 ¡Hola! Soy el entrenador de VóleyRetro.
            <br><br>
            Puedes preguntarme lo que quieras sobre
            voleibol: técnica, posiciones, tácticas,
            entrenamiento, errores, partidos o situaciones
            específicas de juego.
            `,

            "bot"

        );

    }

}


/* =====================================================
   LOGIN
===================================================== */

const loginModal =
    document.getElementById("loginModal");

const loginBtn =
    document.getElementById("loginBtn");

const closeLogin =
    document.getElementById("closeLogin");


if (loginBtn && loginModal) {

    loginBtn.addEventListener(
        "click",
        () => {

            loginModal.style.display =
                "grid";

        }
    );

}


if (closeLogin && loginModal) {

    closeLogin.addEventListener(
        "click",
        () => {

            loginModal.style.display =
                "none";

        }
    );

}


if (loginModal) {

    loginModal.addEventListener(
        "click",
        event => {

            if (
                event.target === loginModal
            ) {

                loginModal.style.display =
                    "none";

            }

        }
    );

}


/* =====================================================
   LOGIN TEMPORAL
===================================================== */

const googleLogin =
    document.getElementById("googleLogin");

const emailLogin =
    document.getElementById("emailLogin");


if (googleLogin) {

    googleLogin.addEventListener(
        "click",
        () => {

            alert(
                "Google Login será conectado con Firebase Authentication."
            );

        }
    );

}


if (emailLogin) {

    emailLogin.addEventListener(
        "click",
        () => {

            const email =
                document
                    .getElementById("email")
                    ?.value.trim();


            const password =
                document
                    .getElementById("password")
                    ?.value;


            if (
                !email ||
                !password
            ) {

                alert(
                    "Escribe tu correo y contraseña."
                );

                return;

            }


            alert(
                "El inicio de sesión real se conectará con Firebase Authentication."
            );

        }
    );

}


/* =====================================================
   ANIMACIONES
===================================================== */

function observeAnimations() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    elements.forEach(element => {

        element.classList.add(
            "reveal-ready"
        );

    });


    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(element => {

            element.classList.add(
                "reveal-visible"
            );

        });

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "reveal-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.08
            }
        );


    elements.forEach(element => {

        observer.observe(element);

    });

}


/* =====================================================
   INICIAR PÁGINA
===================================================== */

renderMatches();

renderNews();

renderCompetitions();

renderPositions();

observeAnimations();


/* =====================================================
   INICIAR HISTORIA
===================================================== */

renderVNLHistory("men");

renderOlympicHistory("men");


/* =====================================================
   INICIAR ENTRENADOR
===================================================== */

initializeCoach();


/* =====================================================
   COMPROBACIÓN
===================================================== */

console.log(
    "🏐 VóleyRetro funcionando correctamente."
);

console.log(
    "🤖 Entrenador IA preparado."
);
