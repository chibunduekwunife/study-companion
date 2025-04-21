import { questionSchema, questionsSchema } from "@/app/lib/schemas"
import { openai } from "@ai-sdk/openai"
import { streamObject } from "ai"

export const maxDuration = 60;

export async function POST (req: Request) {
    const { files } = await req.json();
    const firstFile = files[0].data;
    const questionCount: number = 4;

    const result = streamObject({
        model: openai("gpt-4o-mini"),
        messages: [
            {
                role: "system",
                content:
                    `You are a teacher. Your job is to take a document, 
                    and create a multiple choice test (with ${questionCount} 
                    questions based on the content of the document. 
                    Each option should be roughly equal in length.`
            },
            {
                role: "user",
                content: [
                    {
                        type: "text",
                        text: "Create a multiple choice test based on this document."
                    },
                    {
                        type: "file",
                        data: firstFile,
                        mimeType: "application/pdf"
                    },
                ],
            },
        ],
        schema: questionSchema,
        output: "array",
        onFinish: ({ object }) => {
            const res = questionsSchema.safeParse(object);
            if (res.error) {
                throw new Error(res.error.errors.map((e) => e.message).join("\n"))
            }
        },
    });

    return result.toTextStreamResponse();
}