# Formação em Paciente Grave - Liberdade Médica

## 🎯 Sobre o Projeto

Esta é uma landing page desenvolvida para a **Liberdade Médica**, especificamente para a **Formação em Paciente Grave**. O projeto foi criado com base na estrutura e design do site da AUVP, adaptado para refletir a identidade e conteúdo da Liberdade Médica.

### 📋 Características do Produto

- **Formação Presencial**: 2 dias de imersão prática intensiva
- **Metodologia RPP**: Raciocínio, Prescrição e Procedimentos
- **Público-alvo**: Médicos que querem dominar o atendimento na sala vermelha
- **Instrutores**: Dr. Ian Camilo e Dr. Rodrigo Cleto
- **Certificação**: Inclusa na formação

## 🚀 Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework de estilização
- **Lucide React** - Biblioteca de ícones
- **JavaScript ES6+** - Linguagem de programação

## 📁 Estrutura do Projeto

```
medical-product-landing/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── Container.jsx
│   │   └── sections/
│   │       ├── Header.jsx
│   │       ├── HeroSection.jsx
│   │       ├── AboutSection.jsx
│   │       ├── FeaturesSection.jsx
│   │       ├── TestimonialsSection.jsx
│   │       ├── FAQSection.jsx
│   │       ├── CTASection.jsx
│   │       └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Design e Identidade Visual

### Paleta de Cores
- **Vermelho Principal**: `#DC2626` (red-600)
- **Vermelho Escuro**: `#B91C1C` (red-700)
- **Branco**: `#FFFFFF`
- **Cinza Escuro**: `#111827` (gray-900)
- **Cinza Médio**: `#6B7280` (gray-500)

### Tipografia
- **Fonte Principal**: Sistema (sans-serif)
- **Hierarquia**: Títulos grandes (4xl-6xl), subtítulos (xl-2xl), corpo (base-lg)

## 📱 Seções da Landing Page

### 1. Header
- Logo da Liberdade Médica
- Menu de navegação responsivo
- CTA principal no header

### 2. Hero Section
- Título principal: "Formação em Paciente Grave"
- Subtítulo explicativo
- Estatísticas de impacto (3.000+ alunos, 16M pessoas impactadas, 1M vidas salvas)
- CTA principal

### 3. About Section
- Apresentação dos instrutores (Dr. Ian Camilo e Dr. Rodrigo Cleto)
- Missão da Liberdade Médica
- Para quem é a formação

### 4. Features Section
- 9 estações/vivências da formação:
  - Aulas Online (Pré-Imersão)
  - Estação 1: Via Aérea e Intervenções Críticas
  - Estação 2: Ultrassonografia e Acesso
  - Estação 3: Ventilação e Suporte Respiratório
  - Estação 4: Emergências Pediátricas
  - Talks e Dinâmicas
  - Happy Hour Médico
  - Oficina de Prescrição
  - Metodologia 100% Hands On

### 5. Testimonials Section
- 6 depoimentos reais de médicos
- Avaliações com 5 estrelas
- Diferentes perfis: médicos, recém-formados, residentes

### 6. FAQ Section
- 8 perguntas frequentes
- Interface expansível/colapsável
- CTA para contato adicional

### 7. CTA Section
- Título impactante
- Contador regressivo
- Oferta especial de lançamento
- Botões de ação principais
- Indicadores de confiança

### 8. Footer
- Informações da empresa
- Links organizados por categoria
- Contatos e redes sociais
- Informações legais

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre no diretório
cd medical-product-landing

# Instale as dependências
npm install --legacy-peer-deps

# Execute o projeto
npm run dev
```

### Build para Produção
```bash
# Gerar build de produção
npm run build

# Preview do build
npm run preview
```

## 📊 Funcionalidades Implementadas

### ✅ Responsividade
- Design mobile-first
- Breakpoints para tablet e desktop
- Menu hambúrguer para mobile

### ✅ Interatividade
- Contador regressivo funcional
- FAQ com expansão/colapso
- Hover effects nos cards
- Navegação suave entre seções

### ✅ Performance
- Componentes otimizados
- Lazy loading de imagens
- Build otimizado com Vite

### ✅ Acessibilidade
- Estrutura semântica HTML
- Labels apropriados
- Contraste adequado de cores
- Navegação por teclado

## 🎯 Conversões e CTAs

### CTAs Principais
1. **"Quero garantir minha inscrição"** - CTA primário
2. **"Quero me tornar aluno"** - CTA alternativo

### Elementos de Conversão
- Urgência: Contador regressivo
- Escassez: "Vagas limitadas"
- Prova social: Depoimentos e estatísticas
- Autoridade: Credenciais dos instrutores
- Benefícios claros: Metodologia RPP

## 🔧 Customizações Possíveis

### Conteúdo
- Textos podem ser editados nos componentes
- Depoimentos são facilmente substituíveis
- FAQ pode ser expandido ou reduzido

### Design
- Cores definidas no Tailwind config
- Componentes modulares para fácil modificação
- Ícones da Lucide facilmente substituíveis

### Funcionalidades
- Integração com formulários
- Analytics e tracking
- Chatbots ou widgets de suporte

## 📞 Contatos da Liberdade Médica

- **Telefone**: +55 (11) 3000-0000
- **Email**: contato@liberdademedica.com.br
- **Localização**: São Paulo, SP - Brasil

## 📝 Notas de Desenvolvimento

### Dependências Principais
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "lucide-react": "^0.468.0",
  "tailwindcss": "^3.4.17"
}
```

### Estrutura de Componentes
- **Container**: Wrapper reutilizável para centralização
- **Sections**: Componentes de seção independentes
- **Responsive**: Design adaptável para todos os dispositivos

### Boas Práticas Implementadas
- Componentes funcionais com hooks
- Props tipadas implicitamente
- Estrutura de pastas organizada
- Código limpo e comentado
- Performance otimizada

---

**Desenvolvido com ❤️ para salvar vidas**

*Liberdade Médica - Preparando médicos para atuar com segurança, clareza e confiança onde mais importa: na vida real.*

