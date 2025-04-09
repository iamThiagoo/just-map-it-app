import { Request, Response } from 'express';
import { OpenAIGateway } from '../../infra/gateways/openai-gateway';
import { SendMessageUseCase } from '../../application/use-cases/send-prompt-to-openai';

export class SendPromptController {
  async handle(req: Request, res: Response) {
    try {
      const gateway = new OpenAIGateway();
      const useCase = new SendMessageUseCase(gateway);
      const result = await useCase.execute({ prompt: req.body.prompt });
      res.json(JSON.parse(result));
    } catch (err: any) {
      res
        .status(400)
        .json({
          error: `Error processing prompt: ${err.message || 'Unknown error'}`,
        });
    }
  }
}
