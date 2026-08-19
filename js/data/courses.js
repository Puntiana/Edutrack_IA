const initialCourses = [
    {
      "id_curso": "EDT-101",
      "nombre_curso": "Arquitectura de Microservicios con Spring Boot",
      "proxima_fecha_inicio": "2026-09-15",
      "duracion": "8 semanas",
      "es_asincronico": false,
      "valor_individual": 1200000.00,
      "moneda": "COP"
    },
    {
      "id_curso": "EDT-102",
      "nombre_curso": "Frontend Profesional con React y Next.js",
      "proxima_fecha_inicio": "2026-09-01",
      "duracion": "6 semanas",
      "es_asincronico": false,
      "valor_individual": 950000.00,
      "moneda": "COP"
    },
    {
      "id_curso": "EDT-103",
      "nombre_curso": "Data Engineering con Python & Apache Spark",
      "proxima_fecha_inicio": "2026-10-01",
      "duracion": "10 semanas",
      "es_asincronico": false,
      "valor_individual": 1500000.00,
      "moneda": "COP"
    },
    {
      "id_curso": "EDT-104",
      "nombre_curso": "DevOps Practices & Cloud AWS Certified",
      "proxima_fecha_inicio": "2026-09-20",
      "duracion": "8 semanas",
      "es_asincronico": true,
      "valor_individual": 1100000.00,
      "moneda": "COP"
    },
    {
      "id_curso": "EDT-105",
      "nombre_curso": "Ciberseguridad y Ethical Hacking Corporativo",
      "proxima_fecha_inicio": "2026-10-05",
      "duracion": "7 semanas",
      "es_asincronico": false,
      "valor_individual": 1350000.00,
      "moneda": "COP"
    },
    {
      "id_curso": "EDT-106",
      "nombre_curso": "Machine Learning & IA Aplicada en Python",
      "proxima_fecha_inicio": "2026-09-10",
      "duracion": "9 semanas",
      "es_asincronico": true,
      "valor_individual": 1400000.00,
      "moneda": "COP"
    },
    {
      "id_curso": "EDT-107",
      "nombre_curso": "Desarrollo Mobile Multiplataforma con Flutter",
      "proxima_fecha_inicio": "2026-09-25",
      "duracion": "6 semanas",
      "es_asincronico": false,
      "valor_individual": 890000.00,
      "moneda": "COP"
    },
    {
      "id_curso": "EDT-108",
      "nombre_curso": "Backend Avanzado con Node.js y NestJS",
      "proxima_fecha_inicio": "2026-10-12",
      "duracion": "7 semanas",
      "es_asincronico": true,
      "valor_individual": 980000.00,
      "moneda": "COP"
    },
    {
      "id_curso": "EDT-109",
      "nombre_curso": "UX/UI Design System para Apps Escalables",
      "proxima_fecha_inicio": "2026-09-05",
      "duracion": "5 semanas",
      "es_asincronico": true,
      "valor_individual": 750000.00,
      "moneda": "COP"
    },
    {
      "id_curso": "EDT-110",
      "nombre_curso": "Administración de Bases de Datos SQL y NoSQL",
      "proxima_fecha_inicio": "2026-10-02",
      "duracion": "6 semanas",
      "es_asincronico": false,
      "valor_individual": 850000.00,
      "moneda": "COP"
    },
    {
      "id_curso": "EDT-111",
      "nombre_curso": "Kubernetes & Docker Container Orchestration",
      "proxima_fecha_inicio": "2026-10-15",
      "duracion": "6 semanas",
      "es_asincronico": false,
      "valor_individual": 1250000.00,
      "moneda": "COP"
    },
    {
      "id_curso": "EDT-112",
      "nombre_curso": "Desarrollo de Smart Contracts con Solidity",
      "proxima_fecha_inicio": "2026-11-01",
      "duracion": "8 semanas",
      "es_asincronico": true,
      "valor_individual": 1600000.00,
      "moneda": "COP"
    },
    {
      "id_curso": "EDT-113",
      "nombre_curso": "QA Automation con Selenium y Cypress",
      "proxima_fecha_inicio": "2026-09-18",
      "duracion": "6 semanas",
      "es_asincronico": true,
      "valor_individual": 820000.00,
      "moneda": "COP"
    },
    {
      "id_curso": "EDT-114",
      "nombre_curso": "Product Management para Startups Tech",
      "proxima_fecha_inicio": "2026-09-30",
      "duracion": "5 semanas",
      "es_asincronico": false,
      "valor_individual": 900000.00,
      "moneda": "COP"
    },
    {
      "id_curso": "EDT-115",
      "nombre_curso": "Business Intelligence con Power BI y SQL",
      "proxima_fecha_inicio": "2026-10-08",
      "duracion": "6 semanas",
      "es_asincronico": true,
      "valor_individual": 780000.00,
      "moneda": "COP"
    },
    {
      "id_curso": "EDT-116",
      "nombre_curso": "Cloud Computing en Google Cloud Platform",
      "proxima_fecha_inicio": "2026-10-20",
      "duracion": "7 semanas",
      "es_asincronico": false,
      "valor_individual": 1150000.00,
      "moneda": "COP"
    },
    {
      "id_curso": "EDT-117",
      "nombre_curso": "Golang para Sistemas de Alta Concurrencia",
      "proxima_fecha_inicio": "2026-11-05",
      "duracion": "6 semanas",
      "es_asincronico": true,
      "valor_individual": 1050000.00,
      "moneda": "COP"
    },
    {
      "id_curso": "EDT-118",
      "nombre_curso": "Liderazgo Técnico y Tech Lead Management",
      "proxima_fecha_inicio": "2026-09-22",
      "duracion": "4 semanas",
      "es_asincronico": false,
      "valor_individual": 990000.00,
      "moneda": "COP"
    },
    {
      "id_curso": "EDT-119",
      "nombre_curso": "Deep Learning con TensorFlow y PyTorch",
      "proxima_fecha_inicio": "2026-10-25",
      "duracion": "9 semanas",
      "es_asincronico": false,
      "valor_individual": 1480000.00,
      "moneda": "COP"
    },
    {
      "id_curso": "EDT-120",
      "nombre_curso": "Seguridad en Aplicaciones Web (OWASP Top 10)",
      "proxima_fecha_inicio": "2026-11-10",
      "duracion": "5 semanas",
      "es_asincronico": true,
      "valor_individual": 870000.00,
      "moneda": "COP"
    }
  ];