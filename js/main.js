/* ============================================================================
   PORTFOLIO DE GUILLERMO ISABEL ORIA - ARCHIVO JAVASCRIPT PRINCIPAL
   ============================================================================ */

/**
 * Funciones principales del portfolio
 * Incluye: scroll suave, manejo de modales, validación de formularios
 */

// ============================================================================
// 1. FUNCIONALIDAD DE SCROLL SUAVE
// ============================================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================================================
// 2. FUNCIONALIDAD DE NAVBAR RESPONSIVO
// ============================================================================

const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

// Cerrar navbar cuando se hace clic en un link
document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });
});

// ============================================================================
// 3. EFECTOS DE ANIMACIÓN AL SCROLL
// ============================================================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar tarjetas de proyectos
document.querySelectorAll('.card-proyecto').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// ============================================================================
// 4. VALIDACIÓN DE FORMULARIO DE CONTACTO
// ============================================================================

const contactForm = document.querySelector('form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const asunto = document.getElementById('asunto').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        
        // Validaciones
        if (!nombre || !email || !asunto || !mensaje) {
            alert('Por favor, completa todos los campos');
            return;
        }
        
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingresa un email válido');
            return;
        }
        
        // Si todo es válido
        console.log('Formulario válido - Datos:', { nombre, email, asunto, mensaje });
        alert('¡Mensaje enviado correctamente! Te contactaré pronto.');
        contactForm.reset();
    });
}

// ============================================================================
// 5. CONFIGURACIÓN DE VIDEOS MODALES
// ============================================================================

// Configurar video modal
const videoModal = document.getElementById('videoModal');
const videoFrame = document.getElementById('videoFrame');

if (videoModal) {
    videoModal.addEventListener('show.bs.modal', function() {
        // El video se cargará automáticamente desde el src del iframe
        if (videoFrame.src) {
            videoFrame.style.display = 'block';
        } else {
            console.warn('Video no configurado - Agrega el src al iframe');
        }
    });
    
    videoModal.addEventListener('hide.bs.modal', function() {
        // Detener video al cerrar modal
        if (videoFrame) {
            videoFrame.src = videoFrame.src; // Reinicializar
        }
    });
}

// ============================================================================
// 6. DETECTAR NAVEGADOR Y COMPATIBILIDAD
// ============================================================================

function checkBrowserCompatibility() {
    const isIE = !!window.document.documentMode;
    
    if (isIE) {
        console.warn('Estás usando Internet Explorer. Algunos estilos podrían no funcionar correctamente.');
        console.warn('Se recomienda usar Chrome, Firefox, Safari o Edge');
    }
    
    // Verificar soporte para Intersection Observer
    if (!('IntersectionObserver' in window)) {
        console.warn('IntersectionObserver no soportado. Las animaciones de scroll podrían no funcionar');
    }
}

checkBrowserCompatibility();

// ============================================================================
// 7. FUNCIONALIDADES ADICIONALES
// ============================================================================

/**
 * Agregar clase activa a link de navbar según scroll
 */
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// ============================================================================
// 8. INICIALIZACIÓN
// ============================================================================

/**
 * Función de inicialización
 * Se ejecuta cuando el DOM está completamente cargado
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio de Guillermo Isabel Oria cargado correctamente');
    
    // Inicializar tooltips de Bootstrap si existen
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// ============================================================================
// 9. FUNCIONES AUXILIARES
// ============================================================================

/**
 * Función para obtener parámetros de URL
 */
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

/**
 * Función para descargar archivos
 */
function downloadFile(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || 'descarga';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
 * Función para validar email
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ============================================================================
// FIN DEL ARCHIVO - JAVASCRIPT PRINCIPAL
// ============================================================================
