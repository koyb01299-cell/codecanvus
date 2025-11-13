"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Server,
    Database,
    Shield,
    Cloud,
    ArrowRight,
    Activity,
    GitBranch,
    Layers,
} from "lucide-react";

/**
 * ======================================================================
 * IntegrationShowcase.tsx
 * 엔터프라이즈 기술 통합을 강조하는 시각적 구성
 * - Stripe “infrastructure map”
 * - Snowflake “data flow”
 * - Datadog “observability nodes”
 * - Vercel “connection graph” 느낌 결합
 * ======================================================================
 */

const ui = {
    purple: "#7b5cf4",
    purpleLight: "#f3edff",
    border: "#e8e1ff",
    text: "#1f163b",
    textMuted: "#6b6280",
};

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, delay },
});

// ----------------------------------------------------------------------
// FLOW ITEMS
// ----------------------------------------------------------------------

const FLOW_NODES = [
    {
        id: "gateway",
        title: "API Gateway",
        icon: <Cloud className="h-5 w-5" />,
        desc: "Global routing · WAF · Auth",
    },
    {
        id: "engine",
        title: "Core Engine",
        icon: <Server className="h-5 w-5" />,
        desc: "Settlement · Routing · Events",
    },
    {
        id: "data",
        title: "Data Pipeline",
        icon: <Database className="h-5 w-5" />,
        desc: "ETL · Warehouse · Streaming",
    },
    {
        id: "security",
        title: "Security Layer",
        icon: <Shield className="h-5 w-5" />,
        desc: "Encryption · IAM · Audit",
    },
    {
        id: "observability",
        title: "Observability",
        icon: <Activity className="h-5 w-5" />,
        desc: "Logs · Metrics · Tracing",
    },
];

// ----------------------------------------------------------------------

export default function IntegrationShowcase(): JSX.Element {
    return (
        <section className="w-full py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* ============================================================
            SECTION HEADER
        ============================================================ */}
                <motion.h2
                    {...fade(0)}
                    className="text-3xl sm:text-4xl font-extrabold text-center"
                    style={{ color: ui.text }}
                >
                    Unified Enterprise Integration
                </motion.h2>

                <motion.p
                    {...fade(0.1)}
                    className="text-center max-w-2xl mx-auto mt-4 text-sm sm:text-base"
                    style={{ color: ui.textMuted }}
                >
                    CodeCanvas는 API Gateway → Core Engine → Data Pipeline → Security → Observability
                    모든 기술 스택을 하나의 플랫폼에서 유기적으로 연결합니다.
                </motion.p>

                {/* ============================================================
            MAIN VISUAL MAP
        ============================================================ */}
                <div className="relative mt-20 flex justify-center">
                    <div className="relative w-full max-w-4xl">
                        {/* GLOW BACKGROUND */}
                        <div
                            className="absolute inset-0 blur-[120px]"
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(123,92,244,0.2) 0%, rgba(255,255,255,0) 70%)",
                            }}
                        ></div>

                        {/* CONNECTION LINES */}
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none opacity-70"
                            stroke={ui.border}
                            fill="none"
                            strokeWidth="2"
                        >
                            <path d="M50 120 C 200 40, 300 40, 450 120" />
                            <path d="M50 120 C 200 200, 300 200, 450 120" />
                            <path d="M250 30 L 250 210" />
                        </svg>

                        {/* NODE LAYOUT */}
                        <div className="grid grid-cols-3 gap-10">
                            {/* Left Column */}
                            <div className="space-y-10">
                                <Node {...FLOW_NODES[0]} delay={0.2} />
                                <Node {...FLOW_NODES[2]} delay={0.3} />
                            </div>

                            {/* Center Column */}
                            <div className="flex flex-col items-center justify-center">
                                <CentralNode />
                            </div>

                            {/* Right Column */}
                            <div className="space-y-10">
                                <Node {...FLOW_NODES[1]} delay={0.4} />
                                <Node {...FLOW_NODES[3]} delay={0.5} />
                                <Node {...FLOW_NODES[4]} delay={0.6} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ============================================================
            BOTTOM CTA
        ============================================================ */}
                <motion.div
                    {...fade(0.4)}
                    className="mt-20 text-center"
                >
                    <button
                        className="px-8 py-3 rounded-xl font-semibold flex items-center gap-2 mx-auto shadow-sm transition text-white"
                        style={{ backgroundColor: ui.purple }}
                    >
                        Explore the Architecture
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

/* ======================================================================
   NODE COMPONENT
====================================================================== */

function Node({
    title,
    icon,
    desc,
    delay,
}: {
    title: string;
    icon: React.ReactNode;
    desc: string;
    delay: number;
}) {
    return (
        <motion.div
            {...fade(delay)}
            className="p-5 rounded-2xl border bg-white shadow-sm"
            style={{
                borderColor: ui.border,
            }}
        >
            <div
                className="p-3 rounded-xl w-fit mb-3"
                style={{
                    backgroundColor: ui.purpleLight,
                    color: ui.purple,
                }}
            >
                {icon}
            </div>
            <div className="font-semibold" style={{ color: ui.text }}>
                {title}
            </div>
            <div
                className="text-xs mt-1 leading-relaxed"
                style={{ color: ui.textMuted }}
            >
                {desc}
            </div>
        </motion.div>
    );
}

/* ======================================================================
   CENTRAL CORE NODE (중앙 엔터프라이즈 엔진)
====================================================================== */

function CentralNode() {
    return (
        <motion.div
            {...fade(0.3)}
            className="p-10 rounded-3xl border bg-white shadow-lg text-center"
            style={{
                borderColor: ui.border,
            }}
        >
            <div
                className="mx-auto p-5 rounded-2xl mb-4"
                style={{
                    backgroundColor: ui.purpleLight,
                    color: ui.purple,
                }}
            >
                <GitBranch className="h-7 w-7" />
            </div>

            <div
                className="font-bold text-lg mb-2"
                style={{ color: ui.text }}
            >
                Enterprise Core
            </div>

            <p
                className="text-xs leading-relaxed"
                style={{ color: ui.textMuted }}
            >
                모든 서비스는 Core Engine을 중심으로
                안정성과 확장성을 가진 구조로 연결됩니다.
            </p>
        </motion.div>
    );
}
