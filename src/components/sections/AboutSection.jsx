import React from 'react';
import { CheckCircle, Stethoscope } from 'lucide-react';

const AboutSection = () => {
  // Helper function para adicionar base URL
  const getImageUrl = (imagePath) => {
    // Remove a barra inicial se existir e adiciona BASE_URL
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  };

  const founders = [
    {
      name: 'Dr. Ian Camilo',
      image: 'Ian.jpg', // Sem barra inicial
      credentials: 'Médico pós-graduado em Medicina de Emergência e Cardiologia',
      role: 'Professor universitário e criador do método RPP',
      specialties: ['Raciocínio, Prescrição e Procedimento', 'Medicina de Emergência', 'Cardiologia']
    },
    {
      name: 'Dr. Rodrigo Cleto',
      image: 'Cleto.jpg', // Sem barra inicial
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
    <section id="about" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Quem está por trás da Formação */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Quem está por trás da <span className="text-red-600">Formação</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A Liberdade Médica nasceu da vivência prática de dois médicos que atuam todos os dias
              na linha de frente do atendimento a pacientes graves.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:shadow-xl hover:-translate-y-1"
              >
                <img
                  src={getImageUrl(founder.image)}
                  alt={`Foto de ${founder.name}`}
                  className={`w-full h-92 object-cover ${
                    founder.name.includes('Ian')
                      ? 'object-[center_18%]'
                      : 'object-[center_32%]'
                  }`}
                  onError={(e) => {
                    console.error(`Erro ao carregar imagem: ${founder.image}`);
                    e.target.style.opacity = '0.3';
                  }}
                />

                <div className="p-6 sm:p-8">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <Stethoscope className="h-8 w-8 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{founder.name}</h3>
                      <p className="text-red-600 font-semibold">{founder.role}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed">
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
          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 sm:p-12 text-white text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Nossa Missão</h3>
            <p className="text-base sm:text-xl leading-relaxed max-w-4xl mx-auto opacity-95">
              Preparar milhares de médicos para atuar com <strong>segurança, clareza e confiança</strong> onde mais importa:
              na vida real. Combinando didática, realismo clínico e supervisão de perto.
            </p>
          </div>
        </div>

        {/* Para quem é essa formação */}
        <div>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Para quem é essa <span className="text-red-600">Formação?</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Essa formação é para o médico que quer dominar os momentos mais críticos do plantão,
              com preparo técnico, raciocínio rápido e segurança nos procedimentos.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 mb-12">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-red-50 rounded-xl p-4 sm:p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl flex items-start gap-3 sm:flex-col sm:items-center sm:text-center"
              >
                <div className="bg-red-100 p-2 rounded-full sm:mb-3">
                  <CheckCircle className="h-5 w-5 text-red-600 sm:h-6 sm:w-6" />
                </div>
                <span className="text-gray-800 font-medium leading-snug text-sm sm:text-base">{audience}</span>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Acelere o que levaria meses ou anos para conquistar sozinho
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Chega de improviso. Em dois dias, você pode sair do medo e entrar no plantão com segurança real.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-lg transition-colors">
              Quero garantir minha vaga
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;