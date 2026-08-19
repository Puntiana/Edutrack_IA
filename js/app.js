// Manejador centralizado de datos con LocalStorage
class StorageManager {
    static KEYS = {
      COURSES: 'edutrack_courses',
      STUDENTS: 'edutrack_students'
    };
  
    static init() {
      if (!localStorage.getItem(this.KEYS.COURSES)) {
        localStorage.setItem(this.KEYS.COURSES, JSON.stringify(initialCourses));
      }
      if (!localStorage.getItem(this.KEYS.STUDENTS)) {
        localStorage.setItem(this.KEYS.STUDENTS, JSON.stringify(initialStudents));
      }
    }
  
    static getCourses() {
      this.init();
      return JSON.parse(localStorage.getItem(this.KEYS.COURSES));
    }
  
    static saveCourses(courses) {
      localStorage.setItem(this.KEYS.COURSES, JSON.stringify(courses));
    }
  
    static getStudents() {
      this.init();
      return JSON.parse(localStorage.getItem(this.KEYS.STUDENTS));
    }
  
    static saveStudents(students) {
      localStorage.setItem(this.KEYS.STUDENTS, JSON.stringify(students));
    }
  
    static formatCOP(amount) {
      return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: 0
      }).format(amount);
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => StorageManager.init());