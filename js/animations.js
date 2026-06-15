/* ===============================================
   ANIMAÇÕES COM INTERSECTION OBSERVER
   =============================================== */

/**
 * Intersection Observer para animações ao scroll
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adicionar classe de entrada
            entry.target.classList.add('in-view');

            // Animar números das estatísticas
            if (entry.target.classList.contains('stat-number')) {
                animateCounter(entry.target);
            }

            // Não observar mais este elemento
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

/**
 * Observar elementos ao carregar
 */
document.addEventListener('DOMContentLoaded', () => {
    // Elementos com classes de observação
    const elementsToObserve = document.querySelectorAll(
        '.observe-fade-up, .observe-fade-left, .observe-fade-right, .observe-zoom-in, .stat-number'
    );

    elementsToObserve.forEach(el => observer.observe(el));

    // Observar cards de projeto
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.classList.add('observe-fade-up');
        observer.observe(card);
    });

    // Observar cards de tecnologia
    const techCards = document.querySelectorAll('.tech-card');
    techCards.forEach(card => {
        card.classList.add('observe-fade-up');
        observer.observe(card);
    });

    // Observar cards de contato
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.classList.add('observe-fade-up');
        observer.observe(card);
    });
});

/* ===============================================
   ANIMAÇÃO DE CONTADOR
   =============================================== */

/**
 * Anima um contador de números
 * @param {HTMLElement} element - Elemento com data-target
 */
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'), 10);
    const duration = 1500; // ms
    const start = Date.now();
    const startValue = parseInt(element.textContent, 10) || 0;

    const animate = () => {
        const progress = Math.min((Date.now() - start) / duration, 1);
        const current = Math.floor(startValue + (target - startValue) * easeOutQuad(progress));
        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    };

    animate();
}

/**
 * Função de easing
 * @param {number} t - Progresso (0-1)
 * @returns {number} - Valor easing
 */
function easeOutQuad(t) {
    return t * (2 - t);
}

/* ===============================================
   ANIMAÇÃO DO HERO
   =============================================== */

/**
 * Animar elementos do hero ao carregar
 */
document.addEventListener('DOMContentLoaded', () => {
    const heroElements = document.querySelectorAll(
        '.hero-title, .hero-subtitle, .hero-description, .hero-tech, .hero-buttons, .hero-illustration'
    );

    heroElements.forEach((element, index) => {
        element.style.animation = `fade-up 0.8s ease-out ${0.1 * (index + 1)}s forwards`;
    });
});

/* ===============================================
   EFEITO DE PARALLAX SUAVE
   =============================================== */

/**
 * Adiciona efeito parallax suave nos elementos
 */
let ticking = false;
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateParallax(lastScrollY);
            ticking = false;
        });
        ticking = true;
    }
});

/**
 * Atualiza o efeito parallax
 * @param {number} scrollY - Posição do scroll
 */
function updateParallax(scrollY) {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    parallaxElements.forEach(element => {
        const speed = parseFloat(element.getAttribute('data-parallax')) || 0.5;
        element.style.transform = `translateY(${scrollY * speed}px)`;
    });
}

/* ===============================================
   ANIMAÇÃO DE ENTRADA DE SEÇÕES
   =============================================== */

/**
 * Animação de entrada ao scroll
 */
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-animated');
        }
    });
}, {
    threshold: 0.1
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => sectionObserver.observe(section));
});

/* ===============================================
   ANIMAÇÃO DE SCROLL SUAVE (JÁ EM style.css)
   =============================================== */

// Scroll suave já configurado em html { scroll-behavior: smooth; }

/* ===============================================
   ANIMAÇÃO DE HOVER EM LINKS
   =============================================== */

/**
 * Adiciona efeito de hover animado em links internos
 */
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            e.target.style.animation = 'none';
            setTimeout(() => {
                e.target.style.animation = '';
            }, 10);
        });
    });
});

/* ===============================================
   DEBOUNCE UTILITY
   =============================================== */

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
   THROTTLE UTILITY
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

/* ===============================================
   ANIMAÇÃO DE DIGITAÇÃO (Typing Animation)
   =============================================== */

/**
 * Cria efeito de digitação em um elemento
 * @param {HTMLElement} element - Elemento a animar
 * @param {string} text - Texto a digitar
 * @param {number} speed - Velocidade da digitação (ms)
 */
function typeText(element, text, speed = 50) {
    element.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

/* ===============================================
   ANIMAÇÃO DE CURSOR
   =============================================== */

/**
 * Adiciona efeito de cursor customizado
 */
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 12px;
        height: 12px;
        background: rgba(37, 99, 235, 0.5);
        border: 2px solid rgba(37, 99, 235, 0.8);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        display: none;
        mix-blend-mode: screen;
    `;
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.left = mouseX - 6 + 'px';
        cursor.style.top = mouseY - 6 + 'px';
        cursor.style.display = 'block';
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.display = 'none';
    });

    // Aumentar cursor ao passar por links e buttons
    const interactiveElements = document.querySelectorAll('a, button, .btn, .project-card, .tech-card, .contact-card');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.left = mouseX - 10 + 'px';
            cursor.style.top = mouseY - 10 + 'px';
            cursor.style.borderWidth = '3px';
        });

        element.addEventListener('mouseleave', () => {
            cursor.style.width = '12px';
            cursor.style.height = '12px';
            cursor.style.left = mouseX - 6 + 'px';
            cursor.style.top = mouseY - 6 + 'px';
            cursor.style.borderWidth = '2px';
        });
    });
});

/* ===============================================
   ANIMAÇÃO DE SCROLL INDICATOR
   =============================================== */

/**
 * Cria indicador visual de progresso de scroll
 */
document.addEventListener('DOMContentLoaded', () => {
    const scrollIndicator = document.createElement('div');
    scrollIndicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #2563EB, #60A5FA);
        box-shadow: 0 0 10px rgba(37, 99, 235, 0.5);
        z-index: 999;
        width: 0%;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(scrollIndicator);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollIndicator.style.width = scrollPercent + '%';
    });
});

/* ===============================================
   OBSERVAR MUDANÇAS NO VIEWPORT
   =============================================== */

/**
 * Executar ação quando elemento entra no viewport
 * @param {HTMLElement} element - Elemento a observar
 * @param {Function} callback - Função callback
 */
function observeElement(element, callback) {
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback(entry);
                elementObserver.unobserve(element);
            }
        });
    }, { threshold: 0.1 });

    elementObserver.observe(element);
}

/* ===============================================
   ANIMAÇÃO DE FUNDO ANIMADO
   =============================================== */

/**
 * Cria animação de fundo com gradiente dinâmico
 */
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes gradient-shift {
            0%, 100% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
        }

        .animated-gradient-bg {
            background: linear-gradient(
                -45deg,
                rgba(37, 99, 235, 0.1),
                rgba(15, 23, 42, 0.5),
                rgba(37, 99, 235, 0.1)
            );
            background-size: 400% 400%;
            animation: gradient-shift 15s ease infinite;
        }
    `;
    document.head.appendChild(style);
});

/* ===============================================
   RIPPLE EFFECT
   =============================================== */

/**
 * Adiciona efeito ripple ao clicar
 */
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }

        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);

    const buttons = document.querySelectorAll('.btn, button, .project-card, .tech-card');

    buttons.forEach(button => {
        button.style.position = 'relative';
        button.style.overflow = 'hidden';

        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');

            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = size + 'px';
            ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
});

/* ===============================================
   PREFETCH E PRELOAD
   =============================================== */

/**
 * Prefetch de recursos importantes
 */
document.addEventListener('DOMContentLoaded', () => {
    const links = ['css/style.css', 'css/animations.css', 'js/carousel.js'];
    
    links.forEach(link => {
        const prefetchLink = document.createElement('link');
        prefetchLink.rel = 'prefetch';
        prefetchLink.href = link;
        document.head.appendChild(prefetchLink);
    });
});
