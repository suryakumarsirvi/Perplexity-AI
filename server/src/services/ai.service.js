import { ChatMistralAI } from '@langchain/mistralai';
import { CONFIG } from '../configs/env.config.js';
import {createAgent} from 'langchain';


const mistralai = new ChatMistralAI({
    model: "mistral-medium-latest",
    apiKey: CONFIG.MISTRALAI_API_KEY
});

export const AIAgent = createAgent({
    model: mistralai,
    tools: []
});