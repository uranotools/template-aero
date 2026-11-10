/**
 * Recent conversations as a Messenger contact list inside an XP pane.
 */
export const historyStyles = `
.aero-history{
  height:100%;
  display:flex;
  flex-direction:column;
  background:#fff;
  overflow:hidden;
  border-right:1px solid #9bb8d6;
}
.aero-surface.dark .aero-history{background:#0e1c2e;border-right-color:#244868}
.history-heading{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:8px;
  padding:5px 8px;
  color:#123a66;
  background:linear-gradient(#f4f9ff,#cfe4f8);
  border-bottom:1px solid #b7d0ea;
}
.aero-surface.dark .history-heading{color:#e7f4ff;background:linear-gradient(#1a446e,#12365c);border-bottom-color:#2a5278}
.overline{display:none}
.history-heading h2{
  font-size:13px;
  font-weight:800;
  display:flex;
  align-items:center;
  gap:6px;
}
.history-heading h2>span{
  font-size:12px;
  font-weight:700;
  color:inherit;
  background:transparent;
  padding:0;
}
.history-heading h2>span::before{content:"("}
.history-heading h2>span::after{content:")"}
.history-collapse-btn{
  width:28px;
  height:28px;
  border-radius:8px;
  border:1px solid rgba(255,255,255,.7);
  background:linear-gradient(#fff,#cfe6ff);
  color:#17304a;
  display:grid;
  place-items:center;
  box-shadow:var(--shine);
}
.history-body{
  flex:1;
  min-height:0;
  display:flex;
  flex-direction:column;
  padding:4px 0 0;
  background:#fff;
}
.aero-surface.dark .history-body{background:#0e1c2e}

.picker-anchor{position:relative;margin-bottom:8px}
.new-conversation{
  width:calc(100% - 12px);
  min-height:28px;
  margin:0 6px 6px;
  border-radius:3px;
  border:1px solid #7f9db9;
  background:linear-gradient(#fff,#e5f0fb);
  color:#123a66;
  font-weight:700;
  display:flex;
  align-items:center;
  gap:8px;
  padding:0 8px;
  box-shadow:inset 0 1px 0 #fff;
}
.new-conv-icon,.new-conv-chevron{display:grid;place-items:center}
.new-conversation span:nth-child(2){flex:1;text-align:left}
.agent-picker-popover{
  position:absolute;
  z-index:5;
  left:0;
  right:0;
  top:calc(100% + 4px);
  background:var(--panel);
  border:1px solid var(--line);
  border-radius:10px;
  box-shadow:0 10px 24px rgba(16,50,110,.22);
  overflow:hidden;
  max-height:min(440px,70vh);
  display:flex;
  flex-direction:column;
}
.picker-backdrop{position:fixed;inset:0;z-index:4}
.picker-header,.picker-footer{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:8px;
  padding:8px 10px;
  background:linear-gradient(#eef7ff,#dceeff);
}
.aero-surface.dark .picker-header,.aero-surface.dark .picker-footer{background:#10283f}
.picker-eyebrow{font-size:11px;font-weight:800;letter-spacing:.3px;text-transform:uppercase;color:var(--luna-deep)}
.aero-surface.dark .picker-eyebrow{color:#9ad8ff}
.picker-close{
  border:0;background:transparent;width:24px;height:24px;border-radius:6px;color:var(--ink)
}
.picker-search{
  display:flex;align-items:center;gap:6px;margin:8px;padding:0 8px;height:30px;
  border:1px solid var(--line);border-radius:15px;background:#fff;color:var(--muted)
}
.aero-surface.dark .picker-search{background:#0d1c2e}
.picker-search input{flex:1;min-width:0;border:0;background:transparent;color:var(--ink);outline:none}
.picker-clear{border:0;background:transparent;color:var(--muted)}
.picker-tabs{display:flex;gap:4px;padding:0 8px 8px}
.picker-tabs button{
  border:1px solid var(--line);background:#fff;border-radius:999px;padding:3px 8px;
  font-size:11px;font-weight:700;color:var(--muted)
}
.aero-surface.dark .picker-tabs button{background:#10283f;color:var(--muted)}
.picker-tabs button.active{background:#d6ebff;color:#1a4fbe;border-color:#8eb4dc}
.picker-list{overflow:auto;max-height:220px;padding:0 6px 6px}
.picker-option{
  width:100%;border:0;background:transparent;border-radius:8px;display:flex;align-items:center;gap:8px;
  padding:6px;text-align:left;color:var(--ink)
}
.picker-option.is-focused,.picker-option:hover{background:var(--selected)}
.picker-avatar{
  width:28px;height:28px;border-radius:50%;display:grid;place-items:center;
  background:radial-gradient(circle at 35% 30%,#fff,#bfe6ff);color:#1a4fbe;font-size:14px
}
.picker-copy{display:flex;flex-direction:column;min-width:0;flex:1}
.picker-copy strong{font-size:12.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.picker-copy small{
  font-size:11px;font-style:italic;color:var(--muted);
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%
}
.picker-badge{font-size:10px;font-weight:800;color:var(--online)}
.picker-empty{padding:12px;color:var(--muted);font-style:italic;font-size:12px}

.history-search{
  display:flex;align-items:center;gap:6px;height:26px;padding:0 8px;margin:0 6px 6px;
  border:1px solid #7f9db9;border-radius:2px;background:#fff;color:var(--muted);
  box-shadow:inset 1px 1px 2px rgba(0,0,0,.15)
}
.aero-surface.dark .history-search{background:#10283f}
.history-search input{flex:1;min-width:0;border:0;background:transparent;color:var(--ink);outline:none;font-size:12.5px}
.history-search:focus-within{outline:2px solid var(--focus);outline-offset:1px}
.history-search input:focus-visible{outline:none}
.history-search-clear{border:0;background:transparent;color:var(--muted);width:22px;height:22px}

.history-scroll{flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:0}
.aero-thread{
  position:relative;
  display:flex;
  align-items:center;
  border-radius:0;
  min-height:24px;
}
.aero-thread:hover{background:#e8f3ff}
.aero-surface.dark .aero-thread:hover,
.aero-surface.dark .aero-thread:hover .thread-open{background:#16365a;color:inherit}
.aero-thread.active{
  background:#b9d9f5;
  box-shadow:none;
}
.aero-surface.dark .aero-thread.active{background:#1a4d7a;box-shadow:none}
.thread-open{
  flex:1;min-width:0;border:0;background:transparent;display:flex;align-items:center;gap:6px;
  padding:2px 6px;text-align:left;color:inherit
}
.thread-avatar{
  width:16px;height:16px;border-radius:3px;display:grid;place-items:center;flex-shrink:0;
  background:linear-gradient(#7ddea0,#2f9e4f);
  border:1px solid #1d7a38;font-size:9px;position:relative;color:#fff
}
.thread-avatar::after{
  content:"";
  position:absolute;right:-2px;bottom:-2px;width:6px;height:6px;border-radius:50%;
  background:#1f9d45;border:1px solid #fff
}
.aero-surface.dark .thread-avatar{
  background:radial-gradient(circle at 35% 30%,#24527e,#10283f);border-color:#2a5278;color:#e7f6ff
}
.thread-open strong{
  display:block;font-size:13px;font-weight:800;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis
}
.thread-open small{
  position:absolute;
  width:1px;
  height:1px;
  overflow:hidden;
  clip:rect(0 0 0 0);
}
.pin-dot{
  position:absolute;right:-1px;bottom:-1px;width:8px;height:8px;border-radius:50%;
  background:var(--water);border:1.5px solid var(--panel)
}
.thread-menu{
  border:0;background:transparent;width:28px;color:var(--muted);font-weight:800;border-radius:8px
}
.thread-backdrop{position:fixed;inset:0;z-index:3}
.thread-options{
  position:absolute;z-index:4;right:6px;top:28px;min-width:168px;
  background:var(--panel);border:1px solid var(--line);border-radius:8px;
  box-shadow:0 8px 20px rgba(16,50,110,.2);padding:4px;display:flex;flex-direction:column
}
.thread-options button{
  border:0;background:transparent;display:flex;align-items:center;gap:6px;
  padding:6px 8px;border-radius:6px;text-align:left;font-size:12.5px;color:var(--ink)
}
.thread-options button:hover{background:var(--selected)}
.thread-options button.danger{color:#a32121}
.load-more{
  margin:8px auto;border:1px solid var(--line);background:var(--gel);border-radius:8px;
  padding:6px 12px;font-weight:700;color:var(--ink);box-shadow:var(--shine)
}
.history-empty{color:var(--muted);font-style:italic;padding:16px 8px;font-size:12.5px}
.aero-history footer{
  display:flex;align-items:center;gap:6px;padding:8px 4px 2px;font-size:11px;color:var(--muted);font-style:italic
}
.footer-dot{width:8px;height:8px;border-radius:50%;background:var(--online);display:inline-block}
`;
