import { AIAgent } from "./ai.service.js";

const SYSTEM_PROMPT = `You are a helpful and precise assistant for answering questions.
Answer the question based on the context below. If you don't know the answer, say you don't know. Don't try to make up an answer.
Context:`;

const normalizeChunkText = (chunk) => {
    if (!chunk) return "";
    if (typeof chunk === 'string') return chunk;

    const candidates = [];

    if (Array.isArray(chunk)) {
        candidates.push(...chunk);
    } else {
        candidates.push(chunk);
    }

    for (const item of candidates) {
        if (!item) continue;
        const text = item?.content || item?.text || item?.message?.content || item?.contentBlocks?.[0]?.text || item?.message?.text;
        if (typeof text === 'string' && text.length > 0) {
            return text;
        }
    }

    return "";
};

export const generateAIStream = async ({ userMessage, res, previousMessages = []}) => {

    const stream = await AIAgent.stream(
        {
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...previousMessages,
                { role: "user", content: userMessage }
            ]
        },
        { streamMode: "messages" }
    );

    if (!stream) {
        throw new Error("Error generating AI stream");
    }

    let AIResponse = "";

    for await (let chunk of stream) {
        const text = normalizeChunkText(chunk);

        if (!text) continue;

        AIResponse += text;
        res.write(`data: ${JSON.stringify({ type: 'message', text })}\n\n`);
        res.flush?.();
    }

    res.end();

    return AIResponse;
};

export const generateChatTitle = async (userMessage) => {
    try {
        const response = await AIAgent.invoke({
            messages: [
                {
                    role: "system",
                    content: "Generate a short and descriptive title for a chat based on the following message. Max 3 words."
                },
                {
                    role: "user",
                    content: userMessage
                }
            ]
        });

        const messages = response?.messages || [];
        const lastMessage = messages[messages.length - 1];

        let title = lastMessage?.content || "New Chat";

        title = title.replace(/[*"]/g, "").trim();

        return title || "New Chat";

    } catch (error) {
        console.error("Error generating chat title:", error);
        return "New Chat";
    }
};