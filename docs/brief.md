# Documento de Definición del Proyecto (Brief)

## 1. Resumen del proyecto

Este proyecto consiste en el desarrollo de una aplicación web de exploración de películas, construida de forma progresiva como proyecto de aprendizaje práctico. La aplicación permite consultar información de películas a través de una API externa, navegar por distintos listados, aplicar filtros y visualizar detalles. El proyecto ha evolucionado sin una planificación inicial formal, por lo que este documento tiene como objetivo redefinir su propósito, alcance y objetivos para consolidarlo como una pieza profesional de portfolio.

## 2. Objetivo principal

Transformar un proyecto evolutivo e improvisado en una aplicación frontend coherente, mantenible y bien estructurada, que demuestre capacidad de análisis, refactorización y gestión de estado en un contexto realista.

## 3. Objetivos secundarios

- Definir claramente qué problema resuelve la aplicación

- Establecer un alcance funcional cerrado

- Reestructurar la arquitectura del proyecto si es necesario

- Mejorar la separación de responsabilidades (UI, lógica, datos)

- Gestionar correctamente estados asíncronos (loading, error, empty)

- Documentar decisiones técnicas y evolución del proyecto

- Preparar el proyecto para ser presentado profesionalmente en un portfolio

## 4. Problema a resolver

Encontrar y explorar información relevante sobre películas suele requerir navegar por plataformas complejas o saturadas. Este proyecto busca ofrecer una experiencia clara y enfocada en el descubrimiento y consulta de películas, priorizando la usabilidad, el rendimiento y la organización de la información.

## 5. Propuesta de valor

- Interfaz clara y orientada al contenido

- Navegación sencilla entre listados y detalles

- Organización lógica de datos obtenidos desde una API externa

- Código estructurado y fácil de mantener

## 6. Alcance del proyecto (Scope)

Incluye

- Consumo de API externa de películas

- Listados de películas por categorías

- Vista de detalle de una película

- Navegación entre vistas

- Filtros y/o búsqueda básica

- Manejo de estados de carga y error

- Diseño responsive

No incluye

- Sistema de autenticación

- Favoritos persistentes

- Backend propio

- Gestión de usuarios

- Pagos o suscripciones

- SEO avanzado

## 7. Usuario objetivo (User Persona)

Usuarios interesados en descubrir películas y consultar información básica (sin necesidad de crear una cuenta), desde distintos dispositivos.

## 8. Funcionalidades principales

- Visualizar listados de películas

- Filtrar películas por criterios definidos

- Acceder a información detallada de una película

- Navegar entre secciones sin recarga

- Visualizar estados de carga y mensajes de error

## 9. Estructura funcional (alto nivel)

- Página principal con listados

- Vista de resultados filtrados

- Vista de detalle de película

- Componentes reutilizables para tarjetas, listas y secciones

## 10. Requisitos técnicos

- React como librería principal

- JavaScript ES6+

- Consumo de API REST

- Gestión de estado con hooks

- Separación de lógica mediante custom hooks o servicios

- Uso de Git con historial significativo

## 11. Arquitectura y criterios de código

- Separación entre componentes de presentación y lógica

- Evitar lógica compleja en componentes de vista

- Reutilización de componentes

- Evitar duplicación de lógica

- Código legible y consistente

## 12. Plan de reestructuración (si aplica)

- Análisis del estado actual del proyecto

- Identificación de problemas de arquitectura y acoplamiento

- Definición de nueva estructura de carpetas

- Refactorización progresiva sin romper funcionalidad

- Validación funcional tras cada cambio

- Limpieza final y documentación

## 13. Criterios de éxito

- La aplicación cumple el alcance definido

- Código más organizado y mantenible que la versión inicial

- Estados asíncronos correctamente gestionados

- Arquitectura comprensible para otros desarrolladores

- Proyecto documentado y explicable en entrevista

## 14. Riesgos y limitaciones

- Dependencia de una API externa

- Posibles cambios en la API

- Proyecto enfocado a frontend

- Alcance limitado para evitar complejidad innecesaria

## 15. Entregables finales

- Repositorio GitHub actualizado

- Aplicación desplegada

- Documento de definición del proyecto

- README detallado explicando propósito, decisiones y evolución

## 16. Propósito del proyecto dentro del portfolio

Este proyecto representa un caso real de aprendizaje, evolución y refactorización, demostrando capacidad para tomar un código existente, analizarlo críticamente, mejorar su estructura y llevarlo a un estado profesional, reflejando un enfoque similar al trabajo en un entorno real de desarrollo.