import React from 'react';
import { Star, Quote } from 'lucide-react';
import Container from '../common/Container';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Judy',
      role: 'Médica',
      image: 'Judy.png',
      content:
        'Depois do workshop, a nossa visão de emergência muda completamente. A gente cobre pontos cegos que nem sabia que existiam. Estou com uma expectativa enorme para a parte prática, é ela que vai fazer diferença real no plantão.',
      rating: 5,
    },
    {
      name: 'Marcelo',
      role: 'Médico',
      image: 'Marcelo.png',
      content:
        'Eu indico o workshop com certeza. As aulas foram muito exclusivas, conteúdo refinado, direto ao ponto. Agora, com as práticas, sei que vai ser ainda melhor. Foi uma experiência realmente bacana.',
      rating: 5,
    },
    {
      name: 'Yasmim',
      role: 'Recém-formada',
      image: 'Yasmim.png',
      content:
        'Durante a faculdade, não aprendemos o suficiente para atuar na sala vermelha. Esse curso é essencial para identificar lacunas e pontos fracos. Me senti muito mais preparada para enfrentar a realidade do plantão.',
      rating: 5,
    },
    {
      name: 'Luana',
      role: 'Médica',
      image: 'Luana.png',
      content:
        'Vim buscar mais segurança para atender o paciente grave. A formação acadêmica sozinha não nos prepara para isso. Hoje, saio com mais bagagem, mais confiança e mais preparo para o que realmente importa.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que dizem os nossos <span className="text-red-600">alunos?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Médicos de todo o Brasil já transformaram sua prática com a Liberdade Médica. 
            Veja alguns depoimentos de quem vivenciou nossa formação.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="h-8 w-8 text-red-200" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-8 italic text-lg flex-1">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center mt-4">
                <img
                  src={`/${testimonial.image}`}
                  alt={`Foto de ${testimonial.name}`}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover mr-4 border-2 border-red-600"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-red-600 font-medium">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Resultados que Comprovam a Qualidade
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-600">dos alunos recomendam</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">3.000+</div>
              <div className="text-gray-600">Médicos formados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">95%</div>
              <div className="text-gray-600">Sentem-se mais seguros</div>
            </div>
          </div>
        </div>

        {/* Additional testimonial highlight */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-white text-center">
          <Quote className="h-12 w-12 text-red-200 mx-auto mb-6" />
          <p className="text-2xl font-medium mb-6 italic max-w-4xl mx-auto">
            "A formação acadêmica sozinha não nos prepara para a realidade da sala vermelha. 
            Aqui você ganha a bagagem, confiança e preparo que realmente importa."
          </p>
          <div className="text-lg opacity-90">
            — Consenso entre nossos alunos
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;

