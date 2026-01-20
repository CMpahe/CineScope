# Refactor Log — Cinescope

## Refactor #1 — Introducción del dominio media

**Fecha:** 2026-01-11  
**Rama:** refactor-arquitectura-dominio

### Contexto

La aplicación se encontraba en un estado funcional pero con alta deuda técnica.
El objetivo de este refactor es mejorar escalabilidad, separación de responsabilidades y mantenibilidad sin alterar el comportamiento funcional.

### Objetivo

Crear una capa de dominio que normalice los datos y defina contratos claros.

### Cambios realizados

- Creación del dominio `media`
- Introducción de TypeScript solo en el dominio
- Definición del contrato `Media`
- Creación de `media.constants.ts`
- Centralización de configuración de imágenes

### Decisiones técnicas

- Se decide no hacer fetch en el dominio
- Se centraliza la adaptación de datos desde la API
- La UI no conoce la estructura de TMDB

### Problemas encontrados

- Duplicidad de lógica entre MoviePage y TvPage
- Acoplamiento entre UI y API
- Construcción de URLs de imágenes en componentes

### Próximos pasos

- Crear `media.constants.ts`
- Implementar adaptador genérico

### Estado

🟡 En progreso

---