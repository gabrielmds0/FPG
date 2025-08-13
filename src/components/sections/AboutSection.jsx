import React from 'react';
import { CheckCircle, Stethoscope } from 'lucide-react';
import Container from '../common/Container';

const AboutSection = () => {
  const founders = [
    {
      name: 'Dr. Ian Camilo',
      image: 'https://placehold.co/600x400?text=Dr.+Ian+Camilo',
      credentials: 'Médico pós-graduado em Medicina de Emergência e Cardiologia',
      role: 'Professor universitário e criador do método RPP',
      specialties: ['Raciocínio, Prescrição e Procedimento', 'Medicina de Emergência', 'Cardiologia']
    },
    {
      name: 'Dr. Rodrigo Cleto',
      image: 'https://placehold.co/600x400?text=Dr.+Rodrigo+Cleto',
      credentials: 'Médico com mais de 20 anos de experiência como coordenador de UTI',
      role: 'Especialista em Clínica Médica, Cardiologia e Terapia Intensiva',
      specialties: ['Instrutor de ACLS/BLS pela AHA', 'Decisões clínicas de alta complexidade', 'Coordenação de UTI']
    }
  ];

  const targetAudience = [
    'Médicos recém-formados que querem segurança no plantão',
    'Residentes buscando domínio em emergências',
    'Médicos experientes que querem aperfeiçoamento',
    'Profissionais que atuam em sala vermelha',
    'Médicos que buscam mais autonomia e reconhecimento',
    'Quem quer acelerar o aprendizado prático'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <Container>
        {/* Quem está por trás da Formação */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Quem está por trás da <span className="text-red-600">Formação</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A Liberdade Médica nasceu da vivência prática de dois médicos que atuam todos os dias 
              na linha de frente do atendimento a pacientes graves.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                  src={founder.image}
                  alt={`Foto de ${founder.name}`}
                  className="w-full h-90 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <Stethoscope className="h-8 w-8 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{founder.name}</h3>
                      <p className="text-red-600 font-semibold">{founder.role}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {founder.credentials}
                  </p>

                  <div className="space-y-3">
                    {founder.specialties.map((specialty, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Missão */}
          <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">Nossa Missão</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-95">
              Preparar milhares de médicos para atuar com <strong>segurança, clareza e confiança</strong> onde mais importa: 
              na vida real. Combinando didática, realismo clínico e supervisão de perto.
            </p>
          </div>
        </div>

        {/* Para quem é essa formação */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Para quem é essa <span className="text-red-600">Formação?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Essa formação é para o médico que quer dominar os momentos mais críticos do plantão, 
              com preparo técnico, raciocínio rápido e segurança nos procedimentos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {targetAudience.map((audience, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{audience}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Acelere o que levaria meses ou anos para conquistar sozinho
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Chega de improviso. Em dois dias, você pode sair do medo e entrar no plantão com segurança real.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Quero garantir minha vaga
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;

