import React from "react";
import { SvgIcon } from "../../icons/SvgIcon.jsx";

export function ThreadRow({
  session,
  active,
  menuOpen,
  en,
  onLoad,
  onToggleMenu,
  onPin,
  onDelete,
}) {
  return (
    <div className={`aero-thread ${active ? "active" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <button
        type="button"
        className="thread-open"
        onClick={() => onLoad(session.id)}
      >
        <span className="thread-avatar">
          {session.emoji || "✧"}
          {session.pinned && <span className="pin-dot" aria-hidden="true" />}
        </span>
        <span>
          <strong>
            {session.title || (en ? "Conversation" : "Conversación")}
          </strong>
          <small>
            {session.agent || (en ? "Local agent" : "Agente local")}
            {session.pinned ? (en ? " · pinned" : " · fijada") : ""}
            {session.scheduled ? (en ? " · scheduled" : " · programada") : ""}
          </small>
        </span>
      </button>
      <button
        type="button"
        className="thread-menu"
        aria-label={
          en ? "Conversation actions" : "Acciones de conversación"
        }
        aria-expanded={menuOpen}
        onClick={(e) => {
          e.stopPropagation();
          onToggleMenu(session.id);
        }}
      >
        ···
      </button>
      {menuOpen && (
        <>
          <div
            className="thread-backdrop"
            onClick={(e) => {
              e.stopPropagation();
              onToggleMenu(session.id);
            }}
            aria-hidden="true"
          />
          <div
            className="thread-options"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => {
                onPin(session.id);
              }}
            >
              <SvgIcon name="pin" size={13} />
              <span>
                {session.pinned
                  ? en
                    ? "Unpin"
                    : "Desfijar"
                  : en
                    ? "Pin conversation"
                    : "Fijar conversación"}
              </span>
            </button>
            <button
              type="button"
              className="danger"
              onClick={() => {
                onDelete(session.id);
              }}
            >
              <SvgIcon name="trash" size={13} />
              <span>{en ? "Delete…" : "Eliminar…"}</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

