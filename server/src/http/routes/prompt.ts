import { Router } from 'express';
import { SendPromptController } from '../../modules/message/presentation/controllers/send-prompt.controller';

const router = Router();
const sendPromptController = new SendPromptController();

router.post('/prompt', (req, res) => sendPromptController.handle(req, res));

export default router;
