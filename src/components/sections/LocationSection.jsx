import React from 'react';
import { MapPin, Car, Building, Coffee, Star } from 'lucide-react';
import Container from '../common/Container';

const LocationSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 lg:py-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl blur-lg opacity-75"></div>
              <div className="relative bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-6 shadow-2xl">
                <MapPin className="w-10 h-10 text-white mx-auto" />
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Onde acontece a <span className="text-transparent bg-gradient-to-r from-red-400 to-red-500 bg-clip-text">Formação?</span>
            </h2>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-red-400"></div>
              <Star className="w-4 h-4 text-red-400" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-red-500 to-red-400"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8">
                A Formação em Paciente Grave acontece no nosso <span className="font-bold text-red-400 bg-red-500/20 px-2 py-1 rounded-lg">espaço exclusivo</span>, localizado em uma das regiões mais acessíveis e valorizadas de Goiânia: o <span className="font-bold text-red-400 bg-red-500/20 px-2 py-1 rounded-lg">Setor Bela Vista</span>.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Estamos em um prédio moderno, com estrutura preparada para aulas práticas, auditório climatizado, salas de simulação, espaço de descanso e coffee breaks à disposição dos alunos.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Feature 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 shadow-xl">
                <div className="relative mb-6">
                  <div className="relative w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                </div>
                <p className="text-gray-200 leading-relaxed font-medium">
                  A poucos minutos da <span className="text-red-400 font-semibold">Av. T-63</span> e do <span className="text-red-400 font-semibold">Shopping Flamboyant</span>
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 shadow-xl">
                <div className="relative mb-6">
                  <div className="relative w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                    <Car className="w-8 h-8 text-white" />
                  </div>
                </div>
                <p className="text-gray-200 leading-relaxed font-medium">
                  Fácil acesso para quem vem de <span className="text-red-400 font-semibold">carro, aplicativo</span> ou <span className="text-red-400 font-semibold">transporte público</span>
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 shadow-xl">
                <div className="relative mb-6">
                  <div className="relative w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                </div>
                <p className="text-gray-200 leading-relaxed font-medium">
                  Opções de <span className="text-red-400 font-semibold">hospedagem, restaurantes</span> e <span className="text-red-400 font-semibold">conveniências</span> próximos
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-r from-red-500/20 via-red-600/15 to-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-3xl p-10 shadow-2xl">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl blur-lg opacity-75"></div>
                  <div className="relative bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-4 shadow-2xl">
                    <Coffee className="w-10 h-10 text-white mx-auto" />
                  </div>
                </div>
                
                <p className="text-white text-xl lg:text-2xl font-medium leading-relaxed">
                  Tudo isso para garantir conforto, agilidade e uma experiência completa durante seus dois dias de imersão.
                </p>
                
                <div className="flex items-center justify-center gap-2 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-red-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LocationSection;

