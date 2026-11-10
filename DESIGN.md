# Urano Aero · Guía de diseño

Tres capas, un solo programa:

- La ventana recuerda el cromo azul de principios de los 2000: barra con brillo, gel y borde suave.
- La lista recuerda un cliente de mensajería: onda, foto redonda, nombre, línea en cursiva y punto verde.
- El fondo es un paisaje glossy original: cielo, nubes, colinas, agua y esferas de cristal.

No usa fondos, botones ni logotipos de Microsoft, ni las palabras de aquellos productos. La escena y la onda son dibujo propio.

## Sistema

- Claro: azul de título, hoja blanca, presencia verde, agua cian.
- Oscuro: la misma ventana sobre un cielo nocturno.
- Fuente: Nunito variable local (OFL), familia `AeroSans` dentro del frame.
- Fotos y globos con radio amplio. La barra de título es más recta.
- Los tokens HSL del host viven en `template.json`. Los del frame viven en `styles/tokens.js`.

## Superficies

- Navegación: onda, ficha de usuario y filas de contacto. El punto verde significa disponible para abrir, no presencia real.
- Cabecera: barra de la conversación, dentro de los 64px del slot.
- Historial: conversaciones recientes. El punto de color marca una conversación fijada.
- Bienvenida: sala vacía sobre el paisaje. El chat del host hace el scroll. No hay alto de viewport ni scroll interno.
- Taller: los prompts técnicos se conservan. Cambia el marco.

## Accesibilidad

Foco con `outline` en `:focus-visible`, y `Highlight` en `forced-colors`. El flotado de las esferas solo existe con `prefers-reduced-motion: no-preference`. La escena SVG es decorativa (`aria-hidden`). Los contactos de la bienvenida son una lista.
