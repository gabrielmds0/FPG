# Guia de Componentes - MedCare Pro

Este guia detalha todos os componentes criados para a landing page do MedCare Pro, incluindo suas funcionalidades, props e como utilizá-los.

## 📁 Estrutura de Componentes

### Componentes Comuns (`/components/common/`)

#### Container.jsx
Componente wrapper responsivo que centraliza o conteúdo.

**Props:**
- `children` (ReactNode) - Conteúdo a ser renderizado
- `className` (string) - Classes CSS adicionais
- `maxWidth` (string) - Largura máxima (padrão: 'max-w-7xl')

**Uso:**
```jsx
import Container from '../common/Container';

<Container maxWidth="max-w-6xl" className="py-8">
  <h1>Conteúdo</h1>
</Container>
```

### Seções (`/components/sections/`)

#### Header.jsx
Cabeçalho principal com navegação responsiva.

**Funcionalidades:**
- Menu desktop e mobile
- Logo da empresa
- Botão CTA principal
- Menu hambúrguer para mobile
- Navegação suave (smooth scroll)

**Itens de Navegação:**
- Principal (#home)
- Funcionalidades (#features)
- Sobre o Produto (#about)
- Depoimentos (#testimonials)
- Contato (#contact)

#### HeroSection.jsx
Seção principal (hero) da landing page.

**Elementos:**
- Título principal impactante
- Subtítulo descritivo
- Dois botões CTA
- Painel de monitoramento simulado
- Indicadores de confiança
- Elementos visuais flutuantes

**Características:**
- Background gradiente escuro
- Layout em grid responsivo
- Animações hover nos botões
- Dashboard médico simulado

#### StatsSection.jsx
Seção de estatísticas e números de impacto.

**Estatísticas Exibidas:**
- 500+ Hospitais Atendidos
- 50.000+ Casos Analisados
- 15 Países Utilizando
- 98% Taxa de Satisfação

**Certificações:**
- ISO 27001 (Segurança da Informação)
- ANVISA (Aprovado pela Agência)
- LGPD (Conformidade Total)

#### FeaturesSection.jsx
Seção de funcionalidades do produto.

**9 Funcionalidades Principais:**
1. IA Diagnóstica Avançada
2. Segurança Total de Dados
3. Monitoramento 24/7
4. Analytics Preditivos
5. Acesso Mobile
6. Colaboração em Equipe
7. Alertas Inteligentes
8. Integração Completa
9. Performance Otimizada

**Características:**
- Cards interativos com hover effects
- Ícones coloridos da Lucide
- CTA integrado na seção
- Layout em grid responsivo

#### AboutSection.jsx
Seção sobre o produto e empresa.

**Conteúdo:**
- História do produto
- Benefícios principais
- Reconhecimentos e prêmios
- Missão da empresa
- Tecnologias utilizadas
- Barras de progresso visuais

**Layout:**
- Grid de duas colunas
- Cards informativos
- Elementos visuais interativos

#### TestimonialsSection.jsx
Seção de depoimentos de clientes.

**6 Depoimentos de Médicos:**
- Dr. Ana Carolina Silva (Diretora de UTI)
- Dr. Roberto Mendes (Cardiologista Intensivista)
- Dra. Mariana Costa (Coordenadora Médica)
- Dr. Carlos Eduardo (Diretor Clínico)
- Dra. Fernanda Oliveira (Intensivista Pediátrica)
- Dr. Paulo Henrique (Chefe de Emergência)

**Elementos:**
- Cards de depoimentos com avaliações
- Avatares com iniciais
- Informações profissionais
- Estatísticas de satisfação

#### CTASection.jsx
Seção de chamada para ação final.

**Funcionalidades:**
- Contador regressivo funcional
- Oferta especial de lançamento
- Múltiplos CTAs
- Benefícios da demonstração
- Informações de contato
- Background gradiente animado

**Contador Regressivo:**
- Atualização em tempo real
- Formato: Dias, Horas, Minutos, Segundos
- Estilização em cards

#### Footer.jsx
Rodapé completo da página.

**Seções:**
- Informações da empresa
- Links organizados por categoria
- Informações de contato
- Redes sociais
- Certificações
- Copyright

**Categorias de Links:**
- Produto
- Empresa
- Suporte
- Legal

## 🎨 Padrões de Design

### Cores Utilizadas
```css
/* Principais */
--red-600: #DC2626
--red-700: #B91C1C
--gray-900: #111827
--gray-800: #1F2937

/* Secundárias */
--blue-500: #3B82F6
--green-500: #10B981
--purple-500: #8B5CF6
--orange-500: #F97316
```

### Ícones
Todos os ícones são da biblioteca **Lucide React**:
- Heart (logo)
- Menu, X (navegação mobile)
- ArrowRight, Play (CTAs)
- Brain, Shield, Clock (funcionalidades)
- Users, Award, Globe (estatísticas)

### Tipografia
```css
/* Títulos Principais */
text-4xl lg:text-6xl font-bold

/* Títulos Seções */
text-3xl lg:text-4xl font-bold

/* Subtítulos */
text-xl lg:text-2xl font-semibold

/* Texto Corpo */
text-base lg:text-lg
```

### Espaçamentos
```css
/* Seções */
py-16 lg:py-20

/* Containers */
px-4 sm:px-6 lg:px-8

/* Elementos */
space-y-4, space-y-6, space-y-8
```

## 🔧 Customização

### Alterando Cores
1. Edite as variáveis CSS em `App.css`
2. Atualize as classes Tailwind nos componentes
3. Mantenha consistência na paleta

### Modificando Conteúdo
1. **Textos**: Edite diretamente nos componentes
2. **Imagens**: Adicione em `/src/assets/images/`
3. **Ícones**: Importe novos ícones do Lucide

### Adicionando Seções
1. Crie novo componente em `/components/sections/`
2. Importe no `App.jsx`
3. Adicione ao menu de navegação no `Header.jsx`

### Responsividade
Todos os componentes seguem o padrão mobile-first:
```css
/* Mobile */
base classes

/* Tablet */
md:classes

/* Desktop */
lg:classes xl:classes
```

## 📱 Breakpoints Tailwind

```css
sm: 640px   /* Smartphone grande */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop pequeno */
xl: 1280px  /* Desktop grande */
2xl: 1536px /* Desktop extra grande */
```

## 🚀 Performance

### Otimizações Implementadas
- Lazy loading de componentes
- Imagens otimizadas
- CSS purificado
- Bundle splitting
- Tree shaking

### Boas Práticas
- Componentes funcionais
- Hooks otimizados
- Memoização quando necessário
- Props tipadas (implicitamente)

## 🔍 SEO

### Meta Tags (index.html)
```html
<title>MedCare Pro - Solução Avançada para Atendimento de Pacientes Graves</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### Estrutura Semântica
- Headers hierárquicos (h1, h2, h3)
- Sections com IDs únicos
- Alt texts em imagens
- Aria labels em botões

## 🧪 Testes

### Testes Recomendados
1. **Responsividade**: Teste em diferentes dispositivos
2. **Performance**: Lighthouse audit
3. **Acessibilidade**: WAVE ou axe
4. **Cross-browser**: Chrome, Firefox, Safari, Edge

### Comandos Úteis
```bash
# Build de produção
npm run build

# Preview da build
npm run preview

# Análise do bundle
npm run build -- --analyze
```

## 📞 Suporte

Para dúvidas sobre os componentes:
1. Consulte este guia
2. Verifique a documentação do Tailwind CSS
3. Consulte a documentação do Lucide Icons
4. Entre em contato com a equipe de desenvolvimento

---

**Este guia é atualizado conforme novos componentes são adicionados ao projeto.**

