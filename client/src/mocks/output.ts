export default {
  nodes: [
    {
      id: '1',
      label: 'Uso Diário do Cursor',
      description:
        'O autor e outros engenheiros estão utilizando Cursor para escrever código, em vez de digitar manualmente. A ferramenta agiliza o trabalho, especialmente em tarefas complexas, desde que você saiba o que está fazendo.',
      position: { x: 0, y: 0 },
    },
    {
      id: '2',
      label: 'Modo YOLO',
      description:
        'YOLO permite que o Cursor escreva e execute código até verificar que está correto. Comandos como testes, build e mkdir são liberados para execução automática. Ideal para corrigir erros rapidamente.',
      position: { x: -300, y: 200 },
    },
    {
      id: '3',
      label: 'Tarefas Complexas',
      description:
        'Para funções mais difíceis, o ideal é adicionar testes automáticos no prompt. Cursor cria testes, implementa o código e o corrige até passar nos testes.',
      position: { x: 300, y: 200 },
    },
    {
      id: '4',
      label: 'Testes e Iteração',
      description:
        'Com YOLO ativado, Cursor cria arquivos de teste, implementa o código e itera automaticamente até os testes passarem. Mas é preciso supervisionar o processo para evitar desvios.',
      position: { x: 0, y: 400 },
    },
    {
      id: '5',
      label: 'Expandindo Testes',
      description:
        'Cursor pode ser usado para melhorar a robustez do código adicionando novos casos de teste com base em falhas reais encontradas nos logs.',
      position: { x: -300, y: 600 },
    },
    {
      id: '6',
      label: 'Design com Cursor',
      description:
        'Cursor não é bom para validar visualmente designs. A recomendação é usar Figma com Builder.io para gerar código e iterar com Cursor.',
      position: { x: 300, y: 600 },
    },
    {
      id: '7',
      label: 'Erros de TypeScript',
      description:
        'Você pode pedir para o Cursor rodar o build, identificar e corrigir os erros. Ideal para terminar uma tarefa com o comando de build final.',
      position: { x: -300, y: 800 },
    },
    {
      id: '8',
      label: 'Depuração com Logs',
      description:
        'Adicione logs com ajuda do Cursor, execute o código, colete os logs e retorne com os dados para que o Cursor proponha correções mais precisas.',
      position: { x: 300, y: 800 },
    },
    {
      id: '9',
      label: 'Atalhos Úteis',
      description:
        'Command K aplica mudanças rápidas no código selecionado. Command I abre o agente com contexto do trecho. Ambos aceleram a interação com o Cursor.',
      position: { x: -300, y: 1000 },
    },
    {
      id: '10',
      label: 'Command K no Terminal',
      description:
        "Permite usar linguagem natural no terminal, como 'listar últimos 5 branches'. Poupa tempo com comandos complexos como os do Git.",
      position: { x: 0, y: 1200 },
    },
    {
      id: '11',
      label: 'Autocomplete e Tab',
      description:
        'Usar tab corretamente no Cursor requer prática. Ele pode completar código ou navegar entre sugestões. A experiência melhora com o uso.',
      position: { x: 300, y: 1000 },
    },
    {
      id: '12',
      label: 'Mensagens de Commit',
      description:
        'Cursor pode gerar mensagens de commit automaticamente na aba de controle de versão. É uma forma prática de manter histórico organizado.',
      position: { x: -300, y: 1400 },
    },
    {
      id: '13',
      label: 'Bug Finder',
      description:
        'Comando acessado via Command Shift P. Compara alterações com a branch principal e tenta encontrar bugs automaticamente.',
      position: { x: 0, y: 1600 },
    },
    {
      id: '14',
      label: 'Equilíbrio entre IA e Habilidade',
      description:
        'Usar IA não diminui sua habilidade se você continua entendendo e depurando código. A IA auxilia, mas conhecimento técnico continua essencial.',
      position: { x: 300, y: 1400 },
    },
  ],
  edges: [
    { from: '1', to: '2' },
    { from: '1', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
    { from: '4', to: '6' },
    { from: '4', to: '7' },
    { from: '4', to: '8' },
    { from: '1', to: '9' },
    { from: '9', to: '10' },
    { from: '9', to: '11' },
    { from: '1', to: '12' },
    { from: '12', to: '13' },
    { from: '1', to: '14' },
  ],
};
