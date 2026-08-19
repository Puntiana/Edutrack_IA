let coursesData = [];
let studentsData = [];

document.addEventListener('DOMContentLoaded', () => {
  coursesData = StorageManager.getCourses();
  studentsData = StorageManager.getStudents();

  renderCourses();
  renderStudents();

  // Búsquedas
  document.getElementById('search-course').addEventListener('input', (e) => {
    renderCourses(e.target.value);
  });

  document.getElementById('search-student').addEventListener('input', (e) => {
    renderStudents(e.target.value);
  });

  // Eventos de Formulario
  document.getElementById('course-form').addEventListener('submit', handleCourseSubmit);
  document.getElementById('student-form').addEventListener('submit', handleStudentSubmit);
});

function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  if (tab === 'courses') {
    document.getElementById('section-courses').style.display = 'block';
    document.getElementById('section-students').style.display = 'none';
    event.target.classList.add('active');
  } else {
    document.getElementById('section-courses').style.display = 'none';
    document.getElementById('section-students').style.display = 'block';
    event.target.classList.add('active');
  }
}

// RENDERIZADOS
function renderCourses(filter = '') {
  const tbody = document.getElementById('admin-courses-body');
  const filtered = coursesData.filter(c => c.nombre_curso.toLowerCase().includes(filter.toLowerCase()));

  tbody.innerHTML = filtered.map((c, index) => `
    <tr>
      <td><strong>${c.id_curso}</strong></td>
      <td>${c.nombre_curso}</td>
      <td>${c.proxima_fecha_inicio}</td>
      <td>${c.duracion}</td>
      <td><span class="badge ${c.es_asincronico ? 'badge-cyan' : 'badge-blue'}">${c.es_asincronico ? 'Asincrónico' : 'En Vivo'}</span></td>
      <td>${StorageManager.formatCOP(c.valor_individual)}</td>
      <td>
        <button class="btn btn-secondary" style="padding: 0.3rem 0.6rem;" onclick="editCourse(${index})">✏️ Edit</button>
        <button class="btn btn-danger" style="padding: 0.3rem 0.6rem;" onclick="deleteCourse(${index})">🗑️</button>
      </td>
    </tr>
  `).join('');
}

function renderStudents(filter = '') {
  const tbody = document.getElementById('admin-students-body');
  const filtered = studentsData.filter(s => 
    s.nombre_completo.toLowerCase().includes(filter.toLowerCase()) || 
    s.correo_electronico.toLowerCase().includes(filter.toLowerCase())
  );

  tbody.innerHTML = filtered.map((s, index) => `
    <tr>
      <td><strong>${s.nombre_completo}</strong></td>
      <td>${s.correo_electronico}</td>
      <td>${s.fecha_inscripcion}</td>
      <td>${StorageManager.formatCOP(s.total_inversion)}</td>
      <td>
        <button class="btn btn-secondary" style="padding: 0.3rem 0.6rem;" onclick="editStudent(${index})">✏️ Edit</button>
        <button class="btn btn-danger" style="padding: 0.3rem 0.6rem;" onclick="deleteStudent(${index})">🗑️</button>
      </td>
    </tr>
  `).join('');
}

// OPERACIONES CURSO (CRUD)
function openCourseModal() {
  document.getElementById('course-form').reset();
  document.getElementById('course-index').value = '';
  document.getElementById('course-modal-title').textContent = 'Nuevo Curso';
  document.getElementById('course-modal').classList.add('active');
}

function editCourse(index) {
  const c = coursesData[index];
  document.getElementById('course-index').value = index;
  document.getElementById('course-id').value = c.id_curso;
  document.getElementById('course-name').value = c.nombre_curso;
  document.getElementById('course-date').value = c.proxima_fecha_inicio;
  document.getElementById('course-duration').value = c.duracion;
  document.getElementById('course-async').value = c.es_asincronico ? "true" : "false";
  document.getElementById('course-price').value = c.valor_individual;

  document.getElementById('course-modal-title').textContent = 'Editar Curso';
  document.getElementById('course-modal').classList.add('active');
}

function handleCourseSubmit(e) {
  e.preventDefault();
  const idx = document.getElementById('course-index').value;
  const courseObj = {
    id_curso: document.getElementById('course-id').value,
    nombre_curso: document.getElementById('course-name').value,
    proxima_fecha_inicio: document.getElementById('course-date').value,
    duracion: document.getElementById('course-duration').value,
    es_asincronico: document.getElementById('course-async').value === "true",
    valor_individual: parseFloat(document.getElementById('course-price').value),
    moneda: "COP"
  };

  if (idx === '') {
    coursesData.push(courseObj);
  } else {
    coursesData[idx] = courseObj;
  }

  StorageManager.saveCourses(coursesData);
  renderCourses();
  closeModals();
}

function deleteCourse(index) {
  if (confirm('¿Seguro que deseas eliminar este curso?')) {
    coursesData.splice(index, 1);
    StorageManager.saveCourses(coursesData);
    renderCourses();
  }
}

// OPERACIONES ESTUDIANTE (CRUD)
function openStudentModal() {
  document.getElementById('student-form').reset();
  document.getElementById('student-index').value = '';
  document.getElementById('student-modal-title').textContent = 'Nuevo Estudiante';
  document.getElementById('student-modal').classList.add('active');
}

function editStudent(index) {
  const s = studentsData[index];
  document.getElementById('student-index').value = index;
  document.getElementById('student-fullname').value = s.nombre_completo;
  document.getElementById('student-email-input').value = s.correo_electronico;
  document.getElementById('student-dob').value = s.fecha_nacimiento;
  document.getElementById('student-investment-input').value = s.total_inversion;

  document.getElementById('student-modal-title').textContent = 'Editar Estudiante';
  document.getElementById('student-modal').classList.add('active');
}

function handleStudentSubmit(e) {
  e.preventDefault();
  const idx = document.getElementById('student-index').value;
  const emailVal = document.getElementById('student-email-input').value;

  // Validación de correo único
  const exists = studentsData.some((s, i) => s.correo_electronico.toLowerCase() === emailVal.toLowerCase() && i != idx);
  if (exists) {
    alert('El correo electrónico ya pertenece a otro estudiante.');
    return;
  }

  const studentObj = {
    nombre_completo: document.getElementById('student-fullname').value,
    correo_electronico: emailVal,
    fecha_nacimiento: document.getElementById('student-dob').value,
    fecha_inscripcion: idx === '' ? new Date().toISOString().split('T')[0] : studentsData[idx].fecha_inscripcion,
    cursos_completados: idx === '' ? [] : studentsData[idx].cursos_completados,
    total_inversion: parseFloat(document.getElementById('student-investment-input').value)
  };

  if (idx === '') {
    studentsData.push(studentObj);
  } else {
    studentsData[idx] = studentObj;
  }

  StorageManager.saveStudents(studentsData);
  renderStudents();
  closeModals();
}

function deleteStudent(index) {
  if (confirm('¿Seguro que deseas eliminar este estudiante?')) {
    studentsData.splice(index, 1);
    StorageManager.saveStudents(studentsData);
    renderStudents();
  }
}

function closeModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
}