import { kit } from "./arc-kit";
import { adapter } from "./arc-adapter";
import { mainnet } from "viem/chains";

export type ExecutionResult = {
    status: string;
    txHash: string | null;
    network: string;
};

export async function executeSettlement(params: {
    to: string;
    amount: string;
    token: "USDC";
}): Promise<ExecutionResult> {
    try {
        const result = await kit.send({
            from: {
                adapter,
                chain: "Ethereum",
            },
            to: params.to,
            amount: params.amount,
            token: params.token,
        });

        return {
            status: "Executed via Arc App Kit",
            txHash: result.txHash ?? null,
            network: mainnet.name,
        };
    } catch (error) {
        console.error(error);

        return {
            status: "Execution failed",
            txHash: null,
            network: mainnet.name,
        };
    }
}