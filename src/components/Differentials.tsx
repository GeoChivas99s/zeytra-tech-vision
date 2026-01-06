import React from 'react';
import { Cpu, ArrowUpDown, Scale, ShieldCheck, TrendingUp, Building2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Differentials: React.FC = () => {
  const { t } = useLanguage();

  const differentials = [
    {
      icon: Cpu,
      title: t('differentials.technical'),
      description: t('differentials.technical.desc'),
    },
    {
      icon: ArrowUpDown,
      title: t('differentials.endtoend'),
      description: t('differentials.endtoend.desc'),
    },
    {
      icon: Scale,
      title: t('differentials.scalable'),
      description: t('differentials.scalable.desc'),
    },
    {
      icon: ShieldCheck,
      title: t('differentials.secure'),
      description: t('differentials.secure.desc'),
    },
    {
      icon: TrendingUp,
      title: t('differentials.business'),
      description: t('differentials.business.desc'),
    },
    {
      icon: Building2,
      title: t('differentials.critical'),
      description: t('differentials.critical.desc'),
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            {t('differentials.subtitle')}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {t('differentials.title')}
          </h2>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="group relative bg-card-gradient rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Number Badge */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
