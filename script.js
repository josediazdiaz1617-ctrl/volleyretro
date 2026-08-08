```javascript
/* =====================================================
   VÓLEYRETRO
   JAVASCRIPT PRINCIPAL
===================================================== */

document.addEventListener("DOMContentLoaded", () => {


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
    loginModal.addEventListener("click", (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = "none";
        }
    });
}


/* =====================================================
   LOGIN POR CORREO
===================================================== */

const emailLogin = document.getElementById("emailLogin");

if (emailLogin) {

    emailLogin.addEventListener("click", () => {

        const email =
            document.getElementById("email")?.value.trim();

        const password =
            document.getElementById("password")?.value.trim();

        if (!email || !password) {
            alert("Completa el correo y la contraseña.");
            return;
        }

        alert(
            "Inicio de sesión preparado. Puedes conectar Firebase u otro sistema de autenticación después."
        );

    });

}


/* =====================================================
   GOOGLE LOGIN
===================================================== */

const googleLogin =
    document.getElementById("googleLogin");

if (googleLogin) {

    googleLogin.addEventListener("click", () => {

        alert(
            "El inicio de sesión con Google todavía necesita conectarse a Firebase Authentication."
        );

    });

}


/* =====================================================
   CONSEJOS DEL DÍA
===================================================== */

const tips = [

    "La comunicación es una de las claves para que un equipo funcione correctamente.",

    "Mantén las rodillas ligeramente flexionadas para reaccionar más rápido.",

    "Una buena recepción comienza con una correcta posición corporal.",

    "En el bloqueo, observa los movimientos del atacante antes de saltar.",

    "La precisión en el saque puede ser más importante que la potencia.",

    "Trabaja la coordinación entre brazos y piernas durante el salto.",

    "Un buen líbero debe anticipar la trayectoria del balón.",

    "La comunicación evita que dos jugadores intenten recibir el mismo balón.",

    "Después de atacar, vuelve rápidamente a tu posición defensiva.",

    "La constancia en el entrenamiento es fundamental para mejorar."

];

const dailyTip =
    document.getElementById("dailyTip");

const newTip =
    document.getElementById("newTip");

if (newTip && dailyTip) {

    newTip.addEventListener("click", () => {

        const current =
            dailyTip.textContent;

        let newText;

        do {

            newText =
                tips[
                    Math.floor(
                        Math.random() * tips.length
                    )
                ];

        } while (
            newText === current &&
            tips.length > 1
        );

        dailyTip.style.opacity = "0";

        setTimeout(() => {

            dailyTip.textContent = newText;

            dailyTip.style.opacity = "1";

        }, 180);

    });

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


const coachResponses = {

    entrenamiento:
        "Para mejorar tu rendimiento, combina fuerza, velocidad, salto, recepción, ataque y ejercicios específicos de tu posición.",

    ataque:
        "Para mejorar el ataque trabaja la carrera de aproximación, el salto, el contacto con el balón y la dirección del golpe.",

    defensa:
        "En defensa mantén una posición baja, observa al atacante y trata de anticipar la trayectoria del balón.",

    recepción:
        "Para mejorar la recepción mantén los brazos firmes, controla el ángulo de la plataforma y muévete antes de que llegue el balón.",

    salto:
        "Para mejorar tu salto trabaja la fuerza de piernas, coordinación y técnica de impulso. La técnica correcta es más importante que simplemente saltar muchas veces.",

    estrategia:
        "Una buena estrategia depende de conocer las fortalezas del equipo, identificar las debilidades del rival y mantener una buena comunicación."

};


function addMessage(text, type) {

    if (!messages) return;

    const message =
        document.createElement("div");

    message.className =
        `message ${type}`;

    message.innerHTML = text;

    messages.appendChild(message);

    messages.scrollTop =
        messages.scrollHeight;

}


function answerQuestion(text) {

    const lower =
        text.toLowerCase();


    if (
        lower.includes("ataque") ||
        lower.includes("remate")
    ) {
        return coachResponses.ataque;
    }


    if (
        lower.includes("defensa") ||
        lower.includes("defender")
    ) {
        return coachResponses.defensa;
    }


    if (
        lower.includes("recepción") ||
        lower.includes("recepcion")
    ) {
        return coachResponses.recepción;
    }


    if (
        lower.includes("salto") ||
        lower.includes("saltar")
    ) {
        return coachResponses.salto;
    }


    if (
        lower.includes("estrategia") ||
        lower.includes("táctica") ||
        lower.includes("tactica")
    ) {
        return coachResponses.estrategia;
    }


    if (
        lower.includes("entrenamiento") ||
        lower.includes("entrenar")
    ) {
        return coachResponses.entrenamiento;
    }


    return "Puedo ayudarte con ataque, defensa, recepción, salto, entrenamiento y estrategia. Pregúntame específicamente sobre alguno de estos temas.";

}


function sendMessage() {

    if (!question || !messages) return;

    const text =
        question.value.trim();

    if (!text) return;

    addMessage(text, "user");

    question.value = "";

    if (sendQuestion) {
        sendQuestion.disabled = true;
    }


    setTimeout(() => {

        const response =
            answerQuestion(text);

        addMessage(
            `<b>Entrenador:</b><br>${response}`,
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
        sendMessage
    );
}


if (question) {

    question.addEventListener(
        "keydown",
        (e) => {

            if (
                e.key === "Enter" &&
                !e.shiftKey
            ) {

                e.preventDefault();

                sendMessage();

            }

        }
    );

}


/* =====================================================
   BOTONES DEL ENTRENADOR
===================================================== */

document
    .querySelectorAll(".coach-menu button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const topic =
                    button.textContent
                        .trim()
                        .toLowerCase();

                const response =
                    coachResponses[topic] ||
                    "Selecciona una de las opciones del entrenador.";

                addMessage(
                    `<b>Entrenador:</b><br>${response}`,
                    "bot"
                );

            }
        );

    });


/* =====================================================
   DATOS DE COMPETICIONES
===================================================== */

const competitionData = {


    /* =================================================
       VNL MASCULINA
    ================================================= */

    vnl_male: {

        "2025": {
            champion: "Italia",
            second: "Polonia",
            third: "Brasil"
        },

        "2024": {
            champion: "Francia",
            second: "Japón",
            third: "Polonia"
        },

        "2023": {
            champion: "Polonia",
            second: "Estados Unidos",
            third: "Japón"
        },

        "2022": {
            champion: "Francia",
            second: "Estados Unidos",
            third: "Polonia"
        }

    },


    /* =================================================
       VNL FEMENINA
    ================================================= */

    vnl_female: {

        "2025": {
            champion: "Italia",
            second: "Brasil",
            third: "Polonia"
        },

        "2024": {
            champion: "Italia",
            second: "Japón",
            third: "Polonia"
        },

        "2023": {
            champion: "Turquía",
            second: "China",
            third: "Estados Unidos"
        },

        "2022": {
            champion: "Italia",
            second: "Brasil",
            third: "Serbia"
        }

    },


    /* =================================================
       MUNDIAL MASCULINO
    ================================================= */

    world_male: {

        "2022": {
            champion: "Italia",
            second: "Polonia",
            third: "Brasil"
        },

        "2018": {
            champion: "Polonia",
            second: "Brasil",
            third: "Estados Unidos"
        },

        "2014": {
            champion: "Polonia",
            second: "Brasil",
            third: "Alemania"
        },

        "2010": {
            champion: "Brasil",
            second: "Cuba",
            third: "Serbia"
        }

    },


    /* =================================================
       MUNDIAL FEMENINO
    ================================================= */

    world_female: {

        "2022": {
            champion: "Serbia",
            second: "Brasil",
            third: "Italia"
        },

        "2018": {
            champion: "Serbia",
            second: "Italia",
            third: "China"
        },

        "2014": {
            champion: "Estados Unidos",
            second: "China",
            third: "Brasil"
        },

        "2010": {
            champion: "Rusia",
            second: "Brasil",
            third: "Japón"
        }

    },


    /* =================================================
       OLÍMPICOS MASCULINOS
    ================================================= */

    olympic_male: {

        "2024": {
            champion: "Francia",
            second: "Polonia",
            third: "Estados Unidos"
        },

        "2020": {
            champion: "Francia",
            second: "ROC",
            third: "Argentina"
        },

        "2016": {
            champion: "Brasil",
            second: "Italia",
            third: "Estados Unidos"
        },

        "2012": {
            champion: "Rusia",
            second: "Brasil",
            third: "Italia"
        }

    },


    /* =================================================
       OLÍMPICOS FEMENINOS
    ================================================= */

    olympic_female: {

        "2024": {
            champion: "Italia",
            second: "Estados Unidos",
            third: "Brasil"
        },

        "2020": {
            champion: "Estados Unidos",
            second: "Brasil",
            third: "Serbia"
        },

        "2016": {
            champion: "China",
            second: "Serbia",
            third: "Estados Unidos"
        },

        "2012": {
            champion: "Brasil",
            second: "Estados Unidos",
            third: "Japón"
        }

    }

};


/* =====================================================
   FUNCIÓN PARA MOSTRAR RESULTADOS
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
                    <span>🥇 1.º PUESTO</span>
                    <strong>${data.champion}</strong>
                </div>

                <div>
                    <span>🥈 2.º PUESTO</span>
                    <strong>${data.second}</strong>
                </div>

                <div class="gold">
                    <span>🥉 3.º PUESTO</span>
                    <strong>${data.third}</strong>
                </div>

            </div>

        </div>

    `;

}


/* =====================================================
   MOSTRAR TODOS LOS AÑOS DE UNA COMPETICIÓN
===================================================== */

function showCompetitionHistory(
    container,
    data,
    competitionName
) {

    if (!container || !data) return;

    container.innerHTML = "";

    Object.entries(data)
        .forEach(([year, result]) => {

            const wrapper =
                document.createElement("div");

            wrapper.className =
                "competition-result-item";

            wrapper.innerHTML = `

                <div class="vnl-year">

                    <div class="vnl-year-number">
                        ${year}
                    </div>

                    <div class="vnl-result">

                        <div>
                            <span>🥇 1.º PUESTO</span>
                            <strong>
                                ${result.champion}
                            </strong>
                        </div>

                        <div>
                            <span>🥈 2.º PUESTO</span>
                            <strong>
                                ${result.second}
                            </strong>
                        </div>

                        <div class="gold">
                            <span>🥉 3.º PUESTO</span>
                            <strong>
                                ${result.third}
                            </strong>
                        </div>

                    </div>

                </div>

            `;

            container.appendChild(wrapper);

        });

}


/* =====================================================
   ELEMENTOS DE COMPETICIONES
===================================================== */

const vnlMaleHistory =
    document.getElementById(
        "vnlMaleHistory"
    );

const vnlFemaleHistory =
    document.getElementById(
        "vnlFemaleHistory"
    );

const worldHistory =
    document.getElementById(
        "worldHistory"
    );

const worldMaleHistory =
    document.getElementById(
        "worldMaleHistory"
    );

const worldFemaleHistory =
    document.getElementById(
        "worldFemaleHistory"
    );

const olympicHistory =
    document.getElementById(
        "olympicHistory"
    );

const olympicMaleHistory =
    document.getElementById(
        "olympicMaleHistory"
    );

const olympicFemaleHistory =
    document.getElementById(
        "olympicFemaleHistory"
    );


/* =====================================================
   FUNCIÓN AUXILIAR PARA OCULTAR HISTORIAL
===================================================== */

function hideAllCompetitionHistories() {

    if (vnlMaleHistory)
        vnlMaleHistory.style.display = "none";

    if (vnlFemaleHistory)
        vnlFemaleHistory.style.display = "none";

    if (worldHistory)
        worldHistory.style.display = "none";

    if (olympicHistory)
        olympicHistory.style.display = "none";

}


/* =====================================================
   BOTONES PRINCIPALES:
   VNL / MUNDIAL / OLÍMPICOS
===================================================== */

document
    .querySelectorAll(
        ".competition-buttons .competition"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".competition-buttons .competition"
                    )
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                button.classList.add("active");

                const competition =
                    button.dataset.competition;

                hideAllCompetitionHistories();


                /* =====================================
                   VNL
                ===================================== */

                if (competition === "vnl") {

                    if (worldHistory)
                        worldHistory.style.display =
                            "none";

                    if (olympicHistory)
                        olympicHistory.style.display =
                            "none";


                    /*
                       Mostrar VNL masculino
                       por defecto
                    */

                    if (vnlMaleHistory) {

                        vnlMaleHistory.style.display =
                            "block";

                        showCompetitionHistory(
                            vnlMaleHistory,
                            competitionData.vnl_male,
                            "VNL Masculina"
                        );

                    }

                    if (vnlFemaleHistory) {

                        vnlFemaleHistory.style.display =
                            "none";

                    }

                }


                /* =====================================
                   MUNDIAL
                ===================================== */

                if (competition === "world") {

                    if (worldHistory) {

                        worldHistory.style.display =
                            "block";

                    }

                    if (worldMaleHistory) {

                        worldMaleHistory.style.display =
                            "block";

                        showCompetitionHistory(
                            worldMaleHistory,
                            competitionData.world_male,
                            "Mundial Masculino"
                        );

                    }

                    if (worldFemaleHistory) {

                        worldFemaleHistory.style.display =
                            "none";

                    }

                }


                /* =====================================
                   JUEGOS OLÍMPICOS
                ===================================== */

                if (competition === "olympic") {

                    if (olympicHistory) {

                        olympicHistory.style.display =
                            "block";

                    }

                    if (olympicMaleHistory) {

                        olympicMaleHistory.style.display =
                            "block";

                        showCompetitionHistory(
                            olympicMaleHistory,
                            competitionData.olympic_male,
                            "Juegos Olímpicos Masculinos"
                        );

                    }

                    if (olympicFemaleHistory) {

                        olympicFemaleHistory.style.display =
                            "none";

                    }

                }

            }
        );

    });


/* =====================================================
   BOTONES MASCULINO / FEMENINO
   VNL
===================================================== */

document
    .querySelectorAll(
        ".competition-gender-buttons .competition-gender"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const gender =
                    button.dataset.gender;


                /*
                   SOLO cambia los botones
                   de género correspondientes
                   al VNL.
                */

                const parent =
                    button.closest(
                        ".competition-history, #calendario"
                    );


                /*
                   Si estamos en VNL,
                   mostramos VNL masculino/femenino.
                */

                if (
                    gender === "male" &&
                    vnlMaleHistory &&
                    vnlFemaleHistory
                ) {

                    vnlMaleHistory.style.display =
                        "block";

                    vnlFemaleHistory.style.display =
                        "none";

                    showCompetitionHistory(
                        vnlMaleHistory,
                        competitionData.vnl_male,
                        "VNL Masculina"
                    );

                }


                if (
                    gender === "female" &&
                    vnlMaleHistory &&
                    vnlFemaleHistory
                ) {

                    vnlMaleHistory.style.display =
                        "none";

                    vnlFemaleHistory.style.display =
                        "block";

                    showCompetitionHistory(
                        vnlFemaleHistory,
                        competitionData.vnl_female,
                        "VNL Femenina"
                    );

                }


                /*
                   Active solamente dentro
                   del grupo correspondiente.
                */

                if (parent) {

                    parent
                        .querySelectorAll(
                            ".competition-gender"
                        )
                        .forEach(btn =>
                            btn.classList.remove("active")
                        );

                }

                button.classList.add("active");

            }
        );

    });


/* =====================================================
   BOTONES MUNDIAL:
   MASCULINO / FEMENINO
===================================================== */

document
    .querySelectorAll(".world-gender")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const gender =
                    button.dataset.worldGender;


                document
                    .querySelectorAll(".world-gender")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                button.classList.add("active");


                if (gender === "male") {

                    if (worldMaleHistory) {

                        worldMaleHistory.style.display =
                            "block";

                        showCompetitionHistory(
                            worldMaleHistory,
                            competitionData.world_male,
                            "Mundial Masculino"
                        );

                    }

                    if (worldFemaleHistory) {

                        worldFemaleHistory.style.display =
                            "none";

                    }

                }


                if (gender === "female") {

                    if (worldMaleHistory) {

                        worldMaleHistory.style.display =
                            "none";

                    }

                    if (worldFemaleHistory) {

                        worldFemaleHistory.style.display =
                            "block";

                        showCompetitionHistory(
                            worldFemaleHistory,
                            competitionData.world_female,
                            "Mundial Femenino"
                        );

                    }

                }

            }
        );

    });


/* =====================================================
   BOTONES OLÍMPICOS:
   MASCULINO / FEMENINO
===================================================== */

document
    .querySelectorAll(".olympic-gender")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const gender =
                    button.dataset.olympicGender;


                document
                    .querySelectorAll(".olympic-gender")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                button.classList.add("active");


                /*
                   Mantener el año actualmente
                   seleccionado.
                */

                const activeYearButton =
                    document.querySelector(
                        ".olympic-button.active"
                    );

                const year =
                    activeYearButton
                        ?.dataset.year || "2024";


                if (gender === "male") {

                    if (olympicMaleHistory) {

                        olympicMaleHistory.style.display =
                            "block";

                        const data =
                            competitionData
                                .olympic_male?.[year];

                        if (data) {

                            showCompetitionResult(
                                olympicMaleHistory,
                                year,
                                data,
                                "Juegos Olímpicos Masculinos"
                            );

                        }

                    }

                    if (olympicFemaleHistory) {

                        olympicFemaleHistory.style.display =
                            "none";

                    }

                }


                if (gender === "female") {

                    if (olympicMaleHistory) {

                        olympicMaleHistory.style.display =
                            "none";

                    }

                    if (olympicFemaleHistory) {

                        olympicFemaleHistory.style.display =
                            "block";

                        const data =
                            competitionData
                                .olympic_female?.[year];

                        if (data) {

                            showCompetitionResult(
                                olympicFemaleHistory,
                                year,
                                data,
                                "Juegos Olímpicos Femeninos"
                            );

                        }

                    }

                }

            }
        );

    });


/* =====================================================
   BOTONES DE AÑO DE LOS JUEGOS OLÍMPICOS
===================================================== */

document
    .querySelectorAll(".olympic-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const year =
                    button.dataset.year;


                /*
                   SOLO afecta a los botones
                   de años olímpicos.
                */

                document
                    .querySelectorAll(".olympic-button")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                button.classList.add("active");


                /*
                   Detectar qué género está seleccionado.
                */

                const activeGender =
                    document.querySelector(
                        ".olympic-gender.active"
                    );


                const gender =
                    activeGender
                        ?.dataset.olympicGender ||
                        "male";


                if (gender === "male") {

                    const data =
                        competitionData
                            .olympic_male?.[year];

                    if (
                        data &&
                        olympicMaleHistory
                    ) {

                        olympicMaleHistory.style.display =
                            "block";

                        if (olympicFemaleHistory) {

                            olympicFemaleHistory.style.display =
                                "none";

                        }

                        showCompetitionResult(
                            olympicMaleHistory,
                            year,
                            data,
                            "Juegos Olímpicos Masculinos"
                        );

                    }

                }


                if (gender === "female") {

                    const data =
                        competitionData
                            .olympic_female?.[year];

                    if (
                        data &&
                        olympicFemaleHistory
                    ) {

                        olympicFemaleHistory.style.display =
                            "block";

                        if (olympicMaleHistory) {

                            olympicMaleHistory.style.display =
                                "none";

                        }

                        showCompetitionResult(
                            olympicFemaleHistory,
                            year,
                            data,
                            "Juegos Olímpicos Femeninos"
                        );

                    }

                }

            }
        );

    });


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
                threshold: 0.12
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
   LOGO / NAVEGACIÓN
===================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            e => {

                const targetId =
                    link.getAttribute("href");


                /*
                   Evitar problemas con href="#"
                */

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


                if (!target) return;


                e.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth"
                });

            }
        );

    });


});
```
