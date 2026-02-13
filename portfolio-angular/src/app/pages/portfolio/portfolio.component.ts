import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/project.model';

/**
 * Componente de la página Portfolio.
 * Utiliza el servicio PortfolioService para obtener los proyectos.
 * Demuestra la comunicación padre-hijo con @Input/@Output
 * mediante el componente ProjectCardComponent.
 */
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  /** Lista de proyectos obtenidos del servicio */
  projects: Project[] = [];

  /** Proyecto actualmente seleccionado (mostrado con *ngIf) */
  selectedProject: Project | null = null;

  /** Total de proyectos */
  totalProjects = 0;

  constructor(private portfolioService: PortfolioService) {}

  /**
   * Al inicializar, obtenemos los proyectos del servicio.
   */
  ngOnInit(): void {
    this.projects = this.portfolioService.getProjects();
    this.totalProjects = this.portfolioService.getProjectCount();
  }

  /**
   * Manejador del evento @Output del ProjectCardComponent.
   * Recibe el proyecto seleccionado y lo muestra en el panel de detalle.
   */
  onProjectSelected(project: Project): void {
    this.selectedProject = project;
  }

  /** Cierra el panel de detalle del proyecto */
  clearSelection(): void {
    this.selectedProject = null;
  }
}
