/**
 * Interfaz que define la estructura de un proyecto del portfolio.
 * Utilizada por el servicio PortfolioService y los componentes.
 */
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
