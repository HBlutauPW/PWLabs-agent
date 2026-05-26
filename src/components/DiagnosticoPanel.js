import { PHASES, PHASE_BRIEFS } from '../data';
import Block from './Block';
import PhaseBrief from './PhaseBrief';
import { PanelHeader, TeseBox, TeseBlank, NotesArea, Actions } from './PanelShell';
import { phasePrompt } from '../utils/prompts';

const ph = PHASES[0];
const brief = PHASE_BRIEFS[0];

export default function DiagnosticoPanel({ answers, setSel, setNota, notes, setNotes, onAdvance, ctx, briefSelections, setBriefSelections }) {
  const a = answers;

  const handleGenerate = () => {
    const text = phasePrompt(0, ctx, briefSelections);
    navigator.clipboard?.writeText(text);
    alert('Prompt copiado!\n\nCole no Claude para gerar o relatório de diagnóstico.');
  };

  return (
    <div>
      <PanelHeader eyebrow={ph.eyebrow} title={ph.title} quote={ph.quote} color="purple" />

      <PhaseBrief
        brief={brief}
        color="purple"
        briefSelections={briefSelections[0] || {}}
        setBriefSelections={(updater) =>
          setBriefSelections(prev => ({ ...prev, 0: typeof updater === 'function' ? updater(prev[0] || {}) : updater }))
        }
      />

      {ph.blocks.map((b, i) => (
        <Block
          key={i}
          icon={b.icon}
          title={b.title}
          sub={b.sub}
          color="purple"
          questions={b.questions}
          answers={answers}
          setSel={setSel}
          setNota={setNota}
          defaultOpen={i === 0}
        />
      ))}

      <TeseBox label="Tese narrativa do diagnóstico" color="purple">
        "Estamos falando de um projeto com posicionamento{' '}
        <TeseBlank value={a.d_pos?.sel} fallback="posicionamento" />,
        para um público{' '}
        <TeseBlank value={a.d_pub?.sel} fallback="público" />,
        com decisão mais{' '}
        <TeseBlank value={a.d_dec?.sel} fallback="emocional / racional" />,
        e o valor central é{' '}
        <TeseBlank value={a.d_val?.sel} fallback="valor" />."
      </TeseBox>

      <NotesArea value={notes[0]} onChange={v => setNotes(n => ({ ...n, 0: v }))} />

      <Actions
        onGenerate={handleGenerate}
        onAdvance={onAdvance}
        phaseLabel="Diagnóstico"
        color="purple"
      />
    </div>
  );
}
