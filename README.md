# 🚀 EduTrack - Plataforma Educativa Tech (Colombia)

EduTrack es una solución web integral diseñada para transformar la educación tecnológica de profesionales en Colombia. Ofrece una landing page enfocada en conversión, un dashboard intuitivo para estudiantes y una consola administrativa con control CRUD completo.

---

## 🎨 Guía de Estilos Visuales & Branding

La plataforma utiliza una identidad visual limpia, moderna y enfocada en el sector EdTech, definida bajo las siguientes variables globales de CSS (`css/estilos.css`):

### 🎨 Paleta de Colores
* **Fondo Principal Claro (`--color-de-fondo`):** `#F8FAFC` *(Soft Slate)*
* **Contenedores/Bordes (`--color-de-fondo-secundario`):** `#E2E8F0` *(Light Slate)*
* **Tarjetas (`--color-de-tarjetas`):** `#FFFFFF` *(Blanco puro)*
* **Encabezados (`--color-de-titulos`):** `#0F172A` *(Dark Slate)*
* **Acciones/Enlaces (`--color-de-enlace`):** `#0052FF` *(Tech Blue)*
* **Texto de Lectura (`--color-de-texto`):** `#334155` *(Slate Oscuro)*
* **Acentos y Badges (`--color-detalles`):** `#00D2FF` *(Electric Cyan)*

### 🔤 Tipografías
* **Títulos y Encabezados (`h1` - `h6`):** `Roboto`, sans-serif (Google Fonts)
* **Cuerpo de Texto y Formularios:** `Inter`, sans-serif (Google Fonts)

---

## 📂 Estructura del Proyecto

```text
edutrack/
│
├── README.md                   # Documentación técnica y guía de instalación
├── index.html                  # Landing Page de presentación y conversión
├── student-dashboard.html      # Dashboard interactivo del estudiante
├── admin-dashboard.html        # Panel administrativo con CRUD completo
│
├── css/
│   ├── estilos.css             # Estilos globales, variables CSS, tipografías
│   ├── landing.css             # Estilos exclusivos para la Landing Page
│   ├── student.css             # Estilos exclusivos del Dashboard Estudiante
│   └── admin.css               # Estilos para paneles, tablas y modales CRUD
│
├── js/
│   ├── data/
│   │   ├── courses.js          # Dataset inicial de 20 cursos tecnológicos (JSON)
│   │   └── students.js         # Dataset inicial de 30 estudiantes (JSON)
│   │
│   ├── app.js                  # Manejo centralizado de LocalStorage y estado
│   ├── landing.js              # Lógica de la Landing Page y registro de leads
│   ├── student.js              # Lógica de asignación, pagos y recomendaciones
│   └── admin.js                # Lógica CRUD de cursos y estudiantes
