// render.js - Renderiza os dados no HTML
document.addEventListener('DOMContentLoaded', function() {
    // Atualizar ano atual no rodapé
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Dados pessoais
    const personal = portfolioData.personal;
    document.getElementById('nav-name').textContent = personal.name;
    document.getElementById('hero-name').textContent = personal.name;
    document.getElementById('hero-title').textContent = personal.title;
    document.getElementById('experience-year').textContent = personal.experienceSince;
    document.getElementById('profile-img').src = personal.profileImg;
    document.getElementById('footer-name').textContent = personal.name;
    document.getElementById('footer-title').textContent = personal.title;
    
    // Botões do hero
    const heroButtons = document.getElementById('hero-buttons');
    heroButtons.innerHTML = `
        <a href="mailto:${personal.email}?subject=Contato%20pelo%20site&body=Olá%20${personal.name.split(' ')[0]},%20vim%20pelo%20seu%20portfólio." class="btn btn-primary btn-lg">
            <i class="bi bi-envelope me-2"></i>Contato
        </a>
        <a href="https://linkedin.com/in/${personal.linkedin.split('/').pop()}" target="_blank" class="btn btn-outline-light btn-lg">
            <i class="bi bi-linkedin me-2"></i>LinkedIn
        </a>
        <a href="https://github.com/${personal.github}" target="_blank" class="btn btn-outline-light btn-lg">
            <i class="bi bi-github me-2"></i>GitHub
        </a>
        <a href="#projetos" class="btn btn-accent btn-lg">
            <i class="bi bi-folder me-2"></i>Projetos
        </a>
        <button onclick="gerarCurriculoPDF()" class="btn btn-light btn-lg">
            <i class="bi bi-file-earmark-pdf me-2"></i>Baixar Currículo em PDF
        </button>
    `;
    
    // WhatsApp link
    document.getElementById('whatsapp-link').href = personal.whatsapp + 
        `?text=Olá%20${encodeURIComponent(personal.name.split(' ')[0])},%20vim%20pelo%20seu%20portfólio!`;
    
    // Perfil profissional
    const profile = portfolioData.profile;
    document.getElementById('profile-summary').textContent = profile.summary;
    
    const profileHighlights = document.getElementById('profile-highlights');
    profileHighlights.innerHTML = `
        <div class="col-md-6">
            <h5 class="text-primary mb-3"><i class="bi bi-gear me-2"></i>Atuação</h5>
            <ul class="list-unstyled">
                ${profile.highlights.slice(0, 3).map(item => `
                    <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-success me-2"></i>
                        ${item}
                    </li>
                `).join('')}
            </ul>
        </div>
        <div class="col-md-6">
            <h5 class="text-primary mb-3"><i class="bi bi-shield-check me-2"></i>Especializações</h5>
            <ul class="list-unstyled">
                ${profile.highlights.slice(3).map(item => `
                    <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-success me-2"></i>
                        ${item}
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
    
    // Domínios
    const domainsContainer = document.getElementById('domains-container');
    portfolioData.domains.forEach(domain => {
        const domainElement = document.createElement('div');
        domainElement.className = 'col-md-6 col-lg-4 mb-4';
        domainElement.innerHTML = `
            <div class="domain-card">
                <div class="domain-icon bg-${domain.color}">
                    <i class="bi ${domain.icon}"></i>
                </div>
                <h4>${domain.title}</h4>
                <p>${domain.description}</p>
            </div>
        `;
        domainsContainer.appendChild(domainElement);
    });
    
    // Tecnologias
    const tech = portfolioData.technologies;
    
    function renderTechBadges(containerId, items, customClass = '') {
        const container = document.getElementById(containerId);
        items.forEach(item => {
            const badge = document.createElement('span');
            badge.className = `tech-badge ${customClass}`;
            badge.textContent = item;
            container.appendChild(badge);
        });
    }
    
    // Renderizar badges com classes específicas para CSS
    renderTechBadges('tech-languages', tech.languages, 'delphi');
    renderTechBadges('tech-databases', tech.databases, 'firebird');
    renderTechBadges('tech-architecture', tech.architecture, 'architecture');
    renderTechBadges('tech-backend', tech.backend, 'api');
    renderTechBadges('tech-devops', tech.devops, 'quality');
    
    // Freelance
    const freelance = portfolioData.freelance;
    const freelanceContainer = document.getElementById('freelance-container');
    freelanceContainer.innerHTML = `
        <div class="timeline-item">
            <div class="timeline-content">
                <div class="timeline-date">${freelance.period}</div>
                <h4>${freelance.title}</h4>
                <h5>${freelance.position}</h5>
                <p>${freelance.description}</p>
                <div class="tech-tags">
                    ${freelance.tags.map(tag => `<span class="badge bg-primary">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
    
    // Experiência profissional
    const experienceContainer = document.getElementById('experience-container');
    portfolioData.experience.forEach(exp => {
        const expElement = document.createElement('div');
        expElement.className = 'timeline-item';
        expElement.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${exp.period}</div>
                <h4>${exp.company}</h4>
                <h5>${exp.position}</h5>
                <p>${exp.description}</p>
                <div class="tech-tags">
                    ${exp.tags.map(tag => `<span class="badge bg-primary">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        experienceContainer.appendChild(expElement);
    });
    
    // Projetos destacados
    const projectsContainer = document.getElementById('projects-container');
    
    // Primeira linha (3 projetos)
    portfolioData.projects.slice(0, 3).forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'col-md-4 mb-4';
        projectElement.innerHTML = `
            <div class="card h-100 border-0 shadow project-card">
                <div class="card-body p-4">
                    <div class="project-icon mb-3">
                        <i class="bi ${project.icon}"></i>
                    </div>
                    <h4 class="card-title">${project.title}</h4>
                    <p class="card-text">${project.description}</p>
                    <div class="mb-3">
                        ${project.tags.map(tag => `<span class="badge bg-primary">${tag}</span>`).join('')}
                    </div>
                    <div class="project-result">
                        <i class="bi bi-check-circle text-success me-1"></i>
                        ${project.result}
                    </div>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectElement);
    });
    
    // Segunda linha (2 projetos)
    const secondRow = document.createElement('div');
    secondRow.className = 'row mt-4';
    
    portfolioData.projects.slice(3).forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'col-md-6 mb-4';
        projectElement.innerHTML = `
            <div class="card h-100 border-0 shadow project-card">
                <div class="card-body p-4">
                    <div class="project-icon mb-3">
                        <i class="bi ${project.icon}"></i>
                    </div>
                    <h4 class="card-title">${project.title}</h4>
                    <p class="card-text">${project.description}</p>
                    <div class="mb-3">
                        ${project.tags.map(tag => `<span class="badge bg-primary">${tag}</span>`).join('')}
                    </div>
                    <div class="project-result">
                        <i class="bi bi-check-circle text-success me-1"></i>
                        ${project.result}
                    </div>
                </div>
            </div>
        `;
        secondRow.appendChild(projectElement);
    });
    
    projectsContainer.appendChild(secondRow);
    
    // IA & Data
    const ai = portfolioData.ai;
    document.getElementById('ai-description').textContent = ai.description;
    
    const aiSpecialties = document.getElementById('ai-specialties');
    aiSpecialties.innerHTML = `
        <div class="col-lg-8 mx-auto">
            <div class="card bg-dark-2 border-0">
                <div class="card-body p-4">
                    <h4 class="text-accent mb-4">
                        <i class="bi bi-cpu me-2"></i>${ai.title}
                    </h4>
                    <div class="row">
                        <div class="col-md-6">
                            <ul class="list-unstyled">
                                ${ai.specialties.map(spec => `
                                    <li class="mb-3">
                                        <i class="bi bi-check-circle text-accent me-2"></i>
                                        <strong>${spec.title}</strong> ${spec.description}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <ul class="list-unstyled">
                                <li class="mb-3">
                                    <i class="bi bi-check-circle text-accent me-2"></i>
                                    <strong>Aplicação de IA</strong> para:
                                </li>
                                ${ai.applications.map(app => `
                                    <li class="ms-4 mb-2">
                                        <i class="bi bi-arrow-right-short text-accent"></i>
                                        ${app}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const aiCards = document.getElementById('ai-cards');
    ai.cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'col-md-3 mb-4';
        cardElement.innerHTML = `
            <div class="ia-card p-4">
                <div class="ia-icon mb-3">
                    <i class="bi ${card.icon}"></i>
                </div>
                <h5>${card.title}</h5>
                    <p class="small">${card.description}</p>
            </div>
        `;
        aiCards.appendChild(cardElement);
    });
    
    // Resumo técnico
    const techSummary = portfolioData.technicalSummary;
    const technicalSummary = document.getElementById('technical-summary');
    technicalSummary.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <h5 class="text-primary mb-3"><i class="bi bi-briefcase me-2"></i>Domínios</h5>
                <div class="d-flex flex-wrap gap-2 mb-4">
                    ${techSummary.domains.map(domain => `<span class="badge bg-delphi">${domain}</span>`).join('')}
                </div>
                
                <h5 class="text-primary mb-3"><i class="bi bi-code-slash me-2"></i>Linguagens</h5>
                <div class="d-flex flex-wrap gap-2 mb-4">
                    ${techSummary.languages.map(lang => `<span class="badge bg-delphi">${lang}</span>`).join('')}
                </div>
                
                <h5 class="text-primary mb-3"><i class="bi bi-cpu me-2"></i>IA & ML</h5>
                <div class="d-flex flex-wrap gap-2 mb-4">
                    ${techSummary.ai.map(ai => `<span class="badge bg-delphi">${ai}</span>`).join('')}
                </div>
            </div>
            
            <div class="col-md-6">
                <h5 class="text-primary mb-3"><i class="bi bi-database me-2"></i>Bancos</h5>
                <div class="d-flex flex-wrap gap-2 mb-4">
                    ${techSummary.databases.map(db => `<span class="badge bg-delphi">${db}</span>`).join('')}
                </div>
                
                <h5 class="text-primary mb-3"><i class="bi bi-diagram-3 me-2"></i>Arquitetura</h5>
                <div class="d-flex flex-wrap gap-2 mb-4">
                    ${techSummary.architecture.map(arch => `<span class="badge bg-info">${arch}</span>`).join('')}
                </div>
                
                <h5 class="text-primary mb-3"><i class="bi bi-shield-check me-2"></i>Qualidade & Segurança</h5>
                <div class="d-flex flex-wrap gap-2">
                    ${techSummary.quality.map(q => `<span class="badge bg-react">${q}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
    
    // Contato
    const contactContainer = document.getElementById('contact-container');
    contactContainer.innerHTML = `
        <div class="col-md-3 mb-4">
            <a href="mailto:${personal.email}?subject=Contato%20pelo%20site&body=Olá%20${personal.name.split(' ')[0]},%20vim%20pelo%20seu%20portfólio." class="contact-link">
                <div class="contact-card p-4">
                    <i class="bi bi-envelope-fill display-6 mb-3 text-primary"></i>
                    <h5 class="text-dark">E-mail</h5>
                    <p class="small text-muted">${personal.email}</p>
                </div>
            </a>
        </div>
        
        <div class="col-md-3 mb-4">
            <a href="https://linkedin.com/in/${personal.linkedin}" target="_blank" class="contact-link">
                <div class="contact-card p-4">
                    <i class="bi bi-linkedin display-6 mb-3 text-primary"></i>
                    <h5 class="text-dark">LinkedIn</h5>
                    <p class="small text-muted">/${personal.linkedin}</p>
                </div>
            </a>
        </div>
        
        <div class="col-md-3 mb-4">
            <a href="${personal.whatsapp}?text=Olá%20${encodeURIComponent(personal.name.split(' ')[0])},%20vim%20pelo%20seu%20portfólio!" target="_blank" class="contact-link">
                <div class="contact-card p-4">
                    <i class="bi bi-whatsapp display-6 mb-3 text-primary"></i>
                    <h5 class="text-dark">WhatsApp</h5>
                    <p class="small text-muted">${personal.phone}</p>
                </div>
            </a>
        </div>
        
        <div class="col-md-3 mb-4">
            <a href="https://github.com/${personal.github}" target="_blank" class="contact-link">
                <div class="contact-card p-4">
                    <i class="bi bi-github display-6 mb-3 text-primary"></i>
                    <h5 class="text-dark">GitHub</h5>
                    <p class="small text-muted">/${personal.github}</p>
                </div>
            </a>
        </div>
    `;
    
    // Após carregar os dados, aplicar efeito de digitação no título
    aplicarEfeitoDigitacao();
    
    console.log('Dados do portfólio renderizados com sucesso!');
});

// Função para aplicar efeito de digitação
function aplicarEfeitoDigitacao() {
    const heroTitle = document.querySelector('#hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 30);
            }
        };
        
        // Iniciar após um pequeno delay
        setTimeout(typeWriter, 500);
    }
}