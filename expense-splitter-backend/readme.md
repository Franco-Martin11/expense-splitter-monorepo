
# Expense Splitter Backend

Este proyecto es el backend de una aplicación para dividir gastos entre personas, construido con **Express**, **TypeScript**, y **Prisma ORM**. Permite gestionar usuarios, gastos y realizar cálculos de deudas entre grupos de personas.

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
3. Instala las dependencias ejecutando los siguiente comando:

```bash
npm install express @prisma/client bcryptjs cors dotenv joi jsonwebtoken prisma
```

```bash
npm install -D @types/express @types/bcryptjs @types/cors @types/dotenv @types/joi @types/jsonwebtoken typescript ts-node-dev
```

4. Configura las variables de entorno en un archivo `.env`.

## Scripts Disponibles

En el archivo `package.json` hay varios scripts definidos:
- **`tsc`**: Ejecuta el compilador de TypeScript para generar los archivos JavaScript en el directorio `dist`.
  ```bash
  npm run tsc
  ```
- **`dev`**: Inicia el servidor en modo desarrollo con `ts-node-dev`, un entorno que recarga automáticamente el código al detectar cambios.
  ```bash
  npm run dev
  ```
- **`start`**: Inicia el servidor en modo producción, ejecutando el archivo `dist/index.js`.
  ```bash
  npm start
  ```
## Dependencias

Las siguientes bibliotecas son esenciales para el funcionamiento del backend:

- **express**: Framework web rápido y minimalista.
- **@prisma/client**: Cliente de Prisma para interactuar con la base de datos.
- **bcryptjs**: Biblioteca para encriptar contraseñas.
- **cors**: Middleware para habilitar CORS en el servidor.
- **dotenv**: Carga las variables de entorno desde un archivo `.env`.
- **joi**: Librería para validar esquemas de objetos, útil para validar entradas del usuario.
- **jsonwebtoken**: Implementación de JSON Web Tokens para autenticación.

## Dependencias de Desarrollo

Estas bibliotecas son utilizadas durante el desarrollo:

- **typescript**: Compilador de TypeScript.
- **ts-node-dev**: Herramienta que recarga automáticamente el servidor durante el desarrollo.
- **@types/express**: Definiciones de tipos para Express.
- **@types/bcryptjs**: Definiciones de tipos para bcryptjs.
- **@types/cors**: Definiciones de tipos para CORS.
- **@types/dotenv**: Definiciones de tipos para dotenv.
- **@types/joi**: Definiciones de tipos para Joi.
- **@types/jsonwebtoken**: Definiciones de tipos para JSON Web Token.

## Licencia

Este proyecto está bajo la Licencia ISC. Para más información, consulta el archivo [LICENSE](./LICENSE).
