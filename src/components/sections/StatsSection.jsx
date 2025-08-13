import React from 'react';
import { Users, FileText, Globe, Award } from 'lucide-react';
import Container from '../common/Container';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Hospitais Atendidos',
      color: 'text-blue-600'
    },
    {
      icon: FileText,
      number: '50.000+',
      label: 'Casos Analisados',
      color: 'text-green-600'
    },
    {
      icon: Globe,
      number: '15',
      label: 'Países Utilizando',
      color: 'text-purple-600'
    },
    {
      icon: Award,
      number: '98%',
      label: 'Taxa de Satisfação',
      color: 'text-red-600'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Resultados que Transformam Vidas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa tecnologia já impactou milhares de profissionais de saúde e 
            salvou incontáveis vidas ao redor do mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              
              <div className="space-y-2">
                <div className={`text-4xl font-bold ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Certificações e Reconhecimentos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-lg font-semibold text-gray-900">ISO 27001</div>
                <div className="text-gray-600">Segurança da Informação</div>
              </div>
              <div className="space-y-2">
                <div className="text-lg font-semibold text-gray-900">ANVISA</div>
                <div className="text-gray-600">Aprovado pela Agência</div>
              </div>
              <div className="space-y-2">
                <div className="text-lg font-semibold text-gray-900">LGPD</div>
                <div className="text-gray-600">Conformidade Total</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;

