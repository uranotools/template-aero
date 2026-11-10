import React, { useState } from "react";
import { contactBlurb } from "../../config/i18n.js";
import { SvgIcon } from "../../icons/SvgIcon.jsx";
import { AeroScene } from "./AeroScene.jsx";

export function Welcome({ model, en, act }) {
  const [query, setQuery] = useState("");
  const activeAgent = model.activeAgent || "";
  const activeEmoji = model.activeEmoji || "✧";
  const agents = (model.agents || []).filter(
    (a) =>
      a.name.toLowerCase().includes(query.toLowerCase()) ||
      (a.description || "").toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <main className="aero-welcome">
      <AeroScene />
      <div className="welcome-inner">
        <section className="welcome-window">
          <div className="welcome-titlebar">
            <span className="context-dot" aria-hidden="true" />
            <span>Urano Aero</span>
          </div>
          <div className="welcome-sheet">
            {activeAgent && (
              <section className="welcome-active">
                <span className="agent-orb" aria-hidden="true">
                  {activeEmoji}
                  <span className="presence" />
                </span>
                <div>
                  <strong>{activeAgent}</strong>
                  <p>
                    {en
                      ? "Online. Write below to start."
                      : "En línea. Escribe abajo para empezar."}
                  </p>
                </div>
              </section>
            )}

            <h1 className="hero-title">
              {en ? "The future they promised" : "El futuro que nos prometieron"}
            </h1>
            <p className="hero-copy">
              {en
                ? "A glassy little room for your agents. Pick someone who is around and start the conversation."
                : "Una sala de cristal para tus agentes. Elige a quien está disponible y empieza la conversación."}
            </p>

            {(model.agents?.length || 0) > 3 && (
              <label className="welcome-search">
                <SvgIcon name="search" size={15} />
                <input
                  aria-label={en ? "Search contacts" : "Buscar contactos"}
                  placeholder={en ? "Search contacts…" : "Buscar contactos…"}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                {query && (
                  <button
                    type="button"
                    className="welcome-search-clear"
                    onClick={() => setQuery("")}
                    aria-label={en ? "Clear" : "Limpiar"}
                  >
                    <SvgIcon name="close" size={13} />
                  </button>
                )}
              </label>
            )}

            <div className="team-heading">
              <h2>{en ? "Contacts" : "Contactos"}</h2>
              <span>
                {agents.length} {en ? "online" : "en línea"}
              </span>
            </div>

            <ul className="welcome-agents">
              {agents.map((a) => (
                <li key={a.id}>
                  <button
                    type="button"
                    className="welcome-agent-card"
                    onClick={() => act("launch", { id: a.id })}
                  >
                    <span className="agent-orb" aria-hidden="true">
                      <span>{a.emoji || "✧"}</span>
                      <span className="presence" />
                    </span>
                    <span className="agent-copy">
                      <strong>{a.name}</strong>
                      <em>
                        {contactBlurb(
                          a.description,
                          en ? "Online · ready to talk" : "En línea · listo para hablar",
                        )}
                      </em>
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            {!agents.length && (
              <p className="welcome-empty">
                {en
                  ? "No contacts match. You can still write below."
                  : "Ningún contacto coincide. Igual puedes escribir abajo."}
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
