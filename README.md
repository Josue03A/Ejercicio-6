# Proyecto de Portafolio Personal

Este es un proyecto de portafolio personal desarrollado con React y Material Design. El objetivo es mostrar información personal, habilidades, proyectos académicos y profesionales, lenguajes de programación preferidos y experiencia laboral de manera atractiva y funcional.

---

## 📌 Objetivo

Aplicar buenas prácticas de desarrollo mediante la creación de pruebas unitarias automatizadas que validen información clave del portafolio personal, haciendo uso de herramientas con inteligencia artificial como GitHub Copilot en un entorno de desarrollo moderno (Visual Studio Code + React).

---

## ⚙️ Tecnologías usadas

- React con TypeScript
- Material UI (MUI)
- Visual Studio Code
- Jest + React Testing Library
- GitHub Copilot (IA)
- Git y GitHub
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
## ✅ Validaciones Automatizadas Incluidas

Se implementaron pruebas unitarias con Jest para validar:

- ✅ Que el nombre completo y biografía estén presentes.
- ✅ Que la imagen de perfil se cargue correctamente.
- ✅ Que el número de teléfono esté definido.
- ✅ Que existan al menos **5 habilidades**.
- ✅ Que existan al menos **3 proyectos**.

Archivo de pruebas: `src/App.test.tsx`

---

## 🤖 Uso de Inteligencia Artificial

Durante el desarrollo de este proyecto se utilizó **GitHub Copilot** como asistente de codificación. La IA fue especialmente útil para:

- Sugerir la estructura inicial de los tests con Jest y React Testing Library.
- Generar fragmentos de código de pruebas adaptados al contenido del portafolio.
- Autocompletar sintaxis y validar condiciones lógicas.

**Las sugerencias de IA fueron adaptadas** para cumplir con los requerimientos específicos de esta actividad.

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