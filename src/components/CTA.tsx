import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const CTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-primary/10" />
      
      {/* Animated Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* CTA Card */}
          <div className="relative bg-card-gradient rounded-3xl p-8 md:p-12 lg:p-16 border border-primary/20 overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

            {/* Content */}
            <div className="text-center relative z-10">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-gradient mb-8 animate-pulse-glow">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Title */}
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {t('cta.title')}
              </h2>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                {t('cta.subtitle')}
              </p>

              {/* Button */}
              <Button
                size="lg"
                className="bg-accent-gradient hover:opacity-90 transition-all duration-300 text-lg px-10 py-7 glow-effect group"
                onClick={() => window.location.href = "https://api.whatsapp.com/send/?phone=244923609024&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+os+servi%C3%A7os+da+Zeytra+Tech.&type=phone_number&app_absent=0"}
              >
                {t('cta.button')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-border/50">
                {[
                  { label: 'Resposta em 24h', icon: '💠' },
                  { label: 'Consultoria Gratuita', icon: '💠' },
                  { label: 'Proposta Personalizada', icon: '💠' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
