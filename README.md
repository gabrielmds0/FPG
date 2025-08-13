# MedCare Pro - Landing Page

Uma landing page moderna e responsiva para produto médico, desenvolvida com React, Vite e Tailwind CSS, baseada na estrutura do site AUVP.

## 🚀 Tecnologias Utilizadas

- **React 18** - Framework JavaScript para interfaces de usuário
- **Vite** - Build tool e servidor de desenvolvimento
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes UI pré-construídos
- **Lucide Icons** - Biblioteca de ícones
- **JavaScript (JSX)** - Linguagem de programação

## 📁 Estrutura do Projeto

```
medical-product-landing/
├── public/                     # Arquivos estáticos
├── src/
│   ├── assets/                 # Imagens e ícones
│   │   ├── images/
│   │   └── icons/
│   ├── components/
│   │   ├── common/             # Componentes reutilizáveis
│   │   │   └── Container.jsx
│   │   ├── sections/           # Seções da página
│   │   │   ├── Header.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── StatsSection.jsx
│   │   │   ├── FeaturesSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   │   ├── CTASection.jsx
│   │   │   └── Footer.jsx
│   │   └── ui/                 # Componentes shadcn/ui
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utilitários
│   ├── App.jsx                 # Componente principal
│   ├── App.css                 # Estilos principais
│   ├── index.css               # Estilos globais
│   └── main.jsx                # Ponto de entrada
├── index.html                  # HTML principal
├── package.json                # Dependências
└── vite.config.js             # Configuração Vite
```

## 🎨 Seções da Landing Page

### 1. Header
- Logo da empresa (MedCare Pro)
- Menu de navegação responsivo
- Botão de CTA principal

### 2. Hero Section
- Título impactante
- Descrição do produto
- Botões de ação (Demonstração e Vídeo)
- Painel de monitoramento simulado
- Indicadores de confiança

### 3. Stats Section
- Números de impacto (hospitais, casos, países, satisfação)
- Certificações (ISO 27001, ANVISA, LGPD)

### 4. Features Section
- 9 funcionalidades principais do produto
- Cards interativos com ícones
- CTA para demonstração

### 5. About Section
- Informações sobre o produto
- Benefícios e reconhecimentos
- Missão da empresa
- Tecnologias utilizadas

### 6. Testimonials Section
- 6 depoimentos de médicos
- Avaliações e estatísticas
- Cards com informações dos profissionais

### 7. CTA Section
- Contador regressivo
- Oferta especial
- Múltiplos CTAs
- Informações de contato

### 8. Footer
- Links organizados por categoria
- Informações de contato
- Redes sociais
- Certificações

## 🎯 Características do Design

### Paleta de Cores
- **Primária**: Vermelho (#DC2626, #EF4444)
- **Secundária**: Cinza escuro (#1F2937, #374151)
- **Accent**: Verde (#10B981), Azul (#3B82F6)
- **Neutros**: Branco (#FFFFFF), Cinza claro (#F3F4F6)

### Tipografia
- Fontes do sistema otimizadas
- Hierarquia clara de tamanhos
- Textos legíveis e acessíveis

### Responsividade
- Design mobile-first
- Breakpoints otimizados
- Grid system flexível

### Interatividade
- Hover states em botões e cards
- Transições suaves
- Contador regressivo funcional
- Menu mobile responsivo

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou pnpm

### Instalação
```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre no diretório
cd medical-product-landing

# Instale as dependências
npm install
# ou
pnpm install
```

### Desenvolvimento
```bash
# Inicie o servidor de desenvolvimento
npm run dev
# ou
pnpm dev

# Acesse http://localhost:5173
```

### Build para Produção
```bash
# Gere os arquivos de produção
npm run build
# ou
pnpm build

# Os arquivos estarão na pasta 'dist/'
```

### Preview da Build
```bash
# Visualize a build de produção
npm run preview
# ou
pnpm preview
```

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Personalização

### Cores
Edite as variáveis CSS em `src/App.css` para alterar a paleta de cores.

### Conteúdo
- Textos: Edite diretamente nos componentes em `src/components/sections/`
- Imagens: Adicione em `src/assets/images/`
- Ícones: Utilize a biblioteca Lucide Icons

### Componentes
Todos os componentes são modulares e podem ser facilmente:
- Reutilizados
- Modificados
- Removidos
- Adicionados

## 🎯 Funcionalidades Implementadas

- ✅ Design responsivo completo
- ✅ Menu de navegação mobile
- ✅ Contador regressivo funcional
- ✅ Cards interativos
- ✅ Seções de depoimentos
- ✅ CTAs estratégicos
- ✅ Footer completo
- ✅ Otimização para SEO
- ✅ Performance otimizada

## 📈 Performance

- Build otimizada com Vite
- CSS purificado com Tailwind
- Componentes lazy-loaded
- Imagens otimizadas
- Código minificado

## 🔒 Segurança

- Sanitização de inputs
- Headers de segurança
- Validação de formulários
- Proteção XSS

## 📞 Suporte

Para dúvidas ou suporte:
- Email: contato@medcarepro.com.br
- Telefone: +55 (11) 3000-0000

## 📄 Licença

Este projeto é propriedade da MedCare Pro. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para revolucionar o atendimento médico**

