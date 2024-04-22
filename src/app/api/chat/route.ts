import { MistralStream, StreamingTextResponse } from "ai";

import MistralClient from "@mistralai/mistralai";

const mistral = new MistralClient(process.env.MISTRAL_API_KEY || "");

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = mistral.chatStream({
    model: "open-mistral-7b",
    maxTokens: 1000,
    messages,
  });

  const stream = MistralStream(response);

  return new StreamingTextResponse(stream);
}
