export interface IOpenAIGateway {
  sendPrompt(prompt: string): Promise<string>;
}
