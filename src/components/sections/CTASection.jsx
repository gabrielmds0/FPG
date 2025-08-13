import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, CheckCircle, Users, Award, Zap } from 'lucide-react';
import Container from '../common/Container';
import LeadFormModal from '../common/LeadFormModal';

const CTASection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 30,
    seconds: 40
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Demonstração Personalizada',
      description: 'Sessão exclusiva com nossos especialistas'
    },
    {
      icon: Users,
      title: 'Vagas Limitadas',
      description: 'Turmas pequenas para melhor aproveitamento'
    },
    {
      icon: Award,
      title: 'Certificação Inclusa',
      description: 'Certificado reconhecido de participação'
    },
    {
      icon: Zap,
      title: 'Método Exclusivo RPP',
      description: 'Raciocínio, Prescrição e Procedimentos'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent"></div>
      </div>
      
      <Container>
        <div className="relative z-10">
          {/* Main CTA */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Pronto para Dominar a
              <span className="text-red-500"> Sala Vermelha?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Junte-se a mais de 3.000 médicos que já transformaram sua prática com a 
              Liberdade Médica. Inscreva-se agora e garante sua vaga na próxima turma.
            </p>
          </div>

          {/* Offer Section */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 lg:p-12 mb-16 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Oferta Especial de Lançamento
              </h3>
              <p className="text-xl opacity-90">
                Condições especiais para as próximas inscrições
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl lg:text-4xl font-bold">{timeLeft.days}</div>
                <div className="text-sm opacity-80">Dias</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl lg:text-4xl font-bold">{timeLeft.hours}</div>
                <div className="text-sm opacity-80">Horas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl lg:text-4xl font-bold">{timeLeft.minutes}</div>
                <div className="text-sm opacity-80">Min</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl lg:text-4xl font-bold">{timeLeft.seconds}</div>
                <div className="text-sm opacity-80">Seg</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LeadFormModal
                trigger={
                  <button className="bg-white text-red-600 px-12 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg group">
                    Quero garantir minha inscrição
                    <ArrowRight className="ml-2 h-5 w-5 inline group-hover:translate-x-1 transition-transform" />
                  </button>
                }
              />
              <LeadFormModal
                trigger={
                  <button className="border-2 border-white text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-red-600 transition-colors">
                    Falar com Especialista
                  </button>
                }
              />
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-300 mb-4">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Sem compromisso</span>
              <span>•</span>
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Suporte incluído</span>
              <span>•</span>
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Satisfação garantida</span>
            </div>
            <p className="text-lg text-gray-400">
              Mais de 3.000 médicos confiam na Liberdade Médica
            </p>
          </div>

          {/* Contact Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-xl font-bold mb-2 text-red-400">Telefone</h4>
              <p className="text-gray-300">+55 (11) 3000-0000</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-red-400">Email</h4>
              <p className="text-gray-300">contato@liberdademedica.com.br</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-red-400">Horário</h4>
              <p className="text-gray-300">Segunda a Sexta, 8h às 18h</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;

