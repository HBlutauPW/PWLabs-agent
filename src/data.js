export const SCENE_TYPES = {
  T: { label: 'Localização',  color: 'purple' },
  P: { label: 'Aspiração',    color: 'teal'   },
  E: { label: 'Experiência',  color: 'coral'  },
  Pr:{ label: 'Produto',      color: 'blue'   },
  C: { label: 'Convite',      color: 'green'  },
};

export const SCENE_OPTIONS = {
  T:  ['Imagem aérea','Paisagem / natureza','Skyline / cidade','Chegada / acesso','Topografia / contexto','Horizonte'],
  P:  ['Fachada hero shot','Implantação / masterplan','Portaria / acesso principal','Áreas comuns','Infraestrutura / esporte','Relação com entorno'],
  E:  ['Interior principal','Gastronomia / convivência','Spa / wellness','Piscina / lazer','Close de material / detalhe','Pessoas / lifestyle','Natureza integrada'],
  Pr: ['Planta / lote','Implantação detalhada','Tipologias / unidades','Fachada completa','Masterplan','Diferenciais técnicos'],
  C:  ['Hero shot final','Logo / assinatura','Vista aérea final','Interior noturno iluminado','Fachada golden hour','Paisagem silenciosa'],
};

export const CAMERA_FNS = {
  'Imagem aérea':               'Localização / escala / raridade / exclusividade',
  'Fachada hero shot':          'Identidade / arquitetura / presença / diferenciação',
  'Close de material / detalhe':'Sofisticação / qualidade / sensorialidade / valor',
  'Interior principal':         'Pertencimento / cotidiano / desejo / estilo de vida',
  'Paisagem / natureza':        'Pausa / contemplação / atmosfera / respiro narrativo',
  'Implantação / masterplan':   'Clareza comercial / segurança de decisão',
  'Chegada / acesso':           'Expectativa / privacidade / ritual de entrada',
};

// ─── PHASE BRIEFS ─────────────────────────────────────────────────────────────

export const PHASE_BRIEFS = {

  // ── FASE 1 — DIAGNÓSTICO ──────────────────────────────────────────────────
  0: {
    intro: 'O diagnóstico é a etapa em que o PW LABs atua como consultoria criativa. Antes de qualquer decisão visual, é necessário entender o contexto do projeto, o objetivo comercial, o público e o valor que precisa ser comunicado. Nesta etapa, o projeto ainda não é uma imagem — ele é uma intenção a ser compreendida.',
    objetivo: 'Entender o projeto antes de representá-lo.',
    regra: 'Nenhuma cena deve ser definida antes da tese narrativa.',
    groups: [
      {
        pergunta: '1. Qual é o desafio do negócio?',
        key: 'brief_desafio',
        exemplos: [
          'Vender lotes','Lançar um empreendimento','Reposicionar um produto',
          'Apresentar o projeto para investidores','Gerar desejo antes do lançamento',
          'Apoiar uma campanha comercial','Diferenciar o projeto da concorrência',
          'Apresentar arquitetura para clientes finais',
          'Criar uma narrativa institucional para a marca',
        ],
      },
      {
        pergunta: '2. Qual é a intenção do projeto?',
        key: 'brief_intencao',
        exemplos: [
          'Ser um refúgio natural','Ser um ícone urbano','Ser um produto familiar',
          'Ser um destino de wellness','Ser uma experiência de resort',
          'Ser uma residência de alto padrão','Ser um ativo de investimento',
          'Ser um empreendimento de marca forte',
          'Ser uma nova forma de viver determinada localização',
        ],
      },
      {
        pergunta: '3. Quem é o público?',
        key: 'brief_publico',
        exemplos: [
          'Famílias','Investidores','Clientes de alta renda','Público internacional',
          'Compradores de segunda residência','Público corporativo','Mercado de luxo',
          'Compradores sensíveis à arquitetura','Compradores orientados por lifestyle',
        ],
      },
      {
        pergunta: '4. Qual é o momento comercial?',
        key: 'brief_momento',
        exemplos: [
          'Estudo de viabilidade','Pré-lançamento','Lançamento','Vendas',
          'Reposicionamento','Apresentação para investidores','Concorrência',
          'Material de campanha','Reforço institucional',
          'Apresentação para cliente estratégico',
        ],
      },
      {
        pergunta: '5. Qual valor precisa ser comunicado?',
        key: 'brief_valor',
        exemplos: [
          'Exclusividade','Bem-estar','Localização','Arquitetura','Conveniência',
          'Raridade','Sofisticação','Natureza','Inovação','Segurança',
          'Pertencimento','Privacidade','Estilo de vida','Qualidade construtiva',
          'Marca','Experiência',
        ],
      },
      {
        pergunta: '6. Quais são os benchmarks e concorrentes?',
        key: 'brief_benchmark',
        exemplos: [
          'O mercado já está comunicando isso','O projeto precisa superar o padrão atual',
          'A linguagem visual atual está saturada','Precisa parecer mais sofisticado',
          'Precisa parecer mais natural','Precisa parecer mais urbano',
          'Precisa parecer mais institucional','Precisa parecer mais aspiracional',
          'Referências elevam a percepção de valor',
        ],
      },
    ],
    saida: {
      label: 'Tese narrativa — exemplos de saída desta etapa',
      exemplos: [
        '"Este projeto não deve ser comunicado como um condomínio, mas como um território de bem-estar, natureza e pertencimento."',
        '"Este empreendimento não deve ser vendido pela metragem, mas pela sensação de viver em uma casa pronta, com arquitetura autoral e experiência de resort."',
        '"Este projeto precisa ser percebido como um ativo raro, com alto valor de marca, desejo imediato e forte diferenciação no mercado."',
        '"Este vídeo deve transformar a paisagem, a arquitetura e a experiência de morar em uma narrativa de exclusividade e vida plena."',
      ],
    },
  },

  // ── FASE 2 — ESTRATÉGIA ───────────────────────────────────────────────────
  1: {
    intro: 'A estratégia transforma o diagnóstico em um sistema de comunicação. Nesta etapa, o PW LABs define como o projeto deve ser percebido pelo público. A estratégia não é ainda a produção do vídeo — ela é a lógica invisível que orienta todas as decisões do filme.',
    objetivo: 'Definir o código visual, narrativo e emocional do projeto.',
    regra: 'Toda cena deve ter uma função estratégica clara dentro da narrativa.',
    groups: [
      {
        pergunta: '1. Tom',
        key: 'brief_tom',
        exemplos: [
          'Contemplativo','Sofisticado','Emocional','Urbano','Institucional',
          'Cinematográfico','Natural','Resort','Artístico','Familiar',
          'Lifestyle','Silencioso','Aspiracional',
        ],
      },
      {
        pergunta: '2. Ritmo',
        key: 'brief_ritmo',
        exemplos: [
          'Lento e contemplativo','Dinâmico e aspiracional','Sensorial e elegante',
          'Institucional e objetivo','Emocional e crescente',
          'Preciso e sofisticado','Cinematográfico e imersivo',
        ],
      },
      {
        pergunta: '3. Linguagem',
        key: 'brief_linguagem',
        exemplos: [
          'Filme editorial','Campanha de marca','Filme manifesto',
          'Arquitetura cinematográfica','Hospitality film','Luxury real estate',
          'Narrativa documental','Apresentação comercial premium',
          'Filme institucional','Fashion film aplicado à arquitetura',
        ],
      },
      {
        pergunta: '4. Sensação desejada',
        key: 'brief_sensacao',
        exemplos: [
          'Silêncio','Desejo','Movimento','Acolhimento','Poder','Exclusividade',
          'Leveza','Pertencimento','Confiança','Contemplação','Privacidade',
          'Sofisticação','Bem-estar','Descoberta',
        ],
      },
      {
        pergunta: '5. Valor percebido',
        key: 'brief_valorpercebido',
        exemplos: [
          'Raridade','Sofisticação','Privacidade','Natureza','Conveniência',
          'Arquitetura','Marca','Experiência','Patrimônio','Investimento',
          'Lifestyle','Exclusividade',
        ],
      },
      {
        pergunta: '6. Sequência estratégica',
        key: 'brief_sequencia',
        exemplos: [
          'Localização → Aspiração → Experiência → Produto → Convite',
          'Arquitetura → Experiência → Produto → Marca',
          'Abertura emocional → Produto → Convite',
          'Território → Promessa → Experiência → Produto → Convite',
        ],
      },
    ],
    saida: {
      label: 'A estrutura mais forte para vídeos PW LABs',
      exemplos: [
        '"LOCALIZAÇÃO → ASPIRAÇÃO → EXPERIÊNCIA → PRODUTO → CONVITE — essa ordem constrói percepção e desejo antes de apresentar o produto."',
        '"A diferença entre organizar cenas e construir uma narrativa: a primeira estrutura gera desejo; a segunda apenas organiza imagens."',
      ],
    },
  },

  // ── FASE 3 — DIREÇÃO ──────────────────────────────────────────────────────
  2: {
    intro: 'A direção traduz a estratégia em linguagem visual, audiovisual e narrativa. Nesta etapa, o PW LABs atua como direção criativa. A pergunta principal é: "Como vamos fazer o espectador sentir isso?"',
    objetivo: 'Transformar estratégia em conceito visual e roteiro audiovisual.',
    regra: 'Se a cena não comunica valor, ela deve ser repensada ou removida.',
    groups: [
      {
        pergunta: '1. Mood e atmosfera',
        key: 'brief_mood',
        exemplos: [
          'Refúgio natural — serra, silêncio, luz suave, vegetação, ritmo lento',
          'Luxo urbano — fachada icônica, skyline, noite, reflexos, ritmo preciso',
          'Hospitality / resort — chegada, piscina, gastronomia, serviço, permanência',
          'Residencial familiar premium — rotina, conforto, luz natural, acolhimento',
          'Produto institucional / investidor — escala, masterplan, clareza, credibilidade',
        ],
      },
      {
        pergunta: '2. Referências visuais',
        key: 'brief_referencias',
        exemplos: [
          'Cinema','Fotografia editorial','Fotografia de arquitetura',
          'Campanhas de luxo','Hospitality','Arte','Design','Moda',
          'Marcas premium','Filmes institucionais',
          'Real estate internacional','Estúdios de visualização de alto padrão',
        ],
      },
      {
        pergunta: '3. Tipos de cena e função narrativa',
        key: 'brief_cameras',
        exemplos: [
          'Imagem aérea — território, escala, raridade, exclusividade',
          'Travelling de chegada — acesso, expectativa, privacidade, ritual de entrada',
          'Fachada hero shot — identidade, arquitetura, presença, diferenciação',
          'Close de material — sofisticação, detalhe, qualidade, sensorialidade',
          'Interior com vida — pertencimento, cotidiano, desejo, estilo de vida',
          'Cena de experiência — gastronomia, spa, esporte, bem-estar, memória',
          'Cena de paisagem — pausa, contemplação, silêncio, respiro narrativo',
          'Cena de produto — clareza comercial, segurança de decisão',
        ],
      },
      {
        pergunta: '4. Storytelling — definições',
        key: 'brief_storytelling',
        exemplos: [
          'Abertura definida','Desenvolvimento planejado','Clímax emocional',
          'Transição para o produto','Fechamento com convite',
          'Locução definida','Textos em tela','Música e direção sonora',
          'Ritmo e duração','Entregáveis mapeados',
        ],
      },
    ],
    saida: {
      label: 'Saída esperada desta etapa',
      exemplos: [
        '"Conceito visual definido + estrutura de roteiro + lista de cenas com intenção + moodboard + referências + direção de câmera + direção de arte + estratégia de entrega."',
        '"A referência não deve ser copiada — ela deve orientar qualidade visual, atmosfera, iluminação, enquadramento, ritmo e grau de sofisticação."',
      ],
    },
  },

  // ── FASE 4 — PRODUÇÃO ────────────────────────────────────────────────────
  3: {
    intro: 'A produção constrói as cenas como peças de comunicação. O PW LABs combina base técnica, direção criativa, inteligência artificial, composição, finalização e pós-produção. A produção não deve ser aleatória — ela deve ser guiada pelo diagnóstico, pela estratégia e pela direção.',
    objetivo: 'Construir imagens, cenas e sequências que materializam a narrativa definida.',
    regra: 'Revisão não é gosto pessoal. Revisão é alinhamento com estratégia.',
    groups: [
      {
        pergunta: '1. Base técnica disponível',
        key: 'brief_base',
        exemplos: [
          'Modelo 3D','Plantas','Masterplan','Cortes','Fachadas','Croquis',
          'Implantação','Imagens aéreas','Fotos de contexto','Google location',
          'Referências visuais','Moodboard','Estudo de câmera','Materiais',
          'Imagens de arquitetura','Imagens de interiores',
        ],
      },
      {
        pergunta: '2. Composição visual — critérios',
        key: 'brief_composicao',
        exemplos: [
          'Enquadramento','Proporção','Profundidade','Hierarquia visual',
          'Ponto focal','Luz','Atmosfera','Leitura comercial',
          'Clareza arquitetônica','Intensidade emocional',
        ],
      },
      {
        pergunta: '3. AI generation + refinement',
        key: 'brief_ai',
        exemplos: [
          'Atmosfera','Vegetação','Pessoas','Céu','Entorno','Iluminação',
          'Decoração','Objetos','Lifestyle','Materiais','Texturas',
          'Variações de cena','Refinamento','Upscale',
          'Correção de realismo','Detalhamento visual',
        ],
      },
      {
        pergunta: '4. Iterações — critérios de revisão',
        key: 'brief_revisao',
        exemplos: [
          'A cena está mais premium?','O valor do projeto está mais claro?',
          'A atmosfera está correta?','A arquitetura foi preservada?',
          'A imagem parece fotografia ou CGI?','A composição está forte?',
          'O olhar do espectador está sendo conduzido?',
          'A cena comunica desejo ou apenas informação?',
          'A cena está coerente com o mood definido?',
          'A cena se conecta com a sequência do filme?',
        ],
      },
      {
        pergunta: '5. Finalização fine-art',
        key: 'brief_finalizacao',
        exemplos: [
          'Cor e contraste','Textura e nitidez','Profundidade de campo',
          'Luz e atmosfera','Integração de elementos','Correção de erros',
          'Refinamento de materiais','Tratamento de vegetação','Pessoas',
          'Pós-produção','Upscale','Fechamento cinematográfico',
        ],
      },
    ],
    saida: {
      label: 'Regras fundamentais da produção',
      exemplos: [
        '"A base técnica deve preservar a arquitetura e servir à narrativa — não deve limitar a ambição visual do filme."',
        '"A AI não define a narrativa. A AI executa, testa, amplia e refina decisões de direção."',
        '"A finalização deve elevar a percepção de valor sem alterar a intenção arquitetônica."',
      ],
    },
  },

  // ── FASE 5 — STORYBOARD ──────────────────────────────────────────────────
  4: {
    intro: 'A estrutura de storytelling do PW LABs se apoia em três referências: AIDA (Atenção, Interesse, Desejo e Ação), Jornada emocional (Descoberta, aproximação, identificação, desejo e decisão) e Storytelling clássico (Contexto, tensão, transformação e resolução). Adaptado para arquitetura e luxo, isso se traduz em: TERRITÓRIO → PROMESSA → EXPERIÊNCIA → PRODUTO → CONVITE.',
    objetivo: 'Construir a sequência narrativa que conduz o espectador da atenção à decisão.',
    regra: 'A estrutura comercial do vídeo deve ser invisível, mas presente. O filme não empurra uma decisão — ele conduz o espectador até ela.',
    groups: [
      {
        pergunta: 'Território — Por que este lugar importa?',
        key: 'brief_territorio',
        exemplos: [
          'Raridade','Escala','Exclusividade','Natureza','Centralidade',
          'Conveniência','Pertencimento','Privacidade','Distância do comum',
          'Valor de localização',
        ],
      },
      {
        pergunta: 'Promessa — O que este projeto promete entregar?',
        key: 'brief_promessa',
        exemplos: [
          'Viver melhor','Ter mais tempo','Estar mais perto da natureza',
          'Morar com privacidade','Ter estrutura de resort',
          'Unir arquitetura e bem-estar','Viver com conveniência',
          'Investir em um ativo raro','Pertencer a um lugar especial',
        ],
      },
      {
        pergunta: 'Experiência — Que vida este projeto permite imaginar?',
        key: 'brief_experiencia',
        exemplos: [
          'Desejo','Conforto','Desaceleração','Prazer','Sofisticação',
          'Rotina elevada','Encontro','Bem-estar','Memória',
          'Pertencimento','Estilo de vida','Identificação emocional',
        ],
      },
      {
        pergunta: 'Produto — Como transformar desejo em segurança de decisão?',
        key: 'brief_produto',
        exemplos: [
          'Clareza','Viabilidade','Arquitetura pronta','Implantação definida',
          'Infraestrutura real','Diferenciais concretos','Qualidade',
          'Curadoria','Segurança','Credibilidade','Materialização do desejo',
        ],
      },
      {
        pergunta: 'Convite — Qual é o próximo passo mais elegante?',
        key: 'brief_convite',
        exemplos: [
          'Exclusividade','Acesso','Seleção','Curadoria','Oportunidade',
          'Convite sem pressão','Continuidade','Desejo consolidado',
          'Apresentação privada','Decisão elegante',
        ],
      },
    ],
    saida: {
      label: 'Estrutura oculta de venda',
      exemplos: [
        '"Camada aparente: paisagem → arquitetura → interiores → experiências → produto."',
        '"Camada estratégica: atenção → interesse → desejo → confiança → ação."',
        '"Camada emocional: impacto → curiosidade → identificação → aspiração → segurança → vontade de avançar."',
      ],
    },
  },

  // ── FASE 6 — RELATÓRIO ───────────────────────────────────────────────────
  5: {
    intro: 'A entrega não é apenas a disponibilização de arquivos. A entrega deve consolidar uma experiência de comunicação. O material final deve ajudar o cliente, o time comercial ou a marca a apresentar o projeto com clareza, desejo e sofisticação.',
    objetivo: 'Entregar valor, não arquivo.',
    regra: 'O espectador deve sair do vídeo com entendimento do projeto, percepção de valor, desejo, confiança, memória emocional e vontade de avançar.',
    groups: [
      {
        pergunta: 'Possíveis entregáveis',
        key: 'brief_entregaveis',
        exemplos: [
          'Filme manifesto','Filme de lançamento','Filme comercial','Teaser',
          'Cortes verticais','Cenas para redes sociais','Filme para stand de vendas',
          'Filme para investidores','Apresentação audiovisual','Fine-art imagery',
          'Booklet','Narrativa de apresentação','Peças para campanha',
          'Assets para mídia paga','Imagens still extraídas do filme',
          'Pacote de comunicação para marketing',
        ],
      },
      {
        pergunta: 'O espectador deve sair com',
        key: 'brief_resultado',
        exemplos: [
          'Entendimento do projeto','Percepção de valor','Desejo',
          'Confiança','Memória emocional','Vontade de avançar',
        ],
      },
    ],
    saida: {
      label: 'Síntese do Método PW LABs',
      exemplos: [
        '"Diagnosticar o valor do projeto, estruturar sua percepção, dirigir sua linguagem, produzir suas imagens e entregar uma experiência narrativa capaz de transformar arquitetura em desejo, confiança e decisão."',
        '"O PW LABs não começa mostrando o produto. Ele começa construindo o valor do produto."',
        '"Os entregáveis deixam de ser apenas uma apresentação visual e passam a ser ferramentas de posicionamento, desejo, percepção de valor e decisão comercial."',
      ],
    },
  },

};

// ─── PHASES ───────────────────────────────────────────────────────────────────
export const PHASES = [
  {
    id: 0,
    eyebrow: 'Fase 1 — Anamnese estratégica',
    title: 'Diagnóstico',
    quote: '"Antes de falarmos de imagem, precisamos entender como esse projeto precisa ser percebido."',
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
    tese: (s) => `Estamos falando de um projeto com posicionamento "${s.d_pos||'—'}", para um público "${s.d_pub||'—'}", com decisão mais "${s.d_dec||'—'}", e o valor central é "${s.d_val||'—'}".`,
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
  'Filme manifesto','Filme de lançamento','Teaser','Cortes verticais',
  'Fine-art imagery','Booklet','Assets de campanha','Imagens still',
  'Apresentação privada','Film para stand','Filme para investidores',
  'Pacote de comunicação','VR 360','Plantas ilustrativas',
];

export const DEFAULT_STORY = [
  { ato:'T',  cena:'', funcao:'', cam:'', locucao:'', duracao:'' },
  { ato:'P',  cena:'', funcao:'', cam:'', locucao:'', duracao:'' },
  { ato:'E',  cena:'', funcao:'', cam:'', locucao:'', duracao:'' },
  { ato:'E',  cena:'', funcao:'', cam:'', locucao:'', duracao:'' },
  { ato:'Pr', cena:'', funcao:'', cam:'', locucao:'', duracao:'' },
  { ato:'C',  cena:'', funcao:'', cam:'', locucao:'', duracao:'' },
];
