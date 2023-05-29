# Valdemar React App

## Tecnologías utilizadas

En esta sección, se enumeran las tecnologías y librerías utilizadas en el desarrollo del Frontend. A continuación se detallan algunas de las librerías más relevantes:

- React: React es una biblioteca JavaScript de código abierto utilizada para construir interfaces de usuario interactivas y reutilizables.

- React Router DOM: React Router DOM es una librería utilizada para el enrutamiento de la aplicación web, permitiendo la navegación entre diferentes componentes de manera declarativa.

- Material-UI: Material-UI es una biblioteca de componentes de interfaz de usuario de React que implementa los principios del diseño material.

- Axios: Axios es una librería utilizada para realizar peticiones HTTP desde el Frontend hacia el backend.

- React Query: React Query es una biblioteca utilizada para la gestión del estado y el manejo de los datos en la aplicación web.

## Estructura del proyecto

La estructura del proyecto Frontend está organizada de manera jerárquica, lo cual facilita la navegación y el mantenimiento del código.

- config/
- src/
  - config/
  - context/
  - components/
    - Componente.jsx
    - Componente.jsx
    …
  - imgs/
  - pages/
    - Página.jsx
    - Página.jsx
    …
  - routes/
  - sass/
  - services/
    - api.js
  - utils/
    - util.js
    - util.js
  - App.js
  - index.js
  ...

## Iniciar el Proyecto en Local

En primer lugar, para que la aplicación funcione correctamente en local es necesario tener corriendo en el equipo la base de datos de MySQL en el puerto 3306 y el servicio de back-end de Spring Boot corriendo en el puerto 8080.

Este proyecto proporciona tres scripts principales en el archivo package.json que puedes utilizar para diferentes tareas de desarrollo: start, build y test. A continuación se explica cada uno de ellos:

**start**
El script start se utiliza para iniciar el servidor de desarrollo y ejecutar la aplicación en un entorno local. Utiliza el comando node scripts/start.js para iniciar el servidor de desarrollo. Este script se encarga de compilar y empaquetar los archivos de la aplicación, iniciar el servidor de desarrollo y abrir la aplicación en el navegador.

Para ejecutar el script start, puedes utilizar el siguiente comando:

`npm start`


Este comando iniciará el servidor de desarrollo y la aplicación estará disponible en la dirección http://localhost:3000.

**build**
El script build se utiliza para compilar y empaquetar la aplicación en una versión optimizada para producción. Utiliza el comando node scripts/build.js para crear una versión optimizada de la aplicación en la carpeta build/.

Para ejecutar el script build, puedes utilizar el siguiente comando:

`npm run build`


Una vez completada la compilación, la carpeta build/ contendrá los archivos estáticos de la aplicación listos para ser desplegados en un servidor web.

**test**
El script test se utiliza para ejecutar las pruebas unitarias de la aplicación. Utiliza el comando node scripts/test.js para ejecutar las pruebas utilizando Jest.

Para ejecutar el script test, puedes utilizar el siguiente comando:

`npm test`


Este comando ejecutará todas las pruebas definidas en la carpeta src/ y mostrará los resultados en la consola.

Ten en cuenta que estos scripts asumen que tienes Node.js y npm instalados en tu sistema. Si aún no los tienes instalados, asegúrate de instalarlos antes de intentar ejecutar los scripts.
