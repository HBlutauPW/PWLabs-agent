import { PHASE_BRIEFS } from '../data';
import PhaseBrief from './PhaseBrief';
import { PanelHeader, NotesArea, Actions } from './PanelShell';

const brief = PHASE_BRIEFS[3];

export default function ProducaoPanel({ notes, setNotes, onAdvance, briefSelections, setBriefSelections }) {

  const handleGenerate = () => {
    const selected = Object.entries(briefSelections[3] || {})
      .filter(([, v]) => v.length > 0)
      .map(([k, v]) => `${k}:\n${v.map(i => `• ${i}`).join('\n')}`)
      .join('\n\n');

    const prompt = `Você é o diretor criativo sênior do PW LABs — Creative Direction & Visual Strategy (Perkins & Will).

Gere o RELATÓRIO DE PRODUÇÃO estruturado com base nos elementos selecionados abaixo.

ELEMENTOS SELECIONADOS:
${selected || 'Nenhum elemento selecionado ainda.'}

NOTAS ADICIONAIS:
${notes[3] || '—'}

Estruture o relatório com:
1. SÍNTESE — o pipeline de produção definido em uma linha.
2. BASE TÉCNICA — o que está disponível e como serve à narrativa.
3. COMPOSIÇÃO VISUAL — critérios aplicados a cada cena.
4. AI GENERATION — como será usada como ferramenta de direção.
5. CRITÉRIOS DE REVISÃO — o que orienta cada rodada de feedback.
6. FINALIZAÇÃO FINE-ART — padrão de acabamento e objetivo.
7. REGRA GERAL — a produção serve à narrativa, não o contrário.

Tom: profissional, consultivo, direto. Linguagem de agência estratégica.`;

    navigator.clipboard?.writeText(prompt);
    alert('Prompt copiado!\n\nCole no Claude para gerar o relatório de produção.');
  };

  return (
    <div>
      <PanelHeader
        eyebrow="Fase 4 — Produção híbrida"
        title="Produção"
        quote='"A produção não deve ser aleatória — ela deve ser guiada pelo diagnóstico, pela estratégia e pela direção."'
        color="blue"
      />

      <PhaseBrief
        brief={brief}
        color="blue"
        briefSelections={briefSelections[3] || {}}
        setBriefSelections={(updater) =>
          setBriefSelections(prev => ({ ...prev, 3: typeof updater === 'function' ? updater(prev[3] || {}) : updater }))
        }
      />

      <NotesArea
        value={notes[3]}
        onChange={v => setNotes(n => ({ ...n, 3: v }))}
        placeholder="Base técnica disponível, ferramentas, observações de produção..."
      />

      <Actions onGenerate={handleGenerate} onAdvance={onAdvance} phaseLabel="Produção" color="blue" />
    </div>
  );
}
