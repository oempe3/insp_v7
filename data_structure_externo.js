// Estrutura de dados simplificada para o formulário de inspeção externa.
// Esta estrutura segue a recomendação de coletar apenas dados pessoais,
// dados básicos da inspeção, uma descrição das observações e foto.

/*
 * Cada propriedade do objeto FORM_STRUCTURE representa uma “janela”
 * que será exibida como um card na página.  O 'title' define o título da
 * janela e os 'fields' definem os campos dentro de cada janela.  Os tipos
 * suportados são:
 *   - text: campo de texto simples
 *   - email: campo de e‑mail com validação de sintaxe
 *   - select: lista suspensa de opções
 *   - date: seletor de data; quando 'auto' é definido como 'start_date',
 *           o script preenche automaticamente com a data atual
 *   - time: seletor de hora; quando 'auto' é definido como 'start_time',
 *           o script preenche automaticamente com a hora atual
 *   - textarea: área de texto para descrições
 *   - file: permite upload de arquivo; o valor será tratado no script
 */

const FORM_STRUCTURE = {
  'dados-pessoais': {
    title: 'Dados Pessoais',
    icon: '👤',
    fields: [
      { name: 'nome', label: 'Nome', type: 'text', required: true, placeholder: 'Nome completo do visitante' },
      { name: 'email', label: 'E‑mail', type: 'email', required: true, placeholder: 'exemplo@dominio.com' },
      { name: 'telefone', label: 'Telefone', type: 'text', required: true, placeholder: '(xx) xxxxx‑xxxx' }
    ]
  },
  'dados-inspecao': {
    title: 'Dados da Inspeção',
    icon: '🕒',
    fields: [
      { name: 'data', label: 'Data', type: 'date', auto: 'start_date', required: true },
      { name: 'hora', label: 'Hora', type: 'time', auto: 'start_time', required: true },
      { name: 'local', label: 'Local', type: 'text', required: true, placeholder: 'Local visitado' }
    ]
  },
  'observacoes': {
    title: 'Observações',
    icon: '📝',
    fields: [
      { name: 'descricao', label: 'Descrição das Observações', type: 'textarea', required: true, rows: 4, placeholder: 'Relate suas observações' },
      { name: 'foto', label: 'Foto (opcional)', type: 'file', required: false }
    ]
  }
};

// Exporta a estrutura se o ambiente suportar módulos (por exemplo, Node.js ou ES Modules)
if (typeof module !== 'undefined') {
  module.exports = { FORM_STRUCTURE };
}