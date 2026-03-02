import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.partners': 'Parceiros',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.headline': 'Transformamos dados e tecnologia em soluções inteligentes',
    'hero.subheadline': 'Soluções de dados, desenvolvimento de software e consultoria tecnológica para empresas que precisam escalar com segurança.',
    'hero.cta.contact': 'Fale Connosco',
    'hero.cta.solutions': 'Nossas Soluções',
    
    // About
    'about.title': 'Sobre a Zeytra Tech',
    'about.subtitle': 'Excelência em Tecnologia',
    'about.description': 'A Zeytra Tech oferece soluções de dados, desenvolvimento de software e modernização tecnológica, atuando em ambientes críticos com AS400 e Banka 3G, garantindo arquiteturas seguras, escaláveis e foco em valor para o negócio.',
    'about.mission.title': 'Nossa Missão',
    'about.mission.description': 'Capacitar empresas através de soluções tecnológicas inovadoras que impulsionam o crescimento e a eficiência operacional.',
    'about.vision.title': 'Nossa Visão',
    'about.vision.description': 'Ser referência global em transformação digital, liderando a evolução tecnológica dos nossos clientes.',
    
    // Services
    'services.title': 'Serviços & Soluções',
    'services.subtitle': 'Soluções tecnológicas completas para o seu negócio',
    
    'services.data.title': 'Soluções de Dados',
    'services.data.edw': 'Enterprise Data Warehouse (EDW)',
    'services.data.lake': 'Data Lake',
    'services.data.lakehouse': 'Data Lakehouse',
    'services.data.reconciliation': 'Motores de Reconciliação de Dados',
    'services.data.integration': 'Integração, qualidade, governação e auditoria de dados',
    'services.data.analytics': 'Analytics e Reporting',
    
    'services.software.title': 'Desenvolvimento de Software',
    'services.software.web': 'Desenvolvimento Web',
    'services.software.mobile': 'Desenvolvimento Mobile',
    'services.software.corporate': 'Sistemas corporativos sob medida',
    'services.software.api': 'APIs e integrações',
    
    'services.modernization.title': 'Modernização de Sistemas',
    'services.modernization.legacy': 'Reconstrução de sistemas legados',
    'services.modernization.reengineering': 'Reengenharia de aplicações',
    'services.modernization.migration': 'Migração e modernização tecnológica',
    
    'services.consulting.title': 'Consultoria Tecnológica',
    'services.consulting.architecture': 'Arquitetura de soluções',
    'services.consulting.strategy': 'Estratégia de dados',
    'services.consulting.decision': 'Apoio à tomada de decisão',
    'services.consulting.knowledge': 'Transferência de conhecimento',
    
    // Differentials
    'differentials.title': 'Nossos Diferenciais',
    'differentials.subtitle': 'O que nos torna únicos',
    'differentials.technical': 'Base Técnica Sólida',
    'differentials.technical.desc': 'Forte conhecimento técnico e arquitetural em todas as soluções',
    'differentials.endtoend': 'Abordagem End-to-End',
    'differentials.endtoend.desc': 'Da arquitetura à entrega, acompanhamos todo o ciclo',
    'differentials.scalable': 'Soluções Escaláveis',
    'differentials.scalable.desc': 'Arquiteturas preparadas para crescer com o seu negócio',
    'differentials.secure': 'Segurança em Primeiro',
    'differentials.secure.desc': 'Práticas de segurança integradas em todas as etapas',
    'differentials.business': 'Orientação ao Negócio',
    'differentials.business.desc': 'Foco em gerar valor real e mensurável',
    'differentials.critical': 'Ambientes Críticos',
    'differentials.critical.desc': 'Experiência comprovada em operações sensíveis',
    
    // Partners
    'partners.title': 'Parceiros',
    'partners.subtitle': 'Empresas que confiam em nós',
    
    // CTA
    'cta.title': 'Pronto para transformar a sua operação com dados e tecnologia?',
    'cta.subtitle': 'Entre em contacto connosco e descubra como podemos ajudar a sua empresa a alcançar o próximo nível.',
    'cta.button': 'Entre em Contacto',
    
    // Footer
    'footer.description': 'Engenharia de dados, desenvolvimento de software e consultoria tecnológica para empresas que precisam escalar com segurança.',
    'footer.quicklinks': 'Links Rápidos',
    'footer.contact': 'Contacto',
    'footer.followus': 'Siga-nos',
    'footer.social': 'Siga-nos nas redes sociais para novidades e insights sobre tecnologia.',
    'footer.copyright': '© 2026 Zeytra Tech. Todos os direitos reservados.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.partners': 'Partners',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.headline': 'We transform data and technology into intelligent solutions',
    'hero.subheadline': 'Data Solutions, software development and technology consulting for companies that need to scale securely.',
    'hero.cta.contact': 'Contact Us',
    'hero.cta.solutions': 'Our Solutions',
    
    // About
    'about.title': 'About Zeytra Tech',
    'about.subtitle': 'Excellence in Technology',
    'about.description': 'Zeytra Tech offers data solutions, software development, and technological modernization, operating in critical environments with AS400 and Banka 3G, ensuring secure, scalable architectures and a focus on business value.',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'Empower companies through innovative technology solutions that drive growth and operational efficiency.',
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'To be a global reference in digital transformation, leading the technological evolution of our clients.',
    
    // Services
    'services.title': 'Services & Solutions',
    'services.subtitle': 'Complete technology solutions for your business',
    
    'services.data.title': 'Data Solutions',
    'services.data.edw': 'Enterprise Data Warehouse (EDW)',
    'services.data.lake': 'Data Lake',
    'services.data.lakehouse': 'Data Lakehouse',
    'services.data.reconciliation': 'Data Reconciliation Engines',
    'services.data.integration': 'Integration, quality, governance and data audit',
    'services.data.analytics': 'Analytics and Reporting',
    
    'services.software.title': 'Software Development',
    'services.software.web': 'Web Development',
    'services.software.mobile': 'Mobile Development',
    'services.software.corporate': 'Custom corporate systems',
    'services.software.api': 'APIs and integrations',
    
    'services.modernization.title': 'System Modernization',
    'services.modernization.legacy': 'Legacy system reconstruction',
    'services.modernization.reengineering': 'Application reengineering',
    'services.modernization.migration': 'Migration and technology modernization',
    
    'services.consulting.title': 'Technology Consulting',
    'services.consulting.architecture': 'Solution architecture',
    'services.consulting.strategy': 'Data strategy',
    'services.consulting.decision': 'Decision-making support',
    'services.consulting.knowledge': 'Knowledge transfer',
    
    // Differentials
    'differentials.title': 'Our Differentials',
    'differentials.subtitle': 'What makes us unique',
    'differentials.technical': 'Solid Technical Foundation',
    'differentials.technical.desc': 'Strong technical and architectural knowledge in all solutions',
    'differentials.endtoend': 'End-to-End Approach',
    'differentials.endtoend.desc': 'From architecture to delivery, we follow the entire cycle',
    'differentials.scalable': 'Scalable Solutions',
    'differentials.scalable.desc': 'Architectures prepared to grow with your business',
    'differentials.secure': 'Security First',
    'differentials.secure.desc': 'Security practices integrated at all stages',
    'differentials.business': 'Business Oriented',
    'differentials.business.desc': 'Focus on generating real and measurable value',
    'differentials.critical': 'Critical Environments',
    'differentials.critical.desc': 'Proven experience in sensitive operations',
    
    // Partners
    'partners.title': 'Partners',
    'partners.subtitle': 'Companies that trust us',
    
    // CTA
    'cta.title': 'Ready to transform your operation with data and technology?',
    'cta.subtitle': 'Contact us and discover how we can help your company reach the next level.',
    'cta.button': 'Contact Us',
    
    // Footer
    'footer.description': 'Data Solutions, software development and technology consulting for companies that need to scale securely.',
    'footer.quicklinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.followus': 'Follow Us',
    'footer.social': 'Follow us on social media for news and insights about technology.',
    'footer.copyright': '© 2026 Zeytra Tech. All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('zeytra-language');
    return (saved as Language) || 'pt';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('zeytra-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
