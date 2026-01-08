import React from 'react';
import { 
  Monitor, 
  Stethoscope, 
  Heart, 
  Baby, 
  Users,
  Coffee,
  FileText,
  GraduationCap,
  Target,
  BriefcaseMedical  
} from 'lucide-react';
import Container from '../common/Container';
import LeadFormModal from '../common/LeadFormModal';

const FeaturesSection = () => {
  const experiences = [
    {
      icon: GraduationCap,
      title: 'Aulas Online (Pré-Imersão)',
      description: '10 aulas exclusivas sobre os Fundamentos da Sala Vermelha. Casos clínicos reais, abordagem prática ao paciente grave e revisão teórica estratégica guiados por especialistas da linha de frente.',
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-100',
      highlights: ['Casos clínicos reais', 'Abordagem prática', 'Revisão teórica estratégica']
    },
    {
      icon: Target,
      title: 'Estação 1: Via Aérea e Intervenções Críticas',
      description: 'Desenvolva domínio técnico sobre os procedimentos mais críticos: Intubação Orotraqueal (IOT), Cricotireoidostomia e Drenagem de Tórax. Treinamento com manequins avançados e orientação direta.',
      iconColor: 'text-red-600',
      bgColor: 'bg-red-50',
      highlights: ['Intubação Orotraqueal', 'Cricotireoidostomia', 'Drenagem de Tórax']
    },
    {
      icon: Monitor,
      title: 'Estação 2: Ultrassonografia e Acesso',
      description: 'Use o ultrassom como extensão do seu raciocínio clínico. Protocolo RUSH para identificar causas de choque e acesso venoso periférico e central guiado por imagem.',
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-100',
      highlights: ['Protocolo RUSH', 'Acesso venoso guiado', 'Decisões em tempo real']
    },
    {
      icon: BriefcaseMedical  ,
      title: 'Estação 3: Ventilação e Suporte Respiratório',
      description: 'Pratique Ventilação Mecânica (VM) e Ventilação Não Invasiva (VNI). Aprenda parâmetros ideais, ajustes conforme quadro clínico e como evitar complicações.',
      iconColor: 'text-green-600',
      bgColor: 'bg-green-100',
      highlights: ['Ventilação Mecânica', 'Ventilação Não Invasiva', 'Parâmetros ideais']
    },
    {
      icon: Heart,
      title: 'Estação 4: Revisão ACLS',
      description: 'Revisão dos protocolos abordados na certificação internacional ACLS, focado em emergências cardiovasculares',
      iconColor: 'text-pink-600',
      bgColor: 'bg-pink-100',
      highlights: ['Protocolo ', 'Abordagem do paciente grave', 'Raciocínio clínico']
    },
    {
      icon: Users,
      title: 'Talks e Dinâmicas',
      description: 'Aulas dinâmicas e discussões clínicas que aproximam teoria da realidade. Casos reais, troca entre colegas e estudos orientados pelos instrutores.',
      iconColor: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
      highlights: ['Casos reais', 'Discussões clínicas', 'Troca de experiências']
    },
    {
      icon: Coffee,
      title: 'Happy Hour Médico',
      description: 'Conecte com colegas de profissão, troque experiências e amplie sua rede. Momento de descompressão e aprendizado informal com quem realmente vive o que ensina.',
      iconColor: 'text-orange-600',
      bgColor: 'bg-orange-100',
      highlights: ['Networking', 'Troca de experiências', 'Aprendizado informal']
    },
    {
      icon: FileText,
      title: 'Oficina de Prescrição',
      description: 'Monte prescrições e planos de conduta completos para casos reais, com tempo cronometrado e análise crítica dos instrutores. Transforme conhecimento em agilidade clínica.',
      iconColor: 'text-teal-600',
      bgColor: 'bg-teal-100',
      highlights: ['Prescrições práticas', 'Tempo cronometrado', 'Análise crítica']
    },
    {
      icon: Stethoscope,
      title: 'Metodologia 100% Hands On',
      description: 'Método RPP – Raciocínio, Prescrição e Procedimentos, com supervisão direta de instrutores experientes. Experiência prática e estratégica para controle de situações críticas.',
      iconColor: 'text-gray-700',
      bgColor: 'bg-gray-350',
      highlights: ['Método RPP', 'Supervisão direta', 'Experiência prática']
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que você vai <span className="text-red-600">vivenciar?</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nossa imersão presencial é um programa intensivo e prático, cuidadosamente dividido para
            maximizar sua absorção de conhecimento e habilidades. Você será exposto às situações mais
            críticas da emergência com supervisão direta.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:mx-0 md:px-0">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="min-w-[80%] sm:min-w-[60%] md:min-w-0 group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:-translate-y-1 snap-center"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${experience.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <experience.icon className={`h-7 w-7 ${experience.iconColor}`} />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                {experience.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                {experience.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                {experience.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Inscrições abertas para a nova turma
            </h3>
            <p className="text-base sm:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Não perca a oportunidade de transformar sua prática médica.
              Vagas limitadas para garantir a qualidade da experiência.
            </p>
            <LeadFormModal
              trigger={
                <button className="bg-white text-red-600 px-8 sm:px-12 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                  Quero me tornar aluno
                </button>
              }
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;

