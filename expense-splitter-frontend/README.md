# Expense Splitter Frontend

Este proyecto es el frontend de una aplicación para dividir gastos entre personas, construido con **Nuxt 3**, **Pinia**, y **DaisyUI**. Proporciona una interfaz para gestionar gastos y facilitar el cálculo de deudas entre grupos.

## Tabla de Contenidos
- [Instalación](#instalación)
- [Scripts Disponibles](#scripts-disponibles)
- [Dependencias](#dependencias)
- [Dependencias de Desarrollo](#dependencias-de-desarrollo)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Instalación

1. Clona el repositorio.
2. Navega al directorio del proyecto.
3. Instala las dependencias ejecutando el siguiente comando:

```bash
pnpm install
```

## Scripts Disponibles

En el archivo `package.json` hay varios scripts definidos:
- **`build`**: Construye la aplicación para producción.
  ```bash
  pnpm build
  ```
- **`dev`**: Inicia el servidor en modo desarrollo.
  ```bash
  pnpm dev
  ```
- **`generate`**: Genera una versión estática de la aplicación.
  ```bash
  pnpm generate
  ```
- **`preview`**: Previsualiza la aplicación generada.
  ```bash
  pnpm preview
  ```
- **`postinstall`**: Prepara la aplicación después de la instalación.
  ```bash
  pnpm postinstall
  ```

## Dependencias

Las siguientes bibliotecas son esenciales para el funcionamiento del frontend:

- **nuxt**: Framework de Vue.js para aplicaciones universales.
- **@pinia/nuxt**: Integración de Pinia para manejo de estado.
- **pinia**: Librería para manejo de estado en aplicaciones Vue.
- **vue**: Framework progresivo para construir interfaces de usuario.
- **vue-router**: Sistema de enrutamiento para Vue.js.

## Dependencias de Desarrollo

Estas bibliotecas son utilizadas durante el desarrollo:

- **autoprefixer**: Añade prefijos de navegador automáticamente a CSS.
- **daisyui**: Un plugin para Tailwind CSS que proporciona componentes UI.
- **postcss**: Herramienta para transformar CSS con JavaScript.
- **tailwindcss**: Framework CSS para un diseño moderno y responsivo.

## Contribución

Las contribuciones son bienvenidas. Si deseas colaborar, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Agrega nueva característica'`).
4. Envía un pull request.

## Licencia

Este proyecto está bajo la Licencia ISC. Para más información, consulta el archivo [LICENSE](./LICENSE).