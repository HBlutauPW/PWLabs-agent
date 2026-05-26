import { PHASES, PHASE_BRIEFS } from '../data';
import Block from './Block';
import PhaseBrief from './PhaseBrief';
import { PanelHeader, TeseBox, TeseBlank, NotesArea, Actions } from './PanelShell';
import { phasePrompt } from '../utils/prompts';

const ph = PHASES[2];
const brief = PHASE_BRIEFS[2];

export default function DirecaoPanel({ answers, setSel, setNota, notes, setNotes, onAdvance, ctx, briefSelections, setBriefSelections }) {
  const a = answers;

  const handleGenerate = () => {
    const text = phasePrompt(2, ctx);
    navigator.clipboard?.writeText(text);
    alert('Prompt copiado!\n\nCole no Claude para gerar o relatório de direção de arte.');
  };

  return (
    <div>
      <PanelHeader eyebrow={ph.eyebrow} title={ph.title} quote={ph.quote} color="coral" />

      <PhaseBrief
        brief={brief}
        color="coral"
        briefSelections={briefSelections[2] || {}}
        setBriefSelections={(updater) =>
          setBriefSelections(prev => ({ ...prev, 2: typeof updater === 'function' ? updater(prev[2] || {}) : updater }))
        }
      />

      {ph.blocks.map((b, i) => (
        <Block
          key={i}
          icon={b.icon}
          title={b.title}
          sub={b.sub}
          color="coral"
          questions={b.questions}
          answers={answers}
          setSel={setSel}
          setNota={setNota}
          defaultOpen={i === 0}
        />
      ))}

      <TeseBox label="Brief criativo definido" color="coral">
        "Mood{' '}
        <TeseBlank value={a.d2_mood?.sel} fallback="mood" />,
        luz{' '}
        <TeseBlank value={a.d2_luz?.sel} fallback="iluminação" />,
        pipeline{' '}
        <TeseBlank value={a.d2_pipe?.sel} fallback="produção" />,
        acabamento{' '}
        <TeseBlank value={a.d2_niv?.sel} fallback="nível" />."
      </TeseBox>

      <NotesArea value={notes[2]} onChange={v => setNotes(n => ({ ...n, 2: v }))} />

      <Actions onGenerate={handleGenerate} onAdvance={onAdvance} phaseLabel="Direção" color="coral" />
    </div>
  );
}
