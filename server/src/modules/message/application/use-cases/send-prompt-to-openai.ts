import { Prompt } from '../../domain/entities/prompt';
import { IOpenAIGateway } from '../../infra/gateways/interface/openai-gateway';

export class SendMessageUseCase {
  constructor(private openai: IOpenAIGateway) {}

  async execute(input: { prompt: string }) {
    const prompt = new Prompt(input.prompt);
    const response = await this.openai.sendPrompt(prompt.message);
    return response;
  }
}
