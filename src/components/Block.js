import { useState } from 'react';
import styles from './Block.module.css';

export default function Block({ icon, title, sub, color, questions, answers, setSel, setNota, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const answered = questions.filter(q => answers[q.key]?.sel).length;

  return (
    <div className={`${styles.block} ${open ? styles.open : ''}`} data-color={color}>
      <button className={styles.header} onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <div className={styles.iconWrap} data-color={color}>
          <i className={`ti ${icon}`} aria-hidden="true" />
        </div>
        <div className={styles.meta}>
          <div className={styles.title} data-color={color}>{title}</div>
          <div className={styles.sub}>{sub}</div>
        </div>
        <div className={styles.dots}>
          {questions.map((q, i) => (
            <div
              key={i}
              className={`${styles.dot} ${answers[q.key]?.sel ? styles.dotOn : ''}`}
              data-color={color}
            />
          ))}
        </div>
        <i className={`ti ti-chevron-down ${styles.chevron}`} aria-hidden="true" />
      </button>

      {open && (
        <div className={styles.body}>
          {questions.map(q => {
            const s = answers[q.key] || { sel: null, nota: '' };
            const alertMsg = s.sel && q.alerts?.[s.sel];
            return (
              <div key={q.key} className={styles.qItem}>
                <div className={styles.qLabel}>{q.label}</div>
                <div className={styles.opts}>
                  {q.opts.map(opt => (
                    <button
                      key={opt}
                      className={`${styles.opt} ${s.sel === opt ? styles.optSel : ''}`}
                      data-color={s.sel === opt ? color : ''}
                      onClick={() => setSel(q.key, opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {alertMsg && (
                  <div className={styles.alert} data-color={color}>{alertMsg}</div>
                )}
                <textarea
                  className={styles.nota}
                  placeholder="Nota / observação..."
                  rows={1}
                  value={s.nota}
                  onChange={e => setNota(q.key, e.target.value)}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
