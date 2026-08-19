const initialStudents = [
    {
      "nombre_completo": "Sofía Valentina Gómez Rivera",
      "fecha_nacimiento": "1997-04-12",
      "fecha_inscripcion": "2026-01-10",
      "correo_electronico": "sofia.gomez@empresa.co",
      "cursos_completados": ["EDT-101", "EDT-102"],
      "total_inversion": 2150000.00
    },
    {
      "nombre_completo": "Mateo Alejandro Restrepo Hoyos",
      "fecha_nacimiento": "1994-08-23",
      "fecha_inscripcion": "2026-02-15",
      "correo_electronico": "mateo.restrepo@tech.com.co",
      "cursos_completados": ["EDT-103"],
      "total_inversion": 1500000.00
    },
    {
      "nombre_completo": "Camila Andrea Castro Morales",
      "fecha_nacimiento": "1999-11-05",
      "fecha_inscripcion": "2026-03-01",
      "correo_electronico": "camila.castro@desarrollo.io",
      "cursos_completados": ["EDT-102", "EDT-109"],
      "total_inversion": 1700000.00
    },
    {
      "nombre_completo": "Santiago Esteban Martínez Ruiz",
      "fecha_nacimiento": "1992-03-30",
      "fecha_inscripcion": "2026-01-20",
      "correo_electronico": "smartinez@innovacion.co",
      "cursos_completados": ["EDT-104", "EDT-111"],
      "total_inversion": 2350000.00
    },
    {
      "nombre_completo": "Valeria Isabela Silva Vargas",
      "fecha_nacimiento": "1998-07-18",
      "fecha_inscripcion": "2026-04-10",
      "correo_electronico": "valeria.silva@analytics.com",
      "cursos_completados": ["EDT-115"],
      "total_inversion": 780000.00
    },
    {
      "nombre_completo": "Nicolas David Bermúdez Osorio",
      "fecha_nacimiento": "1995-09-14",
      "fecha_inscripcion": "2026-02-28",
      "correo_electronico": "nicolas.bermudez@cloud.co",
      "cursos_completados": ["EDT-104"],
      "total_inversion": 1100000.00
    },
    {
      "nombre_completo": "Daniela Fernanda López Quintero",
      "fecha_nacimiento": "2000-01-25",
      "fecha_inscripcion": "2026-03-12",
      "correo_electronico": "daniela.lopez@uiux.design",
      "cursos_completados": ["EDT-109"],
      "total_inversion": 750000.00
    },
    {
      "nombre_completo": "Juan Pablo Cárdenas Gil",
      "fecha_nacimiento": "1991-12-08",
      "fecha_inscripcion": "2026-01-05",
      "correo_electronico": "jpcardenas@fintech.co",
      "cursos_completados": ["EDT-101", "EDT-108", "EDT-117"],
      "total_inversion": 3230000.00
    },
    {
      "nombre_completo": "Mariana Lucía Ramírez Toro",
      "fecha_nacimiento": "1996-05-19",
      "fecha_inscripcion": "2026-02-02",
      "correo_electronico": "mariana.ramirez@data.co",
      "cursos_completados": ["EDT-103", "EDT-106"],
      "total_inversion": 2900000.00
    },
    {
      "nombre_completo": "Andrés Felipe Gutiérrez Jaramillo",
      "fecha_nacimiento": "1993-10-03",
      "fecha_inscripcion": "2026-03-25",
      "correo_electronico": "afgutierrez@cybersec.co",
      "cursos_completados": ["EDT-105", "EDT-120"],
      "total_inversion": 2220000.00
    },
    {
      "nombre_completo": "Gabriela Salomé Ortiz Salazar",
      "fecha_nacimiento": "1997-02-11",
      "fecha_inscripcion": "2026-04-01",
      "correo_electronico": "gabi.ortiz@mobile.app",
      "cursos_completados": ["EDT-107"],
      "total_inversion": 890000.00
    },
    {
      "nombre_completo": "Carlos Eduardo Mendoza Marín",
      "fecha_nacimiento": "1990-06-27",
      "fecha_inscripcion": "2026-01-18",
      "correo_electronico": "carlos.mendoza@dev.co",
      "cursos_completados": ["EDT-110"],
      "total_inversion": 850000.00
    },
    {
      "nombre_completo": "Paula Jimena Hernández Parra",
      "fecha_nacimiento": "1998-12-30",
      "fecha_inscripcion": "2026-02-18",
      "correo_electronico": "paula.hernandez@qa.io",
      "cursos_completados": ["EDT-113"],
      "total_inversion": 820000.00
    },
    {
      "nombre_completo": "Sebastián José Moreno Franco",
      "fecha_nacimiento": "1994-04-05",
      "fecha_inscripcion": "2026-03-08",
      "correo_electronico": "smoreno@product.co",
      "cursos_completados": ["EDT-114", "EDT-118"],
      "total_inversion": 1890000.00
    },
    {
      "nombre_completo": "Natalia Carolina Reyes Duque",
      "fecha_nacimiento": "1999-08-21",
      "fecha_inscripcion": "2026-01-30",
      "correo_electronico": "nreyes@startup.com",
      "cursos_completados": ["EDT-102"],
      "total_inversion": 950000.00
    },
    {
      "nombre_completo": "Diego Armando Valencia Ríos",
      "fecha_nacimiento": "1991-03-15",
      "fecha_inscripcion": "2026-02-22",
      "correo_electronico": "diego.valencia@cloudtech.co",
      "cursos_completados": ["EDT-116"],
      "total_inversion": 1150000.00
    },
    {
      "nombre_completo": "Luisa Fernanda Meza Pinto",
      "fecha_nacimiento": "1996-09-09",
      "fecha_inscripcion": "2026-03-15",
      "correo_electronico": "luisa.meza@ai.org",
      "cursos_completados": ["EDT-106", "EDT-119"],
      "total_inversion": 2880000.00
    },
    {
      "nombre_completo": "Jorge Isaacs Benítez Acosta",
      "fecha_nacimiento": "1989-11-12",
      "fecha_inscripcion": "2026-01-08",
      "correo_electronico": "jorge.benitez@agile.co",
      "cursos_completados": ["EDT-118"],
      "total_inversion": 990000.00
    },
    {
      "nombre_completo": "Isabella Victoria Bravo Soto",
      "fecha_nacimiento": "2001-05-24",
      "fecha_inscripcion": "2026-04-05",
      "correo_electronico": "isabella.bravo@crypto.io",
      "cursos_completados": ["EDT-112"],
      "total_inversion": 1600000.00
    },
    {
      "nombre_completo": "Kevin Steven Paredes Caicedo",
      "fecha_nacimiento": "1995-07-02",
      "fecha_inscripcion": "2026-02-10",
      "correo_electronico": "kparedes@backend.com",
      "cursos_completados": ["EDT-108"],
      "total_inversion": 980000.00
    },
    {
      "nombre_completo": "Manuela Beltrán Monsalve",
      "fecha_nacimiento": "1997-10-16",
      "fecha_inscripcion": "2026-03-20",
      "correo_electronico": "manuela.beltran@design.co",
      "cursos_completados": ["EDT-109"],
      "total_inversion": 750000.00
    },
    {
      "nombre_completo": "Tomás Enrique Villamizar Cruz",
      "fecha_nacimiento": "1993-01-29",
      "fecha_inscripcion": "2026-01-25",
      "correo_electronico": "tomas.villamizar@database.co",
      "cursos_completados": ["EDT-110"],
      "total_inversion": 850000.00
    },
    {
      "nombre_completo": "Juliana Andrea Serna Molina",
      "fecha_nacimiento": "1998-04-08",
      "fecha_inscripcion": "2026-02-27",
      "correo_electronico": "jserna@devops.net",
      "cursos_completados": ["EDT-104", "EDT-111"],
      "total_inversion": 2350000.00
    },
    {
      "nombre_completo": "Samuel David Ospina Londoño",
      "fecha_nacimiento": "1992-06-17",
      "fecha_inscripcion": "2026-03-05",
      "correo_electronico": "samuel.ospina@techlead.co",
      "cursos_completados": ["EDT-101", "EDT-118"],
      "total_inversion": 2190000.00
    },
    {
      "nombre_completo": "Ángela Patricia Chaves Vela",
      "fecha_nacimiento": "1996-02-03",
      "fecha_inscripcion": "2026-04-08",
      "correo_electronico": "angela.chaves@bi.co",
      "cursos_completados": ["EDT-115"],
      "total_inversion": 780000.00
    },
    {
      "nombre_completo": "Emmanuel Jose Hurtado Rivas",
      "fecha_nacimiento": "1994-09-28",
      "fecha_inscripcion": "2026-01-14",
      "correo_electronico": "emmanuel.hurtado@fullstack.io",
      "cursos_completados": ["EDT-102", "EDT-108"],
      "total_inversion": 1930000.00
    },
    {
      "nombre_completo": "Vanessa Alejandra Agudelo Suárez",
      "fecha_nacimiento": "1999-12-11",
      "fecha_inscripcion": "2026-02-08",
      "correo_electronico": "vanessa.agudelo@testing.com",
      "cursos_completados": ["EDT-113"],
      "total_inversion": 820000.00
    },
    {
      "nombre_completo": "Guillermo León Palacio Cardona",
      "fecha_nacimiento": "1988-08-04",
      "fecha_inscripcion": "2026-03-18",
      "correo_electronico": "gpalacio@sec.co",
      "cursos_completados": ["EDT-105"],
      "total_inversion": 1350000.00
    },
    {
      "nombre_completo": "Ximena María Cabrera Tobón",
      "fecha_nacimiento": "1997-03-22",
      "fecha_inscripcion": "2026-04-02",
      "correo_electronico": "xcabrera@gcp.com",
      "cursos_completados": ["EDT-116"],
      "total_inversion": 1150000.00
    },
    {
      "nombre_completo": "Rodrigo Andrés Zapata Echeverri",
      "fecha_nacimiento": "1991-10-10",
      "fecha_inscripcion": "2026-01-28",
      "correo_electronico": "rodrigo.zapata@blockchain.co",
      "cursos_completados": ["EDT-112"],
      "total_inversion": 1600000.00
    }
  ];