import styles from './PanelShell.module.css';

export function PanelHeader({ eyebrow, title, quote, color }) {
  return (
    <div className={styles.header}>
      <div className={styles.eyebrow}>{eyebrow}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.quote} data-color={color}>{quote}</div>
    </div>
  );
}

export function TeseBox({ label, children, color }) {
  return (
    <div className={styles.tese}>
      <div className={styles.teseLabel}>{label}</div>
      <div className={styles.teseFrase}>{children}</div>
    </div>
  );
}

export function TeseBlank({ value, fallback }) {
  return (
    <span className={`${styles.blank} ${value ? styles.blankFilled : ''}`}>
      {value || fallback}
    </span>
  );
}

export function NotesArea({ value, onChange, placeholder }) {
  return (
    <div className={styles.notesWrap}>
      <div className={styles.notesLabel}>
        <i className="ti ti-notes" aria-hidden="true" />
        Notas livres / respostas do cliente
      </div>
      <textarea
        className={styles.notes}
        placeholder={placeholder || 'Anotações da reunião, e-mails, contexto adicional...'}
        value={value}
        onChange={e => onChange(e.target.value)}
        rows={3}
      />
    </div>
  );
}

export function Actions({ onGenerate, onAdvance, onClear, phaseLabel, color }) {
  return (
    <div className={styles.actions}>
      <button className={styles.btnPrimary} onClick={onGenerate}>
        <i className="ti ti-wand" aria-hidden="true" />
        Gerar relatório desta fase
        <i className="ti ti-arrow-up-right" aria-hidden="true" />
      </button>
      {onAdvance && (
        <button className={styles.btnSecondary} onClick={onAdvance}>
          Próxima fase
          <i className="ti ti-arrow-right" aria-hidden="true" />
        </button>
      )}
      {onClear && (
        <button className={styles.btnGhost} onClick={onClear}>Limpar</button>
      )}
      <span className={styles.badge} data-color={color}>
        <i className="ti ti-file-description" aria-hidden="true" />
        {phaseLabel}
      </span>
    </div>
  );
}
