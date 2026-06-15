import { AgentResponse } from "@/types/agent";

function extractAmount(message: string): number {
    const match = message.match(/\d+/);
    return match ? parseInt(match[0]) : 1000;
}

export async function getMockAgentResponse(
    message: string
): Promise<AgentResponse> {
    const amount = extractAmount(message);

    const routes = [
        {
            name: "Arc USDC Rail",
            fee: `${(amount * 0.00002).toFixed(2)} USDC`,
            time: "< 1 min",
            risk: "Low" as const,
        },
        {
            name: "Bank Transfer",
            fee: `${(amount * 0.002).toFixed(2)} USDC`,
            time: "1-3 days",
            risk: "Medium" as const,
        },
        {
            name: "Stablecoin Bridge (USDT)",
            fee: `${(amount * 0.0005).toFixed(2)} USDC`,
            time: "2-5 min",
            risk: "Low" as const,
        },
    ];

    const best = routes[0];

    return {
        intent: "cross-border-payment",

        recommendation: `Best route: ${best.name}`,

        estimatedFee: best.fee,
        settlementTime: best.time,
        riskLevel: best.risk,

        nextStep: "Execute selected route via Arc settlement engine",

        reasoning:
            "System evaluated multiple settlement rails based on cost, latency, and risk profile.",

        routes,
    };
}