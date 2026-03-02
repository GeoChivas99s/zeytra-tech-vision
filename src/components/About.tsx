import React from 'react';
import { Target, Eye, Shield, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            {t('about.subtitle')}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Mission */}
          <div className="group relative bg-card-gradient rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 card-hover">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                {t('about.mission.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.mission.description')}
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="group relative bg-card-gradient rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 card-hover">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                {t('about.vision.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.vision.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Key Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { icon: Shield, label: t('indicators.security'), value: '100%' },
            { icon: Zap, label: t('indicators.performance'), value: t('indicators.hight') },
            { icon: Target, label: t('indicators.Precision'), value: t('indicators.maximum') },
            { icon: Eye, label: t('indicators.Transparency'), value: t('indicators.Total') },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-heading font-bold text-foreground mb-1">
                {item.value}
              </div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
