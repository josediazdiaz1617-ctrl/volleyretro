/* =====================================================
   VÓLEYRETRO
   JAVASCRIPT PRINCIPAL
===================================================== */


/* =====================================================
   LOGIN
===================================================== */

const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeLogin = document.getElementById("closeLogin");

if (loginBtn && loginModal) {
    loginBtn.addEventListener("click", () => {
        loginModal.style.display = "grid";
        document.body.style.overflow = "hidden";
    });
}

if (closeLogin && loginModal) {
    closeLogin.addEventListener("click", () => {
        loginModal.style.display = "none";
        document.body.style.overflow = "";
    });
}

if (loginModal) {
    loginModal.addEventListener("click", (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = "none";
            document.body.style.overflow = "";
        }
    });
}


/* =====================================================
   LOGIN CON CORREO
===================================================== */

const emailLogin = document.getElementById("emailLogin");

if (emailLogin) {
    emailLogin.addEventListener("click", () => {

        const email = document.getElementById("email");
        const password = document.getElementById("password");

        if (!email || !password) return;

        if (
            email.value.trim() === "" ||
            password.value.trim() === ""
        ) {
            alert("Completa el correo y la contraseña.");
            return;
        }

        alert("Inicio de sesión preparado. Aquí podrás conectar posteriormente tu sistema de usuarios.");

    });
}


/* =====================================================
   LOGIN CON GOOGLE
===================================================== */

const googleLogin = document.getElementById("googleLogin");

if (googleLogin) {
    googleLogin.addEventListener("click", () => {

        alert(
            "El inicio de sesión con Google necesita configurarse mediante Firebase u otro servicio de autenticación."
        );

    });
}


/* =====================================================
   CERRAR LOGIN CON ESC
===================================================== */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        loginModal &&
        loginModal.style.display === "grid"
    ) {

        loginModal.style.display = "none";
        document.body.style.overflow = "";

    }

});


/* =====================================================
   CALENDARIO / COMPETICIONES
===================================================== */


/*
   IMPORTANTE:

   Estos datos se muestran directamente en la página.
   No se utilizan enlaces externos ni páginas inexistentes,
   por lo que los botones de años no producen error 404.
*/


const competitionData = {

    /* =================================================
       VNL MASCULINA
    ================================================= */

    vnlMen: {

        2025: {
            first: "Italia",
            second: "Polonia",
            third: "Brasil"
        },

        2024: {
            first: "Francia",
            second: "Japón",
            third: "Polonia"
        },

        2023: {
            first: "Polonia",
            second: "Estados Unidos",
            third: "Japón"
        },

        2022: {
            first: "Francia",
            second: "Estados Unidos",
            third: "Polonia"
        },

        2021: {
            first: "Estados Unidos",
            second: "Brasil",
            third: "Francia"
        },

        2019: {
            first: "Rusia",
            second: "Estados Unidos",
            third: "Polonia"
        }

    },


    /* =================================================
       VNL FEMENINA
    ================================================= */

    vnlWomen: {

        2025: {
            first: "Italia",
            second: "Brasil",
            third: "Polonia"
        },

        2024: {
            first: "Italia",
            second: "Japón",
            third: "Polonia"
        },

        2023: {
            first: "Turquía",
            second: "China",
            third: "Estados Unidos"
        },

        2022: {
            first: "Italia",
            second: "Brasil",
            third: "Serbia"
        },

        2021: {
            first: "Estados Unidos",
            second: "Brasil",
            third: "Turquía"
        },

        2019: {
            first: "Estados Unidos",
            second: "Brasil",
            third: "China"
        }

    },


    /* =================================================
       MUNDIAL MASCULINO
    ================================================= */

    worldMen: {

        2022: {
            first: "Italia",
            second: "Polonia",
            third: "Brasil"
        },

        2018: {
            first: "Polonia",
            second: "Brasil",
            third: "Estados Unidos"
        },

        2014: {
            first: "Polonia",
            second: "Brasil",
            third: "Alemania"
        },

        2010: {
            first: "Brasil",
            second: "Cuba",
            third: "Serbia"
        },

        2006: {
            first: "Brasil",
            second: "Polonia",
            third: "Bulgaria"
        }

    },


    /* =================================================
       MUNDIAL FEMENINO
    ================================================= */

    worldWomen: {

        2022: {
            first: "Serbia",
            second: "Brasil",
            third: "Italia"
        },

        2018: {
            first: "Serbia",
            second: "Italia",
            third: "China"
        },

        2014: {
            first: "Estados Unidos",
            second: "China",
            third: "Brasil"
        },

        2010: {
            first: "Rusia",
            second: "Brasil",
            third: "Japón"
        },

        2006: {
            first: "Rusia",
            second: "Brasil",
            third: "Serbia"
        }

    },


    /* =================================================
       JUEGOS OLÍMPICOS MASCULINO
    ================================================= */

    olympicMen: {

        2024: {
            first: "Francia",
            second: "Polonia",
            third: "Estados Unidos"
        },

        2020: {
            first: "Francia",
            second: "ROC",
            third: "Argentina"
        },

        2016: {
            first: "Brasil",
            second: "Italia",
            third: "Estados Unidos"
        },

        2012: {
            first: "Rusia",
            second: "Brasil",
            third: "Italia"
        },

        2008: {
            first: "Estados Unidos",
            second: "Brasil",
            third: "Rusia"
        }

    },


    /* =================================================
       JUEGOS OLÍMPICOS FEMENINO
    ================================================= */

    olympicWomen: {

        2024: {
            first: "Italia",
            second: "Estados Unidos",
            third: "Brasil"
        },

        2020: {
            first: "Estados Unidos",
            second: "Brasil",
            third: "Serbia"
        },

        2016: {
            first: "China",
            second: "Serbia",
            third: "Estados Unidos"
        },

        2012: {
            first: "Brasil",
            second: "Estados Unidos",
            third: "Japón"
        },

        2008: {
            first: "Brasil",
            second: "Estados Unidos",
            third: "China"
        }

    }

};


/* =====================================================
   MOSTRAR RESULTADO DE UNA COMPETICIÓN
===================================================== */

function showCompetitionResult(
    container,
    year,
    data,
    competitionName
) {

    if (!container || !data) return;

    container.innerHTML = `

        <div class="vnl-year">

            <div class="vnl-year-number">
                ${year}
            </div>

            <div class="vnl-result">

                <div>
                    <span>🥇 1.º LUGAR</span>
                    <strong>${data.first}</strong>
                </div>

                <div>
                    <span>🥈 2.º LUGAR</span>
                    <strong>${data.second}</strong>
                </div>

                <div class="gold">
                    <span>🥉 3.º LUGAR</span>
                    <strong>${data.third}</strong>
                </div>

            </div>

        </div>

    `;

}


/* =====================================================
   BOTONES VNL
===================================================== */

const competitionButtons =
    document.querySelectorAll(".competition");

const vnlHistory =
    document.getElementById("vnlHistory");


competitionButtons.forEach((button) => {

    button.addEventListener("click", () => {

        competitionButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const competition =
            button.dataset.competition;

        if (!vnlHistory) return;


        /* ---------------------------------------------
           VNL MASCULINA
        --------------------------------------------- */

        if (competition === "vnl") {

            renderYearButtons(
                vnlHistory,
                competitionData.vnlMen,
                "VNL MASCULINA"
            );

        }


        /* ---------------------------------------------
           VNL FEMENINA
        --------------------------------------------- */

        if (competition === "vnl-women") {

            renderYearButtons(
                vnlHistory,
                competitionData.vnlWomen,
                "VNL FEMENINA"
            );

        }

    });

});


/* =====================================================
   CREAR BOTONES DE AÑOS
===================================================== */

function renderYearButtons(
    container,
    data,
    competitionName
) {

    if (!container) return;

    const years = Object.keys(data);

    container.innerHTML = `

        <div class="competition-buttons">

            ${years.map((year, index) => `

                <button
                    class="competition-year ${index === 0 ? "active" : ""}"
                    data-year="${year}">

                    ${year}

                </button>

            `).join("")}

        </div>

        <div id="competitionResult">

        </div>

    `;


    const result =
        container.querySelector("#competitionResult");


    const yearButtons =
        container.querySelectorAll(".competition-year");


    /* Mostrar primer año */

    if (years.length > 0) {

        showCompetitionResult(
            result,
            years[0],
            data[years[0]],
            competitionName
        );

    }


    /* Cambiar año */

    yearButtons.forEach((button) => {

        button.addEventListener("click", () => {

            yearButtons.forEach((btn) => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const year =
                button.dataset.year;

            showCompetitionResult(
                result,
                year,
                data[year],
                competitionName
            );

        });

    });

}


/* =====================================================
   BOTONES OLÍMPICOS
===================================================== */

const olympicButtons =
    document.querySelectorAll(".olympic-button");

const olympicHistory =
    document.getElementById("olympicHistory");


olympicButtons.forEach((button) => {

    button.addEventListener("click", () => {

        olympicButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const year =
            button.dataset.year;

        if (!olympicHistory) return;


        const data =
            competitionData.olympicMen[year];

        if (!data) return;


        showCompetitionResult(
            olympicHistory,
            year,
            data,
            "JUEGOS OLÍMPICOS MASCULINO"
        );

    });

});


/* =====================================================
   CAMBIO DE COMPETICIÓN
===================================================== */

/*
   Si tu HTML tiene estos botones:

   data-competition="vnl"
   data-competition="vnl-women"
   data-competition="world"
   data-competition="world-women"
   data-competition="olympic"
   data-competition="olympic-women"

   todos funcionan sin abrir páginas externas.
*/


const allCompetitionButtons =
    document.querySelectorAll(
        "[data-competition]"
    );


allCompetitionButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const competition =
            button.dataset.competition;


        let data = null;
        let name = "";


        switch (competition) {

            case "vnl":
                data = competitionData.vnlMen;
                name = "VNL MASCULINA";
                break;

            case "vnl-women":
                data = competitionData.vnlWomen;
                name = "VNL FEMENINA";
                break;

            case "world":
                data = competitionData.worldMen;
                name = "MUNDIAL MASCULINO";
                break;

            case "world-women":
                data = competitionData.worldWomen;
                name = "MUNDIAL FEMENINO";
                break;

            case "olympic":
                data = competitionData.olympicMen;
                name = "JUEGOS OLÍMPICOS MASCULINO";
                break;

            case "olympic-women":
                data = competitionData.olympicWomen;
                name = "JUEGOS OLÍMPICOS FEMENINO";
                break;

        }


        /*
           Buscar un contenedor adecuado.
        */

        const history =
            document.getElementById(
                "competitionHistory"
            ) ||
            document.getElementById(
                "vnlHistory"
            ) ||
            document.getElementById(
                "olympicHistory"
            );


        if (history && data) {

            renderYearButtons(
                history,
                data,
                name
            );

        }

    });

});


/* =====================================================
   ENTRENADOR IA
===================================================== */

const question =
    document.getElementById("question");

const sendQuestion =
    document.getElementById("sendQuestion");

const messages =
    document.getElementById("messages");


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
   RESPUESTAS DEL ENTRENADOR
===================================================== */

function coachAnswer(text) {

    const lower =
        text.toLowerCase();


    if (
        lower.includes("ataque") ||
        lower.includes("atacar")
    ) {

        return `
            <b>Entrenador:</b><br>
            Para mejorar tu ataque trabaja la carrera
            de aproximación, el salto, el armado del brazo
            y el contacto alto con el balón.
        `;

    }


    if (
        lower.includes("defensa") ||
        lower.includes("defender")
    ) {

        return `
            <b>Entrenador:</b><br>
            Mantén una posición baja, observa al atacante
            y trata de anticipar la dirección del balón.
            La reacción y la lectura del juego son claves.
        `;

    }


    if (
        lower.includes("recepción") ||
        lower.includes("recepcion")
    ) {

        return `
            <b>Entrenador:</b><br>
            Mantén los brazos firmes y utiliza las piernas
            para controlar la recepción. Intenta dirigir
            el balón hacia la zona del colocador.
        `;

    }


    if (
        lower.includes("salto") ||
        lower.includes("saltar")
    ) {

        return `
            <b>Entrenador:</b><br>
            Trabaja la coordinación de la carrera,
            el impulso y la técnica de aterrizaje.
            La calidad del movimiento es más importante
            que simplemente intentar saltar más.
        `;

    }


    if (
        lower.includes("bloqueo") ||
        lower.includes("bloquear")
    ) {

        return `
            <b>Entrenador:</b><br>
            Observa el armado del rival, desplázate
            rápidamente hacia la zona de bloqueo y
            mantén las manos firmes sobre la red.
        `;

    }


    if (
        lower.includes("entrenamiento") ||
        lower.includes("entrenar")
    ) {

        return `
            <b>Entrenador:</b><br>
            Una buena sesión puede combinar técnica,
            desplazamientos, recepción, ataque,
            bloqueo y situaciones de juego.
        `;

    }


    if (
        lower.includes("estrategia") ||
        lower.includes("táctica") ||
        lower.includes("tactica")
    ) {

        return `
            <b>Entrenador:</b><br>
            Una estrategia efectiva depende de las
            fortalezas de tu equipo y de los puntos
            débiles del rival. La comunicación es fundamental.
        `;

    }


    return `
        <b>Entrenador:</b><br>
        Buena pregunta. En voleibol intenta trabajar
        primero la técnica, después la velocidad de
        ejecución y finalmente llevarlo a situaciones
        reales de partido.
    `;

}


/* =====================================================
   ENVIAR PREGUNTA
===================================================== */

function sendCoachQuestion() {

    if (!question || !messages) return;

    const text =
        question.value.trim();

    if (text === "") return;


    addMessage(
        text,
        "user"
    );


    question.value = "";


    if (sendQuestion) {
        sendQuestion.disabled = true;
    }


    setTimeout(() => {

        const answer =
            coachAnswer(text);

        addMessage(
            answer,
            "bot"
        );

        if (sendQuestion) {
            sendQuestion.disabled = false;
        }

    }, 500);

}


if (sendQuestion) {

    sendQuestion.addEventListener(
        "click",
        sendCoachQuestion
    );

}


if (question) {

    question.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Enter" &&
                !event.shiftKey
            ) {

                event.preventDefault();

                sendCoachQuestion();

            }

        }
    );

}


/* =====================================================
   MENÚ DEL ENTRENADOR
===================================================== */

const coachButtons =
    document.querySelectorAll(
        ".coach-menu button"
    );


coachButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const topic =
            button.textContent.trim();


        const questionMap = {

            "Entrenamiento":
                "¿Cómo puedo mejorar mi entrenamiento?",

            "Ataque":
                "¿Cómo puedo mejorar mi ataque?",

            "Defensa":
                "¿Cómo puedo mejorar mi defensa?",

            "Recepción":
                "¿Cómo puedo mejorar mi recepción?",

            "Salto":
                "¿Cómo puedo mejorar mi salto?",

            "Estrategia":
                "¿Qué estrategia debería utilizar?"
        };


        if (questionMap[topic]) {

            if (question) {
                question.value =
                    questionMap[topic];
            }

            sendCoachQuestion();

        }

    });

});


/* =====================================================
   CONSEJO DEL DÍA
===================================================== */

const dailyTip =
    document.getElementById("dailyTip");

const newTip =
    document.getElementById("newTip");


const tips = [

    "La comunicación es una de las claves para que un equipo funcione correctamente.",

    "Mantén una posición equilibrada antes de recibir el balón.",

    "Observa siempre al rival antes de decidir hacia dónde atacar.",

    "Una buena recepción puede convertir una jugada difícil en una oportunidad de ataque.",

    "Trabaja la técnica antes de intentar aumentar la potencia.",

    "La coordinación entre colocador y atacante es fundamental.",

    "No olvides comunicarte con tus compañeros durante cada jugada.",

    "La defensa comienza antes de que el rival golpee el balón.",

    "Practica los movimientos básicos hasta conseguir que sean naturales.",

    "Un equipo organizado puede compensar muchas diferencias individuales."

];


if (newTip && dailyTip) {

    newTip.addEventListener(
        "click",
        () => {

            dailyTip.style.opacity = "0";

            setTimeout(() => {

                const random =
                    Math.floor(
                        Math.random() * tips.length
                    );

                dailyTip.textContent =
                    tips[random];

                dailyTip.style.opacity = "1";

            }, 180);

        }
    );

}


/* =====================================================
   ANIMACIONES REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

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
                threshold: 0.12
            }
        );


    revealElements.forEach((element) => {

        element.classList.add(
            "reveal-ready"
        );

        observer.observe(element);

    });

}


/* =====================================================
   NAVEGACIÓN SUAVE
===================================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach((link) => {

    link.addEventListener(
        "click",
        (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(
                    targetId
                );


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

});


/* =====================================================
   INICIO
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            "VóleyRetro cargado correctamente."
        );

    }
);
