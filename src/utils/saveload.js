const VERSION = '1.1';

export function saveProject(project, client, answers, notes, story, deliverables, briefSelections) {
  const data = {
    version: VERSION,
    savedAt: new Date().toISOString(),
    project, client, answers, notes, story,
    deliverables: [...deliverables],
    briefSelections: briefSelections || {},
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const safeName = (project || 'projeto').toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const date = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `pwlabs-${safeName}-${date}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function loadProject(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (!data.version || !data.answers) {
          reject(new Error('Arquivo inválido — não é um projeto PW LABs.'));
          return;
        }
        resolve({
          project:         data.project         || '',
          client:          data.client          || '',
          answers:         data.answers         || {},
          notes:           data.notes           || { 0:'', 1:'', 2:'', 3:'', 4:'' },
          story:           data.story           || [],
          deliverables:    new Set(data.deliverables || []),
          briefSelections: data.briefSelections || {},
          savedAt:         data.savedAt,
        });
      } catch {
        reject(new Error('Erro ao ler o arquivo. Verifique se é um .json válido.'));
      }
    };
    reader.onerror = () => reject(new Error('Erro ao abrir o arquivo.'));
    reader.readAsText(file);
  });
}
