/**
 * Conversation title bar inside the 64px host slot.
 */
export const headerStyles = `
.aero-context{
  height:100%;
  display:flex;
  align-items:center;
  padding:0 10px;
  gap:10px;
  color:#fff;
  background:var(--title);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.55), inset 0 -1px 0 rgba(0,40,120,.25);
}
.context-menu{
  display:none;
  width:30px;
  height:30px;
  place-items:center;
  border:1px solid rgba(255,255,255,.7);
  border-radius:8px;
  background:linear-gradient(#fff,#d7ecff);
  color:#17304a;
  box-shadow:var(--shine);
}
.context-title{
  flex:1;
  min-width:0;
  display:flex;
  flex-direction:column;
}
.context-title small{
  display:flex;
  align-items:center;
  gap:6px;
  font-size:10px;
  font-weight:700;
  letter-spacing:.4px;
  text-transform:uppercase;
  color:rgba(255,255,255,.88);
}
.context-dot{
  width:8px;
  height:8px;
  border-radius:50%;
  background:var(--online);
  border:1.5px solid #fff;
  display:inline-block;
}
.context-title strong{
  font-size:15px;
  font-weight:800;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  text-shadow:0 1px 0 rgba(0,40,110,.35);
}
.context-actions{display:flex;align-items:center;gap:6px}
.context-actions button{
  width:30px;
  height:30px;
  border-radius:8px;
  border:1px solid rgba(10,50,130,.45);
  background:linear-gradient(#f8fcff,#c5e4ff 55%,#8ec0f5);
  color:#17304a;
  display:grid;
  place-items:center;
  box-shadow:inset 0 1px 0 #fff, 0 1px 1px rgba(0,40,100,.3);
  position:relative;
}
.aero-surface.dark .context-actions button{
  background:linear-gradient(#2a6294,#123552);
  color:#e7f6ff;
  border-color:#3d6e96;
}
.context-actions button[aria-pressed="true"]{
  background:linear-gradient(#fff,#9dccff);
}
.context-actions sup{
  position:absolute;
  top:-4px;
  right:-4px;
  min-width:14px;
  height:14px;
  border-radius:8px;
  background:#d64545;
  color:#fff;
  font-size:9px;
  font-weight:800;
  display:grid;
  place-items:center;
  padding:0 3px;
}
`;
