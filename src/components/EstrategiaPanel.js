import { PHASES } from '../data';
import Block from './Block';
import { PanelHeader, TeseBox, TeseBlank, NotesArea, Actions } from './PanelShell';
import { phasePrompt } from '../utils/prompts';

const ph = PHASES[1];

export default function EstrategiaPanel({ answers, setSel, setNota, notes, setNotes, onAdvance, ctx }) {
  const a = answers;

  const handleGenerate = () => {
    const text = phasePrompt(1, ctx);
    navigator.clipboard?.writeText(text);
    alert('Prompt copiado!\n\nCole no Claude ou em qualquer IA para gerar o relatório de estratégia.');
  };

  return (
    <div>
      <PanelHeader
        eyebrow={ph.eyebrow}
        title={ph.title}
        quote={ph.quote}
        color="teal"
      />

      {ph.blocks.map((b, i) => (
        <Block
          key={i}
          icon={b.icon}
          title={b.title}
          sub={b.sub}
          color="teal"
          questions={b.questions}
          answers={answers}
          setSel={setSel}
          setNota={setNota}
          defaultOpen={i === 0}
        />
      ))}

      <TeseBox label="Código visual definido" color="teal">
        "O código visual é{' '}
        <TeseBlank value={a.e_ling?.sel} fallback="linguagem" />,
        com tom{' '}
        <TeseBlank value={a.e_tom?.sel} fallback="tom" />,
        ritmo{' '}
        <TeseBlank value={a.e_rit?.sel} fallback="ritmo" />."
      </TeseBox>

      <NotesArea
        value={notes[1]}
        onChange={v => setNotes(n => ({ ...n, 1: v }))}
      />

      <Actions
        onGenerate={handleGenerate}
        onAdvance={onAdvance}
        phaseLabel="Estratégia"
        color="teal"
      />
    </div>
  );
}
