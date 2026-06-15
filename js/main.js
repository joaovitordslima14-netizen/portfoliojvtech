/* ===============================================
   MAIN.JS - FUNCIONALIDADES PRINCIPAIS
   =============================================== */

/**
 * Estado da aplicação
 */
const appState = {
    isNavbarScrolled: false,
    isMobileMenuOpen: false,
    isModalOpen: false
};

/* ===============================================
   NAVBAR - SCROLL EFFECT
   =============================================== */

/**
 * Gerencia o efeito de scroll da navbar
 */
class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.lastScrollY = 0;
        this.throttled = throttle(() => this.updateNavbar(), 50);

        this.init();
    }

    init() {
        window.addEventListener('scroll', this.throttled);
    }

    updateNavbar() {
        const scrollY = window.scrollY;
        const hasScrolled = scrollY > 50;

        if (hasScrolled !== appState.isNavbarScrolled) {
            appState.isNavbarScrolled = hasScrolled;
            this.navbar.classList.toggle('scrolled', hasScrolled);
        }

        this.lastScrollY = scrollY;
    }
}

/* ===============================================
   MOBILE MENU
   =============================================== */

/**
 * Gerencia o menu mobile
 */
class MobileMenu {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');

        this.init();
    }

    init() {
        // Toggle do hamburger
        this.hamburger.addEventListener('click', () => this.toggleMenu());

        // Fechar ao clicar em um link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Fechar ao clicar fora
        document.addEventListener('click', (e) => {
            if (!this.hamburger.contains(e.target) && !this.navMenu.contains(e.target)) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        appState.isMobileMenuOpen = !appState.isMobileMenuOpen;
        this.hamburger.classList.toggle('active', appState.isMobileMenuOpen);
        this.navMenu.classList.toggle('active', appState.isMobileMenuOpen);
    }

    closeMenu() {
        appState.isMobileMenuOpen = false;
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
    }
}

/* ===============================================
   SCROLL SUAVE
   =============================================== */

/**
 * Gerencia o scroll suave para links âncora
 */
class SmoothScroll {
    constructor() {
        this.links = document.querySelectorAll('a[href^="#"]');
        this.init();
    }

    init() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');

                // Ignorar âncoras vazias ou links especiais
                if (href === '#' || href === '') return;

                const target = document.querySelector(href);

                if (target) {
                    e.preventDefault();
                    this.smoothScrollTo(target);
                }
            });
        });
    }

    smoothScrollTo(target) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.offsetTop - navHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

/* ===============================================
   SCROLL TO TOP BUTTON
   =============================================== */

/**
 * Gerencia o botão de voltar ao topo
 */
class ScrollToTopButton {
    constructor() {
        this.button = this.createButton();
        this.isVisible = false;
        this.throttled = throttle(() => this.updateVisibility(), 100);

        this.init();
    }

    createButton() {
        const button = document.createElement('button');
        button.innerHTML = '↑';
        button.className = 'scroll-to-top-btn';
        button.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #2563EB, #1E40AF);
            color: white;
            border: none;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            display: none;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 20px rgba(37, 99, 235, 0.3);
            transition: all 0.3s ease;
            z-index: 999;
        `;

        document.body.appendChild(button);
        return button;
    }

    init() {
        window.addEventListener('scroll', this.throttled);

        this.button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        this.button.addEventListener('mouseenter', () => {
            this.button.style.transform = 'scale(1.1)';
        });

        this.button.addEventListener('mouseleave', () => {
            this.button.style.transform = 'scale(1)';
        });
    }

    updateVisibility() {
        const scrollY = window.scrollY;
        const shouldShow = scrollY > 300;

        if (shouldShow !== this.isVisible) {
            this.isVisible = shouldShow;
            this.button.style.display = shouldShow ? 'flex' : 'none';

            if (shouldShow) {
                this.button.style.animation = 'fade-in 0.3s ease';
            }
        }
    }
}

/* ===============================================
   ACTIVE NAV LINK
   =============================================== */

/**
 * Gerencia o link ativo na navbar
 */
class ActiveNavLink {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('section');
        this.throttled = throttle(() => this.updateActiveLink(), 100);

        this.init();
    }

    init() {
        window.addEventListener('scroll', this.throttled);
    }

    updateActiveLink() {
        let current = '';

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        this.navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');

            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
}

/* ===============================================
   TEMAS E PERSISTÊNCIA
   =============================================== */

/**
 * Gerencia temas (modo claro/escuro)
 */
class ThemeManager {
    constructor() {
        this.currentTheme = 'dark';
        this.init();
    }

    init() {
        // Carregar tema salvo
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.setTheme(savedTheme);
    }

    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        if (theme === 'light') {
            document.body.style.background = '#ffffff';
            document.body.style.color = '#050505';
        } else {
            document.body.style.background = '#050505';
            document.body.style.color = '#ffffff';
        }
    }

    toggle() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }
}

/* ===============================================
   TECLADO ATALHOS
   =============================================== */

/**
 * Gerencia atalhos de teclado
 */
class KeyboardShortcuts {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K para abrir busca (futuro)
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                // openSearch();
            }

            // Ctrl/Cmd + / para ajuda
            if ((e.ctrlKey || e.metaKey) && e.key === '/') {
                e.preventDefault();
                this.showHelp();
            }
        });
    }

    showHelp() {
        console.log('Atalhos de teclado:');
        console.log('ESC - Fechar modal');
        console.log('Setas ← → - Navegar carrossel');
        console.log('Ctrl/Cmd + / - Mostrar ajuda');
    }
}

/* ===============================================
   PERFORMANCE MONITORING
   =============================================== */

/**
 * Monitora performance da página
 */
class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        // Relatório de performance Web Vitals
        if ('PerformanceObserver' in window) {
            this.observeWebVitals();
        }
    }

    observeWebVitals() {
        // Largest Contentful Paint
        try {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
            });

            observer.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
            console.log('LCP não suportado');
        }
    }

    logPageLoadTime() {
        window.addEventListener('load', () => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log('Tempo de carregamento da página:', pageLoadTime, 'ms');
        });
    }
}

/* ===============================================
   ANALYTICS
   =============================================== */

/**
 * Rastreia eventos importantes
 */
class Analytics {
    constructor() {
        this.init();
    }

    init() {
        // Rastrear cliques nos projetos
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('project-btn')) {
                this.trackEvent('project_opened', {
                    projectId: e.target.getAttribute('data-project-id')
                });
            }

            if (e.target.classList.contains('contact-card')) {
                this.trackEvent('contact_clicked', {
                    type: e.target.querySelector('h3')?.textContent
                });
            }
        });
    }

    trackEvent(eventName, data) {
        console.log(`📊 Event: ${eventName}`, data);

        // Integração com Google Analytics (quando configurado)
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, data);
        }
    }
}

/* ===============================================
   UTILITY: THROTTLE
   =============================================== */

/**
 * Cria uma versão throttled de uma função
 * @param {Function} func - Função a executar
 * @param {number} limit - Limite em ms
 * @returns {Function} - Função throttled
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Cria uma versão debounced de uma função
 * @param {Function} func - Função a executar
 * @param {number} delay - Delay em ms
 * @returns {Function} - Função debounced
 */
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/* ===============================================
   INICIALIZAÇÃO
   =============================================== */

/**
 * Inicializa a aplicação quando o DOM está pronto
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Iniciando aplicação...');

    // Inicializar componentes
    new NavbarScroll();
    new MobileMenu();
    new SmoothScroll();
    new ScrollToTopButton();
    new ActiveNavLink();
    new ThemeManager();
    new KeyboardShortcuts();
    new PerformanceMonitor();
    new Analytics();

    console.log('✅ Aplicação iniciada com sucesso!');

    // Log de informações de performance
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        const connectTime = perfData.responseEnd - perfData.requestStart;
        const renderTime = perfData.domComplete - perfData.domLoading;

        console.log('⏱️ Performance:');
        console.log(`  - Tempo de conexão: ${connectTime}ms`);
        console.log(`  - Tempo de renderização: ${renderTime}ms`);
        console.log(`  - Tempo total de carregamento: ${pageLoadTime}ms`);
    });
});

/* ===============================================
   SERVICE WORKER (PWA)
   =============================================== */

/**
 * Registra o service worker para PWA
 */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('✅ Service Worker registrado:', registration);
        }).catch(error => {
            console.log('⚠️ Service Worker falhou:', error);
        });
    });
}

/* ===============================================
   ERROR HANDLING
   =============================================== */

/**
 * Trata erros globais
 */
window.addEventListener('error', (e) => {
    console.error('❌ Erro:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('❌ Promise rejeitada:', e.reason);
});

/* ===============================================
   PAGE VISIBILITY API
   =============================================== */

/**
 * Detecta quando a página fica invisível
 */
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('👋 Página escondida');
    } else {
        console.log('👀 Página visível');
    }
});

/* ===============================================
   NETWORK STATUS
   =============================================== */

/**
 * Monitora status de conexão
 */
window.addEventListener('online', () => {
    console.log('📡 Online');
    showNotification('Conexão restaurada', 'success');
});

window.addEventListener('offline', () => {
    console.log('📴 Offline');
    showNotification('Você está offline', 'warning');
});

/**
 * Mostra notificação
 * @param {string} message - Mensagem
 * @param {string} type - Tipo (success, warning, error)
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : type === 'warning' ? '#F59E0B' : '#EF4444'};
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        animation: fade-in 0.3s ease;
        z-index: 10000;
        max-width: 300px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'fade-out 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/* ===============================================
   LAZY LOADING
   =============================================== */

/**
 * Implementa lazy loading para imagens
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-lazy]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-lazy');
                img.removeAttribute('data-lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

document.addEventListener('DOMContentLoaded', initLazyLoading);

/* ===============================================
   FORM VALIDATION
   =============================================== */

/**
 * Valida formulários
 */
class FormValidator {
    static validate(form) {
        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = 'red';
                isValid = false;
            } else {
                input.style.borderColor = '';
            }
        });

        return isValid;
    }
}

/* ===============================================
   INICIALIZAÇÃO DE VALORES
   =============================================== */

// Definir ano atual no footer
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-content');
if (footerYear) {
    footerYear.innerHTML = footerYear.innerHTML.replace(
        /\d{4}/,
        currentYear.toString()
    );
}
