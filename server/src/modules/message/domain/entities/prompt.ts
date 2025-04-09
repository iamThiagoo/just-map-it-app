export class Prompt {
  private readonly prompt: string = `Resuma o seguinte texto em tópicos concisos e objetivos.Para cada tópico, gere um título curto (label) e uma descrição (pontos importantes, escreva de forma amigável e explicativa para o usuário) sobre o assunto Estruture a resposta no formato JSON, com os campos: id, label, description e position (em coordenadas {x, y} bem distribuídas para evitar sobreposição de elementos em um grafo). Inclua também um array edges indicando as conexões entre os tópicos, no formato {from: string, to: string}. Não adicione comentários. Resposta apenas em JSON sobre esse texto: `;

  constructor(public readonly message: string) {
    if (!message || message.length <= 100)
      throw new Error('Message is too short or empty');
    this.message = this.prompt + message;
  }
}
