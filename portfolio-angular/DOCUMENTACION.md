# Documentación - Portfolio Angular

## Guillermo Isabel Oria

---

## 1. Estructura de Componentes

El proyecto sigue la arquitectura de componentes de Angular, dividida en:

### Componentes Reutilizables (`src/app/components/`)

| Componente | Selector | Descripción |
|---|---|---|
| **NavbarComponent** | `<app-navbar>` | Barra de navegación sticky con `routerLink` y `routerLinkActive`. Gestiona el menú hamburguesa en mobile. |
| **FooterComponent** | `<app-footer>` | Pie de página con año dinámico y enlaces sociales renderizados con `*ngFor`. |
| **ProjectCardComponent** | `<app-project-card>` | Tarjeta reutilizable que recibe un proyecto via `@Input()` y emite eventos via `@Output()`. |

### Páginas (`src/app/pages/`)

| Página | Ruta | Descripción |
|---|---|---|
| **HomeComponent** | `/home` | Página de inicio con sección Hero (presentación personal), Sobre Mí y Habilidades. |
| **PortfolioComponent** | `/portfolio` | Lista de proyectos cargados desde `PortfolioService`. Muestra detalle al seleccionar un proyecto. |
| **ContactComponent** | `/contact` | Formulario de contacto con Angular Reactive Forms y validaciones completas. |

### Diagrama de Componentes

```
AppComponent
├── NavbarComponent (routerLink navigation)
├── <router-outlet>
│   ├── HomeComponent (/home)
│   ├── PortfolioComponent (/portfolio)
│   │   └── ProjectCardComponent (x N) [@Input/@Output]
│   └── ContactComponent (/contact) [ReactiveFormsModule]
└── FooterComponent
```

---

## 2. Configuración de Rutas

Las rutas se configuran en `src/app/app-routing.module.ts`:

```typescript
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/home' }  // Wildcard
];
```

- **`<router-outlet>`**: Se usa en `app.component.html` para cargar las páginas dinámicamente.
- **`routerLink`**: Navegación declarativa en el NavbarComponent.
- **`routerLinkActive`**: Resalta la ruta activa en la navegación.

---

## 3. Personalización de Bootstrap

Bootstrap se integra a través de `angular.json`:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

### Variables CSS Personalizadas (`src/styles.css`)

```css
:root {
  --color-verde: #27ae60;
  --color-verde-oscuro: #1e8449;
  --color-verde-claro: #d5f4e6;
}
```

### Clases Personalizadas sobre Bootstrap

- `.bg-verde` / `.bg-gradient-verde`: Fondos verdes sobre Bootstrap.
- `.btn-verde` / `.btn-outline-verde`: Botones personalizados con hover animado.
- `.card-skill`: Tarjetas de habilidades con borde verde y efecto hover.
- `.card-proyecto`: Tarjetas de proyectos con sombra y transición.

Cada componente también tiene sus propios estilos encapsulados en sus respectivos archivos `.css`.

---

## 4. Uso de Servicios

### `PortfolioService` (`src/app/services/portfolio.service.ts`)

Servicio inyectable (`@Injectable`) que centraliza los datos de los proyectos:

```typescript
@Injectable({ providedIn: 'root' })
export class PortfolioService {
  getProjects(): Project[]           // Obtiene todos los proyectos
  getProjectById(id: number): Project // Obtiene un proyecto por ID
  getProjectCount(): number           // Devuelve el total de proyectos
}
```

**Modelo de datos** (`src/app/models/project.model.ts`):

```typescript
export interface Project {
  id: number;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  link: string;
  github: string;
  dateAdded: Date;
}
```

---

## 5. Comunicación entre Componentes

### `@Input()` y `@Output()` en ProjectCardComponent

```typescript
// ProjectCardComponent
@Input() project!: Project;                        // Recibe proyecto del padre
@Output() projectSelected = new EventEmitter<Project>(); // Emite al padre

// PortfolioComponent (padre) - en el template:
<app-project-card
  [project]="project"                              // Envía datos al hijo
  (projectSelected)="onProjectSelected($event)">   // Escucha eventos del hijo
</app-project-card>
```

---

## 6. Formularios Reactivos

### Implementación en ContactComponent

```typescript
this.contactForm = this.fb.group({
  nombre:  ['', [Validators.required, Validators.minLength(2)]],
  email:   ['', [Validators.required, Validators.email]],
  asunto:  ['', [Validators.required, Validators.minLength(5)]],
  mensaje: ['', [Validators.required, Validators.minLength(10)]]
});
```

**Validaciones implementadas:**
- Campos obligatorios (`required`)
- Email válido (`Validators.email`)
- Longitud mínima (`minLength`)
- Mensajes de error dinámicos con `*ngIf`
- Clases CSS condicionales con `[ngClass]`

---

## 7. Directivas y Pipes

### Directivas Estructurales

| Directiva | Uso |
|---|---|
| `*ngFor` | Iterar habilidades, proyectos, tecnologías, redes sociales, info de contacto |
| `*ngIf` | Mostrar/ocultar bio extendida, detalle de proyecto, mensajes de error, alerta de éxito |
| `[ngClass]` | Aplicar clases CSS condicionalmente (errores de validación, menú abierto/cerrado) |

### Pipes

| Pipe | Uso |
|---|---|
| `uppercase` | Brand del navbar (`'guille' \| uppercase`), títulos de habilidades |
| `titlecase` | Títulos de secciones (`'sobre mí' \| titlecase`) |
| `date` | Fecha de proyectos (`project.dateAdded \| date:'longDate'`) |

---

## 8. Instrucciones de Instalación

```bash
# 1. Navegar al directorio del proyecto
cd portfolio-angular

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
ng serve

# 4. Abrir en el navegador
# http://localhost:4200
```

---

## 9. Tecnologías Utilizadas

- **Angular 17** - Framework principal
- **TypeScript** - Lenguaje de programación
- **Bootstrap 5** - Framework CSS responsive
- **Font Awesome 6** - Iconografía
- **Angular Router** - Navegación SPA
- **Angular Reactive Forms** - Formularios con validaciones

---

## 10. Estructura de Archivos

```
portfolio-angular/
├── angular.json                          # Configuración Angular CLI
├── package.json                          # Dependencias del proyecto
├── tsconfig.json                         # Configuración TypeScript
├── tsconfig.app.json                     # Config TypeScript de la app
├── src/
│   ├── index.html                        # HTML principal
│   ├── main.ts                           # Bootstrap de la aplicación
│   ├── styles.css                        # Estilos globales (Bootstrap personalizado)
│   └── app/
│       ├── app.module.ts                 # Módulo raíz (NgModule)
│       ├── app-routing.module.ts         # Configuración de rutas
│       ├── app.component.ts/html/css     # Componente raíz
│       ├── models/
│       │   └── project.model.ts          # Interfaz Project
│       ├── services/
│       │   └── portfolio.service.ts      # Servicio de datos
│       ├── components/
│       │   ├── navbar/                   # Componente de navegación
│       │   ├── footer/                   # Componente de pie de página
│       │   └── project-card/             # Tarjeta de proyecto reutilizable
│       └── pages/
│           ├── home/                     # Página de inicio
│           ├── portfolio/                # Página de portfolio
│           └── contact/                  # Página de contacto
```
