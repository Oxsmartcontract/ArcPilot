import { ViemAdapter } from "@circle-fin/adapter-viem-v2";
import { createWalletClient, createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

const transport = http();

export const adapter = new ViemAdapter(
    {
        getWalletClient: ({ chain }) =>
            createWalletClient({
                chain,
                transport,
            }),

        getPublicClient: ({ chain }) =>
            createPublicClient({
                chain,
                transport,
            }),
    },
    {
        addressContext: "user-controlled",
        supportedChains: [
            {
                type: "evm",
                chain: mainnet, // 👈 مهم‌ترین تغییر
                name: "Ethereum",
                nativeCurrency: mainnet.nativeCurrency,
                isTestnet: false,
                explorerUrl: "https://etherscan.io",
                rpcUrls: {
                    default: {
                        http: [],
                    },
                },
                chainId: mainnet.id,
            },
        ],
    } as any
);