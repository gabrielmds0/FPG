import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Container from '../common/Container';
import LeadFormModal from '../common/LeadFormModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Principal', href: '#home' },
    { label: 'Sobre a Formação', href: '#about' },
    { label: 'O que você vai vivenciar', href: '#features' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Perguntas Frequentes', href: '#faq' }
  ];

  return (
    <header className="bg-background shadow-sm border-b border-[#161616] sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary p-2 rounded-lg">
              <Heart className="h-6 w-6 text-background" />
            </div>
            <span className="text-xl font-bold text-foreground">Liberdade Médica</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button (desktop) */}
          <div className="hidden md:block">
            <LeadFormModal
              trigger={
                <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2">
                  Quero garantir minha inscrição
                </Button>
              }
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#161616]">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              {/* CTA Button (mobile) */}
              <LeadFormModal
                trigger={
                  <Button className="bg-red-600 hover:bg-red-700 text-white w-full mt-4">
                    Quero garantir minha inscrição
                  </Button>
                }
              />
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
