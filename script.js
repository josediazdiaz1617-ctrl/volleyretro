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

            const email = document.getElementById("email")?.value.trim();
            const password = document.getElementById("password")?.value.trim();

            if (!email || !password) {
                alert("Completa el correo y la contraseña.");
                return;
            }

            alert("Inicio de sesión preparado. Puedes conectar Firebase u otro sistema de autenticación después.");
        });
    }


    /* =====================================================
       GOOGLE LOGIN
    ===================================================== */

    const googleLogin = document.getElementById("googleLogin");

    if (googleLogin) {
        googleLogin.addEventListener("click", () => {
            alert("El inicio de sesión con Google todavía necesita conectarse a Firebase Authentication.");
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

    const dailyTip = document.getElementById("dailyTip");
    const newTip = document.getElementById("newTip");

    if (newTip && dailyTip) {

        newTip.addEventListener("click", () => {

            const current = dailyTip.textContent;

            let newText;

            do {
                newText = tips[Math.floor(Math.random() * tips.length)];
            } while (newText === current && tips.length > 1);

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

    const question = document.getElementById("question");
    const sendQuestion = document.getElementById("sendQuestion");
    const messages = document.getElementById("messages");

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

        const message = document.createElement("div");

        message.className = `message ${type}`;

        message.innerHTML = text;

        messages.appendChild(message);

        messages.scrollTop = messages.scrollHeight;
    }


    function answerQuestion(text) {

        const lower = text.toLowerCase();

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

        const text = question.value.trim();

        if (!text) return;

        addMessage(text, "user");

        question.value = "";

        if (sendQuestion) {
            sendQuestion.disabled = true;
        }

        setTimeout(() => {

            const response = answerQuestion(text);

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
        sendQuestion.addEventListener("click", sendMessage);
    }


    if (question) {
        question.addEventListener("keydown", (e) => {

            if (e.key === "Enter" && !e.shiftKey) {

                e.preventDefault();

                sendMessage();
            }
        });
    }


    /* =====================================================
       BOTONES DEL ENTRENADOR
    ===================================================== */

    document.querySelectorAll(".coach-menu button").forEach(button => {

        button.addEventListener("click", () => {

            const topic = button.textContent.trim().toLowerCase();

            const response =
                coachResponses[topic] ||
                "Selecciona una de las opciones del entrenador.";

            addMessage(
                `<b>Entrenador:</b><br>${response}`,
                "bot"
            );

        });

    });


    /* =====================================================
       SISTEMA DE COMPETICIONES
    ===================================================== */

    const competitionData = {

        /* ================================
           VNL MASCULINA
        ================================= */

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


        /* ================================
           VNL FEMENINA
        ================================= */

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


        /* ================================
           MUNDIAL MASCULINO
        ================================= */

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


        /* ================================
           MUNDIAL FEMENINO
        ================================= */

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


        /* ================================
           OLÍMPICOS MASCULINOS
        ================================= */

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


        /* ================================
           OLÍMPICOS FEMENINOS
        ================================= */

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
       MOSTRAR RESULTADO
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
                        <span>🥇 CAMPEÓN</span>
                        <strong>${data.champion}</strong>
                    </div>

                    <div>
                        <span>🥈 SUBCAMPEÓN</span>
                        <strong>${data.second}</strong>
                    </div>

                    <div class="gold">
                        <span>🥉 TERCER PUESTO</span>
                        <strong>${data.third}</strong>
                    </div>

                </div>

            </div>

        `;
    }


    /* =====================================================
       BOTONES DE COMPETICIÓN
    ===================================================== */

    document.querySelectorAll(".competition").forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".competition")
                .forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            const competition =
                button.dataset.competition;

            const vnlHistory =
                document.getElementById("vnlHistory");

            if (!vnlHistory) return;


            if (competition === "vnl") {

                vnlHistory.innerHTML = "";

                Object.entries(
                    competitionData.vnl_male
                ).forEach(([year, data]) => {

                    showCompetitionResult(
                        vnlHistory,
                        year,
                        data,
                        "VNL Masculina"
                    );

                });

            }


            if (competition === "vnl-female") {

                vnlHistory.innerHTML = "";

                Object.entries(
                    competitionData.vnl_female
                ).forEach(([year, data]) => {

                    showCompetitionResult(
                        vnlHistory,
                        year,
                        data,
                        "VNL Femenina"
                    );

                });

            }


            if (competition === "world") {

                vnlHistory.innerHTML = "";

                Object.entries(
                    competitionData.world_male
                ).forEach(([year, data]) => {

                    showCompetitionResult(
                        vnlHistory,
                        year,
                        data,
                        "Mundial Masculino"
                    );

                });

            }


            if (competition === "world-female") {

                vnlHistory.innerHTML = "";

                Object.entries(
                    competitionData.world_female
                ).forEach(([year, data]) => {

                    showCompetitionResult(
                        vnlHistory,
                        year,
                        data,
                        "Mundial Femenino"
                    );

                });

            }

        });

    });


    /* =====================================================
       BOTONES OLÍMPICOS
    ===================================================== */

    document.querySelectorAll(".olympic-button").forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".olympic-button")
                .forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            const year =
                button.dataset.year;

            const gender =
                button.dataset.gender || "male";

            const key =
                gender === "female"
                    ? "olympic_female"
                    : "olympic_male";

            const data =
                competitionData[key]?.[year];

            const olympicHistory =
                document.getElementById("olympicHistory");

            if (!olympicHistory || !data) return;

            showCompetitionResult(
                olympicHistory,
                year,
                data,
                gender === "female"
                    ? "Juegos Olímpicos Femeninos"
                    : "Juegos Olímpicos Masculinos"
            );

        });

    });


    /* =====================================================
       BOTONES DE AÑOS
       FUNCIONAN SIN ABRIR OTRA PÁGINA
    ===================================================== */

    document.querySelectorAll("[data-year]").forEach(button => {

        button.addEventListener("click", () => {

            const year = button.dataset.year;

            const target =
                button.closest(
                    "#calendario, section"
                );

            if (target) {

                const history =
                    target.querySelector(
                        "#vnlHistory, #olympicHistory"
                    );

                if (history) {

                    history.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }

            }

        });

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

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", e => {

            const targetId =
                link.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        });

    });

});
