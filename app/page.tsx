"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-3xl w-full space-y-10 text-center">

        {/* HERO */}
        <div>
          <h1 className="text-5xl font-bold tracking-tight">
            ArcPilot
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            AI-powered settlement engine for cross-border stablecoin payments
          </p>

          <p className="mt-3 text-sm text-gray-400">
            Simulating routing, FX impact, risk & execution paths in real time.
          </p>
        </div>

        {/* VALUE PROPOSITION */}
        <div className="grid md:grid-cols-3 gap-4 text-left mt-10">
          <div className="border rounded-xl p-4">
            <h3 className="font-semibold">Smarter Routing</h3>
            <p className="text-sm text-gray-500 mt-2">
              Finds optimal settlement paths across liquidity networks.
            </p>
          </div>

          <div className="border rounded-xl p-4">
            <h3 className="font-semibold">Lower Fees</h3>
            <p className="text-sm text-gray-500 mt-2">
              Simulates FX + bridge costs to reduce global transfer fees.
            </p>
          </div>

          <div className="border rounded-xl p-4">
            <h3 className="font-semibold">Real-time Intelligence</h3>
            <p className="text-sm text-gray-500 mt-2">
              AI-driven execution path selection in milliseconds.
            </p>
          </div>
        </div>

        {/* PROBLEM STATEMENT */}
        <div className="border rounded-xl p-6 bg-gray-50 text-sm text-gray-600 mt-8">
          Traditional cross-border payments are slow, expensive, and opaque.
          ArcPilot transforms them into a real-time optimized financial routing system.
        </div>

        {/* CTA */}
        <div className="mt-10">
          <Link
            href="/agent"
            className="inline-block bg-black text-white px-6 py-3 rounded-xl text-sm font-medium hover:opacity-90 transition"
          >
            Launch ArcPilot Engine →
          </Link>
        </div>

        {/* FOOTNOTE */}
        <p className="text-xs text-gray-400 mt-10">
          Built for the Arc Developer Challenge
        </p>
      </div>
    </main>
  );
}