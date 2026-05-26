import { useState, useCallback } from 'react';
import { PHASES, DEFAULT_STORY } from './data';
import PhaseNav from './components/PhaseNav';
import DiagnosticoPanel from './components/DiagnosticoPanel';
import EstrategiaPanel from './components/EstrategiaPanel';
import DirecaoPanel from './components/DirecaoPanel';
import StoryboardPanel from './components/StoryboardPanel';
import RelatorioPanel from './components/RelatorioPanel';
import SaveLoad from './components/SaveLoad';
import styles from './App.module.css';

const initialAnswers = () => {
  const a = {};
  PHASES.forEach(ph =>
    ph.blocks.forEach(b =>
      b.questions.forEach(q => { a[q.key] = { sel: null, nota: '' }; })
    )
  );
  return a;
};

export default function App() {
  const [phase, setPhase] = useState(0);
  const [completed, setCompleted] = useState(new Set());
  const [answers, setAnswers] = useState(initialAnswers);
  const [notes, setNotes] = useState({ 0: '', 1: '', 2: '', 3: '', 4: '' });
  const [story, setStory] = useState(DEFAULT_STORY.map(s => ({ ...s })));
  const [project, setProject] = useState('');
  const [client, setClient] = useState('');
  const [deliverables, setDeliverables] = useState(new Set());
  // briefSelections: { [phaseIdx]: { [groupKey]: string[] } }
  const [briefSelections, setBriefSelections] = useState({ 0: {}, 1: {}, 2: {}, 3: {} });

  const setSel = useCallback((key, val) => {
    setAnswers(prev => ({
      ...prev,
      [key]: { ...prev[key], sel: prev[key].sel === val ? null : val }
    }));
  }, []);

  const setNota = useCallback((key, val) => {
    setAnswers(prev => ({ ...prev, [key]: { ...prev[key], nota: val } }));
  }, []);

  const advance = (from) => {
    setCompleted(prev => new Set([...prev, from]));
    setPhase(Math.min(from + 1, 4));
  };

  const toggleDeliverable = (d) => {
    setDeliverables(prev => {
      const n = new Set(prev);
      n.has(d) ? n.delete(d) : n.add(d);
      return n;
    });
  };

  const handleLoad = useCallback((data) => {
    setProject(data.project || '');
    setClient(data.client || '');
    setAnswers(prev => ({ ...initialAnswers(), ...data.answers }));
    setNotes(n => ({ ...n, ...data.notes }));
    setStory(data.story?.length ? data.story : DEFAULT_STORY.map(s => ({ ...s })));
    setDeliverables(data.deliverables instanceof Set ? data.deliverables : new Set(data.deliverables || []));
    if (data.briefSelections) setBriefSelections(data.briefSelections);
    setCompleted(new Set());
    setPhase(0);
  }, []);

  const ctx = { answers, notes, story, project, client, deliverables, briefSelections };

  const panels = [
    <DiagnosticoPanel key={0} answers={answers} setSel={setSel} setNota={setNota} notes={notes} setNotes={setNotes} onAdvance={() => advance(0)} ctx={ctx} briefSelections={briefSelections} setBriefSelections={setBriefSelections} />,
    <EstrategiaPanel  key={1} answers={answers} setSel={setSel} setNota={setNota} notes={notes} setNotes={setNotes} onAdvance={() => advance(1)} ctx={ctx} />,
    <DirecaoPanel     key={2} answers={answers} setSel={setSel} setNota={setNota} notes={notes} setNotes={setNotes} onAdvance={() => advance(2)} ctx={ctx} />,
    <StoryboardPanel  key={3} story={story} setStory={setStory} notes={notes} setNotes={setNotes} onAdvance={() => advance(3)} ctx={ctx} />,
    <RelatorioPanel   key={4} deliverables={deliverables} toggleDeliverable={toggleDeliverable} notes={notes} setNotes={setNotes} ctx={ctx} />,
  ];

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>PW</span>
            <div className={styles.logoDot} />
            <div>
              <div className={styles.logoAccent}>LABs</div>
              <div className={styles.logoSub}>Creative Direction & Visual Strategy</div>
            </div>
          </div>
          <div className={styles.centerInputs}>
            <input className={styles.metaInput} placeholder="Projeto..." value={project} onChange={e => setProject(e.target.value)} />
            <input className={styles.metaInput} placeholder="Cliente..." value={client} onChange={e => setClient(e.target.value)} />
          </div>
          <SaveLoad
            project={project} client={client} answers={answers}
            notes={notes} story={story} deliverables={deliverables}
            briefSelections={briefSelections} onLoad={handleLoad}
          />
        </div>
      </header>

      <PhaseNav current={phase} completed={completed} onChange={setPhase} />

      <main className={styles.main}>
        <div className={styles.content}>{panels[phase]}</div>
      </main>
    </div>
  );
}
