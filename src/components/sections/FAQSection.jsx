import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import Container from '../common/Container';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'O aluno precisa assistir às aulas antes da imersão?',
      answer: 'Sim. As aulas online pré-evento são fundamentais para nivelar o conhecimento e maximizar o aproveitamento da parte prática presencial. Elas são a base para que você aproveite ao máximo a imersão, assim como as primeiras aulas preparam o terreno para o entendimento dos investimentos.'
    },
    {
      question: 'E se o aluno perder um dia da imersão?',
      answer: 'A experiência é projetada para ser completa nos dois dias. Não recomendamos a participação parcial, pois o conteúdo é sequencial e interligado, assim como a metodologia que constrói o conhecimento passo a passo.'
    },
    {
      question: 'Posso trocar de grupo/estação durante a imersão?',
      answer: 'As rotações entre as estações são cuidadosamente organizadas para garantir um fluxo ideal de aprendizado e a melhor experiência prática. Trocas são permitidas apenas em casos excepcionais e mediante avaliação da coordenação, visando manter a qualidade e a organização da imersão.'
    },
    {
      question: 'Qual é a metodologia utilizada na formação?',
      answer: 'Utilizamos o método RPP (Raciocínio, Prescrição e Procedimentos), desenvolvido pelo Dr. Ian Camilo. É uma metodologia 100% hands-on, com supervisão direta de instrutores experientes, focada na experiência prática e estratégica para controle de situações críticas.'
    },
    {
      question: 'A formação é adequada para médicos recém-formados?',
      answer: 'Sim! A formação é especialmente valiosa para médicos recém-formados, residentes e médicos experientes. Durante a faculdade, não aprendemos o suficiente para atuar na sala vermelha, e nossa formação é essencial para identificar lacunas e pontos fracos, preparando você para a realidade do plantão.'
    },
    {
      question: 'Quais equipamentos e materiais são utilizados?',
      answer: 'Utilizamos manequins avançados para simulações realistas, equipamentos de ultrassom para treinamento do Protocolo RUSH, ventiladores mecânicos para prática de VM e VNI, e todos os materiais necessários para procedimentos como IOT, cricotireoidostomia e drenagem de tórax.'
    },
    {
      question: 'Há certificação ao final da formação?',
      answer: 'Sim, todos os participantes que completarem a formação recebem certificado de participação da Liberdade Médica, reconhecendo as horas de treinamento prático e teórico em atendimento ao paciente grave.'
    },
    {
      question: 'Como funciona o suporte após a formação?',
      answer: 'Oferecemos suporte contínuo através de nossa comunidade de alunos, materiais de revisão e acesso a atualizações de protocolos. Além disso, você terá acesso a eventos e workshops de atualização exclusivos para ex-alunos.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <HelpCircle className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Perguntas <span className="text-red-600">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Preparamos as respostas para as perguntas mais comuns sobre a 
            Formação em Paciente Grave. Não encontrou sua dúvida? Entre em contato conosco.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-6 w-6 text-red-600" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Nossa equipe está pronta para esclarecer todas as suas questões sobre a formação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Falar com Especialista
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                Enviar Mensagem
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;

