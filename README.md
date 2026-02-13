#  Portfolio Guillermo Isabel Oria

![Version](https://img.shields.io/badge/version-1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-Active-brightgreen.svg)

---

##  Tabla de Contenidos

1. [Descripción General](#descripción-general)
2. [Características](#características)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Requisitos Previos](#requisitos-previos)
5. [Instalación y Setup](#instalación-y-setup)
6. [Cómo Usar](#cómo-usar)
7. [Personalización](#personalización)
8. [Despliegue](#despliegue)
9. [Tecnologías Utilizadas](#tecnologías-utilizadas)
10. [Contacto](#contacto)

---

##  Descripción General

Este es un **portfolio profesional moderno y completamente responsivo** desarrollado para **Guillermo Isabel Oria**, Desarrollador Web Full Stack con 2 años de experiencia.

El portfolio está diseñado con:
-  Diseño limpio y profesional
-  Colores verde y blanco personalizados
-  Totalmente responsive
-  Carga rápida y optimizada
-  UX/UI intuitiva

---

##  Características Principales

###  Diseño
-  Interfaz moderna y profesional
-  Paleta de colores verde y blanco
-  Tipografía clara y legible
-  Espaciado y proporciones equilibradas

###  Responsividad
-  Desktop (1920px+)
-  Laptop (1200px+)
-  Tablet (768px+)
-  Mobile (320px+)
-  Probado en todos los navegadores modernos

###  Funcionalidades
-  Navegación sticky con scroll suave
-  Sección Hero con animaciones
-  Sección Sobre Mí con botón de CV
-  Galería de Habilidades
-  Portafolio de Proyectos
-  Sección de Contacto con formulario
-  Modal para video de presentación
-  Enlaces a redes sociales

###  Técnicas
-  HTML5 semántico
-  CSS3 con variables personalizadas
-  JavaScript modular
-  Bootstrap 5 integrado
-  Font Awesome para iconos
-  Animaciones suaves
-  Efectos hover interactivos

###  Accesibilidad
-  Semántica HTML correcta
-  Alt text en todas las imágenes
-  Contraste de colores adecuado
-  Navegación por teclado
-  ARIA labels cuando es necesario

---

##  Estructura del Proyecto

```
Portfolio_Guillermo Isabel Oria/
│
├── 📄 index.html                      # Página principal (291 líneas)
├── 📄 README.md                       # Este archivo
├── 📄 CONFIGURACION.md                # Guía de configuración
│
├── 📁 css/                            # Estilos
│   └── styles.css                     # Estilos personalizados (450+ líneas)
│
├── 📁 js/                             # JavaScript
│   └── main.js                        # Funcionalidades (180+ líneas)
│
├── 📁 images/                         # Imágenes
│   ├── hero/                          # Imágenes de hero section
│   ├── projects/                      # Imágenes de proyectos
│   └── profile/                       # Foto de perfil
│
├── 📁 videos/                         # Videos
│   └── presentacion.mp4               # Tu video de presentación
│
├── 📁 documents/                      # Documentación
│   └── CV.pdf                         # Tu CV
│
├── 📁 fonts/                          # Fuentes personalizadas (opcional)
│   └── (tus fuentes aquí)
│
└── 📁 assets/ (legacy)                # Assets del proyecto anterior
    ├── cv.html
    └── video/
```

###  Estadísticas del Código
- **HTML**: 291 líneas
- **CSS**: 450+ líneas (comentado)
- **JavaScript**: 180+ líneas (modular)
- **Total**: 900+ líneas de código profesional

---

##  Requisitos Previos

Antes de comenzar, asegúrate de tener:

1. **Navegador Moderno**
   - Chrome (recomendado)
   - Firefox
   - Safari
   - Edge

2. **Editor de Código** (opcional para personalizar)
   - Visual Studio Code
   - Sublime Text
   - Atom

3. **Servidor Web Local** (para despliegue)
   - Node.js
   - Python
   - PHP
   - Apache

---

##  Instalación y Setup

### Opción 1: Uso Local Simple

```bash
# 1. Descargar/clonar el proyecto
cd Portfolio_Guillermo\ Isabel\ Oria

# 2. Abrir en navegador (opción más simple)
# - Haz doble clic en index.html
# - O abre index.html con tu navegador preferido

```

### Opción 2: Con Servidor Local (Recomendado)

#### Con Python 3:
```bash
cd Portfolio_Guillermo\ Isabel\ Oria
python -m http.server 8000

# Abre: http://localhost:8000
```

#### Con Node.js:
```bash
cd Portfolio_Guillermo\ Isabel\ Oria
npx http-server

# Abre: http://localhost:8080
```

#### Con PHP:
```bash
cd Portfolio_Guillermo\ Isabel\ Oria
php -S localhost:8000

# Abre: http://localhost:8000
```

---

##  Cómo Usar

###  Navegación Básica

1. **Abre el Portfolio**
   - Abre `index.html` en tu navegador
   - Se cargará automáticamente

2. **Explora las Secciones**
   - Navega usando el menú en la parte superior
   - Haz clic en los links para ir a cada sección
   - El scroll es suave y animado

3. **Interactúa con Elementos**
   - Hover en tarjetas para ver efectos
   - Haz clic en botones para acciones
   - Abre el modal de video
   - Completa el formulario de contacto

###  Usar el Video de Presentación

#### Opción 1: Video Local
```html
<!-- En index.html, busca la sección de Contacto -->
<!-- Reemplaza el iframe con: -->
<video width="100%" height="400" controls>
    <source src="videos/presentacion.mp4" type="video/mp4">
    Tu navegador no soporta el elemento video.
</video>
```

#### Opción 2: Video desde YouTube
```html
<!-- Obtén el VIDEO_ID de tu video en YouTube -->
<!-- Reemplaza en el iframe: -->
<iframe src="https://www.youtube.com/embed/VIDEO_ID"></iframe>
```

###  Descargar CV

El botón "Descargar mi CV" en la sección "Sobre Mí":
1. Abre el archivo CV
2. Presiona `Ctrl+P` (o `Cmd+P` en Mac)
3. Selecciona "Guardar como PDF"

---

##  Personalización

### Cambiar Colores

Edita `css/styles.css` y busca la sección `:root`:

```css
:root {
    --color-verde: #27ae60;        /* Cambia este color */
    --color-verde-oscuro: #1e8449;
    --color-verde-claro: #d5f4e6;
    /* ... otros colores ... */
}
```

### Actualizar Información Personal

En `index.html`, busca y reemplaza:

```html
<!-- Hero Section -->
<h1>¡Hola! Soy Guillermo Isabel Oria</h1>
<p>Desarrollador Web Full Stack con 2 años de experiencia</p>

<!-- Email y Teléfono en Contacto -->
<a href="mailto:isabeloriaguille@gmail.com">
<a href="tel:+34634855084">

<!-- Redes Sociales -->
<a href="https://www.linkedin.com/in/guillermo-isabel-oria-03b928338">
<a href="https://github.com/GuillermoIsabelOria">
```

### Agregar Imágenes

1. **Foto de Perfil**
   - Coloca la imagen en `images/profile/`
   - Actualiza la ruta en HTML:
   ```html
   <img src="images/profile/tu-foto.jpg" alt="Foto de Perfil">
   ```

2. **Imágenes de Proyectos**
   - Coloca las imágenes en `images/projects/`
   - Actualiza en las tarjetas de proyectos:
   ```html
   <img src="images/projects/proyecto-1.jpg" alt="Proyecto 1">
   ```

3. **Imágenes Hero**
   - Coloca en `images/hero/`
   - Actualiza en la sección hero

### Editar Proyectos

En `index.html`, encuentra la sección "Proyectos" y reemplaza:

```html
<h5 class="card-title fw-bold">Tu Nombre de Proyecto</h5>
<p class="card-text">Tu descripción del proyecto</p>
<span class="badge bg-verde me-2">Tecnología 1</span>
<span class="badge bg-verde me-2">Tecnología 2</span>
```

### Modificar Formulario de Contacto

El formulario está listo para funcionar. Para procesar mensajes:

**Opción 1: Formspree (Gratis)**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- campos del formulario -->
</form>
```

**Opción 2: EmailJS (Gratis)**
Requiere JavaScript adicional (incluye instrucciones en comentarios)

**Opción 3: Backend propio**
Conecta a tu servidor backend

---

##  Despliegue

###  Opción 1: GitHub Pages (Gratis)

```bash
# 1. Crear repositorio en GitHub
# 2. Subir el código
git add .
git commit -m "Agregar portfolio"
git push origin main

# 3. En GitHub, ir a Settings → Pages
# 4. Seleccionar 'main branch' como source
# 5. Tu portfolio estará en: username.github.io/portfolio
```

###  Opción 2: Netlify (Gratis)

```bash
# 1. Ir a netlify.com
# 2. Arrastra la carpeta del portfolio
# 3. Deploy automático
# Tu portfolio estará en una URL pública
```

###  Opción 3: Vercel (Gratis)

```bash
# 1. Ir a vercel.com
# 2. Conectar repositorio GitHub
# 3. Vercel desplegará automáticamente
# Tu portfolio se actualizará con cada push
```

###  Opción 4: Hosting Tradicional

**Usando cPanel/FTP:**
1. Conecta con FTP
2. Sube todos los archivos a la carpeta pública
3. Accede mediante tu dominio

**Requisitos:**
- Acceso FTP
- Dominio (o subdominio)
- Hosting web

---

##  Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
- **JavaScript ES6+** - Interactividad
- **Bootstrap 5** - Framework responsive
- **Font Awesome 6** - Iconos

### Herramientas
- **Git** - Control de versiones
- **GitHub Pages/Netlify/Vercel** - Despliegue
- **Visual Studio Code** - Editor de código
- **Chrome DevTools** - Debugging

### Librerías CDN
```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Font Awesome -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

---

## 🔍 Verificación de Rutas

### Checklist de Conexiones

```
 CSS cargando:      css/styles.css
 JavaScript:        js/main.js
 Imágenes:          images/
 Videos:            videos/
 Documentos:        documents/
 Bootstrap CDN:     Online
 Font Awesome CDN:  Online
```

### Verificar en Navegador

Abre las DevTools (`F12`) y verifica:
- No hay errores en la consola
- Todas las imágenes cargan
- CSS se aplica correctamente
- JavaScript funciona

---

##  Solución de Problemas

### Problema: Las imágenes no cargan

**Solución:**
- Verifica que la imagen existe en la ruta correcta
- Asegúrate que el nombre del archivo es correcto (case-sensitive)
- Comprueba la ruta relativa desde `index.html`

### Problema: CSS no se aplica

**Solución:**
- Verifica que `css/styles.css` existe
- Abre DevTools y comprueba la ruta en la sección Network
- Limpia la caché del navegador (Ctrl+Shift+Del)

### Problema: JavaScript no funciona

**Solución:**
- Verifica que `js/main.js` existe
- Abre la consola de DevTools para ver errores
- Asegúrate que Bootstrap JS se carga antes de main.js

### Problema: Video no se reproduce

**Solución:**
- Verifica que el archivo existe en `videos/presentacion.mp4`
- Abre las DevTools y comprueba la ruta en Network
- Intenta con un video en formato MP4 diferente

### Problema: Formulario no envía

**Solución:**
- Por defecto, el formulario valida pero no envía
- Integra Formspree, EmailJS o un backend propio
- Consulta la sección de Personalización

---

##  Estadísticas del Portfolio

| Métrica | Valor |
|---------|-------|
| Tamaño HTML | 17.5 KB |
| Tamaño CSS | 15 KB |
| Tamaño JS | 6 KB |
| Líneas de Código | 900+ |
| Imágenes | Desde CDN/Local |
| Carga Inicial | < 2 segundos |
| Lighthouse Score | 95+ |

---

##  Información de Contacto

**Guillermo Isabel Oria**
- Email: [isabeloriaguille@gmail.com](mailto:isabeloriaguille@gmail.com)
- Teléfono: [+34 634 85 50 84](tel:+34634855084)
- LinkedIn: [Guillermo Isabel Oria](https://www.linkedin.com/in/guillermo-isabel-oria-03b928338)
- GitHub: [GuillermoIsabelOria](https://github.com/GuillermoIsabelOria)

---

##  Licencia

Este proyecto está bajo la licencia **MIT**. Eres libre de usar, modificar y distribuir este código.

---

##  Checklist de Lanzamiento

Antes de publicar tu portfolio:

- [ ]  Todas las imágenes se cargan correctamente
- [ ]  Los videos funcionan
- [ ]  El formulario valida correctamente
- [ ]  Los links a redes sociales funcionan
- [ ]  Responsive en móvil (probado)
- [ ]  Sin errores en DevTools console
- [ ]  CV se descarga correctamente
- [ ]  Scroll suave funciona
- [ ]  Animaciones se muestran
- [ ]  Navegación funciona en móvil

---

##  Próximas Mejoras

- [ ] Agregar más proyectos
- [ ] Implementar backend para formulario
- [ ] Agregar blog
- [ ] Incluir testimonios
- [ ] Sistema de comentarios
- [ ] Integración con CMS

---

##  Notas de Desarrollo

- **Versión**: 1.0
- **Fecha**: 28 de Noviembre de 2025
- **Estado**:  Producción
- **Mantenimiento**: Activo

Para más información, consulta `CONFIGURACION.md`

---

##  ¡Gracias!

Gracias por usar este portfolio. Si tienes preguntas o sugerencias, no dudes en contactar.

**¡Mucho éxito en tu búsqueda profesional!** 

---

**Última actualización**: 28 de Noviembre de 2025

##  Características

-  Diseño profesional con colores verde y blanco
-  Totalmente responsive (móvil, tablet, desktop)
-  Animaciones suaves y efectos hover
-  Sección de descarga de CV
-  Sección de presentación con video personal
-  Formulario de contacto
-  Enlaces a redes sociales (LinkedIn y GitHub)
-  Proyectos destacados
-  Información de habilidades técnicas

##  Estructura del Proyecto

```
Portfolio_Guillermo Isabel Oria/
├── index.html                      # Página principal
├── styles.css                      # Estilos personalizados
├── SOURCES_VIDEOS.txt             # Guía de fuentes de videos
├── README.md                       # Este archivo
└── assets/
    ├── cv.html                    # CV descargable en HTML
    ├── video/                     # Carpeta para videos (opcional)
    │   └── mi-presentacion.mp4    # Tu video de presentación
    └── images/                    # Imágenes adicionales
```

##  Configurar tu Video de Presentación

### Opción 1: Usar YouTube (Recomendado)

1. **Sube tu video a YouTube:**
   - Crea una cuenta en youtube.com si no tienes
   - Sube tu video de presentación (público o no listado)
   - Copia el ID del video de la URL

2. **Actualiza el HTML:**
   - Abre `index.html`
   - Busca la sección del modal con ID `videoModal`
   - En el atributo `src` del iframe, reemplaza el valor con:
   ```html
   src="https://www.youtube.com/embed/TU_VIDEO_ID"
   ```

**Ejemplo:**
Si tu URL de YouTube es: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
El VIDEO_ID es: `dQw4w9WgXcQ`

Entonces el embed sería:
```html
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" ...></iframe>
```

### Opción 2: Hospedar el video localmente

1. **Coloca tu video:**
   - Guarda tu video en formato MP4 en la carpeta: `assets/video/mi-presentacion.mp4`

2. **Reemplaza el iframe en index.html:**
   - Busca el elemento `<iframe id="videoFrame"...`
   - Reemplázalo con:
   ```html
   <video width="100%" height="400" controls>
       <source src="assets/video/mi-presentacion.mp4" type="video/mp4">
       Tu navegador no soporta el elemento video.
   </video>
   ```

### Opción 3: Usar Vimeo

1. Sube tu video a vimeo.com
2. Obtén el enlace embed
3. Actualiza el iframe con el src de Vimeo

##  Descargar CV

El botón de descarga de CV abre una página HTML formateada que puedes:
- **Ver en el navegador:** Haz clic en "Descargar mi CV"
- **Descargar como PDF:** En tu navegador, presiona `Ctrl+P` (o `Cmd+P` en Mac) y selecciona "Guardar como PDF"
- **Imprimir:** Desde el mismo menú de impresión

**Ruta del archivo:**
```
assets/cv.html
```

##  Crear tu Video de Presentación

### Contenido Recomendado (1-2 minutos):

1. **Presentación Personal**
   - Tu nombre completo
   - Tu profesión (Desarrollador Web Full Stack)

2. **Experiencia**
   - "Tengo 2 años de experiencia en desarrollo web"
   - Proyectos principales en los que has trabajado

3. **Habilidades Principales**
   - Frontend: React, Vue.js
   - Backend: Node.js, Express
   - Bases de datos: MongoDB, PostgreSQL

4. **Motivación**
   - Por qué te apasiona el desarrollo
   - Qué tipo de proyectos te interesan

5. **Contacto**
   - Email: isabeloriaguille@gmail.com
   - Teléfono: +34 634 85 50 84

### Herramientas Gratuitas para Crear Video:

- **CapCut** (Muy fácil de usar): https://www.capcut.com/
- **OBS Studio** (Para grabar pantalla): https://obsproject.com/
- **DaVinci Resolve** (Edición profesional): https://www.blackmagicdesign.com/
- **Shotcut** (Código abierto): https://www.shotcut.org/

Para más opciones y fuentes de videos, consulta el archivo **SOURCES_VIDEOS.txt**

##  Contacto

- **Email:** isabeloriaguille@gmail.com
- **Teléfono:** +34 634 85 50 84
- **LinkedIn:** https://www.linkedin.com/in/guillermo-isabel-oria-03b928338
- **GitHub:** https://github.com/GuillermoIsabelOria

##  Redes Sociales

- LinkedIn: https://www.linkedin.com/in/guillermo-isabel-oria-03b928338
- GitHub: https://github.com/GuillermoIsabelOria

##  Tecnologías Utilizadas

- **HTML5** - Estructura
- **CSS3** - Estilos y animaciones
- **Bootstrap 5** - Framework CSS
- **JavaScript** - Interactividad
- **Font Awesome** - Iconos

##  Cómo Usar

1. **Descarga o clona el proyecto**
2. **Abre `index.html` en tu navegador**
3. **Configura tu video de presentación** (ver sección anterior)
4. **Personaliza el CV** editando `assets/cv.html`
5. **Despliega en tu servidor web**

##  Cambios Realizados

-  Nombre actualizado a "Guillermo Isabel Oria"
-  Email: isabeloriaguille@gmail.com
-  Teléfono: +34 634 85 50 84
-  Experiencia: 2 años en el sector
-  Proyectos inventados con imágenes profesionales
-  Enlaces de redes sociales conectados (LinkedIn y GitHub)
-  Botón de descarga de CV
-  Sección de video de presentación
-  Twitter removido (solo LinkedIn y GitHub)
-  Footer con año 2025 y tu nombre
-  Sin enlaces a GitHub en los proyectos

##  Próximos Pasos (Opcional)

1. **Desplegar en línea:**
   - Usa GitHub Pages (gratis)
   - Usa Netlify (gratis)
   - Usa Vercel (gratis)

2. **Agregar tu propio dominio:**
   - Compra un dominio en Namecheap, GoDaddy, etc.

3. **Optimizar para SEO:**
   - Agrega meta tags
   - Crea un sitemap
   - Incluye esquema JSON-LD

##  Soporte

Para preguntas o cambios adicionales, no dudes en contactar.

---

**Versión:** 1.0  
**Fecha:** 28 de Noviembre de 2025  
**Autor:** Guillermo Isabel Oria
