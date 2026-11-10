/**
 * Empty Messenger room over an original Frutiger Aero landscape.
 * The chat host owns scrolling: this root does not lock the viewport.
 */
export const welcomeStyles = `
.aero-welcome{position:relative;color:var(--ink)}
.aero-scene{position:absolute;inset:0;width:100%;height:100%;z-index:0;display:block}
.aero-surface.dark .aero-scene{filter:brightness(.42) saturate(1.35) hue-rotate(18deg)}
.welcome-inner{position:relative;z-index:1;padding:28px 5% 40px}
.welcome-window{
  max-width:760px;
  margin:0 auto;
  border:1px solid #7eb0e4;
  border-radius:10px;
  overflow:hidden;
  background:rgba(255,255,255,.78);
  box-shadow:0 14px 32px rgba(18,70,140,.22), inset 0 1px 0 #fff;
  backdrop-filter:blur(8px);
}
.aero-surface.dark .welcome-window{
  background:rgba(8,22,38,.78);
  border-color:#2a5278;
  box-shadow:0 14px 32px rgba(0,0,0,.35);
}
.welcome-titlebar{
  height:34px;
  display:flex;
  align-items:center;
  gap:8px;
  padding:0 12px;
  color:#fff;
  font-weight:800;
  background:var(--title);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.55);
}
.welcome-sheet{padding:18px 18px 16px}
.welcome-active{
  display:flex;align-items:center;gap:10px;margin-bottom:14px;
  padding:8px 10px;border-radius:12px;background:rgba(255,255,255,.65)
}
.aero-surface.dark .welcome-active{background:rgba(16,40,64,.65)}
.welcome-active strong{display:block;font-size:14px}
.welcome-active p{font-size:12px;font-style:italic;color:var(--muted)}
.hero-title{
  font-size:34px;
  line-height:1.05;
  font-weight:800;
  letter-spacing:-.4px;
  color:#123a72;
  text-shadow:0 1px 0 rgba(255,255,255,.8);
}
.aero-surface.dark .hero-title{color:#e7f7ff;text-shadow:none}
.hero-copy{
  margin-top:8px;
  max-width:46rem;
  color:var(--muted);
  font-size:14px;
}
.welcome-search{
  margin-top:14px;
  display:flex;align-items:center;gap:6px;height:34px;padding:0 10px;
  border:1px solid var(--line);border-radius:17px;background:#fff;color:var(--muted);
  box-shadow:inset 0 1px 2px rgba(20,60,120,.1)
}
.aero-surface.dark .welcome-search{background:#10283f}
.welcome-search input{flex:1;min-width:0;border:0;background:transparent;color:var(--ink);outline:none}
.welcome-search:focus-within{outline:2px solid var(--focus);outline-offset:1px}
.welcome-search input:focus-visible{outline:none}
.welcome-search-clear{border:0;background:transparent;color:var(--muted)}
.team-heading{
  display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin:16px 0 8px
}
.team-heading h2{font-size:13px;font-weight:800;letter-spacing:.3px;text-transform:uppercase;color:#1a4fbe}
.aero-surface.dark .team-heading h2{color:#9ad8ff}
.team-heading span{font-size:12px;font-style:italic;color:var(--online);font-weight:700}
.welcome-agents{display:flex;flex-direction:column;gap:6px}
.welcome-agent-card{
  width:100%;
  border:1px solid rgba(255,255,255,.9);
  background:rgba(255,255,255,.7);
  border-radius:12px;
  padding:8px 10px;
  display:flex;
  align-items:center;
  gap:10px;
  text-align:left;
  color:var(--ink);
  box-shadow:inset 0 1px 0 #fff, 0 1px 2px rgba(20,70,130,.08);
}
.aero-surface.dark .welcome-agent-card{
  background:rgba(16,40,68,.72);
  border-color:#2a5278;
  box-shadow:none;
}
.welcome-agent-card:hover{background:#fff}
.aero-surface.dark .welcome-agent-card:hover{background:#143454}
.agent-orb{
  width:40px;height:40px;border-radius:50%;display:grid;place-items:center;position:relative;flex-shrink:0;
  background:radial-gradient(circle at 32% 28%,#fff,#c6f3ff 40%,#6ec8ff);
  border:2px solid #fff;font-size:18px;color:#1a4fbe;
  box-shadow:0 2px 6px rgba(16,70,140,.2)
}
.agent-orb .presence{
  position:absolute;right:-1px;bottom:-1px;width:10px;height:10px;border-radius:50%;
  background:var(--online);border:2px solid #fff
}
.agent-copy{min-width:0;flex:1}
.agent-copy strong{display:block;font-size:14px;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.agent-copy em{
  display:block;font-style:italic;font-size:12px;color:var(--muted);font-weight:500;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis
}
.welcome-empty{margin-top:12px;font-style:italic;color:var(--muted)}

@media (prefers-reduced-motion: no-preference){
  .glass-orb{animation:aero-float 7s ease-in-out infinite}
  .glass-orb.late{animation-delay:-3s}
}
@keyframes aero-float{
  50%{transform:translateY(-6px)}
}
`;
