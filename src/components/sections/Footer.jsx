import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Container from '../common/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    formacao: [
      { label: 'Sobre a Formação', href: '#about' },
      { label: 'O que você vai vivenciar', href: '#features' },
      { label: 'Metodologia RPP', href: '#methodology' },
      { label: 'Certificação', href: '#certification' }
    ],
    empresa: [
      { label: 'Sobre a Liberdade Médica', href: '#company' },
      { label: 'Nossos Instrutores', href: '#instructors' },
      { label: 'Depoimentos', href: '#testimonials' },
      { label: 'Cases de Sucesso', href: '#cases' }
    ],
    suporte: [
      { label: 'Perguntas Frequentes', href: '#faq' },
      { label: 'Fale Conosco', href: '#contact' },
      { label: 'Suporte Técnico', href: '#support' },
      { label: 'Central de Ajuda', href: '#help' }
    ],
    legal: [
      { label: 'Política de Privacidade', href: '#privacy' },
      { label: 'Termos de Uso', href: '#terms' },
      { label: 'LGPD', href: '#lgpd' },
      { label: 'Cookies', href: '#cookies' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-red-600 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Liberdade Médica</span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Preparando médicos para atuar com segurança, clareza e confiança 
                onde mais importa: na vida real. Combinando didática, realismo clínico 
                e supervisão de perto.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-400" />
                  <span className="text-gray-300">+55 (11) 3000-0000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-red-400" />
                  <span className="text-gray-300">contato@liberdademedica.com.br</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-red-400" />
                  <span className="text-gray-300">São Paulo, SP - Brasil</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 p-3 rounded-lg hover:bg-red-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-6 text-red-400">Formação</h3>
                  <ul className="space-y-3">
                    {footerLinks.formacao.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-6 text-red-400">Empresa</h3>
                  <ul className="space-y-3">
                    {footerLinks.empresa.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-6 text-red-400">Suporte</h3>
                  <ul className="space-y-3">
                    {footerLinks.suporte.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-6 text-red-400">Legal</h3>
                  <ul className="space-y-3">
                    {footerLinks.legal.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Liberdade Médica. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>CNPJ: 00.000.000/0001-00</span>
              <span>•</span>
              <span>Desenvolvido com ❤️ para salvar vidas</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

