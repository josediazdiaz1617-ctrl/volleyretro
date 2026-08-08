/* =====================================================
   VÓLEYRETRO
   JAVASCRIPT PRINCIPAL
===================================================== */


/* =====================================================
   DATOS DE COMPETICIONES
===================================================== */

const competitions = {

    /* =========================
       VNL MASCULINA
    ========================= */

    vnlMen: {
        2025: {
            champion: "Italia",
            second: "Polonia",
            third: "Brasil"
        },
        2024: {
            champion: "Francia",
            second: "Japón",
            third: "Polonia"
        },
        2023: {
            champion: "Polonia",
            second: "Estados Unidos",
            third: "Japón"
        },
        2022: {
            champion: "Francia",
            second: "Estados Unidos",
            third: "Polonia"
        },
        2021: {
            champion: "Brasil",
            second: "Polonia",
            third: "Francia"
        }
    },


    /* =========================
       VNL FEMENINA
    ========================= */

    vnlWomen: {
        2025: {
            champion: "Italia",
            second: "Brasil",
            third: "Polonia"
        },
        2024: {
            champion: "Italia",
            second: "Japón",
            third: "Polonia"
        },
        2023: {
            champion: "Turquía",
            second: "China",
            third: "Estados Unidos"
        },
        2022: {
            champion: "Italia",
            second: "Brasil",
            third: "Serbia"
        },
        2021: {
            champion: "Estados Unidos",
            second: "Brasil",
            third: "Turquía"
        }
    },


    /* =========================
       MUNDIAL MASCULINO
    ========================= */

    worldMen: {
        2022: {
            champion: "Italia",
            second: "Polonia",
            third: "Brasil"
        },
        2018: {
            champion: "Polonia",
            second: "Brasil",
            third: "Estados Unidos"
        },
        2014: {
            champion: "Polonia",
            second: "Brasil",
            third: "Alemania"
        },
        2010: {
            champion: "Brasil",
            second: "Cuba",
            third: "Serbia"
        },
        2006: {
            champion: "Brasil",
            second: "Polonia",
            third: "Serbia"
        }
    },


    /* =========================
       MUNDIAL FEMENINO
    ========================= */

    worldWomen: {
        2022: {
            champion: "Serbia",
            second: "Brasil",
            third: "Italia"
        },
        2018: {
            champion: "Serbia",
            second: "Italia",
            third: "China"
        },
        2014: {
            champion: "Estados Unidos",
            second: "China",
            third: "Brasil"
        },
        2010: {
            champion: "Rusia",
            second: "Brasil",
            third: "Japón"
        },
        2006: {
            champion: "Rusia",
            second: "Brasil",
            third: "Serbia"
        }
    },


    /* =========================
       OLÍMPICOS MASCULINOS
    ========================= */

    olympicMen: {
        2024: {
            champion: "Francia",
            second: "Polonia",
            third: "Estados Unidos",
            city: "París"
        },
        2020: {
            champion: "Francia",
            second: "ROC",
            third: "Argentina",
            city: "Tokio"
        },
        2016: {
            champion: "Brasil",
            second: "Italia",
            third: "Estados Unidos",
            city: "Río de Janeiro"
        },
        2012: {
            champion: "Rusia",
            second: "Brasil",
            third: "Italia",
            city: "Londres"
        },
        2008: {
            champion: "Estados Unidos",
            second: "Brasil",
            third: "Rusia",
            city: "Pekín"
        }
    },


    /* =========================
       OLÍMPICOS FEMENINOS
    ========================= */

    olympicWomen: {
        2024: {
            champion: "Italia",
            second: "Estados Unidos",
            third: "Brasil",
            city: "París"
        },
        2020: {
            champion: "Estados Unidos",
            second: "Brasil",
            third: "Serbia",
            city: "Tokio"
        },
        2016: {
            champion: "China",
            second: "Serbia",
            third: "Estados Unidos",
            city: "Río de Janeiro"
        },
        2012: {
            champion: "Brasil",
            second: "Estados Unidos",
            third: "Japón",
            city: "Londres"
        },
        2008: {
            champion: "Brasil",
            second: "Estados Unidos",
            third: "China",
            city: "Pekín"
        }
    }

};


/* =====================================================
   LOGIN
===================================================== */

const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeLogin = document.getElementById("closeLogin");

if (loginBtn && loginModal) {

    loginBtn.addEventListener("click", () => {
        loginModal.style.display = "grid";
    });

}

if (closeLogin && loginModal) {

    closeLogin.addEventListener("click", () => {
        loginModal.style.display = "none";
    });

}

if (loginModal) {

    loginModal.addEventListener("click", (event) => {

        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }

    });

}


/* =====================================================
   LOGIN EMAIL
===================================================== */

const emailLogin = document.getElementById("emailLogin");

if (emailLogin) {

    emailLogin.addEventListener("click", () => {

        const email = document.getElementById("email");
        const password = document.getElementById("password");

        if (!email || !password) return;

        if (email.value.trim() === "" || password.value.trim() === "") {

            alert("Completa todos los campos.");

            return;
        }

        alert("Inicio de sesión preparado. Aquí podrás conectar tu sistema de usuarios.");

    });

}


/* =====================================================
   BOTÓN GOOGLE
===================================================== */

const googleLogin = document.getElementById("googleLogin");

if (googleLogin) {

    googleLogin.addEventListener("click", () => {

        alert("Aquí podrás conectar el inicio de sesión con Google.");

    });

}


/* =====================================================
   FUNCIÓN PARA MOSTRAR RESULTADOS
===================================================== */

function showCompetitionResults(container, data, year) {

    if (!container || !data || !data[year]) {
        return;
    }

    const result = data[year];

    container.innerHTML = `

        <div class="vnl-year">

            <div class="vnl-year-number">
                ${year}
            </div>

            <div class="vnl-result">

                <div>
                    <span>1.º PUESTO</span>
                    <strong>${result.champion}</strong>
                </div>

                <div>
                    <span>2.º PUESTO</span>
                    <strong>${result.second}</strong>
                </div>

                <div class="gold">
                    <span>3.º PUESTO</span>
                    <strong>${result.third}</strong>
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


/*
   Cada botón tiene:

   data-competition="vnl-men"
   data-competition="vnl-women"
   data-competition="world-men"
   data-competition="world-women"
*/

competitionButtons.forEach(button => {

    button.addEventListener("click", () => {

        competitionButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const competition =
            button.dataset.competition;

        if (!vnlHistory) return;


        /* VNL MASCULINA */

        if (
            competition === "vnl-men" ||
            competition === "vnl"
        ) {

            createYearButtons(
                vnlHistory,
                competitions.vnlMen,
                "vnl-men"
            );

            return;
        }


        /* VNL FEMENINA */

        if (competition === "vnl-women") {

            createYearButtons(
                vnlHistory,
                competitions.vnlWomen,
                "vnl-women"
            );

            return;
        }


        /* MUNDIAL MASCULINO */

        if (competition === "world-men") {

            createYearButtons(
                vnlHistory,
                competitions.worldMen,
                "world-men"
            );

            return;
        }


        /* MUNDIAL FEMENINO */

        if (competition === "world-women") {

            createYearButtons(
                vnlHistory,
                competitions.worldWomen,
                "world-women"
            );

            return;
        }

    });

});


/* =====================================================
   CREAR BOTONES DE AÑOS
===================================================== */

function createYearButtons(container, data, type) {

    if (!container) return;

    const years = Object.keys(data)
        .sort((a, b) => b - a);

    const oldButtons =
        container.parentElement
        ? container.parentElement.querySelector(".dynamic-years")
        : null;

    if (oldButtons) {
        oldButtons.remove();
    }

    const buttonsContainer =
        document.createElement("div");

    buttonsContainer.className =
        "competition-buttons dynamic-years";


    years.forEach((year, index) => {

        const button =
            document.createElement("button");

        button.className =
            "competition" +
            (index === 0 ? " active" : "");

        button.textContent =
            year;

        button.dataset.year =
            year;

        button.dataset.type =
            type;


        button.addEventListener("click", () => {

            buttonsContainer
                .querySelectorAll(".competition")
                .forEach(btn => {
                    btn.classList.remove("active");
                });

            button.classList.add("active");

            showCompetitionResults(
                container,
                data,
                year
            );

        });


        buttonsContainer.appendChild(button);

    });


    container.parentElement.insertBefore(
        buttonsContainer,
        container
    );


    /*
       Mostrar automáticamente
       el primer año.
    */

    showCompetitionResults(
        container,
        data,
        years[0]
    );

}


/* =====================================================
   BOTONES OLÍMPICOS
===================================================== */

const olympicButtons =
    document.querySelectorAll(".olympic-button");

const olympicHistory =
    document.getElementById("olympicHistory");


olympicButtons.forEach(button => {

    button.addEventListener("click", () => {

        olympicButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const year =
            button.dataset.year;

        const gender =
            button.dataset.gender;


        let data;


        if (gender === "female") {

            data = competitions.olympicWomen;

        } else {

            data = competitions.olympicMen;

        }


        if (
            olympicHistory &&
            data &&
            data[year]
        ) {

            showCompetitionResults(
                olympicHistory,
                data,
                year
            );

        }

    });

});


/* =====================================================
   INICIALIZAR VNL
===================================================== */

if (vnlHistory) {

    showCompetitionResults(
        vnlHistory,
        competitions.vnlMen,
        "2025"
    );

}


/* =====================================================
   INICIALIZAR OLÍMPICOS
===================================================== */

if (olympicHistory) {

    showCompetitionResults(
        olympicHistory,
        competitions.olympicMen,
        "2024"
    );

}


/* =====================================================
   ENTRENADOR IA
===================================================== */

const question =
    document.getElementById("question");

const sendQuestion =
    document.getElementById("sendQuestion");

const messages =
    document.getElementById("messages");


const coachAnswers = {

    entrenamiento:
        "Para mejorar tu rendimiento, combina fuerza, salto, velocidad, recepción y técnica de forma progresiva.",

    ataque:
        "En el ataque trabaja la carrera de aproximación, el salto, el contacto con el balón y la dirección del golpe.",

    defensa:
        "Mantén una posición baja, observa al atacante y prepárate para reaccionar rápidamente.",

    recepción:
        "Mantén los brazos firmes y dirige la plataforma hacia el objetivo. La comunicación también es fundamental.",

    salto:
        "Trabaja la fuerza de piernas, coordinación y técnica de salto. La calidad del movimiento es más importante que hacer muchas repeticiones.",

    estrategia:
        "Una buena estrategia depende de conocer las fortalezas y debilidades del rival y mantener una comunicación constante."
};


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


function getCoachResponse(text) {

    const lower =
        text.toLowerCase();


    if (lower.includes("ataque")) {
        return coachAnswers.ataque;
    }

    if (
        lower.includes("defensa") ||
        lower.includes("defender")
    ) {
        return coachAnswers.defensa;
    }

    if (
        lower.includes("recepción") ||
        lower.includes("recibir")
    ) {
        return coachAnswers.recepción;
    }

    if (
        lower.includes("salto") ||
        lower.includes("saltar")
    ) {
        return coachAnswers.salto;
    }

    if (
        lower.includes("estrategia") ||
        lower.includes("táctica")
    ) {
        return coachAnswers.estrategia;
    }

    if (
        lower.includes("entrenar") ||
        lower.includes("entrenamiento")
    ) {
        return coachAnswers.entrenamiento;
    }


    return "Puedo ayudarte con ataque, defensa, recepción, salto, entrenamiento y estrategia de voleibol.";
}


if (sendQuestion && question) {

    sendQuestion.addEventListener("click", () => {

        const text =
            question.value.trim();

        if (!text) return;

        addMessage(
            text,
            "user"
        );

        question.value = "";

        sendQuestion.disabled = true;


        setTimeout(() => {

            const response =
                getCoachResponse(text);

            addMessage(
                `<b>Entrenador:</b><br>${response}`,
                "bot"
            );

            sendQuestion.disabled = false;

        }, 500);

    });


    question.addEventListener("keydown", event => {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {

            event.preventDefault();

            sendQuestion.click();

        }

    });

}


/* =====================================================
   MENÚ DEL ENTRENADOR
===================================================== */

const coachButtons =
    document.querySelectorAll(".coach-menu button");

coachButtons.forEach(button => {

    button.addEventListener("click", () => {

        const topic =
            button.textContent
            .trim()
            .toLowerCase();

        const response =
            coachAnswers[topic] ||
            "Puedo ayudarte con este aspecto del voleibol.";

        addMessage(
            `<b>Entrenador:</b><br>${response}`,
            "bot"
        );

    });

});


/* =====================================================
   CONSEJOS DEL DÍA
===================================================== */

const dailyTips = [

    "La comunicación es una de las claves para que un equipo funcione correctamente.",

    "Mantén una buena posición defensiva antes de que llegue el balón.",

    "En recepción, intenta dirigir el balón hacia el colocador.",

    "La técnica correcta es más importante que hacer movimientos rápidamente.",

    "Observa al rival antes de realizar tu siguiente movimiento.",

    "Trabaja la coordinación entre tus piernas, brazos y mirada.",

    "Un buen bloqueo comienza con una buena lectura del atacante.",

    "No dejes de comunicarte con tus compañeros durante la jugada.",

    "La constancia en el entrenamiento mejora el rendimiento.",

    "Aprende de cada error y utiliza esa experiencia para mejorar."
];


const dailyTip =
    document.getElementById("dailyTip");

const newTip =
    document.getElementById("newTip");


if (newTip && dailyTip) {

    newTip.addEventListener("click", () => {

        const random =
            Math.floor(
                Math.random() *
                dailyTips.length
            );

        dailyTip.style.opacity = "0";


        setTimeout(() => {

            dailyTip.textContent =
                dailyTips[random];

            dailyTip.style.opacity = "1";

        }, 180);

    });

}


/* =====================================================
   ANIMACIONES REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


if (revealElements.length > 0) {

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

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
                threshold: 0.15
            }
        );


    revealElements.forEach(element => {

        element.classList.add(
            "reveal-ready"
        );

        observer.observe(element);

    });

}


/* =====================================================
   ESC PARA CERRAR LOGIN
===================================================== */

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        loginModal
    ) {

        loginModal.style.display =
            "none";

    }

});


/* =====================================================
   FIN VÓLEYRETRO
===================================================== */
