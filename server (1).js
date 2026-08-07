/* =====================================================
   VÓLEYRETRO
   SERVIDOR DE IA
===================================================== */

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const OpenAI = require("openai");

const app = express();
const PORT = process.env.PORT || 3000;

/* =====================================================
   CONFIGURACIÓN
===================================================== */

console.log("=================================");
console.log("🏐 INICIANDO VÓLEYRETRO");
console.log("=================================");

console.log(
    "OPENAI_API_KEY:",
    process.env.OPENAI_API_KEY
        ? "ENCONTRADA"
        : "NO ENCONTRADA"
);

let client = null;

if (process.env.OPENAI_API_KEY) {
    client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    });
}

/* =====================================================
   MIDDLEWARE
===================================================== */

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

/* =====================================================
   PRUEBA DEL SERVIDOR
===================================================== */

app.get("/api/health", (req, res) => {
    res.json({
        ok: true,
        server: "VóleyRetro",
        openai: Boolean(process.env.OPENAI_API_KEY)
    });
});

/* =====================================================
   PERSONALIDAD DE LA IA
===================================================== */

const SYSTEM_PROMPT = `

Eres el entrenador virtual oficial de VóleyRetro.

Tu especialidad principal es el voleibol.

Ayudas al usuario a comprender, practicar y mejorar
su conocimiento y rendimiento en voleibol.

PERSONALIDAD:

- Amable.
- Natural.
- Claro.
- Motivador.
- Paciente.
- Explicas de forma sencilla cuando sea necesario.
- Puedes profundizar cuando el usuario tenga más experiencia.

PREGUNTAS ABIERTAS:

No dependas de palabras clave.

Debes comprender la intención completa de la pregunta.

Por ejemplo:

"Cada vez que recibo un saque fuerte el balón
se me va hacia atrás."

Debes entender que probablemente necesita ayuda
con recepción, aunque no diga explícitamente
"recepción".

También puedes responder preguntas sobre:

- Recepción
- Saque
- Ataque
- Remate
- Bloqueo
- Defensa
- Colocación
- Líbero
- Punta
- Opuesto
- Central
- Rotaciones
- Posiciones
- Sistemas de juego
- Táctica
- Técnica
- Entrenamiento
- Preparación para partidos
- Errores técnicos
- Estrategia
- Reglas
- Historia del voleibol
- VNL
- Juegos Olímpicos
- Voleibol de playa

Si el usuario hace una pregunta que no sea
estrictamente de voleibol pero puedes responderla
de manera útil, responde de forma natural.

No obligues al usuario a elegir una categoría.

Si la pregunta tiene varias partes, responde todas.

Si necesitas información para personalizar una
respuesta, haz una pregunta breve.

No inventes estadísticas o datos actuales.

Usa párrafos cortos y listas cuando sean útiles.

Puedes utilizar ocasionalmente:
🏐 🎯 💥 🧱 🛡️

Eres el entrenador virtual de VóleyRetro.

`;

/* =====================================================
   API DEL ENTRENADOR
===================================================== */

app.post("/api/coach", async (req, res) => {

    console.log("\n---------------------------------");
    console.log("🏐 NUEVA PREGUNTA");

    try {

        if (!client) {
            console.error("❌ OPENAI_API_KEY NO ENCONTRADA");
            return res.status(500).json({
                error: "El servidor no tiene configurada la OPENAI_API_KEY."
            });
        }

        const question = req.body?.question;

        console.log("Pregunta recibida:", question);

        if (typeof question !== "string" || !question.trim()) {
            return res.status(400).json({
                error: "No se recibió ninguna pregunta."
            });
        }

        const cleanQuestion = question.trim().slice(0, 4000);

        const history = Array.isArray(req.body?.history)
            ? req.body.history
            : [];

        const previousMessages = history
            .slice(-10)
            .filter(message =>
                message &&
                (message.role === "user" || message.role === "assistant") &&
                typeof message.content === "string"
            )
            .map(message => ({
                role: message.role,
                content: message.content.slice(0, 4000)
            }));

        console.log("🤖 Conectando con OpenAI...");

        const response = await client.responses.create({
            model: "gpt-5-mini",
            instructions: SYSTEM_PROMPT,
            input: [
                ...previousMessages,
                { role: "user", content: cleanQuestion }
            ]
        });

        const answer = response.output_text?.trim();

        console.log("Respuesta recibida:", answer ? "SÍ" : "NO");

        if (!answer) {
            console.error("❌ OpenAI no devolvió texto.");
            return res.status(500).json({
                error: "La IA no devolvió ninguna respuesta."
            });
        }

        console.log("✅ RESPUESTA ENVIADA");

        res.json({ answer });

    } catch (error) {

        console.error("\n❌ ERROR REAL DEL SERVIDOR:");
        console.error(error);
        console.error("Mensaje:", error.message);

        res.status(500).json({
            error: "Error al conectar con la IA.",
            details: error.message
        });

    }

});

/* =====================================================
   PÁGINA PRINCIPAL
===================================================== */

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

/* =====================================================
   RUTAS NO ENCONTRADAS
===================================================== */

app.use((req, res) => {
    res.status(404).json({ error: "Ruta no encontrada." });
});

/* =====================================================
   INICIAR SERVIDOR
===================================================== */

app.listen(PORT, () => {
    console.log("");
    console.log("=================================");
    console.log(`🏐 VóleyRetro: http://localhost:${PORT}`);
    console.log(`🩺 Health: http://localhost:${PORT}/api/health`);
    console.log("=================================");
    console.log("");
});
