"use client";

import { useState, useEffect } from "react";
import { sendMessage } from "@/services/agent";
import AgentResult from "@/components/agent-result";
import { AgentResponse } from "@/types/agent";

export default function AgentPage() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState<AgentResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        if (!result?.recommendation) return;

        let i = 0;
        const text = result.recommendation;

        setDisplayedText("");

        const interval = setInterval(() => {
            i++;
            setDisplayedText(text.slice(0, i));

            if (i >= text.length) {
                clearInterval(interval);
            }
        }, 15);

        return () => clearInterval(interval);
    }, [result?.recommendation]);

    async function handleSend() {
        if (!input.trim() || loading) return;

        setLoading(true);

        try {
            const data = await sendMessage(input);
            setResult(data.response);
            setInput("");
        } catch (error) {
            console.error("Failed to analyze settlement routes:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="w-full min-h-screen bg-gray-50">
            <div className="container mx-auto px-6 py-16">
                <div className="space-y-8 max-w-3xl mx-auto">
                    {/* Hero */}
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight">
                            ArcPilot
                        </h1>

                        <p className="mt-2 text-gray-600">
                            AI-powered settlement engine for cross-border stablecoin payments.
                        </p>

                        <p className="mt-2 text-xs text-gray-400">
                            Simulates routing, fees, risk, and execution paths in real time.
                        </p>
                    </div>

                    {/* Status */}
                    <div className="text-xs text-gray-400">
                        ● Arc Intelligence Engine Active
                    </div>

                    {/* Input */}
                    <div className="flex gap-2 rounded-xl border bg-white p-3 shadow-sm">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !loading) {
                                    handleSend();
                                }
                            }}
                            placeholder="Send 5000 USDC to Brazil..."
                            disabled={loading}
                            className="flex-1 outline-none disabled:opacity-50"
                        />

                        <button
                            onClick={handleSend}
                            disabled={loading}
                            className="rounded-lg bg-black px-4 py-2 text-white disabled:opacity-50"
                        >
                            {loading ? "Analyzing..." : "Execute"}
                        </button>
                    </div>

                    {/* Loading */}
                    {loading && (
                        <div className="space-y-1 text-sm text-gray-500 animate-pulse">
                            <p>Analyzing liquidity routes...</p>
                            <p>Evaluating FX exposure...</p>
                            <p>Optimizing settlement path...</p>
                        </div>
                    )}

                    {/* Result */}
                    {result && (
                        <AgentResult
                            data={{
                                ...result,
                                recommendation:
                                    displayedText || result.recommendation,
                            }}
                        />
                    )}
                </div>
            </div>
        </main>
    );
}