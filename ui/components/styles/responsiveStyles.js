/**
 * Breakpoints are the surface iframe, not the whole desktop.
 * History and navigation stay on their own narrow viewports.
 */
export const responsiveStyles = `
@media(max-width:650px){
  .context-menu{display:grid}
  .aero-context{padding:0 8px;gap:8px}
  .context-title strong{font-size:14px}
  .welcome-inner{padding:18px 4% 28px}
  .hero-title{font-size:28px}
}

@media(max-width:80px){
  .aero-history{padding:0}
  .history-heading>div,.aero-history .history-body{display:none}
  .history-heading{justify-content:center;height:100%}
}
`;
