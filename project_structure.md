# Estrutura do Projeto MedCare Pro

## Estrutura de Pastas

```
medical-product-landing/
├── public/
├── src/
│   ├── assets/
│   │   ├── images/          # Imagens do site (fotos, ilustrações)
│   │   └── icons/           # Ícones SVG
│   ├── components/
│   │   ├── common/          # Componentes reutilizáveis
│   │   ├── sections/        # Seções específicas da página
│   │   └── ui/              # Componentes UI do shadcn/ui
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilitários e bibliotecas
│   ├── App.css              # Estilos principais com Tailwind
│   ├── App.jsx              # Componente principal
│   ├── index.css            # Estilos globais
│   └── main.jsx             # Ponto de entrada
├── components.json          # Configuração shadcn/ui
├── index.html               # HTML principal
├── package.json             # Dependências do projeto
└── vite.config.js           # Configuração do Vite
```

## Componentes Planejados

### Componentes Comuns (components/common/)
- `Button.jsx` - Botão personalizado
- `Card.jsx` - Card reutilizável
- `Container.jsx` - Container responsivo

### Seções (components/sections/)
- `Header.jsx` - Cabeçalho com navegação
- `HeroSection.jsx` - Seção principal/hero
- `StatsSection.jsx` - Seção de números/estatísticas
- `AboutSection.jsx` - Seção sobre o produto/empresa
- `FeaturesSection.jsx` - Seção de funcionalidades
- `TestimonialsSection.jsx` - Depoimentos
- `CTASection.jsx` - Chamada para ação
- `Footer.jsx` - Rodapé

### Componentes Específicos
- `FeatureCard.jsx` - Card de funcionalidade
- `TestimonialCard.jsx` - Card de depoimento
- `StatCard.jsx` - Card de estatística

## Tecnologias Utilizadas

- **React 18** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework de CSS utilitário
- **shadcn/ui** - Componentes UI pré-construídos
- **Lucide Icons** - Biblioteca de ícones
- **Framer Motion** - Animações (se necessário)

## Paleta de Cores Sugerida (Médica)

Baseado no conhecimento sobre landing pages médicas:
- **Primária**: Azul médico (#1E40AF, #3B82F6)
- **Secundária**: Verde saúde (#059669, #10B981)
- **Accent**: Vermelho emergência (#DC2626, #EF4444)
- **Neutros**: Cinza (#6B7280, #9CA3AF, #F3F4F6)
- **Fundo**: Branco (#FFFFFF)
- **Texto**: Cinza escuro (#1F2937)

## Próximos Passos

1. Criar componentes base (Header, Footer, Layout)
2. Implementar seções principais
3. Adicionar conteúdo específico para produto médico
4. Implementar responsividade
5. Adicionar animações e interações
6. Testar e otimizar

