/**
 * Messenger window navigation: glossy wave, display picture, contact rows.
 */
export const navigationStyles = `
.aero-rail{
  height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
  background:var(--rail);
  position:relative;
  overflow:hidden;
  user-select:none;
  border-right:1px solid var(--line);
}

.aero-rail.is-expanded{overflow:hidden}

.msn-wave{
  position:relative;
  flex-shrink:0;
  padding:12px 12px 34px;
  color:#fff;
  background:linear-gradient(180deg,#1a56d4 0%,#3c8ef5 58%,#9ad8ff 100%);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.45);
}
.aero-surface.dark .msn-wave{
  background:linear-gradient(180deg,#0c2f5c 0%,#14508f 55%,#1a6e78 100%);
}
.msn-wave::after{
  content:"";
  position:absolute;
  left:-8%;
  right:-12%;
  bottom:-22px;
  height:40px;
  background:var(--rail);
  border-radius:50%;
}
.msn-wave-top{
  position:relative;
  z-index:1;
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:8px;
}

.aero-brand-row,.aero-brand{
  border:0;
  background:none;
  padding:0;
  display:flex;
  align-items:center;
  gap:8px;
  min-width:0;
  text-align:left;
  color:#fff;
}
.brand-crest{
  width:36px;
  height:36px;
  border-radius:3px;
  display:grid;
  place-items:center;
  font-weight:800;
  color:#1a4fbe;
  background:radial-gradient(circle at 35% 30%,#fff,#c5ecff 42%,#7ec8ff);
  box-shadow:inset 0 1px 0 #fff, 0 2px 6px rgba(0,40,100,.35);
  border:2px solid rgba(255,255,255,.85);
  flex-shrink:0;
}
.brand-copy{display:flex;flex-direction:column;min-width:0}
.brand-copy strong{
  font-size:14px;
  font-weight:800;
  letter-spacing:.2px;
  color:#fff;
  text-shadow:0 1px 0 rgba(0,40,120,.35);
}
.brand-copy small{
  font-size:11px;
  font-style:italic;
  color:rgba(255,255,255,.9);
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}

.rail-toggle-btn{
  position:relative;
  z-index:1;
  width:28px;
  height:28px;
  display:grid;
  place-items:center;
  color:#17304a;
  flex-shrink:0;
}

.rail-user-card{
  position:relative;
  z-index:1;
  width:100%;
  border:1px solid #c5d7ea;
  background:#fff;
  border-radius:4px;
  padding:8px;
  margin-top:8px;
  display:flex;
  align-items:center;
  gap:10px;
  text-align:left;
  color:#123a66;
}
.rail-user-avatar{
  width:52px;
  height:52px;
  border-radius:4px;
  display:grid;
  place-items:center;
  font-weight:800;
  font-size:16px;
  color:#143018;
  background:linear-gradient(#d7f5b0,#5cb84a);
  border:2px solid #fff;
  box-shadow:inset 0 1px 0 #fff, 1px 1px 0 rgba(20,80,20,.25);
  position:relative;
  flex-shrink:0;
}
.rail-user-dot{
  position:absolute;
  right:-1px;
  bottom:-1px;
  width:12px;
  height:12px;
  border-radius:50%;
  background:var(--online);
  border:2px solid #fff;
}
.rail-user-dot.is-guest{background:var(--away)}
.rail-user-copy{display:flex;flex-direction:column;min-width:0;flex:1}
.rail-user-copy strong{
  font-size:15px;
  font-weight:800;
  color:#123a66;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.rail-user-status{
  display:block;
  font-size:12px;
  font-style:normal;
  font-weight:700;
  color:#2f8a3a;
}
.rail-user-copy em{
  display:block;
  font-size:11px;
  font-style:italic;
  color:#5c6b80;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.rail-user-chevron{opacity:.8}

.rail-module-card{
  position:relative;
  z-index:1;
  margin-top:8px;
  display:flex;
  flex-direction:column;
  gap:8px;
}
.rail-back-pill,.rail-module-hero{
  display:flex;
  align-items:center;
  gap:8px;
  color:#fff;
}
.rail-back-pill{
  border:0;
  background:rgba(255,255,255,.18);
  border-radius:999px;
  padding:4px 10px;
  font-size:12px;
  width:fit-content;
}
.rail-module-icon{
  width:32px;
  height:32px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background:rgba(255,255,255,.28);
}
.rail-module-copy{display:flex;flex-direction:column;min-width:0}
.rail-module-copy strong{font-size:13px}
.rail-module-copy small{font-size:11px;font-style:italic;opacity:.9}
.rail-module-tag{
  margin-left:auto;
  font-size:10px;
  letter-spacing:.4px;
  text-transform:uppercase;
  opacity:.85;
}

.rail-search{
  position:relative;
  z-index:1;
  display:flex;
  align-items:center;
  gap:6px;
  margin:8px 10px 6px;
  padding:0 8px;
  height:32px;
  border-radius:16px;
  border:1px solid var(--line);
  background:#fff;
  box-shadow:inset 0 1px 2px rgba(20,60,120,.12), var(--shine);
  color:var(--muted);
  flex-shrink:0;
}
.aero-surface.dark .rail-search{background:#10283f;color:var(--muted)}
.rail-search input{
  flex:1;
  min-width:0;
  border:0;
  background:transparent;
  color:var(--ink);
  outline:none;
  font-size:12.5px;
}
.rail-search input:focus-visible{outline:none}
.rail-search:focus-within{outline:2px solid var(--focus);outline-offset:1px}
.rail-search-clear{
  border:0;
  background:transparent;
  width:22px;
  height:22px;
  border-radius:50%;
  display:grid;
  place-items:center;
  color:var(--muted);
}

.rail-scroll-area{
  flex:1;
  min-height:0;
  overflow:auto;
  padding:4px 8px 8px;
}

.rail-top-items,.rail-section-items{display:flex;flex-direction:column;gap:2px}
.rail-item-row{
  width:100%;
  border:0;
  background:transparent;
  border-radius:10px;
  min-height:36px;
  padding:4px 8px;
  display:flex;
  align-items:center;
  gap:8px;
  text-align:left;
  color:var(--ink);
}
.rail-item-row:hover{background:rgba(47,120,232,.1)}
.rail-item-row[aria-current="page"]{
  background:linear-gradient(#eaf5ff,#d4ebff);
  box-shadow:inset 0 1px 0 #fff;
}
.aero-surface.dark .rail-item-row[aria-current="page"]{
  background:linear-gradient(#16385c,#12304e);
  box-shadow:none;
}
.rail-item-icon{
  width:28px;
  height:28px;
  border-radius:3px;
  display:grid;
  place-items:center;
  background:linear-gradient(#c6ee8a,#3f9e45);
  color:#143018;
  border:1px solid #2f7a34;
  box-shadow:inset 0 1px 0 #fff;
  position:relative;
  flex-shrink:0;
}
.aero-surface.dark .rail-item-icon{
  background:radial-gradient(circle at 35% 30%,#24527e,#123552);
  color:#d7f3ff;
  border-color:#2a5278;
}
.rail-item-icon::after{content:none}
.rail-item-text{
  flex:1;
  min-width:0;
  font-weight:700;
  font-size:13px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.rail-item-arrow{color:var(--muted);opacity:.7}
.is-subitem{padding-left:14px}
.is-subitem .rail-item-text{font-weight:600}

.rail-section{margin-top:8px}
.rail-section-header{
  width:100%;
  border:0;
  background:transparent;
  display:flex;
  align-items:center;
  gap:6px;
  padding:4px 6px;
  color:var(--luna-deep);
  font-size:11px;
  font-weight:800;
  letter-spacing:.4px;
  text-transform:uppercase;
}
.aero-surface.dark .rail-section-header{color:#8fd4ff}
.rail-section-dot{
  width:7px;
  height:7px;
  border-radius:50%;
  background:var(--online);
}
.rail-section-title{white-space:nowrap}
.rail-section-line{flex:1;height:1px;background:var(--line-soft)}
.rail-section-meta{display:flex;align-items:center;gap:4px;color:var(--muted)}
.rail-section-count{
  font-size:10px;
  background:var(--selected);
  border-radius:8px;
  padding:0 5px;
}
.rail-section-chevron{display:grid}
.rail-section-chevron.is-open{transform:rotate(180deg)}
.rail-empty{color:var(--muted);font-style:italic;padding:12px 8px;font-size:12px}

.rail-expanded-footer{
  flex-shrink:0;
  border-top:1px solid var(--line-soft);
  background:linear-gradient(#f7fbff,#e4f2fc);
  padding:8px;
}
.aero-surface.dark .rail-expanded-footer{
  background:linear-gradient(#0e2236,#0a1a2c);
}
.rail-footer-actions{display:flex;gap:6px}
.rail-footer-actions button{
  flex:1;
  min-height:32px;
  border:1px solid var(--line);
  background:var(--gel);
  border-radius:8px;
  box-shadow:var(--shine);
  display:flex;
  align-items:center;
  justify-content:center;
  gap:4px;
  font-size:11px;
  font-weight:700;
  color:var(--ink);
  padding:0 4px;
}
.rail-footer-actions button.danger{color:#a32121}
.aero-surface.dark .rail-footer-actions button.danger{color:#ff8d8d}

.aero-rail.is-collapsed{
  align-items:center;
  padding:8px 0 10px;
  background:linear-gradient(#1f62d8 0 64px,#e7f6ea 64px,#9ed36a);
}
.aero-surface.dark .aero-rail.is-collapsed{
  background:linear-gradient(#12386a,var(--rail) 72px);
}
.aero-brand{
  flex-direction:column;
  color:#fff;
  margin-bottom:8px;
}
.aero-rail.is-collapsed .aero-brand strong{
  display:block;
  max-width:58px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  font-size:9px;
  color:#fff;
  text-shadow:none;
}
.aero-rail.is-collapsed .aero-brand small{
  display:block;
  font-size:8px;
  font-style:italic;
  color:#d7f5b0;
}
.rail-rule{display:none}
.rail-links,.rail-bottom{
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:4px;
  width:100%;
}
.rail-links{flex:1;min-height:0;overflow:auto;padding:4px 0}
.rail-links button,.rail-bottom button{
  border:0;
  background:transparent;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:2px;
  color:var(--ink);
  padding:2px 0;
}
.rail-glyph{
  width:34px;
  height:34px;
  border-radius:3px;
  display:grid;
  place-items:center;
  background:linear-gradient(#c8f08a,#3f9e45);
  color:#143018;
  border:1px solid #2c7a32;
  box-shadow:inset 0 1px 0 #fff, 1px 1px 0 rgba(0,0,0,.12);
}
.rail-links button:nth-child(3n) .rail-glyph{background:linear-gradient(#9fd4ff,#2f6fe0);color:#fff;border-color:#1a4fbe}
.rail-links button:nth-child(3n+2) .rail-glyph{background:linear-gradient(#ffe7a0,#e0a020);color:#5a3d08;border-color:#a87810}
.aero-surface.dark .rail-glyph{
  background:radial-gradient(circle at 35% 30%,#2a6294,#10283f);
  color:#e7f6ff;
  border-color:#2a5278;
}
.rail-links button[aria-current="page"] .rail-glyph{
  outline:2px solid var(--luna-mid);
  outline-offset:1px;
}
.rail-label{
  font-size:9px;
  font-weight:700;
  max-width:100%;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  padding:0 2px;
}
.rail-season{font-size:14px}
.rail-close{
  font-size:11px;
  font-weight:700;
  color:var(--muted);
}
.rail-signout{
  border:0;
  background:transparent;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:2px;
  font-size:9px;
  font-weight:700;
  color:var(--muted);
  padding-bottom:4px;
}

@media (prefers-reduced-motion: no-preference){
  .rail-section-chevron{transition:transform .18s ease}
}
`;
