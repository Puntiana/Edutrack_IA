document.addEventListener('DOMContentLoaded', () => {
    const courses = StorageManager.getCourses();
    const featuredContainer = document.getElementById('featured-courses-container');
    const selectCourse = document.getElementById('interestCourse');
  
    // Renderizar 3 cursos destacados
    const featured = courses.slice(0, 3);
    featuredContainer.innerHTML = featured.map(course => `
      <article class="course-card">
        <div>
          <div class="course-card-header">
            <span class="badge ${course.es_asincronico ? 'badge-cyan' : 'badge-blue'}">
              ${course.es_asincronico ? 'Asincrónico' : 'En Vivo'}
            </span>
            <span style="font-size: 0.85rem; color: #64748b;">${course.duracion}</span>
          </div>
          <h3>${course.nombre_curso}</h3>
          <p style="margin-top: 0.5rem; font-size: 0.9rem;">Próximo inicio: <strong>${course.proxima_fecha_inicio}</strong></p>
        </div>
        <div>
          <div class="course-price">${StorageManager.formatCOP(course.valor_individual)} ${course.moneda}</div>
          <a href="#registro" onclick="preselectCourse('${course.id_curso}')" class="btn btn-secondary" style="width: 100%;">Inscribirme</a>
        </div>
      </article>
    `).join('');
  
    // Llenar select
    courses.forEach(course => {
      const option = document.createElement('option');
      option.value = course.id_curso;
      option.textContent = course.nombre_curso;
      selectCourse.appendChild(option);
    });
  
    // Manejar Formulario de conversión
    const leadForm = document.getElementById('lead-form');
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      
      // Guardar nuevo estudiante
      const students = StorageManager.getStudents();
      const emailExists = students.some(s => s.correo_electronico.toLowerCase() === email.toLowerCase());
  
      if (emailExists) {
        document.getElementById('form-message').style.color = '#dc2626';
        document.getElementById('form-message').textContent = 'El correo ya se encuentra registrado.';
        return;
      }
  
      const newStudent = {
        nombre_completo: name,
        fecha_nacimiento: "1998-01-01",
        fecha_inscripcion: new Date().toISOString().split('T')[0],
        correo_electronico: email,
        cursos_completados: [selectCourse.value],
        total_inversion: courses.find(c => c.id_curso === selectCourse.value)?.valor_individual || 0
      };
  
      students.push(newStudent);
      StorageManager.saveStudents(students);
  
      document.getElementById('form-message').style.color = '#16a34a';
      document.getElementById('form-message').textContent = '¡Registro exitoso! Te hemos enviado la información a tu correo.';
      leadForm.reset();
    });
  });
  
  function preselectCourse(courseId) {
    const select = document.getElementById('interestCourse');
    if (select) select.value = courseId;
  }