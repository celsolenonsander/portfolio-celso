// seo-content.js - Conteúdo otimizado para palavras-chave específicas
const seoContent = {
    // Títulos otimizados para cada seção
    titles: {
        hero: "Programador Delphi Sênior | Desenvolvedor Freelance de Software",
        about: "Perfil do Programador Delphi Experiente",
        domains: "Especializações do Desenvolvedor Delphi",
        technologies: "Tecnologias do Programador de Software",
        experience: "Experiência do Desenvolvedor Senior",
        projects: "Projetos do Programador Freelance",
        contact: "Contrate o Desenvolvedor Delphi"
    },
    
    // Descrições otimizadas para SEO
    descriptions: {
        hero: "Sou um <strong>programador </strong> com mais de 10 anos de experiência, atuando como <strong>desenvolvedor freelance</strong> para criação de sistemas corporativos, ERP, PDV, folha de pagamento e integração com IA. <strong>Desenvolvedor disponível</strong> para projetos novos ou manutenção de sistemas legados.",
        about: "Como <strong>programador Delphi experiente</strong>, ofereço serviços de <strong>desenvolvimento de software</strong> completo, desde análise até implementação. <strong>Desenvolvedor freelance</strong> especializado em aplicações desktop e integração de sistemas.",
        domains: "Domínios de atuação do <strong>programador Delphi</strong>: sistemas fiscais, contábeis, folha de pagamento, ERP, PDV e telefonia. <strong>Desenvolvedor com experiência</strong> em múltiplos setores.",
        technologies: "Stack tecnológico do <strong>desenvolvedor</strong>: Delphi, Python, NestJS, React, TypeScript, Firebird, SQL Server. <strong>Programador</strong> com conhecimento em arquitetura de software e boas práticas.",
        freelance: "Atuo como <strong>programador freelance</strong> desde 2018, desenvolvendo soluções personalizadas como <strong>desenvolvedor independente</strong>. <strong>Freelancer Delphi</strong> para projetos de curto e longo prazo."
    },
    
    // Keywords específicas para cada seção
    keywords: {
        hero: ["programador delphi", "programador", "desenvolvedor", "contratar freelance", "desenvolvedor freelance", "programador freelance", "desenvolvedor delphi"],
        about: ["programador experiente", "desenvolvedor senior", "especialista delphi", "consultor desenvolvimento"],
        technologies: ["tecnologias delphi", "nestjs", "react", "stack desenvolvedor", "ferramentas programador", "linguagens programação"],
        contact: ["contratar programador", "contratar desenvolvedor", "orçamento projeto", "desenvolvedor disponível"]
    },
    
    // FAQ para SEO (aparece em rich results)
    faq: [
        {
            question: "Você é um programador Delphi freelance?",
            answer: "Sim, sou programador Delphi freelance com mais de 10 anos de experiência. Trabalho como desenvolvedor independente desde 2018, oferecendo serviços de desenvolvimento, manutenção e consultoria em Delphi e outras tecnologias."
        },
        {
            question: "Você é um programador freelance?",
            answer: "Sim, sou programador freelance com mais de 10 anos de experiência. Trabalho como desenvolvedor independente desde 2018, oferecendo serviços de desenvolvimento, manutenção e consultoria em Delphi e outras tecnologias."
        },        
        {
            question: "Quais são suas especializações como desenvolvedor?",
            answer: "Como desenvolvedor, minhas principais especializações são: sistemas corporativos (ERP, PDV), fiscais, contábeis, folha de pagamento, integração de hardware e IA. Sou programador experiente em Delphi, Python, NestJS e React."
        },
        {
            question: "Você trabalha com desenvolvedor remoto?",
            answer: "Sim, trabalho como desenvolvedor remoto para clientes de todo o Brasil. Como programador freelance, posso atender projetos de forma remota, com reuniões online e entrega via repositórios Git."
        },
        {
            question: "Como contratar um programador Delphi para meu projeto?",
            answer: "Para contratar um programador Delphi, entre em contato pelo formulário ou WhatsApp. Como desenvolvedor freelance, ofereço orçamento sem compromisso e análise detalhada do seu projeto."
        },
        {
            question: "Como contratar um programador para meu projeto?",
            answer: "Para contratar um programador, entre em contato pelo formulário ou WhatsApp. Como desenvolvedor freelance, ofereço orçamento sem compromisso e análise detalhada do seu projeto."
        },        
        {
            question: "Você é desenvolvedor sênior?",
            answer: "Sim, sou desenvolvedor sênior com experiência desde 2013. Como programador sênior, já trabalhei em grandes sistemas corporativos e tenho expertise em arquitetura de software, qualidade de código e integrações complexas."
        }
    ],
    
    // Textos otimizados para micro-conteúdo
    microContent: {
        cta: "💻 Precisa de um programador Delphi?",
        availability: "✅ Desenvolvedor disponível para novos projetos",
        expertise: "🔥 Especialista em Delphi com 10+ anos",
        freelance: "🚀 Programador freelance para seu projeto"
    },
    
    // Local SEO (para Santa Catarina/Brasil)
    localSeo: {
        city: "Santa Catarina",
        state: "SC",
        country: "Brasil",
        services: [
            "Programador Delphi em Santa Catarina",
            "Programador em Santa Catarina",
            "Desenvolvedor freelance no Brasil",
            "Programador remoto para todo Brasil",
            "Desenvolvedor Delphi brasileiro",
            "Desenvolvedor brasileiro",
            "Programador brasileiro"
        ]
    }
};

// Aplicar conteúdo otimizado ao HTML
function applySeoContent() {
    // Aplicar títulos otimizados
    document.title = seoContent.titles.hero;
    
    // Aplicar descrições otimizadas
    const heroDesc = document.getElementById('hero-description');
    if (heroDesc) {
        heroDesc.innerHTML = seoContent.descriptions.hero;
    }
    
    // Adicionar FAQ ao final da página (oculto para usuários, visível para SEO)
    addFaqSection();
    
    // Adicionar micro-conteúdo otimizado
    addMicroSeoContent();
    
    // Adicionar meta tags dinâmicas
    addDynamicMetaTags();
    
    console.log('Conteúdo SEO aplicado com sucesso!');
}

// Adicionar seção FAQ otimizada
function addFaqSection() {
    const faqSection = document.createElement('section');
    faqSection.id = 'seo-faq';
    faqSection.className = 'py-5 bg-light';
    faqSection.setAttribute('itemscope', '');
    faqSection.setAttribute('itemtype', 'https://schema.org/FAQPage');
    faqSection.style.cssText = `
        position: absolute;
        left: -9999px;
        width: 1px;
        height: 1px;
        overflow: hidden;
    `;
    
    
    let faqHTML = `
        <div class="container">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <h2 class="section-title">Perguntas Frequentes - Programador Delphi</h2>
                    <div class="accordion" id="faqAccordion">
    `;
    
    seoContent.faq.forEach((item, index) => {
        faqHTML += `
            <div class="accordion-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 class="accordion-header" id="faqHeading${index}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                            data-bs-target="#faqCollapse${index}" aria-expanded="false" 
                            aria-controls="faqCollapse${index}" itemprop="name">
                        ${item.question}
                    </button>
                </h3>
                <div id="faqCollapse${index}" class="accordion-collapse collapse" 
                     aria-labelledby="faqHeading${index}" data-bs-parent="#faqAccordion">
                    <div class="accordion-body" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                        <div itemprop="text">${item.answer}</div>
                    </div>
                </div>
            </div>
        `;
    });
    
    faqHTML += `
                    </div>
                </div>
            </div>
        </div>
    `;
    
    faqSection.innerHTML = faqHTML;
    
    // Adicionar antes do footer
    const footer = document.querySelector('footer');
    if (footer) {
        footer.parentNode.insertBefore(faqSection, footer);
    }
}

// Adicionar micro-conteúdo otimizado
function addMicroSeoContent() {
    // CTA invisível (SEO)
    const heroButtons = document.getElementById('hero-buttons');
    if (heroButtons) {
        const ctaText = document.createElement('p');
        ctaText.className = 'seo-only';
        ctaText.textContent = seoContent.microContent.cta;
        heroButtons.parentNode.appendChild(ctaText);
    }

    // Badge invisível (SEO)
    const availabilityBadge = document.createElement('div');
    availabilityBadge.className = 'seo-only';
    availabilityBadge.textContent = seoContent.microContent.availability;
    document.querySelector('#experience-badge')
        ?.parentNode
        ?.appendChild(availabilityBadge);
}

}

// Adicionar meta tags dinâmicas
function addDynamicMetaTags() {
    // Keywords dinâmicas baseadas no conteúdo
    const keywordsMeta = document.createElement('meta');
    keywordsMeta.name = 'keywords';
    keywordsMeta.content = Object.values(seoContent.keywords).flat().join(', ');
    document.head.appendChild(keywordsMeta);
    
    // Meta para localização
    const geoMeta = document.createElement('meta');
    geoMeta.name = 'geo.placename';
    geoMeta.content = seoContent.localSeo.city;
    document.head.appendChild(geoMeta);
    
    const regionMeta = document.createElement('meta');
    regionMeta.name = 'geo.region';
    regionMeta.content = `BR-${seoContent.localSeo.state}`;
    document.head.appendChild(regionMeta);
    
    const positionMeta = document.createElement('meta');
    positionMeta.name = 'geo.position';
    positionMeta.content = '-27.5969;-48.5495'; // Coordenadas aproximadas de SC
    document.head.appendChild(positionMeta);
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', applySeoContent);