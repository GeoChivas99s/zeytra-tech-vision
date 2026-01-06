import React, { useState } from 'react';
import { Database, Code, RefreshCw, Users, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Database,
      title: t('services.data.title'),
      items: [
        t('services.data.edw'),
        t('services.data.lake'),
        t('services.data.lakehouse'),
        t('services.data.reconciliation'),
        t('services.data.integration'),
        t('services.data.analytics'),
      ],
    },
    {
      icon: Code,
      title: t('services.software.title'),
      items: [
        t('services.software.web'),
        t('services.software.mobile'),
        t('services.software.corporate'),
        t('services.software.api'),
      ],
    },
    {
      icon: RefreshCw,
      title: t('services.modernization.title'),
      items: [
        t('services.modernization.legacy'),
        t('services.modernization.reengineering'),
        t('services.modernization.migration'),
      ],
    },
    {
      icon: Users,
      title: t('services.consulting.title'),
      items: [
        t('services.consulting.architecture'),
        t('services.consulting.strategy'),
        t('services.consulting.decision'),
        t('services.consulting.knowledge'),
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            {t('services.subtitle')}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {t('services.title')}
          </h2>
        </div>

        {/* Services Grid - Desktop */}
        <div className="hidden lg:grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 card-hover overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent-gradient flex items-center justify-center shadow-lg">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    {service.title}
                  </h3>
                </div>

                {/* Items */}
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Services - Mobile/Tablet Accordion */}
        <div className="lg:hidden space-y-4 max-w-2xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-card rounded-xl border transition-all duration-300 overflow-hidden ${
                activeService === index ? 'border-primary/50' : 'border-border'
              }`}
            >
              <button
                onClick={() => setActiveService(activeService === index ? -1 : index)}
                className="w-full flex items-center gap-4 p-6 text-left"
              >
                <div className="w-12 h-12 rounded-lg bg-accent-gradient flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground flex-grow">
                  {service.title}
                </h3>
                <ChevronRight
                  className={`w-5 h-5 text-primary transition-transform duration-300 ${
                    activeService === index ? 'rotate-90' : ''
                  }`}
                />
              </button>
              
              {activeService === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <ul className="space-y-3 border-t border-border pt-4">
                    {service.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
