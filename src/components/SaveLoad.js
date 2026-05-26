import { useRef, useState } from 'react';
import { saveProject, loadProject } from '../utils/saveload';
import styles from './SaveLoad.module.css';

export default function SaveLoad({ project, client, answers, notes, story, deliverables, onLoad }) {
  const inputRef = useRef(null);
  const [status, setStatus] = useState(null); // null | 'saving' | 'loading' | 'ok' | 'error'
  const [msg, setMsg] = useState('');

  const handleSave = () => {
    try {
      setStatus('saving');
      saveProject(project, client, answers, notes, story, deliverables);
      setStatus('ok');
      setMsg('Projeto salvo com sucesso.');
      setTimeout(() => setStatus(null), 2500);
    } catch {
      setStatus('error');
      setMsg('Erro ao salvar.');
      setTimeout(() => setStatus(null), 3000);
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setStatus('loading');
    setMsg('');
    try {
      const data = await loadProject(file);
      onLoad(data);
      setStatus('ok');
      const d = new Date(data.savedAt);
      setMsg(`"${data.project || 'Projeto'}" carregado — salvo em ${d.toLocaleDateString('pt-BR')} às ${d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`);
      setTimeout(() => setStatus(null), 4000);
    } catch (err) {
      setStatus('error');
      setMsg(err.message);
      setTimeout(() => setStatus(null), 4000);
    }
    e.target.value = '';
  };

  return (
    <div className={styles.wrap}>
      <button className={styles.btn} onClick={handleSave} title="Salvar projeto como arquivo .json">
        <i className="ti ti-device-floppy" aria-hidden="true" />
        <span>Salvar</span>
      </button>

      <button
        className={styles.btn}
        onClick={() => inputRef.current?.click()}
        title="Abrir projeto salvo anteriormente"
      >
        <i className="ti ti-folder-open" aria-hidden="true" />
        <span>Abrir</span>
      </button>

      <input
        ref={inputRef}
        type="file"
        accept=".json"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        aria-label="Selecionar arquivo de projeto"
      />

      {status && (
        <div className={`${styles.toast} ${styles['toast--' + status]}`}>
          {status === 'loading' && <i className="ti ti-loader-2" aria-hidden="true" />}
          {status === 'ok'      && <i className="ti ti-check" aria-hidden="true" />}
          {status === 'error'   && <i className="ti ti-alert-circle" aria-hidden="true" />}
          {status === 'saving'  && <i className="ti ti-loader-2" aria-hidden="true" />}
          <span>{msg || (status === 'loading' ? 'Carregando...' : status === 'saving' ? 'Salvando...' : '')}</span>
        </div>
      )}
    </div>
  );
}
