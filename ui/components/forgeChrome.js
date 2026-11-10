export const forgeChrome = `
.forge-root{
  min-height:100%;
  padding:18px;
  box-sizing:border-box;
  color:#17304a;
  font-family:AeroSans, "Segoe UI", Tahoma, Verdana, sans-serif;
  background:linear-gradient(#8ecbff,#e7f8ff 180px,#d9f6ea);
}
.forge-root.dark{
  color:#e7f6ff;
  background:linear-gradient(#0c2748,#071422 220px);
}
.forge-window{
  max-width:1080px;
  margin:0 auto;
  border:1px solid #7eb0e4;
  border-radius:10px;
  overflow:hidden;
  background:rgba(255,255,255,.82);
  box-shadow:0 12px 28px rgba(16,60,120,.22), inset 0 1px 0 #fff;
}
.forge-root.dark .forge-window{
  background:rgba(10,24,40,.86);
  border-color:#2a5278;
}
.forge-titlebar{
  height:34px;
  display:flex;
  align-items:center;
  gap:8px;
  padding:0 12px;
  color:#fff;
  font-weight:800;
  background:linear-gradient(#9fd4ff,#3b86ee 46%,#1d58c4);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.6);
}
.forge-root.dark .forge-titlebar{
  background:linear-gradient(#1a4f8c,#12386e 50%,#0c274c);
}
.forge-titlebar i{
  width:8px;height:8px;border-radius:50%;background:#3dcc6a;border:1.5px solid #fff;display:block
}
.forge-body{padding:16px 18px 22px}
.forge-title{font-size:28px;font-weight:800;margin:0 0 6px;letter-spacing:-.3px;color:#123a72}
.forge-root.dark .forge-title{color:#e7f7ff}
.forge-subtitle{font-size:13px;color:#4d6278;max-width:680px;line-height:1.45;margin:0}
.forge-root.dark .forge-subtitle{color:#9db4c8}
.forge-filters{display:flex;gap:8px;flex-wrap:wrap;margin:16px 0}
.filter-btn{
  background:linear-gradient(#fff,#d7ecff);
  color:#17304a;
  border:1px solid #8eb4dc;
  border-radius:999px;
  padding:6px 12px;
  font-size:12px;
  font-weight:800;
  cursor:pointer;
  box-shadow:inset 0 1px 0 #fff;
}
.forge-root.dark .filter-btn{background:#10283f;color:#d7eaff;border-color:#2a5278}
.filter-btn:hover{border-color:#1d58c4}
.filter-btn.active{
  background:linear-gradient(#6eb6ff,#1d58c4);
  color:#fff;
  border-color:#1a4fbe;
}
.filter-btn:focus-visible{outline:2px solid #0b4db8;outline-offset:2px}
.param-box{
  background:rgba(255,255,255,.7);
  border:1px solid #b7d4ef;
  border-radius:10px;
  padding:12px 14px;
  margin-bottom:8px;
}
.forge-root.dark .param-box{background:#0e2236;border-color:#2a5278}
.param-label{display:block;font-size:12px;font-weight:800;color:#1a4fbe;margin-bottom:6px}
.forge-root.dark .param-label{color:#9ad8ff}
.param-input{
  width:100%;
  background:#fff;
  border:1px solid #8eb4dc;
  border-radius:8px;
  padding:8px 12px;
  color:#17304a;
  font-family:inherit;
  font-size:13px;
  box-sizing:border-box;
}
.forge-root.dark .param-input{background:#0d1c2e;color:#e7f6ff;border-color:#2a5278}
.param-input:focus-visible{outline:2px solid #0b4db8;outline-offset:1px}
.forge-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:14px}
.snippet-card{
  background:rgba(255,255,255,.8);
  border:1px solid #c5dff3;
  border-radius:12px;
  padding:14px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  box-shadow:inset 0 1px 0 #fff, 0 1px 3px rgba(20,70,130,.08);
}
.forge-root.dark .snippet-card{background:#10283f;border-color:#2a5278;box-shadow:none}
.card-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}
.card-tag{
  font-size:10px;font-weight:800;letter-spacing:.4px;color:#1a4fbe;
  background:#e7f3ff;border-radius:999px;padding:2px 8px
}
.forge-root.dark .card-tag{color:#9ad8ff;background:#143454}
.snippet-card h2{font-size:15px;font-weight:800;margin:0 0 8px}
.snippet-preview{
  background:rgba(255,255,255,.65);
  border:1px solid #d5e8f8;
  border-radius:8px;
  padding:10px 12px;
  font-size:12px;
  color:#4d6278;
  line-height:1.45;
  max-height:110px;
  overflow:hidden;
  margin-bottom:12px;
  white-space:pre-wrap;
}
.forge-root.dark .snippet-preview{background:#0b1a2c;border-color:#1d3c58;color:#9db4c8}
.copy-btn{
  background:linear-gradient(#6eb6ff,#2d74e6 48%,#1d56c4);
  color:#fff;
  border:1px solid #1a4fbe;
  border-radius:8px;
  padding:8px 14px;
  font-weight:800;
  font-size:12px;
  cursor:pointer;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.55);
}
.copy-btn:focus-visible{outline:2px solid #0b4db8;outline-offset:2px}
.copy-btn.copied{background:linear-gradient(#fff,#d7ffe4);color:#146b32;border-color:#7dcea0}
@media (prefers-reduced-motion: no-preference){
  .filter-btn,.copy-btn{transition:transform .15s ease}
}
`;
