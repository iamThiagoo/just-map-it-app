import axios from 'axios';
import { IOpenAIGateway } from './interface/openai-gateway';

export class OpenAIGateway implements IOpenAIGateway {
  async sendPrompt(prompt: string): Promise<string> {
    try {
      const res = await axios.post(
        process.env.OPENAI_API_BASE_URL as string,
        {
          model: 'gpt-3.5-turbo',
          input: [{ role: 'user', content: prompt }],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return res.data.output?.[0]?.content?.[0]?.text;
    } catch (error: any) {
      console.error('OpenAI API Error:', error.response?.data || error.message);

      if (error.response) {
        throw new Error(
          `OpenAI API error: ${error.response.status} - ${JSON.stringify(error.response.data)}`
        );
      } else if (error.request) {
        throw new Error('No response received from OpenAI API');
      } else {
        throw new Error(`Error setting up OpenAI request: ${error.message}`);
      }
    }
  }
}
