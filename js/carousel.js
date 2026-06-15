/* ===============================================
   CAROUSEL / CARROSSEL
   =============================================== */

class Carousel {
    /**
     * Inicializa o carrossel
     * @param {HTMLElement|string} container - Container do carrossel
     * @param {Object} options - Opções do carrossel
     */
    constructor(container, options = {}) {
        this.container = typeof container === 'string' 
            ? document.querySelector(container) 
            : container;

        if (!this.container) return;

        // Opções padrão
        this.options = {
            autoplay: options.autoplay !== false,
            speed: options.speed || 3000,
            transition: options.transition || 500,
            loop: options.loop !== false,
            keyboard: options.keyboard !== false,
            touch: options.touch !== false,
            ...options
        };

        // Propriedades
        this.currentIndex = 0;
        this.slides = [];
        this.isTransitioning = false;
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.autoplayTimeout = null;

        // Inicializar
        this.init();
    }

    /**
     * Inicializa o carrossel
     */
    init() {
        this.getSlides();
        this.createControls();
        this.bindEvents();

        if (this.options.autoplay && this.slides.length > 1) {
            this.startAutoplay();
        }
    }

    /**
     * Obtém todos os slides
     */
    getSlides() {
        this.slides = Array.from(this.container.querySelectorAll('.carousel-slide'));
    }

    /**
     * Cria controles do carrossel
     */
    createControls() {
        const track = this.container.querySelector('.carousel-track');

        if (!track) return;

        // Adicionar classe ativa ao primeiro slide
        if (this.slides.length > 0) {
            this.slides[0].classList.add('active');
        }
    }

    /**
     * Vincula eventos
     */
    bindEvents() {
        // Navegação com botões
        const prevBtn = this.container.querySelector('.carousel-prev');
        const nextBtn = this.container.querySelector('.carousel-next');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prev());
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.next());
        }

        // Navegação com dots
        const dots = this.container.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goTo(index));
        });

        // Teclado
        if (this.options.keyboard) {
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') this.prev();
                if (e.key === 'ArrowRight') this.next();
            });
        }

        // Touch/Swipe
        if (this.options.touch) {
            this.container.addEventListener('touchstart', (e) => this.handleTouchStart(e));
            this.container.addEventListener('touchend', (e) => this.handleTouchEnd(e));
        }

        // Pausar autoplay ao passar o mouse
        if (this.options.autoplay) {
            this.container.addEventListener('mouseenter', () => this.pauseAutoplay());
            this.container.addEventListener('mouseleave', () => this.startAutoplay());
        }
    }

    /**
     * Navega para o próximo slide
     */
    next() {
        if (this.isTransitioning) return;

        let index = this.currentIndex + 1;

        if (index >= this.slides.length) {
            index = this.options.loop ? 0 : this.slides.length - 1;
        }

        this.goTo(index);
    }

    /**
     * Navega para o slide anterior
     */
    prev() {
        if (this.isTransitioning) return;

        let index = this.currentIndex - 1;

        if (index < 0) {
            index = this.options.loop ? this.slides.length - 1 : 0;
        }

        this.goTo(index);
    }

    /**
     * Navega para um slide específico
     * @param {number} index - Índice do slide
     */
    goTo(index) {
        if (this.isTransitioning || index === this.currentIndex) return;
        if (index < 0 || index >= this.slides.length) return;

        this.isTransitioning = true;

        // Remover classe ativa do slide atual
        this.slides[this.currentIndex].classList.remove('active');

        // Adicionar classe ativa ao novo slide
        this.currentIndex = index;
        this.slides[this.currentIndex].classList.add('active');

        // Atualizar track
        this.updateTrack();

        // Atualizar dots
        this.updateDots();

        // Resetar autoplay
        if (this.options.autoplay) {
            this.pauseAutoplay();
            this.startAutoplay();
        }

        // Permitir próxima transição
        setTimeout(() => {
            this.isTransitioning = false;
        }, this.options.transition);
    }

    /**
     * Atualiza a posição do track
     */
    updateTrack() {
        const track = this.container.querySelector('.carousel-track');
        if (!track) return;

        const offset = -this.currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
    }

    /**
     * Atualiza os dots
     */
    updateDots() {
        const dots = this.container.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            if (index === this.currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    /**
     * Manipula início do touch
     * @param {TouchEvent} e - Evento de touch
     */
    handleTouchStart(e) {
        this.touchStartX = e.changedTouches[0].screenX;
    }

    /**
     * Manipula fim do touch
     * @param {TouchEvent} e - Evento de touch
     */
    handleTouchEnd(e) {
        this.touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
    }

    /**
     * Manipula swipe
     */
    handleSwipe() {
        const diff = this.touchStartX - this.touchEndX;
        const threshold = 50; // pixels

        if (Math.abs(diff) < threshold) return;

        if (diff > 0) {
            // Swipe para esquerda = próximo
            this.next();
        } else {
            // Swipe para direita = anterior
            this.prev();
        }
    }

    /**
     * Inicia autoplay
     */
    startAutoplay() {
        if (!this.options.autoplay || this.slides.length <= 1) return;

        this.autoplayTimeout = setTimeout(() => {
            this.next();
            this.startAutoplay();
        }, this.options.speed);
    }

    /**
     * Pausa autoplay
     */
    pauseAutoplay() {
        if (this.autoplayTimeout) {
            clearTimeout(this.autoplayTimeout);
            this.autoplayTimeout = null;
        }
    }

    /**
     * Destrói o carrossel
     */
    destroy() {
        this.pauseAutoplay();

        const prevBtn = this.container.querySelector('.carousel-prev');
        const nextBtn = this.container.querySelector('.carousel-next');

        if (prevBtn) {
            prevBtn.removeEventListener('click', () => this.prev());
        }

        if (nextBtn) {
            nextBtn.removeEventListener('click', () => this.next());
        }
    }
}

/* ===============================================
   INICIALIZAÇÃO DOS CARROSSÉIS
   =============================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar carrossel do modal
    const modalCarousel = document.querySelector('.modal-carousel');
    if (modalCarousel) {
        new Carousel(modalCarousel, {
            autoplay: false,
            keyboard: true,
            touch: true
        });
    }

    // Inicializar outros carrosséis se existirem
    const carousels = document.querySelectorAll('[data-carousel]');
    carousels.forEach(carousel => {
        const autoplay = carousel.getAttribute('data-autoplay') !== 'false';
        const speed = parseInt(carousel.getAttribute('data-speed')) || 3000;

        new Carousel(carousel, {
            autoplay: autoplay,
            speed: speed
        });
    });
});

/* ===============================================
   CAROUSEL COM MÚLTIPLOS SLIDES VISÍVEIS
   =============================================== */

class MultiSlideCarousel extends Carousel {
    /**
     * Inicializa carrossel com múltiplos slides visíveis
     * @param {HTMLElement|string} container - Container do carrossel
     * @param {Object} options - Opções do carrossel
     */
    constructor(container, options = {}) {
        // Opções específicas para múltiplos slides
        options.slidesPerView = options.slidesPerView || 3;
        options.gap = options.gap || 20;

        super(container, options);
    }

    /**
     * Atualiza a posição do track com múltiplos slides
     */
    updateTrack() {
        const track = this.container.querySelector('.carousel-track');
        if (!track) return;

        const slideWidth = 100 / this.options.slidesPerView;
        const offset = -this.currentIndex * slideWidth;
        track.style.transform = `translateX(${offset}%)`;
    }

    /**
     * Navega para o próximo grupo de slides
     */
    next() {
        if (this.isTransitioning) return;

        let index = this.currentIndex + 1;
        const maxIndex = Math.max(0, this.slides.length - this.options.slidesPerView);

        if (index > maxIndex) {
            index = this.options.loop ? 0 : maxIndex;
        }

        this.goTo(index);
    }

    /**
     * Navega para o grupo anterior de slides
     */
    prev() {
        if (this.isTransitioning) return;

        let index = this.currentIndex - 1;

        if (index < 0) {
            index = this.options.loop ? Math.max(0, this.slides.length - this.options.slidesPerView) : 0;
        }

        this.goTo(index);
    }
}

/* ===============================================
   UTILITY: CRIAR CARROSSEL DINAMICAMENTE
   =============================================== */

/**
 * Cria um carrossel dinamicamente
 * @param {Array} items - Items para o carrossel
 * @param {HTMLElement} container - Container onde renderizar
 * @param {Function} renderItem - Função para renderizar cada item
 * @param {Object} options - Opções do carrossel
 */
function createCarouselFromArray(items, container, renderItem, options = {}) {
    if (items.length === 0) return;

    // Limpar container
    container.innerHTML = '';

    // Criar track
    const track = document.createElement('div');
    track.className = 'carousel-track';

    // Adicionar items
    items.forEach(item => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.appendChild(renderItem(item));
        track.appendChild(slide);
    });

    // Criar container de carrossel
    const carouselContainer = document.createElement('div');
    carouselContainer.className = 'carousel-container';
    carouselContainer.appendChild(track);

    // Adicionar controles se houver mais de um item
    if (items.length > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.className = 'carousel-btn carousel-prev';
        prevBtn.textContent = '❮';
        carouselContainer.appendChild(prevBtn);

        const nextBtn = document.createElement('button');
        nextBtn.className = 'carousel-btn carousel-next';
        nextBtn.textContent = '❯';
        carouselContainer.appendChild(nextBtn);

        // Criar dots
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'carousel-dots';

        items.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot';
            if (index === 0) dot.classList.add('active');
            dotsContainer.appendChild(dot);
        });

        container.appendChild(carouselContainer);
        container.appendChild(dotsContainer);
    } else {
        container.appendChild(carouselContainer);
    }

    // Inicializar carrossel
    new Carousel(container, options);
}

/* ===============================================
   EXEMPLO DE USO
   =============================================== */

/**
 * Exemplo:
 * 
 * const items = [
 *     { title: 'Slide 1', image: 'image1.jpg' },
 *     { title: 'Slide 2', image: 'image2.jpg' },
 *     { title: 'Slide 3', image: 'image3.jpg' }
 * ];
 *
 * function renderItem(item) {
 *     const div = document.createElement('div');
 *     div.innerHTML = `
 *         <img src="${item.image}" alt="${item.title}">
 *         <h3>${item.title}</h3>
 *     `;
 *     return div;
 * }
 *
 * const container = document.getElementById('carousel-container');
 * createCarouselFromArray(items, container, renderItem, {
 *     autoplay: true,
 *     speed: 3000
 * });
 */
