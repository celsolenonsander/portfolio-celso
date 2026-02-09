// keywords.js - Sistema de tags e palavras-chave otimizadas
const keywordManager = {
    // Palavras-chave primárias (foco principal)
    primaryKeywords: [
        "programador delphi",
        "desenvolvedor delphi", 
        "programador freelance",
        "desenvolvedor freelance",
        "delphi developer",
        "freelance developer"
    ],
    
    // Palavras-chave secundárias (relacionadas)
    secondaryKeywords: [
        "programador python",
        "desenvolvedor python",
        "programador nestjs", 
        "desenvolvedor nestjs",
        "programador react",
        "desenvolvedor react",
        "programador typescript",
        "desenvolvedor typescript"
    ],
    
    // Palavras-chave de localização
    locationKeywords: [
        "programador santa catarina",
        "desenvolvedor santa catarina", 
        "programador brasil",
        "desenvolvedor brasil",
        "programador sc",
        "desenvolvedor sc",
        "freelance brasil"
    ],
    
    // Palavras-chave de serviços
    serviceKeywords: [
        "desenvolvimento de sistemas",
        "programação de software",
        "criação de sistemas",
        "manutenção de sistemas",
        "consultoria programação",
        "orçamento desenvolvimento"
    ],
    
    // Palavras-chave de experiência
    experienceKeywords: [
        "programador experiente",
        "desenvolvedor experiente", 
        "programador sênior",
        "desenvolvedor sênior",
        "especialista delphi",
        "expert desenvolvimento"
    ],
    
    // Método para gerar meta keywords
    generateMetaKeywords() {
        const allKeywords = [
            ...this.primaryKeywords,
            ...this.secondaryKeywords,
            ...this.locationKeywords,
            ...this.serviceKeywords,
            ...this.experienceKeywords
        ];
        
        return [...new Set(allKeywords)].slice(0, 100).join(', ');
    },
    
    // Método para gerar conteúdo otimizado
    generateOptimizedText(baseText) {
        let optimizedText = baseText;
        
        // Adicionar keywords principais naturalmente
        this.primaryKeywords.forEach(keyword => {
            if (optimizedText.toLowerCase().includes(keyword.split(' ')[0])) {
                const regex = new RegExp(`\\b${keyword.split(' ')[0]}\\b`, 'gi');
                optimizedText = optimizedText.replace(regex, match => {
                    // 30% de chance de usar a keyword completa
                    if (Math.random() < 0.3) {
                        return keyword;
                    }
                    return match;
                });
            }
        });
        
        return optimizedText;
    },
    
    // Adicionar tags visuais na página
    addKeywordTags() {
        const tagsContainer = document.createElement('div');
        tagsContainer.id = 'keyword-tags';
        tagsContainer.className = 'container mt-4 mb-4 d-none d-print-block';
        tagsContainer.style.cssText = 'opacity: 0.7; font-size: 0.8rem;';
        
        const tags = [...this.primaryKeywords, ...this.locationKeywords].slice(0, 10);
        
        tagsContainer.innerHTML = `
            <div class="text-center">
                <span class="badge bg-secondary m-1">${tags[0]}</span>
                <span class="badge bg-secondary m-1">${tags[1]}</span>
                <span class="badge bg-secondary m-1">${tags[2]}</span>
                <span class="badge bg-secondary m-1">${tags[3]}</span>
                <span class="badge bg-secondary m-1">${tags[4]}</span>
            </div>
        `;
        
        // Adicionar antes do footer
        const footer = document.querySelector('footer');
        if (footer) {
            footer.parentNode.insertBefore(tagsContainer, footer);
        }
    },
    
    // Adicionar breadcrumb otimizado
    addOptimizedBreadcrumb() {
        const breadcrumb = document.createElement('nav');
        breadcrumb.setAttribute('aria-label', 'breadcrumb');
        breadcrumb.className = 'container mt-3 d-print-none';
        
        breadcrumb.innerHTML = `
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Início</a></li>
                <li class="breadcrumb-item"><a href="#sobre">Programador Delphi</a></li>
                <li class="breadcrumb-item"><a href="#experiencia">Experiência</a></li>
                <li class="breadcrumb-item active" aria-current="page">Freelance</li>
            </ol>
        `;
        
        // Adicionar após o navbar
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.parentNode.insertBefore(breadcrumb, navbar.nextSibling);
        }
    },
    
    // Inicializar
    init() {
        // Adicionar meta keywords
        const metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        metaKeywords.content = this.generateMetaKeywords();
        document.head.appendChild(metaKeywords);
        
        // Adicionar tags
        this.addKeywordTags();
        this.addOptimizedBreadcrumb();
        
        console.log('Keyword manager inicializado');
    }
};

// Inicializar quando DOM carregar
document.addEventListener('DOMContentLoaded', () => keywordManager.init());