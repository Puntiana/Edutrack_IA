document.addEventListener('DOMContentLoaded', () => {
    const students = StorageManager.getStudents();
    const courses = StorageManager.getCourses();
  
    // Simular el estudiante activo (primer estudiante del dataset)
    const currentStudent = students[0];
  
    // Cargar Perfil
    document.getElementById('student-name').textContent = currentStudent.nombre_completo;
    document.getElementById('student-email').textContent = currentStudent.correo_electronico;
    
    const initials = currentStudent.nombre_completo
      .split(' ')
      .map(n => n[0])
      .slice(0, 2)
      .join('');
    document.getElementById('student-avatar').textContent = initials;
  
    // Estadísticas
    document.getElementById('stat-completed').textContent = currentStudent.cursos_completados.length;
    document.getElementById('stat-investment').textContent = StorageManager.formatCOP(currentStudent.total_inversion);
  
    // Cursos Asignados / Completados
    const assignedGrid = document.getElementById('assigned-courses-grid');
    const myCourses = courses.filter(c => currentStudent.cursos_completados.includes(c.id_curso));
  
    assignedGrid.innerHTML = myCourses.map(course => `
      <article class="course-card">
        <div>
          <span class="badge badge-cyan">Completado</span>
          <h3 style="margin-top: 0.5rem;">${course.nombre_curso}</h3>
          <p style="font-size: 0.85rem; color: #64748b; margin-top: 0.5rem;">Duración: ${course.duracion}</p>
        </div>
        <button class="btn btn-secondary" style="margin-top: 1rem; width: 100%;">Ver Certificado</button>
      </article>
    `).join('');
  
    // Historial de Pagos
    const paymentTable = document.getElementById('payment-history-body');
    paymentTable.innerHTML = myCourses.map(course => `
      <tr>
        <td><strong>${course.id_curso}</strong></td>
        <td>${course.nombre_curso}</td>
        <td>${StorageManager.formatCOP(course.valor_individual)} COP</td>
        <td><span class="badge badge-blue">Aprobado</span></td>
      </tr>
    `).join('');
  
    // Cursos Recomendados (Cursos no tomados)
    const recommendedGrid = document.getElementById('recommended-courses-grid');
    const recommended = courses.filter(c => !currentStudent.cursos_completados.includes(c.id_curso)).slice(0, 3);
  
    recommendedGrid.innerHTML = recommended.map(course => `
      <article class="course-card">
        <div>
          <span class="badge badge-blue">${course.duracion}</span>
          <h3 style="margin-top: 0.5rem;">${course.nombre_curso}</h3>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Próximo inicio: ${course.proxima_fecha_inicio}</p>
        </div>
        <div>
          <div class="course-price">${StorageManager.formatCOP(course.valor_individual)} COP</div>
          <a href="index.html#registro" class="btn btn-primary" style="width: 100%;">Inscribirme</a>
        </div>
      </article>
    `).join('');
  });