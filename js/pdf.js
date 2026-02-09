// pdf.js - Gera PDF usando os mesmos dados
function gerarCurriculoPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF("p", "mm", "a4");
    
    const pageWidth = 210;
    const margin = 20;
    let yPos = 20;
    
    // Configurações gerais
    doc.setFont("helvetica");
    doc.setFontSize(8);
    
    // ========== DADOS DO PORTFÓLIO ==========
    const data = portfolioData;
    
    // ========== CABEÇALHO ==========
    doc.setFillColor(41, 128, 185);
    doc.rect(0, 0, pageWidth, 40, 'F');
    
    // Nome
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text(data.personal.name, margin, 25);
    
    // Título
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.text(data.personal.title, margin, 32);
    
    // ========== INFORMAÇÕES DE CONTATO CLICÁVEIS ==========
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(9);
    yPos = 45;
    const labelWidth = 25;
    
    // Função auxiliar para adicionar links clicáveis
    function addClickableLink(doc, text, url, x, y, color = [41, 128, 185]) {
        doc.setTextColor(...color);
        doc.setFont("helvetica", "normal");
        
        const textWidth = doc.getTextWidth(text);
        doc.text(text, x, y);
        
        doc.setDrawColor(...color);
        doc.setLineWidth(0.2);
        doc.line(x, y + 0.5, x + textWidth, y + 0.5);
        
        doc.link(x, y - 3, textWidth, 4, { url: url });
        
        return textWidth;
    }
    
    // Email
    const emailText = data.personal.email;
    addClickableLink(
        doc, 
        emailText, 
        `mailto:${emailText}?subject=Contato%20Currículo&body=Olá%20${data.personal.name.split(' ')[0]},%20vim%20pelo%20seu%20currículo.`, 
        margin + labelWidth, 
        yPos
    );
    doc.setTextColor(100, 100, 100);
    doc.text("Email: ", margin + labelWidth - 15, yPos);
    
    // Telefone
    yPos += 5;
    const phoneText = data.personal.phone;
    addClickableLink(
        doc,
        phoneText,
        `${data.personal.whatsapp}?text=Olá%20${encodeURIComponent(data.personal.name.split(' ')[0])},%20vim%20pelo%20seu%20currículo!`,
        margin + labelWidth,
        yPos
    );
    doc.setTextColor(100, 100, 100);
    doc.text("Telefone: ", margin + labelWidth - 18, yPos);
    
    // LinkedIn
    yPos += 5;
    const linkedinText = data.personal.linkedin;
    addClickableLink(
        doc,
        linkedinText,
        `https://linkedin.com/in/${linkedinText}`,
        margin + labelWidth,
        yPos
    );
    doc.setTextColor(100, 100, 100);
    doc.text("LinkedIn: ", margin + labelWidth - 20, yPos);
    
    // GitHub
    yPos += 5;
    const githubText = data.personal.github;
    addClickableLink(
        doc,
        githubText,
        `https://github.com/${githubText}`,
        margin + labelWidth,
        yPos
    );
    doc.setTextColor(100, 100, 100);
    doc.text("GitHub: ", margin + labelWidth - 17, yPos);
    yPos += 10;
    
    // ========== FUNÇÕES AUXILIARES ==========
    
    function addSectionTitle(doc, title, x, y) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(41, 128, 185);
        doc.text(title, x, y);
        
        doc.setDrawColor(41, 128, 185);
        doc.setLineWidth(0.5);
        doc.line(x, y + 1, x + 50, y + 1);
    }
    
    function addWrappedText(doc, text, x, y, maxWidth, lineHeight) {
        const lines = doc.splitTextToSize(text, maxWidth);
        doc.text(lines, x, y);
        return y + (lines.length * lineHeight);
    }
    
    function addExperienceItem(doc, period, company, position, description, tags, margin, yPos, pageWidth) {
        if (yPos > 250) {
            doc.addPage();
            yPos = 20;
        }
        
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9);
        doc.setTextColor(41, 128, 185);
        doc.text(period, margin, yPos);
        doc.text(company, margin + 25, yPos);
        yPos += 4;
        
        doc.setFont("helvetica", "italic");
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        doc.text(position, margin + 25, yPos);
        yPos += 6;
        
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(60, 60, 60);
        yPos = addWrappedText(doc, description, margin + 5, yPos, pageWidth - margin - 25, 4);
        yPos += 4;
        
        doc.setFontSize(7);
        let xPos = margin + 5;
        tags.forEach(tag => {
            const tagWidth = doc.getTextWidth(tag + "  ");
            if (xPos + tagWidth > pageWidth - margin) {
                xPos = margin + 5;
                yPos += 4;
            }
            doc.setTextColor(255, 255, 255);
            doc.setFillColor(52, 152, 219);
            doc.roundedRect(xPos, yPos - 3, tagWidth, 4, 1, 1, 'F');
            doc.text(tag, xPos + 1, yPos);
            xPos += tagWidth + 3;
        });
        
        return yPos + 8;
    }
    
    function addTechTags(doc, tags, margin, yPos, pageWidth) {
        let currentX = margin;
        let currentY = yPos;
        const tagHeight = 5;
        const tagPadding = 3;
        
        tags.forEach(tag => {
            const tagWidth = doc.getTextWidth(tag) + tagPadding * 2;
            
            if (currentX + tagWidth > pageWidth - margin) {
                currentX = margin;
                currentY += tagHeight + 3;
            }
            
            doc.setFillColor(230, 230, 230);
            doc.roundedRect(currentX, currentY - 3.5, tagWidth, tagHeight, 2, 2, 'F');
            doc.setTextColor(60, 60, 60);
            doc.text(tag, currentX + tagPadding, currentY);
            
            currentX += tagWidth + 3;
        });
        
        return currentY + tagHeight + 3;
    }
    
    // ========== PERFIL PROFISSIONAL ==========
    addSectionTitle(doc, "PERFIL PROFISSIONAL", margin, yPos);
    yPos += 6;
    
    doc.setTextColor(60, 60, 60);
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    yPos = addWrappedText(doc, data.profile.summary, margin, yPos, pageWidth - 2*margin, 5);
    yPos += 4;
    
    // ========== EXPERIÊNCIA PROFISSIONAL ==========
    addSectionTitle(doc, "EXPERIÊNCIA PROFISSIONAL", margin, yPos);
    yPos += 6;
    
    // Experiências principais
    data.experience.forEach(exp => {
        yPos = addExperienceItem(doc, 
            exp.period, 
            exp.company, 
            exp.position,
            exp.description,
            exp.tags,
            margin, yPos, pageWidth
        );
    });
    
    // Projetos independentes
    yPos = addExperienceItem(doc, 
        data.freelance.period, 
        data.freelance.title, 
        data.freelance.position,
        data.freelance.description,
        data.freelance.tags,
        margin, yPos, pageWidth
    );
    
    yPos += 10;
    
    // ========== STACK TECNOLÓGICO ==========
    if (yPos > 250) {
        doc.addPage();
        yPos = 20;
    }
    
    addSectionTitle(doc, "STACK TECNOLÓGICO", margin, yPos);
    yPos += 8;
    
    // Linguagens
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(41, 128, 185);
    doc.text("Linguagens, Frameworks e Plataformas:", margin, yPos);
    yPos += 5;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    yPos = addTechTags(doc, data.technologies.languages, margin, yPos, pageWidth);
    yPos += 4;
    
    // Bancos de dados
    doc.setFont("helvetica", "bold");
    doc.setTextColor(41, 128, 185);
    doc.text("Bancos de Dados:", margin, yPos);
    yPos += 4;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    yPos = addTechTags(doc, data.technologies.databases, margin, yPos, pageWidth);
    yPos += 4;
    
    // Arquitetura
    doc.setFont("helvetica", "bold");
    doc.setTextColor(41, 128, 185);
    doc.text("Arquitetura & Padrões de Projeto:", margin, yPos);
    yPos += 4;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    yPos = addTechTags(doc, data.technologies.architecture, margin, yPos, pageWidth);
    yPos += 4;
    
    // Backend
    doc.setFont("helvetica", "bold");
    doc.setTextColor(41, 128, 185);
    doc.text("Backend, Segurança & Integrações:", margin, yPos);
    yPos += 5;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    yPos = addTechTags(doc, data.technologies.backend, margin, yPos, pageWidth);
    yPos += 4;
    
    // DevOps
    if (yPos > 250) {
        doc.addPage();
        yPos = 20;
    }
    
    doc.setFont("helvetica", "bold");
    doc.setTextColor(41, 128, 185);
    doc.text("Qualidade, Performance & DevOps:", margin, yPos);
    yPos += 5;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    yPos = addTechTags(doc, data.technologies.devops, margin, yPos, pageWidth);
    yPos += 8;
    
    // ========== DOMÍNIOS DE NEGÓCIO ==========
    addSectionTitle(doc, "DOMÍNIOS DE NEGÓCIO", margin, yPos);
    yPos += 6;
    
    doc.setFontSize(9);
    doc.setTextColor(60, 60, 60);
    
    data.domains.forEach(domain => {
        doc.text(`• ${domain.title} - ${domain.description}`, margin, yPos);
        yPos += 5;
    });
    
    yPos += 6;
    
    // ========== PROJETOS DESTACADOS ==========
    if (yPos > 250) {
        doc.addPage();
        yPos = 20;
    }
    
    addSectionTitle(doc, "PROJETOS DESTACADOS", margin, yPos);
    yPos += 4;
    
    data.projects.slice(0, 3).forEach(project => {
        if (yPos > 250) {
            doc.addPage();
            yPos = 20;
        }
        
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9);
        doc.setTextColor(41, 128, 185);
        doc.text(project.title, margin, yPos);
        yPos += 5;
        
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(60, 60, 60);
        yPos = addWrappedText(doc, project.description, margin, yPos, pageWidth - 2*margin, 4);
        yPos += 3;
        
        doc.setFontSize(7);
        let xPos = margin;
        project.tags.forEach(tech => {
            const techWidth = doc.getTextWidth(tech + "  ");
            if (xPos + techWidth > pageWidth - margin) {
                xPos = margin;
                yPos += 4;
            }
            doc.setTextColor(255, 255, 255);
            doc.setFillColor(41, 128, 185);
            doc.roundedRect(xPos, yPos - 3, techWidth, 4, 1, 1, 'F');
            doc.text(tech, xPos + 1, yPos);
            xPos += techWidth + 3;
        });
        yPos += 4;
    });
    
    // ========== RODAPÉ ==========
    doc.setPage(doc.internal.getNumberOfPages());
    doc.setTextColor(150, 150, 150);
    doc.setFontSize(7);
    doc.text(`Currículo gerado em ${new Date().toLocaleDateString('pt-BR')} | ${data.personal.name}`, pageWidth/2, 290, { align: 'center' });
    
    // Salvar PDF
    doc.save(`${data.personal.name.replace(/ /g, '_')}_Curriculo.pdf`);
}