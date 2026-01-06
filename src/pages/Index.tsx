import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Differentials from '@/components/Differentials';
import Partners from '@/components/Partners';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zeytra Tech | Engenharia de Dados & Desenvolvimento de Software</title>
        <meta 
          name="description" 
          content="Zeytra Tech - Especialistas em Soluções de Dados, desenvolvimento de software e consultoria tecnológica. Soluções inteligentes para empresas que precisam escalar com segurança." 
        />
        <meta 
          name="keywords" 
          content="engenharia de dados, Soluções de Dados,EDW, data warehouse, data lake, desenvolvimento software, consultoria tecnológica, fintech, bancos, seguradoras" 
        />
        <meta property="og:title" content="Zeytra Tech | Enterprise Technology Solutions" />
        <meta property="og:description" content="Transformamos dados e tecnologia em soluções inteligentes para empresas." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://zeytra.it.ao" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Differentials />
          <Partners />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
