import React from "react";
import { aeroFontFace } from "./aeroFont.js";
import { surfaceStyles } from "./surfaceStyles.js";
import { nativeScrollStyles } from "./nativeScroll.js";
import { Navigation } from "./surfaces/navigation/Navigation.jsx";
import { Header } from "./surfaces/header/Header.jsx";
import { History } from "./surfaces/history/History.jsx";
import { Welcome } from "./surfaces/welcome/Welcome.jsx";

export { Navigation, Header, History, Welcome };

const SURFACE_COMPONENTS = {
  navigation: Navigation,
  header: Header,
  history: History,
  welcome: Welcome,
};

/**
 * Root orchestrator for the Urano Aero surfaces.
 */
export default function SurfaceApp({ sdk, snapshot }) {
  const en = snapshot.language === "en";
  const model = snapshot.model || {};
  const act = (action, payload = {}) => sdk.act(action, payload);
  const Component = SURFACE_COMPONENTS[snapshot.surface];

  return (
    <div className={`aero-surface ${snapshot.theme === "dark" ? "dark" : ""}`}>
      <style>{aeroFontFace + surfaceStyles + nativeScrollStyles}</style>
      {Component && <Component model={model} en={en} act={act} />}
    </div>
  );
}
