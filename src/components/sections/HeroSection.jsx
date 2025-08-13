import React from 'react';
import { ArrowRight, Play, Heart, Users, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Container from '../common/Container';

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-[#161616] via-[#161616] to-primary text-background py-20 lg:py-32">
        <Container>
          <div className="text-center max-w-5xl mx-auto">
            {/* Tagline */}
            <p className="text-primary font-semibold text-lg tracking-wide uppercase mb-6">
              Aprenda a dominar a sala vermelha
            </p>
            
            {/* Main Title */}
            <h1 className="text-4xl lg:text-7xl font-bold leading-tight mb-8">
              Formação em
              <span className="text-primary"> Paciente Grave</span>
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-2xl lg:text-4xl font-semibold text-background/80 mb-8">
              Dois dias de prática para dominar a sala vermelha
            </h2>
            
            {/* Description */}
            <p className="text-xl text-background/80 leading-relaxed max-w-3xl mx-auto mb-12">
              Imersão presencial intensiva e prática para médicos que querem dominar os momentos 
              mais críticos do plantão, com preparo técnico, raciocínio rápido e segurança nos procedimentos.
            </p>

            {/* CTA Button */}
            <div className="mb-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-background px-12 py-6 text-xl font-semibold group shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Quero garantir minha inscrição
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Impact Numbers Section - Separate Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16 lg:py-20">
        <Container>
          <div className="text-center">
            {/* Decorative line */}
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-12"></div>
            
            {/* Header with icon */}
            <div className="flex items-center justify-center gap-3 mb-12">
              <p className="text-red-600 font-semibold text-3xl tracking-wide">
                Nosso impacto na educação médica brasileira
              </p>
            </div>
            
            {/* Impact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {/* Card 1 - Alunos Ativos */}
              <div className="relative group">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl shadow-lg">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Number */}
                  <div className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-text mb-3">
                    3.000+
                  </div>
                  
                  {/* Label */}
                  <div className="text-xl font-bold text-gray-900 mb-2">
                    Alunos ativos
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Médicos capacitados
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-r from-red-500/10 to-transparent rounded-full -translate-y-2 translate-x-2 group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-r from-red-600/5 to-transparent rounded-full translate-y-2 -translate-x-2"></div>
                </div>

                {/* Connection line */}
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 w-12 lg:w-16 h-px bg-gradient-to-r from-red-400/50 to-transparent transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 w-2 h-2 bg-red-500 rounded-full transform translate-x-1 -translate-y-1/2 animate-pulse"></div>
                </div>
              </div>

              {/* Card 2 - Pessoas Impactadas */}
              <div className="relative group">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl shadow-lg">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Number */}
                  <div className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-text mb-3">
                    16M
                  </div>
                  
                  {/* Label */}
                  <div className="text-xl font-bold text-gray-900 mb-2">
                    Pessoas impactadas
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Através dos nossos profissionais
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-r from-red-500/10 to-transparent rounded-full -translate-y-2 translate-x-2 group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-r from-red-600/5 to-transparent rounded-full translate-y-2 -translate-x-2"></div>
                </div>

                {/* Connection line */}
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 w-12 lg:w-16 h-px bg-gradient-to-r from-red-400/50 to-transparent transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 w-2 h-2 bg-red-500 rounded-full transform translate-x-1 -translate-y-1/2 animate-pulse"></div>
                </div>
              </div>

              {/* Card 3 - Vidas Salvas */}
              <div className="relative group">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl shadow-lg">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Number */}
                  <div className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-text mb-3">
                    1M
                  </div>
                  
                  {/* Label */}
                  <div className="text-xl font-bold text-gray-900 mb-2">
                    Vidas salvas
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Nosso objetivo até 2025
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-r from-red-500/10 to-transparent rounded-full -translate-y-2 translate-x-2 group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-r from-red-600/5 to-transparent rounded-full translate-y-2 -translate-x-2"></div>
                </div>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="mt-12 text-center">
              <p className="text-gray-700 text-sm max-w-2xl mx-auto">
                <span className="text-red-600 font-semibold">Cada número representa vidas reais</span> que foram tocadas pela nossa metodologia de ensino especializada em paciente grave.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;