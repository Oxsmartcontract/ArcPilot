import { getMockAgentResponse } from "@/services/mock-agent";

export async function POST(req: Request) {
    const body = await req.json();

    const response = await getMockAgentResponse(body.message);

    return Response.json({
        success: true,
        response,
    });
}