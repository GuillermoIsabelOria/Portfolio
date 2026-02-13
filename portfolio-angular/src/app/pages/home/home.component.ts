import { Component } from '@angular/core';

/**
 * Componente de la página de inicio.
 * Contiene: sección Hero, Sobre Mí y Habilidades.
 * Los datos se definen como propiedades del componente
 * y se renderizan mediante data binding e interpolación.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Datos personales */
  nombre = 'Guillermo';
  nombreCompleto = 'Guillermo Isabel Oria';
  titulo = 'Desarrollador Web Full Stack';
  experiencia = 2;
  descripcion = `Desarrollador Web Full Stack con ${2} años de experiencia creando soluciones digitales innovadoras y funcionales.`;

  /** Biografía */
  bio = 'Soy Guillermo Isabel Oria, un desarrollador web apasionado con 2 años de experiencia en el sector. Me especializo en crear soluciones web robustas y escalables que resuelven problemas complejos de forma elegante.';

  bioExtra = 'A lo largo de mi trayectoria, he trabajado con diferentes tecnologías modernas y metodologías ágiles. Mi objetivo es seguir aprendiendo y contribuir a proyectos que tengan un impacto positivo en la sociedad.';

  /** Lista de enfoques profesionales (renderizada con *ngFor) */
  enfoques: string[] = [
    'Código limpio y bien documentado',
    'Responsive y mobile-first',
    'Optimización de rendimiento',
    'Experiencia de usuario excepcional'
  ];

  /** Habilidades técnicas (renderizadas con *ngFor) */
  habilidades = [
    { icon: 'fas fa-code', titulo: 'Frontend', descripcion: 'HTML, CSS, JavaScript, Bootstrap, Angular' },
    { icon: 'fas fa-database', titulo: 'Backend', descripcion: 'Node.js, Python, Express, MongoDB' },
    { icon: 'fas fa-tools', titulo: 'Herramientas', descripcion: 'Git, GitHub, VS Code, Figma' },
    { icon: 'fas fa-layer-group', titulo: 'Métodos', descripcion: 'Agile, Scrum, API REST' }
  ];

  /** Redes sociales */
  socialLinks = [
    { url: 'https://www.linkedin.com/in/guillermo-isabel-oria-03b928338', icon: 'fab fa-linkedin fa-2x' },
    { url: 'https://github.com/GuillermoIsabelOria', icon: 'fab fa-github fa-2x' }
  ];

  /** Controla la visibilidad de la sección Sobre Mí (*ngIf) */
  showAbout = true;

  /** Alterna la visibilidad de la bio extendida */
  toggleAbout(): void {
    this.showAbout = !this.showAbout;
  }
}
