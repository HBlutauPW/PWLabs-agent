import { useState } from 'react';
import styles from './PhaseBrief.module.css';

export default function PhaseBrief({ brief, color, briefSelections, setBriefSelections }) {
  const [open, setOpen] = useState(false);

  if (!brief) return null;

  const totalSelected = brief.groups
    ? brief.groups.reduce((acc, g) => acc + (briefSelections[g.key]?.length || 0), 0)
    : 0;

  const toggleItem = (key, item) => {
    setBriefSelections(prev => {
      const current = prev[key] || [];
      const exists = current.includes(item);
      return {
        ...prev,
        [key]: exists ? current.filter(i => i !== item) : [...current, item],
      };
    });
  };

  // Collect all selected items for summary
  const allSelected = brief.groups
    ? brief.groups.flatMap(g => briefSelections[g.key] || [])
    : [];

  return (
    <div className={`${styles.wrap} ${open ? styles.wrapOpen : ''}`} data-color={color}>
      <button className={styles.trigger} onClick={() => setOpen(o => !o)}>
        <div className={styles.triggerLeft}>
          <i className="ti ti-book-2" aria-hidden="true" />
          <span className={styles.triggerLabel}>Descritivo da etapa</span>
          {totalSelected > 0 && (
            <span className={styles.count} data-color={color}>{totalSelected} selecionados</span>
          )}
        </div>
        <i className={`ti ti-chevron-down ${styles.chevron}`} aria-hidden="true" />
      </button>

      {open && (
        <div className={styles.body}>
          {/* Intro */}
          <div className={styles.intro}>{brief.intro}</div>

          {/* Objetivo */}
          <div className={styles.objetivoRow}>
            <span className={styles.objetivoLabel}>Objetivo</span>
            <span className={styles.objetivoText}>{brief.objetivo}</span>
          </div>

          {/* Question groups with selectable examples */}
          {brief.groups && brief.groups.map(group => {
            const selected = briefSelections[group.key] || [];
            return (
              <div key={group.key} className={styles.group}>
                <div className={styles.groupTitle}>{group.pergunta}</div>
                <div className={styles.chips}>
                  {group.exemplos.map(ex => (
                    <button
                      key={ex}
                      className={`${styles.chip} ${selected.includes(ex) ? styles.chipOn : ''}`}
                      data-color={selected.includes(ex) ? color : ''}
                      onClick={() => toggleItem(group.key, ex)}
                    >
                      {ex}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Summary of selected */}
          {allSelected.length > 0 && (
            <div className={styles.summary}>
              <div className={styles.summaryLabel} data-color={color}>
                <i className="ti ti-sparkles" aria-hidden="true" />
                Elementos selecionados para o briefing
              </div>
              <div className={styles.summaryChips}>
                {allSelected.map((item, i) => (
                  <span key={i} className={styles.summaryChip} data-color={color}>{item}</span>
                ))}
              </div>
            </div>
          )}

          {/* Saida / tese examples */}
          {brief.saida && (
            <div className={styles.saida}>
              <div className={styles.saidaLabel}>{brief.saida.label}</div>
              <div className={styles.saidaList}>
                {brief.saida.exemplos.map((ex, i) => (
                  <div key={i} className={styles.saidaItem}>{ex}</div>
                ))}
              </div>
            </div>
          )}

          {/* Regra */}
          {brief.regra && (
            <div className={styles.regra} data-color={color}>
              <i className="ti ti-alert-triangle" aria-hidden="true" />
              <span>{brief.regra}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
