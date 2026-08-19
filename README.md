# 🚀 EduTrack - Plataforma Educativa Tech (Colombia)

EduTrack es una solución web integral diseñada para transformar la educación tecnológica de profesionales en Colombia. Ofrece una landing page enfocada en conversión, un dashboard intuitivo para estudiantes y una consola administrativa con control CRUD completo.

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
