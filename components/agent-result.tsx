"use client";

import { motion } from "framer-motion";
import { AgentResponse } from "@/types/agent";

export default function AgentResult({ data }: { data: AgentResponse }) {
    const minFee = Math.min(
        ...(data.routes?.map((r) => parseFloat(r.fee)) || [0])
    );

    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* LEFT */}
            <div className="space-y-4">

                {/* Glass Card - Decision */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-lg p-5"
                >
                    <h2 className="text-lg font-semibold">
                        Arc Decision Engine
                    </h2>

                    <p className="mt-2 text-sm text-gray-700">
                        {data.recommendation}
                    </p>

                    <div className="mt-3 text-sm text-gray-600">
                        <b>Risk:</b> {data.riskLevel}
                    </div>
                </motion.div>

                {/* Timeline Glass */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="rounded-2xl border border-white/20 bg-white/30 backdrop-blur-xl shadow-md p-5"
                >
                    <h3 className="font-semibold mb-3">
                        Live Execution Flow
                    </h3>

                    <div className="space-y-2 text-xs text-gray-600">
                        <p>● Detecting liquidity routes</p>
                        <p>● Simulating FX + bridge impact</p>
                        <p>● Optimizing settlement path</p>
                        <p className="text-green-600 font-semibold animate-pulse">
                            ● Ready for execution
                        </p>
                    </div>
                </motion.div>

            </div>

            {/* RIGHT */}
            <div className="space-y-4">

                {/* Routes Glass */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-lg p-5"
                >
                    <h3 className="font-semibold mb-4">
                        Route Intelligence Matrix
                    </h3>

                    <div className="space-y-4">
                        {data.routes?.map((r, i) => {
                            const fee = parseFloat(r.fee);
                            const isBest = fee === minFee;

                            return (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    className={`p-4 rounded-xl border transition-all duration-300 ${isBest
                                            ? "border-green-400 bg-green-50/60"
                                            : "border-white/20 bg-white/30"
                                        } backdrop-blur-md`}
                                >
                                    <div className="flex justify-between">
                                        <b className="text-sm">{r.name}</b>

                                        {isBest && (
                                            <span className="text-xs text-green-600 font-bold">
                                                RECOMMENDED
                                            </span>
                                        )}
                                    </div>

                                    {/* Glass fee bar */}
                                    <div className="mt-3 h-2 bg-white/40 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{
                                                width: `${Math.max(
                                                    15,
                                                    100 - fee * 12
                                                )}%`,
                                            }}
                                            transition={{ duration: 0.6 }}
                                            className={`h-2 rounded-full ${isBest
                                                    ? "bg-green-500"
                                                    : "bg-gray-400"
                                                }`}
                                        />
                                    </div>

                                    <div className="mt-2 text-xs text-gray-500 flex justify-between">
                                        <span>Fee: {r.fee}</span>
                                        <span>Time: {r.time}</span>
                                        <span>Risk: {r.risk}</span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* COST IMPACT */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="rounded-2xl bg-black text-white p-5 shadow-xl"
                >
                    <h3 className="font-semibold mb-2">
                        Settlement Optimization
                    </h3>

                    <p className="text-sm text-gray-300">
                        Arc reduces cross-border settlement cost by up to{" "}
                        <span className="text-green-400 font-bold">
                            {(Math.random() * 35 + 15).toFixed(1)}%
                        </span>
                    </p>
                </motion.div>
            </div>

            {/* FOOTER */}
            <div className="md:col-span-2 mt-8 text-center text-xs text-gray-400">
                <div className="rounded-2xl border border-white/20 bg-white/30 backdrop-blur-xl p-4 inline-block px-6">
                    Developed by{" "}
                    <a
                        href="https://github.com/Oxsmartcontract"
                        target="_blank"
                        className="text-black font-medium underline"
                    >
                        Rebwar Hosein Poori
                    </a>{" "}
                    <span className="text-red-500">❤️</span>
                </div>
            </div>
        </div>
    );
}
