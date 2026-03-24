# 🌤️ Weather App - JavaScript Vanilla Architecture

Una aplicación del clima construida desde cero con JavaScript Puro (Vanilla JS).

Este proyecto fue desarrollado como entrenamiento intensivo de "Deep Work" para dominar los fundamentos lógicos y arquitectónicos de JavaScript moderno para el manejo efectivo de React.

## 🧠 Foco del Proyecto: Lógica > Diseño

**Nota importante:** Este proyecto no contiene CSS de forma intencionada. El objetivo principal ha sido dominar el motor de la aplicación (JavaScript) sin distracciones visuales.

## 🚀 Conceptos Técnicos Aplicados

- **Arquitectura Modular:** Separación estricta de responsabilidades (`app.js`, `ui.js`, `state.js`).
- **Asincronía Real:** Consumo de la API de OpenWeatherMap usando `async / await` y `fetch`.
- **Gestión de Estado (State Management):** Creación de un almacén global inmutable para guardar un historial de búsquedas.
- **Inmutabilidad:** Uso avanzado del _Spread Operator_ (`...`) y métodos de array (`.map`, `.includes`, `.shift`) para gestionar los datos como se hace en React.
- **Renderizado Dinámico:** Inyección de HTML y renderizado condicional mediante el Operador Ternario.

## ⚙️ Cómo funciona

1. El usuario introduce una ciudad.
2. El sistema valida los datos, hace la petición asíncrona a la API y maneja posibles errores (escudos defensivos).
3. Si la petición es exitosa, los datos se guardan de forma inmutable en el Estado.
4. El sistema actualiza un historial inteligente (límite de 5 búsquedas, sin duplicados - lógica FIFO).
5. La UI reacciona a los cambios del estado y "pinta" los datos en la pantalla.
