import { SCENE_TYPES, SCENE_OPTIONS, CAMERA_FNS, PHASE_BRIEFS } from '../data';
import { PanelHeader, NotesArea, Actions } from './PanelShell';
import PhaseBrief from './PhaseBrief';
import { storyboardPrompt } from '../utils/prompts';
import styles from './StoryboardPanel.module.css';

const brief = PHASE_BRIEFS[4];

const COLOR_MAP = {
  purple: { bg: 'var(--purple-50)', text: 'var(--purple-500)', border: 'var(--purple-100)' },
  teal:   { bg: 'var(--teal-50)',   text: 'var(--teal-500)',   border: 'var(--teal-100)' },
  coral:  { bg: 'var(--coral-50)',  text: 'var(--coral-500)',  border: 'var(--coral-100)' },
  blue:   { bg: 'var(--blue-50)',   text: 'var(--blue-500)',   border: 'var(--blue-100)' },
  green:  { bg: 'var(--green-50)',  text: 'var(--green-500)',  border: 'var(--green-100)' },
};

function SceneCard({ scene, index, onChange, onRemove }) {
  const at = SCENE_TYPES[scene.ato];
  const c = COLOR_MAP[at?.color] || COLOR_MAP.purple;
  const opts = SCENE_OPTIONS[scene.ato] || [];

  const update = (field, val) => {
    const updated = { ...scene, [field]: val };
    if (field === 'cena' && CAMERA_FNS[val] && !scene.funcao) {
      updated.funcao = CAMERA_FNS[val];
    }
    onChange(index, updated);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHead} style={{ borderLeftColor: c.text }}>
        <div className={styles.cardNum} style={{ background: c.bg, color: c.text }}>{index + 1}</div>
        <div className={styles.cardMeta}>
          <select className={styles.atoSelect} value={scene.ato}
            onChange={e => onChange(index, { ...scene, ato: e.target.value, cena: '' })}>
            {Object.entries(SCENE_TYPES).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
          <div className={styles.cardCena}>{scene.cena || `Cena ${index + 1}`}</div>
        </div>
        <button className={styles.removeBtn} onClick={() => onRemove(index)} aria-label="Remover cena">
          <i className="ti ti-x" aria-hidden="true" />
        </button>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.fieldFull}>
          <label>Tipo de cena</label>
          <select value={scene.cena} onChange={e => update('cena', e.target.value)}>
            <option value="">Selecione...</option>
            {opts.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div className={styles.fieldFull}>
          <label>Função estratégica</label>
          <input type="text" value={scene.funcao} onChange={e => update('funcao', e.target.value)}
            placeholder="Por que essa cena existe na narrativa..." />
        </div>
        <div className={styles.fieldFull}>
          <label>Locução / texto em tela</label>
          <textarea value={scene.locucao} onChange={e => update('locucao', e.target.value)}
            placeholder="Texto sugerido para esta cena..." rows={2} />
        </div>
        <div className={styles.field}>
          <label>Câmera / direção</label>
          <input type="text" value={scene.cam} onChange={e => update('cam', e.target.value)}
            placeholder="Ex: drone, travelling, close..." />
        </div>
        <div className={styles.field}>
          <label>Duração estimada</label>
          <input type="text" value={scene.duracao} onChange={e => update('duracao', e.target.value)}
            placeholder="Ex: 4–6s" />
        </div>
      </div>
    </div>
  );
}

export default function StoryboardPanel({ story, setStory, notes, setNotes, onAdvance, ctx, briefSelections, setBriefSelections }) {
  const handleChange = (i, updated) => setStory(prev => prev.map((s, idx) => idx === i ? updated : s));
  const handleRemove = (i) => { if (story.length > 1) setStory(prev => prev.filter((_, idx) => idx !== i)); };
  const handleAdd = () => setStory(prev => [...prev, { ato: 'E', cena: '', funcao: '', cam: '', locucao: '', duracao: '' }]);

  const handleGenerate = () => {
    const text = storyboardPrompt({ ...ctx, story });
    navigator.clipboard?.writeText(text);
    alert('Prompt copiado!\n\nCole no Claude para gerar o storyboard narrativo completo.');
  };

  return (
    <div>
      <PanelHeader
        eyebrow="Fase 5 — Roteiro visual"
        title="Storyboard"
        quote='"Cada cena deve ter uma função estratégica clara dentro da narrativa."'
        color="green"
      />

      <PhaseBrief
        brief={brief}
        color="green"
        briefSelections={briefSelections[4] || {}}
        setBriefSelections={(updater) =>
          setBriefSelections(prev => ({ ...prev, 4: typeof updater === 'function' ? updater(prev[4] || {}) : updater }))
        }
      />

      <div className={styles.structureRow}>
        <span className={styles.structureLabel}>Estrutura:</span>
        {Object.entries(SCENE_TYPES).map(([k, v]) => {
          const c = COLOR_MAP[v.color];
          return (
            <span key={k} className={styles.structTag}
              style={{ background: c.bg, color: c.text, borderColor: c.border }}>
              {v.label}
            </span>
          );
        })}
        <button className={styles.addBtn} onClick={handleAdd}>
          <i className="ti ti-plus" aria-hidden="true" /> Adicionar cena
        </button>
      </div>

      <div className={styles.grid}>
        {story.map((s, i) => (
          <SceneCard key={i} scene={s} index={i} onChange={handleChange} onRemove={handleRemove} />
        ))}
      </div>

      <NotesArea value={notes[4]} onChange={v => setNotes(n => ({ ...n, 4: v }))}
        placeholder="Direcionamento narrativo, referências de ritmo, música, observações de produção..." />

      <Actions onGenerate={handleGenerate} onAdvance={onAdvance} phaseLabel="Storyboard" color="green" />
    </div>
  );
}
