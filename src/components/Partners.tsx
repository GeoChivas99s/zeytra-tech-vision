import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Partners: React.FC = () => {
  const { t } = useLanguage();

  // Placeholder partner logos - in production, these would be actual partner logos
  const partners = [
    { name: 'Nus Eventus', logo: "/logo-nus-eventus.png" },
    { name: 'Kunha-Ka', logo: "/logo-cunha-ka.png" },
    { name: 'Estratus', logo: "/logo-Estratus.jpeg" },
    // { name: 'Partner 4', logo: null },
    // { name: 'Partner 5', logo: null },
    // { name: 'Partner 6', logo: null },
  ];

  return (
    <section id="partners" className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            {t('partners.subtitle')}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {t('partners.title')}
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group aspect-[3/2] bg-card rounded-xl border border-border hover:border-primary/30 flex items-center justify-center p-6 transition-all duration-300 hover:shadow-lg"
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              ) : (
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-muted/50 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary/60">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">{partner.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          {t('partners.subtitle')}
        </p>
      </div>
    </section>
  );
};

export default Partners;
