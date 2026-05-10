import {Router} from 'express';
import { AIresponse, getChats, getChatMessages } from '../controllers/aiChat.controller.js';

const AIChatRouter = Router();

AIChatRouter.get('/', getChats);
AIChatRouter.get('/:chatId/messages', getChatMessages);
AIChatRouter.post('/', AIresponse);

export default AIChatRouter;