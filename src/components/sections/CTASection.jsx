import React, { useState, useEffect, useMemo } from 'react';
import { ArrowRight, CheckCircle, Users, Award, Zap } from 'lucide-react';
import Container from '../common/Container';
import LeadFormModal from '../common/LeadFormModal';
import { useGoogleSheetsFPPG } from '@/hooks/useGoogleSheetsFPPG';

/**
 * Converte uma string de data em português para um objeto Date
 */
const parsePortugueseDate = (dateString) => {
  if (!dateString) return null;

  const months = {
    'janeiro': 0, 'fevereiro': 1, 'março': 2, 'marco': 2, 'abril': 3,
    'maio': 4, 'junho': 5, 'julho': 6, 'agosto': 7,
    'setembro': 8, 'outubro': 9, 'novembro': 10, 'dezembro': 11
  };

  const lowerStr = dateString.toLowerCase();
  const match = lowerStr.match(/(\d{1,2})\s*(?:de\s+)?(\w+)/);
  
  if (match) {
    const day = parseInt(match[1], 10);
    let monthName = match[2];
    
    if (!months.hasOwnProperty(monthName)) {
      const monthMatch = lowerStr.match(/de\s+(\w+)/);
      if (monthMatch) {
        monthName = monthMatch[1];
      }
    }
    
    const month = months[monthName];
    
    if (month !== undefined && day >= 1 && day <= 31) {
      const now = new Date();
      let year = now.getFullYear();
      
      const eventDate = new Date(year, month, day, 0, 0, 0);
      if (eventDate < now) {
        year += 1;
      }
      
      return new Date(year, month, day, 0, 0, 0);
    }
  }
  
  return null;
};

/**
 * Calcula o tempo restante até uma data
 */
const getTimeLeft = (targetDate) => {
  if (!targetDate) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  
  const now = new Date();
  const difference = Math.max(targetDate - now, 0);
  
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const CTASection = () => {
  // Busca dados da planilha
  const { data: sheetData, loading } = useGoogleSheetsFPPG();
  
  // Extrai data, local e lote ativo da planilha
  const eventDateString = sheetData?.Data || '';
  const eventCity = sheetData?.Local || 'Carregando...';
  const activeLot = sheetData?.Lote || 1; // Lote ativo (1, 2 ou 3) - vem da planilha
  
  // Converte a string de data para objeto Date
  const targetDate = useMemo(() => {
    return parsePortugueseDate(eventDateString);
  }, [eventDateString]);
  
  // Estado do countdown
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));
  
  // Atualiza o countdown a cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);

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
  
  // Configuração dos lotes com preços
  const offerLots = [
    {
      number: 1,
      price: '3.000',
      note: '70% preenchido'
    },
    {
      number: 2,
      price: '3.300',
      note: ''
    },
    {
      number: 3,
      price: '4.000',
      note: ''
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

            {/* Data e Local - Dinâmicos */}
            <div className="text-center mb-6">
              <p className="text-sm uppercase tracking-[0.2em] text-white/80 mb-2">Próxima turma</p>
              <p className="text-2xl lg:text-3xl font-bold text-white mb-1">
                {eventDateString || 'Carregando...'}
              </p>
              <p className="text-lg text-white/80">
                {eventCity}
              </p>
            </div>
            
            <div className="relative bg-black/40 border-2 border-white/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 w-full max-w-3xl mx-auto shadow-2xl backdrop-blur-md">
              {/* Brilho decorativo */}
              <div className="hidden sm:block absolute -top-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"></div>
              
              {/* Lista de lotes - AGORA DINÂMICA */}
              <ul className="space-y-3 sm:space-y-4">
                {offerLots.map((lot, index) => {
                  // Lógica dinâmica baseada no valor "Lote" da planilha
                  const isBlocked = lot.number > activeLot;  // Bloqueado se número > lote ativo
                  const isActive = lot.number === activeLot; // Ativo se número = lote ativo
                  const isPast = lot.number < activeLot;     // Esgotado se número < lote ativo
                  
                  return (
                    <li 
                      key={index} 
                      className={`relative group flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 ${
                        isBlocked 
                          ? 'bg-black/60 border-white/20 opacity-75 cursor-not-allowed' 
                          : isPast
                            ? 'bg-gray-800/60 border-gray-500/30 opacity-60 cursor-not-allowed'
                            : 'bg-white/95 border-white hover:bg-white hover:shadow-2xl hover:scale-[1.02] cursor-pointer'
                      }`}
                    >
                      {/* Header mobile: Indicador + Badge */}
                      <div className="flex items-center justify-between w-full sm:w-auto gap-3">
                        {/* Indicador de status */}
                        <div className="relative flex-shrink-0">
                          {isBlocked ? (
                            <div className="flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-red-600/90 border-2 border-white/40">
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            </div>
                          ) : isPast ? (
                            <div className="flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-gray-600 border-2 border-gray-500">
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-green-600 border-2 border-green-500 shadow-lg">
                              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          )}
                        </div>

                        {/* Badges - Mobile */}
                        <div className="flex flex-wrap items-center gap-2 sm:hidden">
                          <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                            isBlocked || isPast
                              ? 'bg-white/10 text-white/60' 
                              : 'bg-red-600 text-white'
                          }`}>
                            {lot.number}º Lote
                          </span>
                          
                          {isBlocked && (
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30">
                              <svg className="w-3 h-3 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                              </svg>
                              <span className="text-xs font-semibold text-yellow-200">Bloqueado</span>
                            </span>
                          )}
                          
                          {isPast && (
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-500/20 border border-gray-500/30">
                              <span className="text-xs font-semibold text-gray-300">Esgotado</span>
                            </span>
                          )}
                          
                          {isActive && (
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 border border-green-500/30 animate-pulse">
                              <span className="text-xs font-semibold text-green-300">Disponível</span>
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Conteúdo */}
                      <div className="flex-1 w-full sm:w-auto min-w-0">
                        {/* Badges - Desktop */}
                        <div className="hidden sm:flex items-center gap-3 mb-2">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                            isBlocked || isPast
                              ? 'bg-white/10 text-white/60' 
                              : 'bg-red-600 text-white'
                          }`}>
                            {lot.number}º Lote
                          </span>
                          
                          {isBlocked && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30">
                              <svg className="w-3.5 h-3.5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                              </svg>
                              <span className="text-xs font-semibold text-yellow-200">Bloqueado</span>
                            </span>
                          )}
                          
                          {isPast && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-500/20 border border-gray-500/30">
                              <span className="text-xs font-semibold text-gray-300">Esgotado</span>
                            </span>
                          )}
                          
                          {isActive && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 animate-pulse">
                              <span className="text-xs font-semibold text-green-300">Disponível</span>
                            </span>
                          )}
                        </div>
                        
                        {/* Preço */}
                        <div className="mb-1 sm:mb-2">
                          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                            <span className={`text-xs sm:text-sm font-medium ${
                              isBlocked || isPast ? 'text-white/50' : 'text-gray-700'
                            }`}>
                              {isActive ? 'Valor promocional:' : isPast ? 'Valor era:' : 'Valor será:'}
                            </span>
                            <span className={`text-2xl sm:text-3xl md:text-3xl font-black tracking-tight ${
                              isBlocked ? 'text-white/40' : isPast ? 'text-gray-400 line-through' : 'text-red-700'
                            }`}>
                              R$ {lot.price}
                            </span>
                          </div>
                        </div>
                        
                        {/* Nota/Observação - só para lote ativo */}
                        {isActive && lot.note && (
                          <div className="flex items-center gap-2 mt-2 sm:mt-3">
                            <span className="inline-block h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-yellow-400 animate-pulse"></span>
                            <p className="text-xs sm:text-sm font-semibold text-red-200">
                              {lot.note}
                            </p>
                          </div>
                        )}

                        {/* Mensagem de bloqueio */}
                        {isBlocked && (
                          <p className="text-xs text-white/60 mt-2 sm:mt-3 italic">
                            Aguarde a liberação do lote anterior
                          </p>
                        )}
                        
                        {/* Mensagem de esgotado */}
                        {isPast && (
                          <p className="text-xs text-gray-400 mt-2 sm:mt-3 italic">
                            Este lote já foi encerrado
                          </p>
                        )}
                      </div>

                      {/* Seta indicadora (só desktop e só para ativo) */}
                      {isActive && (
                        <div className="hidden sm:flex flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <svg 
                            className="w-5 h-5 md:w-6 md:h-6 text-red-600 group-hover:translate-x-1 transition-transform duration-300" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      )}

                      {/* Overlay de bloqueio */}
                      {isBlocked && (
                        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 rounded-xl sm:rounded-2xl pointer-events-none"></div>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Nota de rodapé */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t-2 border-white/20">
                <div className="flex items-start gap-2 sm:gap-3 text-white/70">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    Os lotes são liberados progressivamente. Garanta seu lugar com o melhor preço!
                  </p>
                </div>
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
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <benefit.icon className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
