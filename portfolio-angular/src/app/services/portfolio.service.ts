import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

/**
 * Servicio que gestiona los datos de los proyectos del portfolio.
 * Proporciona métodos para obtener la lista completa de proyectos
 * o un proyecto específico por su ID.
 *
 * Uso: Inyectado en PortfolioComponent para Data Binding.
 */
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private projects: Project[] = [
    {
      id: 1,
      title: 'Plataforma de E-commerce Moderna',
      description: 'Plataforma de compra en línea con carrito dinámico, sistema de pagos integrado y panel de administración completo para gestionar productos e inventario.',
      icon: 'fas fa-shopping-cart',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      github: 'https://github.com/GuillermoIsabelOria',
      dateAdded: new Date(2024, 5, 15)
    },
    {
      id: 2,
      title: 'Aplicación de Gestión de Tareas',
      description: 'App colaborativa para gestionar tareas en equipo con sistema de notificaciones en tiempo real, seguimiento de progreso y reportes analíticos detallados.',
      icon: 'fas fa-tasks',
      technologies: ['Vue.js', 'Express', 'PostgreSQL'],
      link: '#',
      github: 'https://github.com/GuillermoIsabelOria',
      dateAdded: new Date(2024, 8, 20)
    },
    {
      id: 3,
      title: 'Portal de Análisis de Datos',
      description: 'Dashboard interactivo para visualizar y analizar datos en tiempo real con gráficos avanzados, exportación de reportes y autenticación segura.',
      icon: 'fas fa-chart-bar',
      technologies: ['React', 'Python', 'Chart.js'],
      link: '#',
      github: 'https://github.com/GuillermoIsabelOria',
      dateAdded: new Date(2025, 0, 10)
    }
  ];

  /**
   * Devuelve todos los proyectos del portfolio.
   */
  getProjects(): Project[] {
    return this.projects;
  }

  /**
   * Devuelve un proyecto por su ID.
   * @param id - Identificador del proyecto
   */
  getProjectById(id: number): Project | undefined {
    return this.projects.find(project => project.id === id);
  }

  /**
   * Devuelve el número total de proyectos.
   */
  getProjectCount(): number {
    return this.projects.length;
  }
}
