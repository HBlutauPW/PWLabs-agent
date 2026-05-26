import { PHASES, DELIVERABLES } from '../data';
import { PanelHeader, NotesArea } from './PanelShell';
import { phasePrompt, fullReportPrompt } from '../utils/prompts';
import styles from './RelatorioPanel.module.css';

const PHASE_COLORS = ['purple', 'teal', 'coral'];

export default function RelatorioPanel({ deliverables, toggleDeliverable, notes, setNotes, ctx }) {
  const { answers, project, client } = ctx;

  const copyPrompt = (text, label) => {
    navigator.clipboard?.writeText(text);
    alert(`Prompt "${label}" copiado!\n\nCole no Claude para gerar o relatório.`);
  };

  const summaryFields = [
    { label: 'Projeto', value: project },
    { label: 'Cliente', value: client },
    { label: 'Posicionamento', value: answers.d_pos?.sel },
    { label: 'Público', value: answers.d_pub?.sel },
    { label: 'Código visual', value: answers.e_ling?.sel },
    { label: 'Mood', value: answers.d2_mood?.sel },
    { label: 'Pipeline', value: answers.d2_pipe?.sel },
    { label: 'Cenas', value: ctx.story?.filter(s => s.cena).length || 0 },
  ];

  return (
    <div>
      <PanelHeader
        eyebrow="Fase 5 — Entregável ao cliente"
        title="Relatório"
        quote='"Entregar valor, não arquivo."'
        color="green"
      />

      <div className={styles.summaryGrid}>
        {summaryFields.map(f => (
          <div key={f.label} className={styles.summaryCard}>
            <div className={styles.summaryLabel}>{f.label}</div>
            <div className={styles.summaryValue}>{f.value || '—'}</div>
          </div>
        ))}
      </div>

      <div className={styles.section}>
        <div className={styles.sectionLabel}>
          <i className="ti ti-package" aria-hidden="true" />
          Entregáveis — selecione os aplicáveis
        </div>
        <div className={styles.tagGrid}>
          {DELIVERABLES.map(d => (
            <button
              key={d}
              className={`${styles.tag} ${deliverables.has(d) ? styles.tagOn : ''}`}
              onClick={() => toggleDeliverable(d)}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <NotesArea
        value={notes[4]}
        onChange={v => setNotes(n => ({ ...n, 4: v }))}
        placeholder="Observações finais, próximos passos, proposta, cronograma..."
      />

      <div className={styles.section}>
        <div className={styles.sectionLabel}>
          <i className="ti ti-wand" aria-hidden="true" />
          Gerar relatórios por fase
        </div>
        <div className={styles.btnGroup}>
          {PHASES.map((ph, i) => (
            <button
              key={i}
              className={styles.phaseBtn}
              data-color={PHASE_COLORS[i]}
              onClick={() => copyPrompt(phasePrompt(i, ctx), ph.title)}
            >
              <i className="ti ti-file-description" aria-hidden="true" />
              {ph.title}
              <i className="ti ti-copy" aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>

      <div className={styles.mainAction}>
        <button
          className={styles.btnFull}
          onClick={() => copyPrompt(fullReportPrompt(ctx, deliverables, notes[4]), 'Relatório Completo')}
        >
          <i className="ti ti-wand" aria-hidden="true" />
          Gerar relatório completo do projeto
          <i className="ti ti-arrow-up-right" aria-hidden="true" />
        </button>
        <div className={styles.hint}>
          O prompt completo será copiado para a área de transferência — cole no Claude para gerar o documento.
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerQuote}>
          "Diagnosticar o valor do projeto, estruturar sua percepção, dirigir sua linguagem,
          produzir suas imagens e entregar uma experiência narrativa capaz de transformar
          arquitetura em desejo, confiança e decisão."
        </div>
        <div className={styles.footerMark}>PW LABs · Creative Direction & Visual Strategy</div>
      </div>
    </div>
  );
}
