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
          <div class="course-card-header">
            <span class="badge badge-cyan">Completado</span>
            <span style="font-size: 0.85rem; color: #64748b;">${course.duracion}</span>
          </div>
          <h3>${course.nombre_curso}</h3>
          <p style="font-size: 0.85rem; color: #64748b; margin-top: 0.5rem;">Modalidad: <strong>${course.es_asincronico ? 'Asincrónico' : 'En Vivo'}</strong></p>
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
  
    // Cursos Recomendados (Renderizados en Tarjetas / Cards)
    const recommendedGrid = document.getElementById('recommended-courses-grid');
    const recommended = courses.filter(c => !currentStudent.cursos_completados.includes(c.id_curso)).slice(0, 3);
  
    recommendedGrid.innerHTML = recommended.map(course => `
      <article class="course-card recommended-card">
        <div>
          <div class="course-card-header">
            <span class="badge ${course.es_asincronico ? 'badge-cyan' : 'badge-blue'}">
              ${course.es_asincronico ? 'Asincrónico' : 'En Vivo'}
            </span>
            <span class="badge badge-blue">Sugerido</span>
          </div>
          <h3 style="margin-top: 0.75rem;">${course.nombre_curso}</h3>
          <div style="margin-top: 1rem; font-size: 0.875rem; color: var(--color-de-texto); display: flex; flex-direction: column; gap: 0.4rem;">
            <p>⏳ <strong>Duración:</strong> ${course.duracion}</p>
            <p>📅 <strong>Próximo Inicio:</strong> ${course.proxima_fecha_inicio}</p>
          </div>
        </div>
        <div style="margin-top: 1.5rem; border-top: 1px solid var(--color-de-fondo-secundario); padding-top: 1rem;">
          <div class="course-price" style="margin: 0 0 1rem 0; font-size: 1.4rem;">${StorageManager.formatCOP(course.valor_individual)} ${course.moneda}</div>
          <a href="index.html#registro" onclick="localStorage.setItem('selected_course', '${course.id_curso}')" class="btn btn-primary" style="width: 100%;">Inscribirme a este curso</a>
        </div>
      </article>
    `).join('');
  });