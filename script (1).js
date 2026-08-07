/* =====================================================
   VÓLEYRETRO — JAVASCRIPT DEL NAVEGADOR
   (este archivo corre en el cliente, no en el servidor)
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       CHAT DEL ENTRENADOR (IA)
    ================================================= */

    const messagesEl = document.getElementById("messages");
    const questionInput = document.getElementById("question");
    const sendBtn = document.getElementById("sendQuestion");
    const menuButtons = document.querySelectorAll("[data-question]");

    // Historial en memoria para dar contexto a la IA
    let history = [];

    const presetQuestions = {
        recepcion: "Quiero mejorar mi recepción de saque, ¿por dónde empiezo?",
        saque: "¿Cómo puedo mejorar mi saque?",
        ataque: "¿Qué debo tener en cuenta para atacar mejor?",
        bloqueo: "¿Cómo puedo bloquear mejor en la red?",
        defensa: "¿Cómo mejoro mi defensa en cancha?",
        mental: "¿Cómo trabajo la mentalidad antes de competir?",
        plan: "Ayúdame a armar un plan de entrenamiento."
    };

    function addMessage(role, text) {

        if (!messagesEl) return;

        const div = document.createElement("div");
        div.className = "message " + (role === "user" ? "user" : "bot");

        if (role === "bot") {
            div.innerHTML = "<b>ENTRENADOR:</b><br><br>" + text;
        } else {
            div.textContent = text;
        }

        messagesEl.appendChild(div);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function setSending(isSending) {
        if (sendBtn) {
            sendBtn.disabled = isSending;
            sendBtn.textContent = isSending ? "..." : "ENVIAR";
        }
        if (questionInput) {
            questionInput.disabled = isSending;
        }
    }

    async function askCoach(question) {

        if (!question || !question.trim()) return;

        addMessage("user", question);
        setSending(true);

        try {

            const res = await fetch("/api/coach", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ question, history })
            });

            const data = await res.json();

            if (!res.ok) {
                addMessage("bot", "⚠️ " + (data.error || "Ocurrió un error."));
                return;
            }

            addMessage("bot", data.answer);

            history.push({ role: "user", content: question });
            history.push({ role: "assistant", content: data.answer });

        } catch (err) {
            console.error(err);
            addMessage("bot", "⚠️ No se pudo conectar con el entrenador. Revisa que el servidor esté corriendo.");
        } finally {
            setSending(false);
        }
    }

    if (sendBtn && questionInput) {

        sendBtn.addEventListener("click", () => {
            const value = questionInput.value;
            questionInput.value = "";
            askCoach(value);
        });

        questionInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const value = questionInput.value;
                questionInput.value = "";
                askCoach(value);
            }
        });
    }

    menuButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const key = btn.getAttribute("data-question");
            const preset = presetQuestions[key];
            if (preset) askCoach(preset);
        });
    });

    /* =================================================
       CONSEJO DEL DÍA
    ================================================= */

    const tips = [
        "No intentes hacer todos tus ataques con máxima potencia. Aprende primero a controlar dirección y colocación.",
        "En la recepción, dobla las rodillas y deja que el balón toque tus antebrazos cerca del cuerpo.",
        "Al sacar, mantén siempre el mismo punto de contacto para ganar consistencia.",
        "En el bloqueo, mira las manos del colocador para anticipar hacia dónde va el balón.",
        "La comunicación en cancha evita el 90% de los choques y balones caídos."
    ];

    const dailyTipEl = document.getElementById("dailyTip");
    const newTipBtn = document.getElementById("newTip");

    if (newTipBtn && dailyTipEl) {
        newTipBtn.addEventListener("click", () => {
            const random = tips[Math.floor(Math.random() * tips.length)];
            dailyTipEl.textContent = random;
        });
    }

    /* =================================================
       MODAL DE LOGIN (MI PERFIL)
    ================================================= */

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

    /* =================================================
       NOTA:
       Las secciones de NOTICIAS, MATCH CENTER, POSICIONES,
       OLÍMPICOS y VNL todavía no tienen lógica de JavaScript
       (nunca la tuvieron: el script.js original era una copia
       del servidor, no código de navegador). Si quieres, te
       ayudo a construir esas secciones también.
    ================================================= */

});
