import styles from './PhaseNav.module.css';

const LABELS = ['Diagnóstico', 'Estratégia', 'Direção', 'Produção', 'Storyboard', 'Relatório'];
const COLORS = ['purple', 'teal', 'coral', 'blue', 'green', 'green'];

export default function PhaseNav({ current, completed, onChange }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {LABELS.map((label, i) => {
          const isDone = completed.has(i) && i !== current;
          const isActive = i === current;
          return (
            <button
              key={i}
              className={`${styles.btn} ${isActive ? styles.active : ''} ${isDone ? styles.done : ''}`}
              data-color={COLORS[i]}
              onClick={() => onChange(i)}
            >
              <span className={styles.num} data-color={COLORS[i]}>
                {isDone ? <i className="ti ti-check" aria-hidden="true" /> : i + 1}
              </span>
              <span className={styles.label}>{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
