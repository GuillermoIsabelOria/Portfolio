import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Componente de la página de Contacto.
 * Implementa Angular Reactive Forms con validaciones:
 * - Campos obligatorios (required)
 * - Email válido (Validators.email)
 * - Longitud mínima (minLength)
 *
 * Simula el envío del formulario mostrando un mensaje de éxito.
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  /** Formulario reactivo con validaciones */
  contactForm: FormGroup;

  /** Indica si el formulario ha sido enviado (para mostrar errores) */
  submitted = false;

  /** Indica si el mensaje fue enviado correctamente */
  messageSent = false;

  /** Información de contacto (renderizada con *ngFor) */
  contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'isabeloriaguille@gmail.com',
      link: 'mailto:isabeloriaguille@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      label: 'Teléfono',
      value: '+34 634 85 50 84',
      link: 'tel:+34634855084'
    },
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      value: 'Guillermo Isabel Oria',
      link: 'https://www.linkedin.com/in/guillermo-isabel-oria-03b928338'
    },
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      value: 'GuillermoIsabelOria',
      link: 'https://github.com/GuillermoIsabelOria'
    }
  ];

  constructor(private fb: FormBuilder) {
    /**
     * Definición del formulario reactivo con validaciones.
     * Cada campo usa Validators de Angular.
     */
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', [Validators.required, Validators.minLength(5)]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  /**
   * Getter para acceder fácilmente a los controles del formulario
   * desde la plantilla HTML.
   */
  get f() {
    return this.contactForm.controls;
  }

  /**
   * Maneja el envío del formulario.
   * Valida todos los campos y, si es correcto, simula el envío.
   */
  onSubmit(): void {
    this.submitted = true;

    // Verificar validez del formulario
    if (this.contactForm.invalid) {
      return;
    }

    // Simular envío (mostrar datos en consola)
    console.log('Formulario enviado correctamente:', this.contactForm.value);

    // Mostrar mensaje de éxito
    this.messageSent = true;

    // Resetear formulario
    this.contactForm.reset();
    this.submitted = false;

    // Ocultar mensaje de éxito después de 5 segundos
    setTimeout(() => {
      this.messageSent = false;
    }, 5000);
  }
}
