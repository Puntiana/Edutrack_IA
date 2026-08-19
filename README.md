# EduTrack IA

## Plataforma Educativa Tech

EduTrack IA es una plataforma web educativa orientada al aprendizaje tecnológico. El proyecto cuenta con una landing page, un dashboard para estudiantes y un panel administrativo para la gestión de cursos y estudiantes.

El proyecto está desarrollado utilizando **HTML, CSS y JavaScript**, con una estructura separada para los estilos, la lógica de cada sección y los datos iniciales.

## Características

* Landing page para presentar la plataforma.
* Registro de leads desde la página principal.
* Dashboard para estudiantes.
* Gestión de cursos.
* Gestión de estudiantes.
* Panel administrativo.
* Operaciones CRUD para cursos y estudiantes.
* Asignación de cursos.
* Gestión de pagos.
* Recomendaciones para estudiantes.
* Persistencia de información mediante `LocalStorage`.
* Datos iniciales de cursos y estudiantes.

## Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript
* LocalStorage
* Google Fonts

  * Roboto
  * Inter

## Estructura del proyecto

```text
Edutrack_IA/
│
├── README.md
├── index.html
├── student-dashboard.html
├── admin-dashboard.html
│
├── css/
│   ├── estilos.css
│   ├── landing.css
│   ├── student.css
│   └── admin.css
│
└── js/
    ├── data/
    │   ├── courses.js
    │   └── students.js
    │
    ├── app.js
    ├── landing.js
    ├── student.js
    └── admin.js
```

## Secciones principales

### Landing Page

La página principal presenta la plataforma EduTrack IA y permite registrar usuarios interesados.

Archivo:

```text
index.html
```

Lógica:

```text
js/landing.js
```

### Dashboard del estudiante

El dashboard permite al estudiante interactuar con diferentes funcionalidades relacionadas con sus cursos.

Incluye funcionalidades relacionadas con:

* Cursos.
* Asignaciones.
* Pagos.
* Recomendaciones.

Archivos:

```text
student-dashboard.html
js/student.js
```

### Panel administrativo

El panel administrativo permite gestionar información relacionada con cursos y estudiantes.

Incluye operaciones CRUD para:

* Cursos.
* Estudiantes.

Archivos:

```text
admin-dashboard.html
js/admin.js
```

## Datos iniciales

El proyecto cuenta con datos iniciales utilizados por la aplicación:

```text
js/data/courses.js
js/data/students.js
```

Estos archivos contienen información relacionada con los cursos y estudiantes utilizados durante la ejecución de la plataforma.

## Almacenamiento

EduTrack IA utiliza `LocalStorage` para almacenar información directamente en el navegador.

La lógica general de la aplicación se encuentra en:

```text
js/app.js
```

## Diseño

La interfaz utiliza una estética enfocada en tecnología y educación.

### Colores principales

| Elemento         | Color     |
| ---------------- | --------- |
| Fondo principal  | `#F8FAFC` |
| Fondo secundario | `#E2E8F0` |
| Tarjetas         | `#FFFFFF` |
| Títulos          | `#0F172A` |
| Acciones         | `#0052FF` |
| Texto            | `#334155` |
| Detalles         | `#00D2FF` |

### Tipografías

* **Roboto**
* **Inter**

## Instalación

No es necesario instalar dependencias de Node.js para ejecutar el proyecto.

### Clonar el repositorio

```bash
git clone https://github.com/Puntiana/Edutrack_IA.git
```

### Entrar al proyecto

```bash
cd Edutrack_IA
```

### Ejecutar el proyecto

Abre el archivo:

```text
index.html
```

También puedes utilizar **Live Server** desde Visual Studio Code para ejecutar el proyecto mediante un servidor local.

## Flujo general

```text
Landing Page
     │
     ├── Presentación de EduTrack IA
     │
     └── Registro de usuarios interesados
     
Dashboard
     │
     ├── Estudiante
     │   ├── Cursos
     │   ├── Asignaciones
     │   ├── Pagos
     │   └── Recomendaciones
     │
     └── Administrador
         ├── Cursos
         └── Estudiantes
```

## Estado del proyecto

El proyecto cuenta actualmente con:

* Landing Page.
* Dashboard de estudiante.
* Dashboard administrativo.
* Estilos CSS organizados por sección.
* Lógica JavaScript separada por funcionalidad.
* Datos iniciales de cursos y estudiantes.
* Persistencia mediante `LocalStorage`.

## Autoría

Proyecto desarrollado con fines educativos.

## Repositorio

[GitHub - EduTrack IA](https://github.com/Puntiana/Edutrack_IA)
