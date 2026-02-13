import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/project.model';

/**
 * Componente reutilizable de tarjeta de proyecto.
 * Recibe un proyecto mediante @Input() y emite un evento
 * cuando el usuario selecciona el proyecto mediante @Output().
 *
 * Demuestra comunicación entre componentes padre-hijo.
 */
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  /** Proyecto recibido del componente padre (PortfolioComponent) */
  @Input() project!: Project;

  /** Evento emitido al componente padre cuando se selecciona un proyecto */
  @Output() projectSelected = new EventEmitter<Project>();

  /** Emite el proyecto seleccionado al componente padre */
  onSelectProject(): void {
    this.projectSelected.emit(this.project);
  }
}
