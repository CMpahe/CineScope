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

- Implementación de `media.adapter.ts`
- Implementación de `media.service.ts`
- Creación de `useMedia`
- Implementación del sistema de caché del dominio (`media.cache.ts`)
- Eliminación de código obsoleto (`useDataSWRO`)
- Eliminación de estados residuales del Header (`searchActive`)

- Creación de api.service para centralizar las peticiones HTTP.
- Separación entre petición HTTP, adaptación de datos y cache.
- Creación de resolveMedia como punto de entrada para resolver recursos de media.
- Simplificación de useMedia delegando la lógica al servicio.


### Decisiones técnicas

- Se decide no hacer fetch en el dominio
- Se centraliza la adaptación de datos desde la API
- La UI no conoce la estructura de TMDB

- El dominio coordina la obtención de datos.
- La capa HTTP únicamente devuelve JSON.
- El cache almacena exclusivamente entidades del dominio, nunca respuestas de la API.

### Problemas encontrados

- Duplicidad de lógica entre MoviePage y TvPage
- Acoplamiento entre UI y API
- Construcción de URLs de imágenes en componentes

### Próximos pasos

- Finalizar la migración completa a TypeScript.
- Auditar la gestión de estado por componente.
- Eliminar deuda técnica restante.
- Verificar que todos los componentes utilizan la nueva arquitectura.

### Última actualización

2026-06-30

Durante la revisión de la arquitectura se identificaron restos de la implementación anterior que ya no tenían consumidores.

Se eliminaron:

- useDataSWRO
- Estado searchActive del Header

El proyecto continúa en fase de consolidación de la nueva arquitectura antes de iniciar nuevas funcionalidades.

### Estado

🟡 En progreso

---