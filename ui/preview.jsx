// Development only. Fictional view models; never bundled into the installed entry.
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Workshop from "./components/Workshop.jsx";
import SurfaceApp from "./components/SurfaceApp.jsx";
const params = new URLSearchParams(location.search),
  theme = params.get("theme") === "dark" ? "dark" : "light",
  language = params.get("lang") === "en" ? "en" : "es",
  en = language === "en";
document.documentElement.lang = language;
const agents = [
  {
    id: "writer",
    name: en ? "Letter writer" : "El taller de las palabras",
    emoji: "✍",
    description: "",
  },
  {
    id: "research",
    name: en ? "Research assistant" : "Explorador de ideas",
    emoji: "✧",
    description: "",
  },
  {
    id: "organizer",
    name: en ? "Personal organizer" : "Un poco de orden",
    emoji: "⌘",
    description: "",
  },
];
const initialSessions = [
  {
    id: "one",
    title: en ? "A thoughtful thank-you" : "Un gracias que se sienta",
    agent: agents[0].name,
    emoji: "✍",
    updatedAt: 3,
    pinned: true,
    platform: "local",
  },
  {
    id: "two",
    title: en ? "A plan before the holidays" : "Antes de las vacaciones",
    agent: agents[2].name,
    emoji: "⌘",
    updatedAt: 2,
    platform: "local",
  },
  {
    id: "three",
    title: en ? "Ideas worth keeping" : "Ideas que vale la pena guardar",
    agent: agents[1].name,
    emoji: "✧",
    updatedAt: 1,
    platform: "local",
  },
];
function Gallery() {
  const [sessions, setSessions] = useState(initialSessions),
    [active, setActive] = useState(null),
    [query, setQuery] = useState(""),
    [collapsed, setCollapsed] = useState(false),
    [mobileOpen, setMobileOpen] = useState(false),
    [navOpen, setNavOpen] = useState(false),
    [status, setStatus] = useState(""),
    [draft, setDraft] = useState("");
  const snapshot = {
    apiVersion: 2,
    theme,
    language,
    preview: true,
    navigation: [],
  };
  const entries = [
    {
      id: "chat",
      label: en ? "Conversations" : "Conversaciones",
      active: true,
    },
    { id: "agents", label: en ? "Agents" : "Agentes" },
    { id: "tools", label: en ? "Connections" : "Conexiones" },
    { id: "workshop", label: en ? "Prompt workshop" : "Taller de prompts" },
  ];
  const models = {
    navigation: { entries, guest: true, open: navOpen },
    header: {
      title: active
        ? sessions.find((s) => s.id === active)?.title ||
          agents.find((a) => a.id === active)?.name
        : en
          ? "A new beginning"
          : "Un nuevo comienzo",
      notificationsEnabled: true,
      assistantEnabled: true,
    },
    history: {
      sessions,
      agents,
      activeId: active,
      query,
      collapsed,
      mobileOpen,
      hasMore: false,
      loading: false,
    },
    welcome: { agents },
  };
  const act = (surface, action, payload = {}) => {
    setStatus(`${surface} → ${action}${payload.id ? " · " + payload.id : ""}`);
    if (action === "load" || action === "launch") setActive(payload.id);
    if (action === "search") setQuery(payload.value);
    if (action === "pin")
      setSessions((old) =>
        old.map((s) => (s.id === payload.id ? { ...s, pinned: !s.pinned } : s)),
      );
    if (action === "collapse") {
      if (matchMedia('(max-width:650px)').matches) setMobileOpen((old) => !old);
      else setCollapsed((old) => !old);
    }
    if (action === 'menu') setNavOpen(old => !old);
    if (action === 'close' || action === 'open') setNavOpen(false);
    if (action === "open" && payload.id === "workshop")
      location.href =
        "?surface=panel" +
        (theme === "dark" ? "&theme=dark" : "") +
        (en ? "&lang=en" : "");
  };
  const surface = (name) => (
    <SurfaceApp
      key={name}
      sdk={{ act: (...args) => act(name, ...args) }}
      snapshot={{ ...snapshot, surface: name, model: models[name] }}
    />
  );
  const requested = params.get("surface");
  if (requested === "panel")
    return <Workshop development sdk={{ snapshot, navigate() {} }} />;
  if (models[requested]) return surface(requested);
  return (
    <>
      <style>{`body{margin:0}.gallery{height:100vh;display:grid;grid-template-columns:260px ${collapsed ? "64px" : "270px"} minmax(0,1fr);grid-template-rows:32px 64px minmax(0,1fr) 76px;background:${theme === "dark" ? "#071422" : "#e7f5ff"};color:${theme === "dark" ? "#e7f6ff" : "#17304a"}}.gallery-bar{grid-column:1/-1;font:12px AeroSans,Tahoma,sans-serif;padding:8px 16px;background:linear-gradient(#3b86ee,#1d58c4);color:#fff;display:flex;gap:25px}.gallery-nav{grid-column:1;grid-row:2/5;border-right:1px solid #8eb4dc;min-height:0}.gallery-header{grid-column:2/4;grid-row:2;min-width:0}.gallery-history{grid-column:2;grid-row:3/5;border-right:1px solid #8eb4dc;min-height:0}.gallery-content{grid-column:3;grid-row:3;overflow:auto;min-height:0}.gallery-composer{grid-column:3;grid-row:4;padding:12px 25px;display:flex;align-items:center;gap:10px;background:${theme === "dark" ? "#0d1c2e" : "#f7fbff"};border-top:1px solid #8eb4dc}.gallery-composer input{width:100%;min-width:0;background:#fff;border:1px solid #8eb4dc;padding:12px;color:#17304a;border-radius:18px;box-shadow:inset 0 1px 2px #123a7214}.gallery-composer button{padding:8px 12px;background:linear-gradient(#6eb6ff,#1d58c4);border:1px solid #1a4fbe;color:#fff;border-radius:8px;font-weight:700}.gallery-chat{padding:45px;font:15px/1.8 AeroSans,Tahoma,sans-serif}.gallery-chat h1{font-weight:800}.gallery-back{background:transparent;color:inherit;border:1px solid #8eb4dc;border-radius:8px;padding:10px}@media(max-width:900px){.gallery{grid-template-columns:72px minmax(0,1fr)}.gallery-nav{display:none}.gallery-header{grid-column:1/-1}.gallery-history{grid-column:1}.gallery-content,.gallery-composer{grid-column:2}}`}</style>
      <div className="gallery">
        <div className="gallery-bar">
          <span>
            URANO AERO · SDK 2 · {en ? "FICTIONAL DATA" : "DATOS FICTICIOS"}
          </span>
          <span role="status">
            {status || "React surfaces from the package"}
          </span>
        </div>
        <style>{`@media(max-width:650px){.gallery-nav.is-open{display:block;position:absolute;top:32px;bottom:0;left:0;width:110px;z-index:20}.gallery-history.is-mobile-open{position:absolute;top:96px;bottom:0;left:0;width:min(85vw,300px);z-index:10;box-shadow:10px 0 30px #0005}.gallery-history.is-mobile-open .history-body{display:flex}.gallery-history.is-mobile-open .history-heading>div{display:block}}`}</style>
        <div className={`gallery-nav ${navOpen?'is-open':''}`}>{surface("navigation")}</div>
        <div className="gallery-header">{surface("header")}</div>
        <div className={`gallery-history ${mobileOpen?'is-mobile-open':''}`}>{surface("history")}</div>
        <div className="gallery-content">
          {active ? (
            <div className="gallery-chat">
              <button className="gallery-back" onClick={() => setActive(null)}>
                {en ? "← Back to welcome" : "← Volver al inicio"}
              </button>
              <h1>{models.header.title}</h1>
              <p>
                {en
                  ? "This is a fictional conversation. In Urano, messages and execution remain in the native chat."
                  : "Esta conversación es ficticia. En Urano, los mensajes y la ejecución permanecen en el chat nativo."}
              </p>
            </div>
          ) : (
            surface("welcome")
          )}
        </div>
        <div className="gallery-composer">
          <input
            aria-label={en ? "Demo composer" : "Compositor de demostración"}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder={
              en
                ? "Your native composer stays here…"
                : "Tu compositor nativo sigue aquí…"
            }
          />
          <button
            onClick={() =>
              setStatus(
                en
                  ? "Preview only. Nothing was sent."
                  : "Solo demostración. No se envió nada.",
              )
            }
          >
            ↵
          </button>
        </div>
      </div>
    </>
  );
}
createRoot(document.getElementById("root")).render(<Gallery />);
