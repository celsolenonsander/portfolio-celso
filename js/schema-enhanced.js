// schema-enhanced.js - Schema especializado para programador freelance
function generateEnhancedSchema() {
    const data = portfolioData;
    
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            // Person com foco em freelancer
            {
                "@type": "Person",
                "@id": "#person",
                "name": data.personal.name,
                "description": `Programador Delphi freelance com ${new Date().getFullYear() - data.personal.experienceSince} anos de experiência. Desenvolvedor de software especializado em sistemas corporativos.`,
                "jobTitle": ["Programador Delphi Sênior", "Desenvolvedor Freelance", "Especialista em Software"],
                "knowsAbout": [
                    "Delphi Programming",
                    "Software Development",
                    "Enterprise Systems",
                    "Freelance Programming",
                    "Python Development",
                    "Web APIs",
                    "Database Design",
                    "System Architecture"
                ],
                "url": window.location.href,
                "image": data.personal.profileImg,
                "email": data.personal.email,
                "telephone": data.personal.phone.replace(/\D/g, ''),
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": data.personal.location.city,
                    "addressRegion": data.personal.location.region,
                    "addressCountry": data.personal.location.countryCode
                },
                "sameAs": [
                    `https://linkedin.com/in/${data.personal.linkedin}`,
                    `https://github.com/${data.personal.github}`,
                    `https://wa.me/${data.personal.phone.replace(/\D/g, '')}`
                ]
            },
            
            // Service para serviços freelance
            {
                "@type": "Service",
                "name": "Desenvolvimento de Software Freelance",
                "description": "Serviços de programação freelance em Delphi, Python e tecnologias web. Desenvolvimento de sistemas corporativos, APIs, integrações e manutenção.",
                "provider": { "@id": "#person" },
                "serviceType": "Software Development",
                "areaServed": {
                    "@type": "Country",
                    "name": "Brasil"
                },
                "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "priceCurrency": "BRL",
                        "description": "Orçamento personalizado por projeto"
                    }
                }
            },
            
            // LocalBusiness para SEO local
            {
                "@type": "LocalBusiness",
                "@id": "#business",
                "name": `${data.personal.name} - Desenvolvimento de Software`,
                "description": "Serviços de programação e desenvolvimento de software freelance",
                "image": data.personal.profileImg,
                "currenciesAccepted": "BRL",
                "paymentAccepted": "Transferência bancária, PIX",
                "priceRange": "$$",
                "telephone": data.personal.phone.replace(/\D/g, ''),
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": data.personal.location.city,
                    "addressRegion": data.personal.location.region,
                    "addressCountry": data.personal.location.countryCode
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "-27.5969",
                    "longitude": "-48.5495"
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00"
                }
            },
            
            // ItemList para serviços específicos
            {
                "@type": "ItemList",
                "name": "Serviços de Programação Freelance",
                "description": "Lista de serviços oferecidos pelo programador freelance",
                "numberOfItems": 6,
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "item": {
                            "@type": "Service",
                            "name": "Desenvolvimento Delphi",
                            "description": "Programação em Delphi para sistemas desktop, integrações e APIs"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "item": {
                            "@type": "Service",
                            "name": "Desenvolvimento Python",
                            "description": "Programação em Python para automação, IA e processamento de dados"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "item": {
                            "@type": "Service",
                            "name": "Desenvolvimento Web",
                            "description": "Desenvolvimento de aplicações web com NestJS, React e TypeScript"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 4,
                        "item": {
                            "@type": "Service",
                            "name": "Consultoria Técnica",
                            "description": "Consultoria em arquitetura de software e melhores práticas"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 5,
                        "item": {
                            "@type": "Service",
                            "name": "Manutenção de Sistemas",
                            "description": "Manutenção e suporte para sistemas legados"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 6,
                        "item": {
                            "@type": "Service",
                            "name": "Integração de Sistemas",
                            "description": "Integração entre diferentes sistemas e APIs"
                        }
                    }
                ]
            },
            
            // Breadcrumb para navegação
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "item": {
                            "@id": "https://celsolenonsander.github.io/",
                            "name": "Início"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "item": {
                            "@id": "https://celsolenonsander.github.io/#sobre",
                            "name": "Sobre o Programador"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "item": {
                            "@id": "https://celsolenonsander.github.io/#servicos",
                            "name": "Serviços Freelance"
                        }
                    }
                ]
            }
        ]
    };
    
    return schema;
}

// Adicionar ao head
document.addEventListener('DOMContentLoaded', function() {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(generateEnhancedSchema());
    document.head.appendChild(script);
});