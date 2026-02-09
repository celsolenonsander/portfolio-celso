// data.js - Fonte única de dados
const portfolioData = {
    // Dados pessoais
    personal: {
        name: "Celso Lenon Sander",
        title: "Desenvolvedor de Software | Especialista em Sistemas Corporativos | IA Integrada",
        email: "celsolsander@gmail.com",
        phone: "(48) 9.9690-1919",
        linkedin: "celsolenonsander",
        github: "celsolenonsander",
        whatsapp: "https://wa.me/5548996901919",
        experienceSince: 2013,
        profileImg: "img/eu.png"
    },

    // Perfil profissional
    profile: {
        summary: "Desenvolvedor de Software com sólida experiência (Desde 2013) no desenvolvimento de sistemas, atuando em projetos fiscais, contábeis, folha de pagamento, ERP, PDV e sistemas telefônicos (Integrações com hardware) e muitos outros. Forte foco em aplicações Desktop, arquitetura de software, qualidade de código, segurança e integração de Inteligência Artificial, com atuação desde a análise de negócio até a entrega e sustentação das soluções.",
        highlights: [
            "Análise de negócio",
            "Arquitetura de software",
            "Desenvolvimento full-stack",
            "Qualidade de código",
            "Segurança da informação",
            "Integração de IA"
        ]
    },

    // Domínios de negócio
    domains: [
        {
            id: "fiscal",
            title: "Sistemas Fiscais",
            description: "Desenvolvimento de soluções para gestão fiscal e tributária",
            icon: "bi-calculator",
            color: "primary"
        },
        {
            id: "contabil",
            title: "Sistemas Contábeis",
            description: "Soluções para contabilidade e gestão financeira",
            icon: "bi-cash-stack",
            color: "success"
        },
        {
            id: "folha",
            title: "Folha de Pagamento",
            description: "Sistemas de gestão de RH e folha de pagamento",
            icon: "bi-people",
            color: "warning"
        },
        {
            id: "erp",
            title: "ERP",
            description: "Sistemas de gestão empresarial integrada",
            icon: "bi-building",
            color: "info"
        },
        {
            id: "pdv",
            title: "PDV",
            description: "Sistemas de ponto de venda e automação comercial",
            icon: "bi-shop",
            color: "purple"
        },
        {
            id: "telefonia",
            title: "Sistemas Telefônicos",
            description: "Integração com hardware e sistemas de telefonia",
            icon: "bi-telephone",
            color: "teal"
        }
    ],

    // Stack tecnológico
    technologies: {
        languages: ["Delphi", "Python", "NestJS", "ReactJS", "TypeScript", "APIs REST", "MVC", "Aplicações Desktop", "Serviços"],
        databases: ["Firebird", "SQL Server", "PostgreSQL", "SQL", "ORMs"],
        architecture: ["Arquitetura em Camadas", "MVC", "Clean Code", "Factory Pattern", "Abstract Factory", "Singleton", "SOLID", "Escalabilidade"],
        backend: ["APIs REST", "OAuth 2.0", "JWT", "Autenticação", "Autorização", "Integração", "ORMs"],
        devops: ["Testes Unitários", "CI/CD", "Automação", "Cache Distribuído", "Performance", "Estabilidade", "Qualidade"]
    },

    // Experiência profissional
    experience: [
        {
            period: "2025 - Atual",
            company: "Extradigital Tecnologia",
            position: "Programador Sênior Delphi",
            description: "Desenvolvimento e manutenção de sistemas especializados para cartórios, com foco em segurança jurídica, fluxos de trabalho específicos do setor e conformidade com normativas legais.",
            tags: ["Delphi", "SQL Server", "Sistemas Especializados"]
        },
        {
            period: "2020 - 2024",
            company: "SuperSoft Sistemas Ltda.",
            position: "Programador Sênior Delphi N4",
            description: "Desenvolvimento e sustentação de módulos críticos de um ERP, com atuação nas áreas fiscal, contábil e folha de pagamento. Responsável por implementações, correções e otimizações de performance.",
            tags: ["Delphi XE10.2", "Firebird", "ERP", "Módulos Fiscais"]
        },
        {
            period: "2012 - 2020",
            company: "Mamut Tecnologia Ltda.",
            position: "Programador Delphi",
            description: "Desenvolvimento de sistemas de automação comercial, com foco em integração de hardware periférico (PABX, balanças e leitores), utilizando comunicação serial, TCP e UDP. Atuação em todo o ciclo de desenvolvimento do produto.",
            tags: ["Delphi XE10.3", "Firebird", "Integração de Hardware", "TCP / UDP / Serial"]
        },
        {
            period: "2010 - 2012",
            company: "Líder Peças Rodoviárias",
            position: "Desenhista Mecânico / Programador CNC",
            description: "Programação e preparação de torno CNC, desenvolvimento de desenhos técnicos e projetos de novos produtos em AutoCAD, atuando como elo entre engenharia e manufatura.",
            tags: ["AutoCAD", "Programação CNC", "Desenvolvimento de Produto"]
        }
    ],

    // Projetos independentes
    freelance: {
        period: "2018 - Atual",
        title: "Projetos Independentes",
        position: "Consultor em Desenvolvimento de Sistemas",
        description: "Atuação em projetos independentes e consultorias pontuais, envolvendo desenvolvimento de aplicações web, APIs REST, automações e manutenção de sistemas legados. Responsável por todo o ciclo de entrega, desde o levantamento de requisitos até a implementação e publicação, com foco em performance, escalabilidade e integração entre sistemas.",
        tags: ["Node.js", "NestJS", "React", "Next.js", "APIs REST", "SQL / NoSQL", "Integrações"]
    },

    // Projetos destacados
    projects: [
        {
            id: "fiscal-system",
            title: "Sistema Fiscal Integrado",
            description: "Sistema completo de gestão fiscal com geração de NF-e, CT-e, MDF-e e SPED. Integração direta com SEFAZ e certificação digital.",
            icon: "bi-calculator",
            tags: ["Delphi", "Firebird", "WebServices", "XML"],
            result: "Redução de 70% no tempo de processamento"
        },
        {
            id: "phone-system",
            title: "Sistema de Telefonia Corporativa",
            description: "Sistema integrado de PABX digital com gravação de chamadas, relatórios analíticos e integração com CRM.",
            icon: "bi-telephone",
            tags: ["Delphi", "TCP/IP", "Áudio Digital", "SQL Server"],
            result: "Suporte a 500+ linhas simultâneas"
        },
        {
            id: "ai-automation",
            title: "Automação com IA",
            description: "Sistema de classificação automática de documentos fiscais utilizando machine learning para redução de erros manuais.",
            icon: "bi-robot",
            tags: ["Python", "TensorFlow", "API REST", "PostgreSQL"],
            result: "95% de precisão na classificação"
        },
        {
            id: "pdv-system",
            title: "Sistema PDV Completo",
            description: "Sistema de ponto de venda com múltiplas formas de pagamento, controle de estoque, NFC-e e integração com marketplaces.",
            icon: "bi-shop",
            tags: ["Delphi", "Firebird", "Hardware", "NFC-e"],
            result: "200+ clientes atendidos"
        },
        {
            id: "erp-industrial",
            title: "ERP Industrial",
            description: "Sistema de gestão empresarial para indústria com controle de produção, custos, qualidade e integração com máquinas.",
            icon: "bi-building",
            tags: ["Delphi", "SQL Server", "OPC", "API REST"],
            result: "30% aumento na produtividade"
        }
    ],

    // Inteligência Artificial
    ai: {
        title: "Especialização em IA",
        description: "Integração de IA à arquitetura de sistemas para automação e inovação",
        specialties: [
            {
                title: "Integração de IA",
                description: "Integração de IA à arquitetura de sistemas"
            },
            {
                title: "Desenvolvimento",
                description: "Desenvolvimento de soluções em Python"
            },
            {
                title: "Uso de PyTorch",
                description: "Uso de PyTorch e TensorFlow"
            }
        ],
        applications: [
            "Automação de processos",
            "Análise e classificação de dados",
            "Apoio à tomada de decisão",
            "Evolução de sistemas legados"
        ],
        cards: [
            {
                title: "Machine Learning",
                description: "Modelos preditivos e classificação",
                icon: "bi-robot"
            },
            {
                title: "Análise de Dados",
                description: "Processamento e insights",
                icon: "bi-graph-up"
            },
            {
                title: "Automação",
                description: "Processos inteligentes",
                icon: "bi-gear"
            },
            {
                title: "Integração",
                description: "IA em sistemas existentes",
                icon: "bi-lightning"
            }
        ]
    },

    // Resumo técnico
    technicalSummary: {
        domains: ["Fiscal", "Contábil", "Folha", "ERP", "PDV", "Telefonia"],
        languages: ["Delphi", "Python", "NestJS", "ReactJS"],
        ai: ["PyTorch", "TensorFlow"],
        databases: ["Firebird", "SQL Server", "PostgreSQL"],
        architecture: ["MVC", "API REST", "Clean Code"],
        quality: ["OAuth 2.0", "JWT", "Testes Unitários", "CI/CD"]
    }
};