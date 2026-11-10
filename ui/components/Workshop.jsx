import React, { useState } from "react";
import { aeroFontFace } from "./aeroFont.js";
import { forgeChrome } from "./forgeChrome.js";
import { nativeScrollStyles } from "./nativeScroll.js";

const FORGE_SNIPPETS = [
  {
    id: "arch-review",
    category: "ARCHITECTURE",
    title: "Senior System Architecture Audit",
    titleEs: "Auditoría de Arquitectura de Sistemas",
    prompt: `Actúa como un Principal Software Architect. Analiza el siguiente diseño/código buscando:
1. Cuellos de botella de rendimiento y escalabilidad (concurrencia, I/O, memoria).
2. Acoplamiento indebido y violación de principios SOLID o arquitectura hexagonal.
3. Resiliencia ante fallos: circuit breakers, reintentos exponenciales y degradación elegante.
4. Propuesta de refactorización con diagrama o especificación técnica concreta.`,
  },
  {
    id: "security-audit",
    category: "SECURITY",
    title: "Zero-Trust & Offensive Security Check",
    titleEs: "Revisión de Seguridad Ofensiva y Zero-Trust",
    prompt: `Actúa como un Especialista en Ciberseguridad Ofensiva (Red Team). Examina el contexto provisto contra:
- OWASP Top 10 (Inyecciones, Broken Auth, SSRF, Deserialización insegura).
- Fuga de secretos, claves hardcodeadas o logs excesivos.
- Validación estricta de esquemas y sanitización de inputs/outputs.
- Emite un reporte clasificado por severidad (CRITICAL, HIGH, MEDIUM, LOW) con PoC de remediación.`,
  },
  {
    id: "devops-cicd",
    category: "DEVOPS",
    title: "Production-Grade Docker & CI/CD Pipeline",
    titleEs: "Pipeline CI/CD y Dockerfile Optimizado para Producción",
    prompt: `Diseña un Dockerfile multi-stage de producción ultra ligero y seguro para esta aplicación, junto con un pipeline de GitHub Actions que incluya:
- Caché de capas de dependencias para builds ultra rápidos.
- Ejecución como usuario sin privilegios (non-root).
- Escaneo de vulnerabilidades con Trivy/Snyk.
- Tests automáticos y despliegue condicional por branch/tag.`,
  },
  {
    id: "refactor-clean",
    category: "CODE_QUALITY",
    title: "Deep Refactoring & Type Safety Maxima",
    titleEs: "Refactorización Profunda y Seguridad de Tipos",
    prompt: `Refactoriza el siguiente código priorizando:
1. Legibilidad implacable: elimina código espagueti y funciones de más de 30 líneas.
2. Inmutabilidad y manejo funcional de errores (evita excepciones silenciosas).
3. Type safety estricto: cero 'any', generics adecuados y discriminative unions.
4. Documentación concisa con ejemplos de uso y tests unitarios.`,
  },
  {
    id: "agentic-workflow",
    category: "AGENTS",
    title: "Autonomous Agent Task Specification",
    titleEs: "Especificación de Tarea para Agente Autónomo",
    prompt: `Define el protocolo de ejecución para un agente autónomo de IA:
- Rol y alcance delimitado (Guardrails explícitos).
- Formato de entrada esperado y esquema de salida JSON estricto.
- Manejo de ambigüedad y puntos de parada para confirmación humana (Human-in-the-loop).
- Criterios de aceptación verificables antes de marcar la tarea como DONE.`,
  },
];

export default function Workshop({ sdk }) {
  const [selectedCat, setSelectedCat] = useState("ALL");
  const [copiedId, setCopiedId] = useState(null);
  const [customParam, setCustomParam] = useState("");

  const snapshot = sdk?.snapshot || {};
  const en = snapshot.language === "en";
  const dark = snapshot.theme === "dark";

  const categories = ["ALL", "ARCHITECTURE", "SECURITY", "DEVOPS", "CODE_QUALITY", "AGENTS"];

  const filtered = selectedCat === "ALL"
    ? FORGE_SNIPPETS
    : FORGE_SNIPPETS.filter((s) => s.category === selectedCat);

  const handleCopy = (snippet) => {
    let text = snippet.prompt;
    if (customParam.trim()) {
      text += `\n\n[CONTEXTO / STACK ESPECÍFICO]:\n${customParam.trim()}`;
    }
    navigator.clipboard.writeText(text);
    setCopiedId(snippet.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className={`forge-root ${dark ? "dark" : ""}`}>
      <style>{aeroFontFace + nativeScrollStyles + forgeChrome}</style>

      <section className="forge-window">
        <div className="forge-titlebar"><i aria-hidden="true"></i><span>Urano Aero</span></div>
        <div className="forge-body">
      <div className="forge-header">
        <h1 className="forge-title">{en ? "Prompt workshop" : "Taller de prompts"}</h1>
        <p className="forge-subtitle">
          {en
            ? "The same prompts, inside a glassy window. Copy one or add your own context."
            : "Los mismos prompts, dentro de una ventana de cristal. Copia uno o añade tu contexto."}
        </p>
      </div>

      <div className="param-box">
        <label className="param-label">
          {en ? "Add your own context (optional)" : "Añade tu contexto (opcional)"}
        </label>
        <input
          className="param-input"
          placeholder={
            en
              ? "e.g. Next.js 15, PostgreSQL, Kubernetes, Strict TypeScript..."
              : "ej. React 19, Node.js, microservicios, TypeScript estricto..."
          }
          value={customParam}
          onChange={(e) => setCustomParam(e.target.value)}
        />
      </div>

      <div className="forge-filters">
        {categories.map((cat) => (
          <button
            type="button"
            key={cat}
            className={`filter-btn ${selectedCat === cat ? "active" : ""}`}
            onClick={() => setSelectedCat(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="forge-grid">
        {filtered.map((s) => (
          <div key={s.id} className="snippet-card">
            <div>
              <div className="card-top">
                <span className="card-tag">[{s.category}]</span>
              </div>
              <h2>{en ? s.title : s.titleEs}</h2>
              <div className="snippet-preview">{s.prompt}</div>
            </div>
            <button
              type="button"
              className={`copy-btn ${copiedId === s.id ? "copied" : ""}`}
              onClick={() => handleCopy(s)}
            >
              {copiedId === s.id
                ? en
                  ? "Copied"
                  : "Copiado"
                : en
                  ? "Copy prompt"
                  : "Copiar prompt"}
            </button>
          </div>
        ))}
      </div>
        </div>
      </section>
    </div>
  );
}
