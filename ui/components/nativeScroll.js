// Native scrollbars: visible in both modes; no overlay library or wheel interception.
export const nativeScrollStyles = `
html{--aero-scroll-thumb:#7aa4cc;color-scheme:light}
html:has(.aero-surface.dark),html:has(.forge-root.dark){--aero-scroll-thumb:#3d6e96;color-scheme:dark}
html,*{scrollbar-width:thin;scrollbar-color:var(--aero-scroll-thumb) transparent}
::-webkit-scrollbar{width:10px;height:10px}
::-webkit-scrollbar-track{background:transparent}
::-webkit-scrollbar-thumb{background:var(--aero-scroll-thumb);border:2px solid transparent;background-clip:padding-box;border-radius:10px}
`;
