# 🎬 MovieApp

**MovieApp** es una aplicación web tipo **SPA (Single Page Application)** desarrollada con **React + Vite** que permite explorar y descubrir películas de forma sencilla y rápida.  
Consume la API de [TMDB](https://www.themoviedb.org/) para mostrar información actualizada sobre estrenos, carteleras y detalles de cada película.  

Este proyecto está pensado como práctica de desarrollo frontend moderno y como ejemplo para portafolio.

---

## 🚀 Características

- 🔎 **Búsqueda de películas** en tiempo real.  
- 🖼️ **Listados dinámicos** con posters, títulos y géneros.  
- 📄 **Páginas de detalle** para cada película.  
- 🧭 **Navegación SPA** con React Router (sin recargas completas).  
- ⚡ **Optimización de rendimiento** con Vite.  
- 🎨 Estilos modulares con **SCSS**.  
- 📦 **Gestión de caché local** para reducir llamadas innecesarias a la API.  

---

## 🛠️ Tecnologías utilizadas

- **React 18**  
- **Vite** (bundler ultrarrápido)  
- **SCSS** (estilos)  
- **React Router DOM** (navegación SPA)  
- **Fetch API** (consumo de la API de TMDB)  

---

## 📂 Estructura del proyecto

```bash
movieApp/
├── public/               # Archivos estáticos y assets públicos
├── src/
│   ├── components/       # Componentes reutilizables
│   ├── pages/            # Vistas de cada página (Home, Detalle, etc.)
│   ├── services/         # Lógica de consumo de API y utilidades
│   ├── styles/           # Estilos SCSS globales y parciales
│   ├── App.jsx           # Configuración principal de la app
│   └── main.jsx          # Punto de entrada
├── docs/                 # Capturas de pantalla y documentación
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
