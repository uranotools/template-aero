# Urano Aero

Plantilla instalable para **Urano Desktop** (Template SDK 2).

Mezcla tres capas de aquella época:

- Ventana con barra azul, borde suave y botones gel.
- Lista de contactos con foto redonda, mensaje personal y punto de presencia.
- Paisaje glossy de cielo, agua y esferas de cristal, dibujado en el paquete.

El compositor y los mensajes del chat siguen en Urano. Esta plantilla cambia navegación, cabecera, historial, bienvenida y el taller de prompts.

## Desarrollo

1. En Urano Desktop abre **Mi entorno → Plantillas → DEV TOOLS → Vincular carpeta**.
2. Elige `UranoDesktop-plugins/urano-aero`.
3. Compila en caliente con `npm run watch`.
4. Valida con `npm test` y empaqueta con `npm run pack`.

La vista previa local admite `?surface=navigation`, `?surface=header`, `?surface=history`, `?surface=welcome` y `?theme=dark&lang=en`.

## Licencia

MIT. Nunito se incluye bajo SIL Open Font License 1.1 (`fonts/Nunito-OFL.txt`).
