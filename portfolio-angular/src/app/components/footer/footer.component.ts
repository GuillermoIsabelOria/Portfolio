import { Component } from '@angular/core';

/**
 * Componente de pie de página reutilizable.
 * Muestra copyright dinámico con el año actual
 * y enlaces a redes sociales con *ngFor.
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  /** Año actual calculado dinámicamente */
  currentYear: number = new Date().getFullYear();

  /** Lista de redes sociales (iterada con *ngFor) */
  socialLinks = [
    {
      url: 'https://www.linkedin.com/in/guillermo-isabel-oria-03b928338',
      icon: 'fab fa-linkedin',
      label: 'LinkedIn'
    },
    {
      url: 'https://github.com/GuillermoIsabelOria',
      icon: 'fab fa-github',
      label: 'GitHub'
    }
  ];
}
