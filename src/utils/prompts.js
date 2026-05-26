import { PHASES, SCENE_TYPES } from '../data';

export function buildContext(ctx) {
  const { answers, notes, project, client } = ctx;
  let out = `PROJETO: ${project || 'não informado'}\nCLIENTE: ${client || 'não informado'}\n`;
  PHASES.forEach((ph, pi) => {
    out += `\n--- ${ph.title.toUpperCase()} ---\n`;
    ph.blocks.forEach(b => {
      b.questions.forEach(q => {
        const s = answers[q.key];
        if (s?.sel || s?.nota) {
          out += `• ${q.label}\n`;
          if (s.sel)  out += `  Resposta: ${s.sel}\n`;
          if (s.nota) out += `  Nota: ${s.nota}\n`;
        }
      });
    });
    if (notes[pi]) out += `Notas: ${notes[pi]}\n`;
  });
  return out;
}

export function buildStoryContext(story) {
  return story
    .filter(s => s.cena || s.funcao)
    .map((s, i) =>
      `Cena ${i + 1} [${SCENE_TYPES[s.ato]?.label || s.ato}] — ${s.cena}\n` +
      `Função: ${s.funcao}\nCâmera: ${s.cam}\nLocução: ${s.locucao}\nDuração: ${s.duracao}`
    ).join('\n\n');
}

const PWLABS_VOICE = `Você é o diretor criativo e estrategista sênior do PW LABs — Creative Direction & Visual Strategy, dentro da Perkins & Will. Você não produz imagens. Você estrutura como a arquitetura será percebida, desejada e vendida.\n\nFrase-síntese: "We don't produce images. We design narratives that translate architecture into value."\n\n`;

export function phasePrompt(phaseIdx, ctx) {
  const ph = PHASES[phaseIdx];
  const context = buildContext(ctx);
  return `${PWLABS_VOICE}Frase-guia desta fase: "${ph.reportQuote}"\n\n${context}\n\nGere o ${ph.reportLabel} estruturado com as seguintes seções:\n${ph.reportSections.join('\n')}\n\nTom: profissional, consultivo, direto. Linguagem de agência estratégica, nunca de estúdio de render. Este relatório será entregue ao cliente como documento de alinhamento antes da produção.`;
}

export function storyboardPrompt(ctx) {
  const context = buildContext(ctx);
  const story = buildStoryContext(ctx.story);
  return `${PWLABS_VOICE}${context}\n\nCENAS JÁ MAPEADAS:\n${story || 'Nenhuma cena definida ainda.'}\n\nGere um storyboard narrativo completo. Para cada cena:\n- Ato narrativo (Território / Promessa / Experiência / Produto / Convite)\n- Descrição da cena e enquadramento\n- Função estratégica (por que essa cena existe)\n- Direção de câmera e movimento\n- Atmosfera e luz\n- Locução ou texto em tela sugerido\n- Duração estimada\n- Como se conecta com a cena anterior e a próxima\n\nEstrutura obrigatória: Território → Promessa → Experiência → Produto → Convite.\nArco emocional final: Atenção → Interesse → Desejo → Confiança → Ação.`;
}

export function fullReportPrompt(ctx, deliverables, extraNotes) {
  const context = buildContext(ctx);
  const story = buildStoryContext(ctx.story);
  const dels = [...deliverables].join(', ') || 'A definir';
  return `${PWLABS_VOICE}Gere o RELATÓRIO COMPLETO DO PROJETO para entrega ao cliente. Este documento representa todas as etapas do método PW LABs.\n\n${context}\n\nSTORYBOARD DEFINIDO:\n${story || 'A definir na fase de produção.'}\n\nENTREGÁVEIS SELECIONADOS: ${dels}\n\n${extraNotes ? `OBSERVAÇÕES FINAIS:\n${extraNotes}\n\n` : ''}Estruture o relatório:\n\n# PW LABs — RELATÓRIO DE PROJETO\n## ${ctx.project || 'Projeto'} · ${ctx.client || 'Cliente'}\n\n1. SUMÁRIO EXECUTIVO — tese narrativa central, visão geral em 3–4 parágrafos.\n2. DIAGNÓSTICO ESTRATÉGICO — posicionamento, público, desafio, brief emocional, benchmark.\n3. ESTRATÉGIA VISUAL — código visual, tom, ritmo, linguagem e estrutura narrativa.\n4. DIREÇÃO DE ARTE — mood, atmosfera, luz, presença humana, pipeline, padrão de qualidade.\n5. STORYBOARD NARRATIVO — sequência de cenas com função estratégica, câmera, locução e duração.\n6. ENTREGÁVEIS — lista de formatos e aplicações.\n7. PRÓXIMOS PASSOS — cronograma sugerido e ações imediatas.\n8. PRINCÍPIO PW LABs — encerrar com: "Diagnosticar o valor do projeto, estruturar sua percepção, dirigir sua linguagem, produzir suas imagens e entregar uma experiência narrativa capaz de transformar arquitetura em desejo, confiança e decisão."\n\nTom: profissional, consultivo, elegante. Nível executivo para entrega direta ao cliente.`;
}
