import { getMockAgentResponse } from "./mock-agent";
import { AgentResponse } from "@/types/agent";

export async function sendMessage(message: string): Promise<{
    success: boolean;
    response: AgentResponse;
}> {
    const response = await getMockAgentResponse(message);

    return {
        success: true,
        response,
    };
}