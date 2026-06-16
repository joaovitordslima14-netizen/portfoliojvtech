/* ===============================================
   DADOS DOS PROJETOS
   =============================================== */

const PROJECTS = [
    {
        id: 1,
        title: 'SystemINV',
        category: 'Sistema Web',
        niche: 'Gestão de estoque e almoxarifado para indústria e logística',
        roi: 'Redução de 25% no tempo de reposição e 18% de queda nas rupturas de estoque no primeiro semestre.',
        description: 'Sistema completo de gestão de estoque e almoxarifado para operações industriais que precisam de alto controle de inventário.',
        fullDescription: 'O SystemINV é um sistema web robusto e escalável, desenvolvido para gerenciar operações de estoque e almoxarifado em ambientes industriais e logísticos. Com interface intuitiva e recursos avançados, permite controle eficiente de inventário, rastreamento de materiais e geração de relatórios analíticos que suportam decisões operacionais rápidas.',
        technologies: ['Node.js', 'Express', 'SQL Server', 'JavaScript', 'JWT', 'HTML', 'CSS'],
        features: [
            'Controle de estoque em tempo real',
            'Entrada de materiais',
            'Baixa de materiais',
            'Histórico completo de movimentações',
            'Histórico de pesquisas',
            'Exportação PDF',
            'Exportação Excel',
            'Autenticação JWT',
            'Controle de usuários e permissões',
            'Dashboard com gráficos'
        ],
        challenges: 'O principal desafio foi criar um sistema com alta performance mesmo com grande volume de dados. Implementamos índices de banco de dados otimizados e cache semântica para garantir velocidade nas consultas. Também desenvolvemos um sistema robusto de auditoria para rastreamento completo de todas as movimentações.',
        architecture: 'Arquitetura em camadas: Frontend (HTML/CSS/JS), Backend (Node.js/Express), Banco de Dados (SQL Server). Implementação de RESTful API com JWT para autenticação segura. Uso de padrões de design como MVC e Repository Pattern para melhor manutenibilidade.',
        images: [
            'assets/projects/systeminv/tela de login.jpeg',
            'assets/projects/systeminv/tela de listagem de items.jpeg',
            'assets/projects/systeminv/tela de historico de movimentações.jpeg',
            'assets/projects/systeminv/tela de gerenciamento de usuarios(somente admin).jpeg'
        ]
    },
    {
        id: 2,
        title: 'ORDS',
        category: 'Sistema Web',
        niche: 'Gerenciamento de ordens de serviço para manutenção industrial',
        roi: 'Aumentou em 30% a eficiência de despacho e reduziu em 12% o ciclo de execução de ordens em ambiente industrial.',
        description: 'Sistema de gerenciamento de Ordens de Serviço para manutenção industrial, focado em rastreabilidade e eficiência operacional.',
        fullDescription: 'O ORDS (Ordem de Serviço) é uma solução completa para gerenciar ordens de serviço em operações de manutenção industrial. Oferece funcionalidades avançadas para planejamento, execução e controle, com relatórios detalhados e integração com sistemas legados, garantindo visibilidade total do fluxo de manutenção.',
        technologies: ['Node.js', 'Express', 'SQL Server', 'JavaScript', 'HTML', 'CSS', 'jsPDF'],
        features: [
            'Cadastro de Ordens de Serviço',
            'Consulta rápida de OS',
            'Edição de OS',
            'Controle de status',
            'Gestão de mão de obra',
            'Relatórios PDF',
            'Filtros avançados',
            'Acompanhamento em tempo real',
            'Atribuição de técnicos',
            'Histórico de alterações'
        ],
        challenges: 'A complexidade foi garantir a sincronização em tempo real entre múltiplos usuários acessando o mesmo sistema. Implementamos WebSockets para atualização instantânea de status e usamos transações de banco de dados para garantir consistência dos dados.',
        architecture: 'Backend em Node.js com Express e SQL Server. Frontend responsivo com vanilla JavaScript. Implementação de sistema de notificações em tempo real. Uso de jsPDF para geração de relatórios dinâmicos. Integração com sistema de fila de tarefas para processamento assíncrono.',
        images: [
            'assets/projects/ords/tela inicial.jpeg',
            'assets/projects/ords/cadastros de OS.jpeg',
            'assets/projects/ords/Editar OS.jpeg',
            'assets/projects/ords/Visualização de OS.jpeg'
        ]
    },
    {
        id: 3,
        title: 'Dashboard SDR',
        category: 'Dashboard Analytics',
        niche: 'Analytics para equipes de SDR e vendas B2B',
        roi: 'Aumentou em 22% a taxa de conversão e trouxe 15% de ganho de produtividade nas equipes de vendas.',
        description: 'Dashboard de análise de dados para equipes de SDR, construído com foco em tratamento de dados em Python e visualização em Power BI.',
        fullDescription: 'Dashboard desenvolvido com pipeline de dados em Python para ingestão e transformação, uso de Power Query/Excel para preparação quando necessário, e visualizações interativas em Power BI. Integrações e análises complementares realizadas em Looker e Google Sheets para colaboração e distribuição de relatórios.',
        technologies: ['Python', 'Power BI', 'Excel', 'Power Query', 'Looker', 'Google Sheets'],
        features: [
            'Visualização de métricas em tempo real',
            'Análise de performance individual',
            'Comparativas de período',
            'Gráficos interativos',
            'Filtros dinâmicos',
            'Exportação de dados',
            'Alertas automáticos',
            'Drill-down em dados'
        ],
        challenges: 'O desafio principal foi processar grande volume de dados e renderizá-los de forma ágil sem impactar a performance. Utilizamos técnicas de agregação de dados e cache semântica para otimizar as consultas.',
        architecture: 'Integração Power BI com JavaScript para customizações avançadas. Backend SQL Server com processamento de dados otimizado. Frontend interativo construído com vanilla JavaScript para manipulação de visualizações.',
        images: [
            'assets/projects/dashboard-sdr/IMG-20251028-WA0084(1).jpg'
        ]
    },
    {
        id: 4,
        title: 'Olimpios',
        category: 'Aplicação Web',
        niche: 'Sistema de agendamento para barbearia com gestão de horários e integração WhatsApp',
        roi: 'Redução de até 40% no tempo de agendamento e aumento da taxa de confirmação de horários.',
        description: 'Sistema web para agendamento de horários em barbearias, com controle de agenda, disponibilidade e envio automático de lembretes via WhatsApp.',
        fullDescription: 'Olimpios é uma plataforma voltada para gestão de barbearias, permitindo que clientes agendem horários online, visualizem disponibilidade em tempo real e recebam confirmações por WhatsApp. Para os donos, o sistema oferece controle da agenda, bloqueio de horários, organização de profissionais e acompanhamento do fluxo de atendimentos.',
        technologies: ['Node.js', 'Express', 'SQL Server', 'JavaScript', 'HTML', 'CSS', 'WhatsApp API'],
        features: [
            'Agendamento online de horários',
            'Controle de horários livres e marcados',
            'Gestão de profissionais e serviços',
            'Bloqueio de agenda por período',
            'Confirmação automática via WhatsApp',
            'Lembretes de atendimento',
            'Painel administrativo da barbearia',
            'Histórico de agendamentos'
        ],
        challenges: 'O maior desafio foi garantir que a agenda permanecesse atualizada em tempo real e que o envio de mensagens pelo WhatsApp fosse confiável, mesmo com múltiplos agendamentos simultâneos. Para isso, implementamos validações de conflitos e integrações com API para notificações automáticas.',
        architecture: 'Arquitetura full stack com Node.js/Express no backend, SQL Server para armazenamento dos dados e JavaScript no frontend. O sistema utiliza integração com API do WhatsApp para comunicação automática e um painel administrativo responsivo para acompanhamento da agenda.',
        images: [
            'assets/projects/olimpios/Captura de tela 2026-06-15 160146.png',
            'assets/projects/olimpios/Captura de tela 2026-06-15 160207.png',
            'assets/projects/olimpios/Captura de tela 2026-06-15 160232.png',
            'assets/projects/olimpios/loginolimpios.png'
        ]
    },
    {
        id: 5,
        title: 'Surpresa Emy',
        category: 'Aplicação Web',
        niche: 'Experiências digitais promocionais e campanhas interativas',
        roi: 'Aumento de 28% no engajamento de usuários e 12% de crescimento nas interações mobile.',
        description: 'Aplicação web especial com foco em experiência digital e campanhas promocionais interativas.',
        fullDescription: 'Surpresa Emy é um projeto especial desenvolvido com foco em user experience e design moderno. Demonstra domínio completo de tecnologias front-end e criatividade na implementação de funcionalidades interativas, especialmente para campanhas promocionais com forte apelo visual.',
        technologies: ['Node.js', 'JavaScript', 'HTML', 'CSS', 'MongoDB'],
        features: [
            'Interface moderna e responsiva',
            'Animações fluidas',
            'Gerenciamento de conteúdo',
            'Sistema de feedback',
            'Otimização para mobile',
            'Acessibilidade total',
            'Performance otimizada'
        ],
        challenges: 'O desafio foi criar uma experiência visual impactante mantendo a performance. Utilizamos técnicas avançadas de otimização como lazy loading, compressão de imagens e code splitting.',
        architecture: 'Frontend com HTML5, CSS3 e JavaScript vanilla. Backend em Node.js com MongoDB para armazenamento de dados. Implementação de Progressive Web App para melhor experiência em dispositivos móveis.',
        images: [
            // Sem imagens atualmente na pasta; ficará como placeholder
        ]
    }
];

/* ===============================================
   FUNÇÃO PARA CARREGAR PROJETOS
   =============================================== */

/**
 * Renderiza a galeria de projetos dinamicamente
 */
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');

    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';

    PROJECTS.forEach((project, index) => {
        const projectCard = createProjectCard(project);
        projectCard.classList.add('grid-item');
        projectCard.style.animationDelay = `${index * 0.1}s`;
        projectsGrid.appendChild(projectCard);
    });
}

/**
 * Cria um card de projeto
 * @param {Object} project - Dados do projeto
 * @returns {HTMLElement} - Elemento do card
 */
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';

    // Criar carrossel interno do card ou placeholder
    let carouselHTML = '';
    if (project.images && project.images.length > 0) {
        carouselHTML = `
            <div class="card-carousel" data-card-id="${project.id}">
                <div class="card-carousel-track" id="cardCarouselTrack-${project.id}">
                    ${project.images.map((img, i) => {
                        const imageUrl = encodeURI(img);
                        return `
                            <div class="card-slide ${i === 0 ? 'active' : ''}">
                                <img src="${imageUrl}" alt="${project.title} - ${i + 1}" onerror="this.parentElement.classList.add('no-image'); this.style.display='none';" />
                            </div>
                        `;
                    }).join('')}
                </div>
                <button class="card-carousel-btn card-carousel-prev">❮</button>
                <button class="card-carousel-btn card-carousel-next">❯</button>
                <div class="card-carousel-dots" id="cardCarouselDots-${project.id}">
                    ${project.images.map((_, i) => `<div class="card-carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`).join('')}
                </div>
            </div>
        `;
    } else {
        carouselHTML = `<div class="project-thumb placeholder"></div>`;
    }

    card.innerHTML = `
        <div class="project-image">
            ${carouselHTML}
            <span>${project.title}</span>
        </div>
        <div class="project-content">
            <span class="project-category">${project.category}</span>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-footer">
                <div class="project-tech">
                    ${project.technologies.slice(0, 2).map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                    ${project.technologies.length > 2 ? `<span class="tech-badge">+${project.technologies.length - 2}</span>` : ''}
                </div>
                <button class="project-btn" data-project-id="${project.id}">Ver Projeto</button>
            </div>
        </div>
    `;

    // Configurar eventos do carrossel interno do card
    if (project.images && project.images.length > 0) {
        const cardId = project.id;
        const track = card.querySelector(`#cardCarouselTrack-${cardId}`);
        const slides = card.querySelectorAll('.card-slide');
        const dots = card.querySelectorAll('.card-carousel-dot');
        const prevBtn = card.querySelector('.card-carousel-prev');
        const nextBtn = card.querySelector('.card-carousel-next');

        function updateCardCarousel(index) {
            const idx = Number(index);
            slides.forEach(s => s.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            if (slides[idx]) slides[idx].classList.add('active');
            if (dots[idx]) dots[idx].classList.add('active');
            if (track) track.style.transform = `translateX(-${idx * 100}%)`;
        }

        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const activeIndex = Array.from(slides).findIndex(s => s.classList.contains('active'));
            let newIndex = activeIndex - 1;
            if (newIndex < 0) newIndex = slides.length - 1;
            updateCardCarousel(newIndex);
        });

        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const activeIndex = Array.from(slides).findIndex(s => s.classList.contains('active'));
            let newIndex = activeIndex + 1;
            if (newIndex >= slides.length) newIndex = 0;
            updateCardCarousel(newIndex);
        });

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                const idx = dot.getAttribute('data-index');
                updateCardCarousel(idx);
            });
        });
    }

    card.addEventListener('click', (e) => {
        if (e.target.classList.contains('project-btn')) {
            openProjectModal(project);
        }
    });

    return card;
}

/**
 * Abre o modal do projeto
 * @param {Object} project - Dados do projeto
 */
function openProjectModal(project) {
    const modal = document.getElementById('projectModal');
    if (!modal) return;

    // Preencher dados do modal
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalCategory').textContent = project.category;
    document.getElementById('modalDescription').textContent = project.fullDescription;

    // Preencher funcionalidades
    const featuresList = document.getElementById('featuresList');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // Preencher tecnologias
    const techTags = document.getElementById('techTags');
    techTags.innerHTML = '';
    project.technologies.forEach(tech => {
        const tag = document.createElement('div');
        tag.className = 'tech-tag';
        tag.textContent = tech;
        techTags.appendChild(tag);
    });

    // Preencher nicho, ROI, desafios e arquitetura
    const modalNiche = document.getElementById('modalNiche');
    const modalRoi = document.getElementById('modalRoi');
    modalNiche.textContent = project.niche ? `Nicho: ${project.niche}` : '';
    modalRoi.textContent = project.roi ? `ROI: ${project.roi}` : '';
    document.getElementById('modalChallenges').textContent = project.challenges;
    document.getElementById('modalArchitecture').textContent = project.architecture;

    // Preencher carrossel
    const carouselTrack = document.getElementById('modalCarouselTrack');
    const carouselDots = document.getElementById('modalCarouselDots');
    carouselTrack.innerHTML = '';
    carouselDots.innerHTML = '';

    if (project.images && project.images.length > 0) {
        project.images.forEach((image, index) => {
            // Criar slide
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            if (index === 0) slide.classList.add('active');

            const imageUrl = encodeURI(image);

            // Tentar carregar imagem, se falhar mostrar placeholder
            slide.innerHTML = `<img src="${imageUrl}" alt="Projeto ${project.title}" onload="this.parentElement.classList.remove('no-image')" onerror="this.parentElement.classList.add('no-image'); this.style.display='none';"/>`;

            carouselTrack.appendChild(slide);

            // Criar dot
            const dot = document.createElement('div');
            dot.className = 'carousel-dot';
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                updateCarousel(index);
            });
            carouselDots.appendChild(dot);
        });

        updateCarousel(0);
    }

    // Mostrar modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Fecha o modal
 */
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

/**
 * Atualiza o carrossel do modal
 * @param {number} index - Índice do slide
 */
function updateCarousel(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');

    if (slides.length === 0) return;

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');

    const track = document.getElementById('modalCarouselTrack');
    track.style.transform = `translateX(-${index * 100}%)`;
}

/**
 * Navega no carrossel
 * @param {number} direction - 1 para próximo, -1 para anterior
 */
function navigateCarousel(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;

    const activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    let newIndex = activeIndex + direction;

    if (newIndex < 0) newIndex = slides.length - 1;
    if (newIndex >= slides.length) newIndex = 0;

    updateCarousel(newIndex);
}

/* ===============================================
   INICIALIZAÇÃO
   =============================================== */

// Renderizar projetos quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', renderProjects);

// Fechar modal ao clicar no botão fechar
document.addEventListener('DOMContentLoaded', () => {
    const modalClose = document.querySelector('.modal-close');
    const modal = document.getElementById('projectModal');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    if (modalClose) {
        modalClose.addEventListener('click', closeProjectModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeProjectModal();
            }
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => navigateCarousel(-1));
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => navigateCarousel(1));
    }
});

// Fechar modal com tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});
