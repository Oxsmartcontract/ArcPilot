export type PaymentRoute = {
    name: string;
    fee: string;
    time: string;
    risk: "Low" | "Medium" | "High";
};

export type AgentResponse = {
    intent: string;
    recommendation: string;
    estimatedFee: string;
    settlementTime: string;
    riskLevel: "Low" | "Medium" | "High";
    nextStep: string;
    reasoning?: string;
    routes?: PaymentRoute[];
    cfoView?: string;
    execution?: ExecutionResult;
};
export type ExecutionResult = {

    status: string;

    txHash?: string;

    network?: string;

};