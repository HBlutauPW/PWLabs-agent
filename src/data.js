export const SCENE_TYPES = {
  T: { label: 'Localização',  color: 'purple' },
  P: { label: 'Aspiração',    color: 'teal'   },
  E: { label: 'Experiência', color: 'coral'  },
  Pr:{ label: 'Produto',     color: 'blue'   },
  C: { label: 'Convite',     color: 'green'  },
};

export const SCENE_OPTIONS = {
  T:  ['Imagem aérea','Paisagem / natureza','Skyline / cidade','Chegada / acesso','Topografia / contexto','Horizonte'],
  P:  ['Fachada hero shot','Implantação / masterplan','Portaria / acesso principal','Áreas comuns','Infraestrutura / esporte','Relação com entorno'],
  E:  ['Interior principal','Gastronomia / convivência','Spa / wellness','Piscina / lazer','Close de material / detalhe','Pessoas / lifestyle','Natureza integrada'],
  Pr: ['Planta / lote','Implantação detalhada','Tipologias / unidades','Fachada completa','Masterplan','Diferenciais técnicos'],
  C:  ['Hero shot final','Logo / assinatura','Vista aérea final','Interior noturno iluminado','Fachada golden hour','Paisagem silenciosa'],
};

export const CAMERA_FNS = {
  'Imagem aérea':              'Localização / escala / raridade / exclusividade',
  'Fachada hero shot':         'Identidade / arquitetura / presença / diferenciação',
  'Close de material / detalhe':'Sofisticação / qualidade / sensorialidade / valor',
  'Interior principal':        'Pertencimento / cotidiano / desejo / estilo de vida',
  'Paisagem / natureza':       'Pausa / contemplação / atmosfera / respiro narrativo',
  'Implantação / masterplan':  'Clareza comercial / segurança de decisão',
  'Chegada / acesso':          'Expectativa / privacidade / ritual de entrada',
};

export const PHASES = [
  {
    id: 0,
    eyebrow: 'Fase 1 — Anamnese estratégica',
    title: 'Diagnóstico',
    quote: '"Antes de falarmos de imagem, precisamos entender como esse projeto precisa ser percebido."
Função da etapa
O diagnóstico é a etapa em que o PW LABs atua como consultoria criativa.
Antes de qualquer decisão visual, é necessário entender o contexto do projeto, o objetivo comercial, o público e o valor que precisa ser comunicado.
Nesta etapa, o projeto ainda não é uma imagem. Ele é uma intenção a ser compreendida.
Objetivo
Entender o projeto antes de representá-lo',


    color: 'purple',
    reportLabel: 'RELATÓRIO DE DIAGNÓSTICO ESTRATÉGICO',
    reportQuote: 'Antes de falarmos de imagem, queria entender como esse projeto precisa ser percebido.',
    reportSections: [
      '1. SÍNTESE EXECUTIVA — tese narrativa: "Estamos falando de um projeto com posicionamento [X], para um público [Y], com decisão [Z] e valor central [V]."',
      '2. ANÁLISE DE CONTEXTO — projeto, momento de mercado e desafio identificado.',
      '3. POSICIONAMENTO — onde o projeto se situa no espectro aspiracional ↔ comercial.',
      '4. DESAFIO DO NEGÓCIO — o que a comunicação visual precisa resolver.',
      '5. PÚBLICO & DECISÃO — perfil e implicações visuais.',
      '6. BRIEF EMOCIONAL — sensação principal, direcionamento de luz e atmosfera.',
      '7. BENCHMARK & REFERÊNCIAS — avaliação e curadoria recomendada pelo PW LABs.',
      '8. ALERTAS — o que ainda precisa ser confirmado.',
      '9. PRÓXIMOS PASSOS → ESTRATÉGIA',
    ],
    tese: (s) => `Estamos falando de um projeto com posicionamento "${s.d_pos||'—'}", para um público "${s.d_pub||'—'}", com decisão mais "${s.d_dec||'—'}", e o valor central é "${s.d_val||'—'}'.`,
    teseKeys: ['d_pos','d_pub','d_dec','d_val'],
    blocks: [
      {
        icon: 'ti-compass', title: 'Posicionamento', sub: 'Aspiracional ↔ comercial',
        questions: [
          { key:'d_pos', label:'Como esse projeto quer ser percebido — aspiracional / icônico ou comercial / direto?',
            opts:['Aspiracional / Icônico','Comercial / Direto','Equilibrado'],
            alerts:{'Aspiracional / Icônico':'👉 Linguagem editorial — luz e composição como protagonistas.','Comercial / Direto':'👉 Clareza antes de beleza — o material deve explicar o produto.','Equilibrado':'⚠️ Sem clareza de posicionamento, a imagem pode comunicar mal os dois.'} },
          { key:'d_dest', label:'O projeto precisa se destacar visualmente ou explicar o produto com clareza?',
            opts:['Destacar — impacto visual','Explicar — clareza comercial','Ambos'], alerts:{} },
        ]
      },
      {
        icon: 'ti-users', title: 'Público & decisão', sub: 'Quem é impactado e como decide',
        questions: [
          { key:'d_pub', label:'Quem precisa ser impactado — investidor, cliente final, diretoria, marca?',
            opts:['Cliente final — alto padrão','Investidores','Diretoria / conselho','Mercado / marca','Premiação / portfólio'],
            alerts:{'Diretoria / conselho':'👉 Linguagem executiva — impacto e ROI como ancoragem.','Premiação / portfólio':'👉 Foco em arquitetura e autoria — não em venda.'} },
          { key:'d_dec', label:'A decisão de compra aqui é mais emocional ou mais racional?',
            opts:['Emocional','Racional','Equilibrado'],
            alerts:{'Emocional':'👉 Foco em luz, atmosfera, storytelling e sensação.','Racional':'👉 Foco em clareza, funcionalidade e argumentos concretos.'} },
        ]
      },
      {
        icon: 'ti-sparkles', title: 'Valor & sensação', sub: 'O brief emocional central',
        questions: [
          { key:'d_val', label:'Qual valor principal precisa ser comunicado?',
            opts:['Exclusividade','Bem-estar / natureza','Localização','Sofisticação / marca','Raridade / investimento','Lifestyle'], alerts:{} },
          { key:'d_sen', label:'Qual sensação o espectador precisa sentir em 3 segundos?',
            opts:['"Quero estar aí"','"Isso é diferente"','"Entendi o produto"','"Isso vale o que custa"'], alerts:{} },
        ]
      },
      {
        icon: 'ti-chart-bar', title: 'Momento & benchmark', sub: 'Contexto de mercado',
        questions: [
          { key:'d_mom', label:'Qual é o momento comercial do projeto?',
            opts:['Pré-lançamento','Lançamento','Obra em andamento','Reposicionamento','Apresentação a investidores'],
            alerts:{'Pré-lançamento':'👉 Gerar desejo antes do produto existir — atmosfera acima de tudo.','Reposicionamento':'⚠️ Cuidado com material anterior incompatível — definir ruptura visual.'} },
          { key:'d_bench', label:'O cliente trouxe referências de benchmark?',
            opts:['Sim — alto nível (editorial / fine art)','Sim — nível médio','Sim — genéricas / desalinhadas','Não trouxe'],
            alerts:{'Sim — genéricas / desalinhadas':'⚠️ Ação PW LABs: reenquadrar referências. Não aceitar sem curadoria.','Não trouxe':'👉 Oportunidade: apresente você o benchmark — isso posiciona o PW LABs como curador.'} },
        ]
      },
    ],
  },
  {
    id: 1,
    eyebrow: 'Fase 2 — Código visual',
    title: 'Estratégia',
    quote: '"Antes de produzir qualquer imagem, a gente estrutura como o projeto deve ser percebido."',
    color: 'teal',
    reportLabel: 'RELATÓRIO DE ESTRATÉGIA VISUAL',
    reportQuote: 'Antes de produzir qualquer imagem, a gente estrutura como o projeto deve ser percebido.',
    reportSections: [
      '1. SÍNTESE — o código visual do projeto.',
      '2. TOM & LINGUAGEM — estilo, gramática visual e referências corretas.',
      '3. RITMO & ESTRUTURA NARRATIVA — sequência escolhida e justificativa.',
      '4. SENSAÇÃO DESEJADA — o que o espectador deve sentir em cada etapa.',
      '5. GUIDELINES VISUAIS — como todas as peças devem se comportar.',
      '6. RISCOS IDENTIFICADOS — o que pode comprometer a estratégia.',
      '7. REGRA PW LABs — se essa fase for fraca, todo o resto quebra.',
      '8. PRÓXIMOS PASSOS → DIREÇÃO',
    ],
    tese: (s) => `O código visual é "${s.e_ling||'—'}", com tom "${s.e_tom||'—'}", ritmo "${s.e_rit||'—'}".`,
    teseKeys: ['e_ling','e_tom','e_rit'],
    blocks: [
      {
        icon: 'ti-palette', title: 'Tom & linguagem', sub: 'Como o projeto vai falar',
        questions: [
          { key:'e_tom', label:'Qual é o tom do material?',
            opts:['Contemplativo / silencioso','Cinematográfico / emocional','Urbano / dinâmico','Institucional / objetivo','Manifesto / aspiracional'],
            alerts:{'Contemplativo / silencioso':'👉 Ritmo lento, luz suave — atmosfera acima de informação.','Institucional / objetivo':'👉 Clareza, ordem, credibilidade — menos atmosfera, mais substância.'} },
          { key:'e_ling', label:'Qual é a linguagem visual que melhor serve ao posicionamento?',
            opts:['Editorial / fine art','Luxury real estate','Fashion film aplicado à arquitetura','Hospitality film','Campanha de marca','Narrativa documental'],
            alerts:{} },
        ]
      },
      {
        icon: 'ti-repeat', title: 'Ritmo & estrutura narrativa', sub: 'A sequência que vai guiar o material',
        questions: [
          { key:'e_rit', label:'Qual é o ritmo do material?',
            opts:['Lento e contemplativo','Dinâmico e aspiracional','Sensorial e elegante','Emocional e crescente','Preciso e sofisticado'],
            alerts:{} },
          { key:'e_seq', label:'Qual estrutura narrativa?',
            opts:['Localização → Aspiração → Experiência → Produto → Convite','Arquitetura → Experiência → Produto → Marca','Abertura emocional → Produto → Convite','Personalizado'],
            alerts:{'Localização → Aspiração → Experiência → Produto → Convite':'👉 Estrutura padrão PW LABs — constrói percepção antes de mostrar o produto.'} },
        ]
      },
      {
        icon: 'ti-alert-triangle', title: 'Riscos & alinhamento', sub: 'Proteger o projeto e o PW LABs',
        questions: [
          { key:'e_clar', label:'O cliente tem clareza sobre o posicionamento?',
            opts:['Alta clareza','Clareza média','Múltiplas visões — risco alto','Indefinido ainda'],
            alerts:{'Múltiplas visões — risco alto':'⚠️ Vender MAIS direção estratégica, não mais produção. Documentar tudo.','Indefinido ainda':'⚠️ Não avançar para produção. A estratégia precisa ser resolvida antes.'} },
          { key:'e_aprov', label:'Quem aprova o material?',
            opts:['Decisor único','Comitê pequeno (2–3)','Múltiplos stakeholders','Diretoria / conselho'],
            alerts:{'Múltiplos stakeholders':'👉 Relatório de estratégia protege o PW LABs em caso de divergência.','Diretoria / conselho':'👉 Material precisa de linguagem executiva — impacto e valor claros.'} },
        ]
      },
    ],
  },
  {
    id: 2,
    eyebrow: 'Fase 3 — Direção criativa',
    title: 'Direção',
    quote: '"Como vamos fazer o espectador sentir isso?"',
    color: 'coral',
    reportLabel: 'RELATÓRIO DE DIREÇÃO DE ARTE',
    reportQuote: 'Aqui a gente garante que tudo siga a mesma linha — direção, não operação.',
    reportSections: [
      '1. SÍNTESE CRIATIVA — a direção de arte em uma linha.',
      '2. MOOD & ATMOSFERA — tipo de iluminação, temperatura e o que comunica.',
      '3. STORYTELLING VISUAL — arco narrativo e intenção de cada ângulo.',
      '4. PRESENÇA HUMANA — decisão e justificativa.',
      '5. PIPELINE DE PRODUÇÃO — 3D / AI / híbrido e como serve à estratégia.',
      '6. PADRÃO DE QUALIDADE — o que é fine art neste contexto.',
      '7. MODELO DE REVISÃO — estratégico, não operacional.',
      '8. ALERTAS — riscos de virar "operação" e como o PW LABs mantém a direção.',
    ],
    tese: (s) => `Mood "${s.d2_mood||'—'}", luz "${s.d2_luz||'—'}", pipeline "${s.d2_pipe||'—'}", acabamento "${s.d2_niv||'—'}".`,
    teseKeys: ['d2_mood','d2_luz','d2_pipe','d2_niv'],
    blocks: [
      {
        icon: 'ti-sun', title: 'Mood & atmosfera', sub: 'O clima emocional do material',
        questions: [
          { key:'d2_mood', label:'Qual é o mood predominante?',
            opts:['Refúgio natural','Luxo urbano','Hospitality / resort','Residencial familiar premium','Institucional / investidor','Editorial fine art'],
            alerts:{'Refúgio natural':'👉 Serra, silêncio, luz suave, vegetação, ritmo lento.','Luxo urbano':'👉 Fachada icônica, skyline, noite, reflexos, ritmo preciso.','Hospitality / resort':'👉 Chegada, piscina, gastronomia, serviço, textura, permanência.'} },
          { key:'d2_luz', label:'Tipo de iluminação?',
            opts:['Golden hour / warm light','Dia — luz difusa','Noite / luz artificial','Interior com luz natural','Neutro / estúdio'],
            alerts:{'Golden hour / warm light':'👉 Desejo, conforto, exclusividade — padrão fine art.','Noite / luz artificial':'👉 Urbanidade, dinamismo, modernidade.'} },
        ]
      },
      {
        icon: 'ti-movie', title: 'Câmeras & storytelling', sub: 'Cada cena deve ter função narrativa',
        questions: [
          { key:'d2_pess', label:'Presença humana nas imagens?',
            opts:['Sem pessoas — arquitetura pura','Pessoas sutis — indicam escala','Pessoas como coadjuvantes de lifestyle','Pessoas como protagonistas'],
            alerts:{'Sem pessoas — arquitetura pura':'👉 Favorece leitura técnica/editorial. Reduz calor emocional.','Pessoas como protagonistas':'👉 Casting deve refletir o público-alvo definido no diagnóstico.'} },
          { key:'d2_cam', label:'Arco narrativo visual?',
            opts:['Exterior → interior → detalhe','Localização → arquitetura → experiência → produto','Estilo de vida: pessoas + espaço','Arquitetônico puro','Editorial: cada imagem autônoma'],
            alerts:{} },
        ]
      },
      {
        icon: 'ti-checklist', title: 'Produção & qualidade', sub: 'Direção, não operação',
        questions: [
          { key:'d2_pipe', label:'Pipeline de produção?',
            opts:['3D clássico + pós','3D + AI generation + curadoria','AI-driven + direção PW LABs','Híbrido conforme cena'],
            alerts:{'AI-driven + direção PW LABs':'👉 Posicionar como "velocidade com qualidade dirigida" — não substituição de processo.'} },
          { key:'d2_niv', label:'Nível de acabamento?',
            opts:['Fine art — poucas peças, máximo refinamento','Comercial — volume com qualidade','Campanha — padronização de série'],
            alerts:{'Fine art — poucas peças, máximo refinamento':'👉 Fee premium justificado. Cada imagem é uma peça, não um arquivo.','Comercial — volume com qualidade':'⚠️ Definir critério claro de qualidade mínima para não virar operação.'} },
        ]
      },
    ],
  },
];

export const DELIVERABLES = [
  'Filme completo','Clipe teaser','Takes separados','Fine-art images',
  'Booklet','Plantas Ilustrativas','Storyboard','Presentation',
  'VR 360','Apresentação investidores',
];

export const DEFAULT_STORY = [
  { ato:'T',  cena:'', funcao:'', cam:'', locucao:'', duracao:'' },
  { ato:'P',  cena:'', funcao:'', cam:'', locucao:'', duracao:'' },
  { ato:'E',  cena:'', funcao:'', cam:'', locucao:'', duracao:'' },
  { ato:'E',  cena:'', funcao:'', cam:'', locucao:'', duracao:'' },
  { ato:'Pr', cena:'', funcao:'', cam:'', locucao:'', duracao:'' },
  { ato:'C',  cena:'', funcao:'', cam:'', locucao:'', duracao:'' },
];
