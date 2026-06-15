import OpenAI from "openai";
import { AgentResponse } from "@/types/agent";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
});

export async function getAIResponse(
    message: string
): Promise<AgentResponse> {
    const completion = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "system",
                content: `
You are ArcPilot, a stablecoin commerce agent.

You analyze cross-border payments and return structured JSON only:

{
  intent,
  recommendation,
  estimatedFee,
  settlementTime,
  riskLevel: "Low" | "Medium" | "High",
  nextStep
}

Be concise. Focus on stablecoin + payment routing decisions.
        `,
            },
            {
                role: "user",
                content: message,
            },
        ],
    });

    const raw = completion.choices[0].message.content || "{}";

    try {
        return JSON.parse(raw);
    } catch {
        return {
            intent: "unknown",
            recommendation: raw,
            estimatedFee: "-",
            settlementTime: "-",
            riskLevel: "Low",
            nextStep: "Review manually",
        };
    }
}