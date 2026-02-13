import { Component } from '@angular/core';

/**
 * Componente de navegación reutilizable.
 * Utiliza routerLink para la navegación entre páginas
 * y routerLinkActive para resaltar la ruta activa.
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;

  /** Alterna el menú hamburguesa en mobile */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /** Cierra el menú al seleccionar una opción */
  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
