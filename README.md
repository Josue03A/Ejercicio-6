# Proyecto de Portafolio Personal

Este es un proyecto de portafolio personal desarrollado con React y Material Design. El objetivo es mostrar información personal, habilidades, proyectos académicos y profesionales, lenguajes de programación preferidos y experiencia laboral de manera atractiva y funcional.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

```
personal-portfolio
├── public
│   └── index.html          # Archivo HTML principal
├── src
│   ├── components          # Componentes de React
│   │   ├── AboutMe.tsx     # Información personal
│   │   ├── Skills.tsx      # Habilidades
│   │   ├── Projects.tsx     # Proyectos
│   │   ├── Languages.tsx    # Lenguajes de programación
│   │   └── Experience.tsx   # Experiencia profesional
│   ├── data                # Datos utilizados en los componentes
│   │   ├── personalData.ts  # Datos personales
│   │   ├── skills.ts        # Habilidades
│   │   ├── projects.ts      # Proyectos
│   │   ├── languages.ts     # Lenguajes de programación
│   │   └── experience.ts    # Experiencia profesional
│   ├── App.tsx             # Componente principal de la aplicación
│   ├── index.tsx           # Punto de entrada de la aplicación
│   └── theme.ts            # Configuración del tema de Material Design
├── package.json            # Configuración de npm
├── tsconfig.json           # Configuración de TypeScript
└── README.md               # Documentación del proyecto
```

## Instalación

1. Clona el repositorio en tu máquina local:
   ```
   git clone <URL del repositorio>
   ```

2. Navega al directorio del proyecto:
   ```
   cd personal-portfolio
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

## Ejecución

Para iniciar la aplicación, utiliza el siguiente comando:
```
npm start
```
Esto abrirá la aplicación en tu navegador predeterminado en `http://localhost:3000`.

## Características

- Diseño atractivo utilizando Material Design.
- Sección de información personal con fotografía y biografía.
- Listado de habilidades, tanto blandas como duras.
- Presentación de proyectos académicos y profesionales.
- Sección de lenguajes de programación con niveles de competencia.
- Detalles de experiencia profesional con responsabilidades.

## Uso

Puedes personalizar el contenido del portafolio editando los archivos en la carpeta `src/data`. Asegúrate de que los componentes en `src/components` estén correctamente importados y utilizados en `src/App.tsx` para reflejar los cambios en la interfaz.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto, siéntete libre de hacer un fork y enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.