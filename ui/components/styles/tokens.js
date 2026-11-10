/**
 * XP window + Messenger blue + Frutiger Aero glass tokens.
 */
export const tokensStyles = `
*{box-sizing:border-box}
html,body,#root{margin:0;width:100%;height:100%}
button,input{font:inherit}
button{cursor:pointer;color:inherit;touch-action:manipulation}
button:disabled{cursor:default;opacity:.45}
:where(button,input,a):focus-visible{
  outline:2px solid var(--focus);
  outline-offset:2px;
}
@media (forced-colors: active){
  :where(button,input,a):focus-visible{outline:2px solid Highlight}
}
svg{display:block;flex-shrink:0}
p,h1,h2,h3{margin:0}
ul{margin:0;padding:0;list-style:none}

body,button,input,textarea,select{
  font-family:AeroSans, "Segoe UI", Tahoma, Verdana, sans-serif;
}

.aero-surface{
  --bg:#e7f5ff;
  --panel:#ffffff;
  --elevated:rgba(255,255,255,.82);
  --ink:#17304a;
  --muted:#4d6278;
  --line:#8eb4dc;
  --line-strong:#1f5fbe;
  --line-soft:#d5e8f8;
  --luna-top:#8ecbff;
  --luna-mid:#2f78e8;
  --luna-deep:#1a4fbe;
  --online:#1f9d45;
  --away:#e0a020;
  --busy:#d64545;
  --water:#1aa7d6;
  --focus:#0b4db8;
  --glass:rgba(255,255,255,.72);
  --selected:#d6ebff;
  --rail:#f4fbff;
  --title:linear-gradient(#9fd4ff,#3b86ee 46%,#1d58c4);
  --gel:linear-gradient(#f7fbff,#d7ecff 42%,#b9d8f8);
  --shine:inset 0 1px 0 rgba(255,255,255,.85);
  background:var(--bg);
  color:var(--ink);
  height:100%;
  font:13px/1.4 AeroSans, "Segoe UI", Tahoma, Verdana, sans-serif;
  color-scheme:light;
  -webkit-font-smoothing:antialiased;
}

.aero-surface.dark{
  --bg:#071422;
  --panel:#0d1c2e;
  --elevated:rgba(16,36,58,.82);
  --ink:#e7f6ff;
  --muted:#9db4c8;
  --line:#2a4d6e;
  --line-strong:#7fd4ff;
  --line-soft:#163049;
  --luna-top:#1d4e86;
  --luna-mid:#163e78;
  --luna-deep:#0c2a52;
  --online:#3dcc6a;
  --away:#f0c040;
  --busy:#ff6b6b;
  --water:#5ad4f0;
  --focus:#9be7ff;
  --glass:rgba(12,32,54,.72);
  --selected:#14365c;
  --rail:#081624;
  --title:linear-gradient(#1a4f8c,#12386e 50%,#0c274c);
  --gel:linear-gradient(#1a3d66,#123056 46%,#0d2444);
  --shine:inset 0 1px 0 rgba(180,230,255,.35);
  color-scheme:dark;
}

.gel-btn{
  border:1px solid var(--line-strong);
  background:var(--gel);
  color:var(--ink);
  border-radius:8px;
  box-shadow:var(--shine), 0 1px 2px rgba(16,60,120,.28);
}
.aero-surface.dark .gel-btn{color:#e7f6ff}
`;
