import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export const maxDuration = 30;

export async function POST(req: Request){
    const { messages, files } = await req.json();
    const firstFile = files[0].data;

    const result = streamText({
        model: openai("gpt-4o-mini"),
        messages: [
            {
                role: "system",
                content: "You are a teacher. Your job is to take the document, and" +
                    " provide a detailed summary with headings and key bullet points," +
                    " based on the content of the document."
            },
            {
                role: "user",
                content: [
                    {
                        type: "text",
                        text: "Create a concise summary based on this document."
                    },
                    {
                        type: "file",
                        data: firstFile,
                        mimeType: "application/pdf"
                    },
                ],
            },
        ],
        ...messages,
    });

    return result.toDataStreamResponse();
}