"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Cpu,
    Activity,
    Gauge,
    Shield,
    Server,
    BarChart3,
    ArrowRight,
    Zap,
    Network,
    Database,
} from "lucide-react";

/**
 * =======================================================================
 * TechHighlights.tsx
 * -----------------------------------------------------------------------
 * 고급 엔터프라이즈 기술력 강조 섹션
 * Stripe • Datadog • Snowflake • Cloudflare 스타일의 "기술 중심" 블록
 * CodeCanvas의 인프라 핵심 역량을 심도 있게 제시하는 UI
 * =======================================================================
 */

const ui = {
    purple: "#7b5cf4",
    purpleSoft: "#f2ecff",
    border: "#e7dfff",
    text: "#1c1538",
    muted: "#6b6480",
    bg: "#fbfaff",
};

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.55, delay },
});

const HIGHLIGHTS = [
    {
        icon: Server,
        title: "Cloud-native Runtime",
        desc: "서비스 메쉬 기반 Kubernetes 오토스케일링 구성으로 높은 탄력성과 안정성 제공.",
        chips: ["K8s", "Service Mesh", "Zero-downtime Deploy"],
    },
    {
        icon: Activity,
        title: "AI-driven Operations",
        desc: "에러 패턴 분석·부하 예측·승인율 향상을 ML 기반으로 자동 최적화.",
        chips: ["ML Optimization", "Traffic Pattern AI", "Auto Remediation"],
    },
    {
        icon: Shield,
        title: "Finance-grade Security",
        desc: "PCI·ISMS·HSM 기반 암호화·접근제어·감사 로그 등 최고 수준 보안 설계.",
        chips: ["PCI DSS", "HSM", "Encryption"],
    },
    {
        icon: Database,
        title: "Unified Data Pipeline",
        desc: "실시간 스트리밍·ETL·레이크하우스로 이어지는 End-to-End 데이터 처리.",
        chips: ["ETL/ELT", "Warehouse", "Streaming"],
    },
];

const METRICS = [
    { value: "410k+", label: "TPS Throughput" },
    { value: "99.99%", label: "SLA Uptime" },
    { value: "<110ms", label: "Latency p95" },
    { value: "134M+", label: "월간 보안 이벤트 처리" },
];

/* ======================================================================
   Graph mock — Minimalistic line/bar hybrid (Datadog / Stripe radar 느낌)
   실제 데이터는 아니지만, 기술 인프라 감성 강조용
====================================================================== */
const MiniGraph = () => {
    return (
        <div className="relative w-full h-32 mt-4">
            {/* Grid lines */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
                {[...Array(24)].map((_, i) => (
                    <div
                        key={i}
                        className="border border-[#ede8ff] border-t-0 border-l-0 last:border-r-0 last:border-b-0 opacity-40"
                    />
                ))}
            </div>

            {/* Bars */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-3">
                {[60, 80, 50, 95, 65, 110].map((h, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ height: 0 }}
                        whileInView={{ height: h }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.06 }}
                        className="w-3 rounded-md"
                        style={{ backgroundColor: ui.purple }}
                    ></motion.div>
                ))}
            </div>
        </div>
    );
};

/* ======================================================================
   Main Component
====================================================================== */

export default function TechHighlights(): JSX.Element {
    return (
        <section className="w-full py-28 bg-white border-t" style={{ borderColor: ui.border }}>
            <div className="max-w-7xl mx-auto px-6">
                {/* ============================================================
            Section Title
        =============================================================== */}
                <motion.div {...fade(0)} className="text-center max-w-3xl mx-auto">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border bg-[#f9f7ff]"
                        style={{ borderColor: ui.border, color: ui.muted }}
                    >
                        <Gauge className="h-4 w-4" style={{ color: ui.purple }} />
                        ENGINEERING PLATFORM
                    </div>

                    <h2
                        className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
                        style={{ color: ui.text }}
                    >
                        Built for high-performance
                        <span className="block text-[#7b5cf4]">enterprise infrastructure</span>
                    </h2>

                    <p
                        className="mt-5 text-sm sm:text-base leading-relaxed"
                        style={{ color: ui.muted }}
                    >
                        CodeCanvas는 단순한 결제 API가 아니라
                        대규모 서비스 운영에 필요한 **운영·보안·데이터·성능**을
                        하나의 인프라 레이어로 통합합니다.
                    </p>
                </motion.div>

                {/* ============================================================
            Metrics Row
        =============================================================== */}
                <motion.div
                    {...fade(0.15)}
                    className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-10 text-center"
                >
                    {METRICS.map((m, i) => (
                        <motion.div key={i} {...fade(0.25 + i * 0.05)}>
                            <div
                                className="text-2xl sm:text-3xl font-extrabold"
                                style={{ color: ui.purple }}
                            >
                                {m.value}
                            </div>
                            <div className="text-[12px] mt-1" style={{ color: ui.muted }}>
                                {m.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ============================================================
            Highlight Cards Grid
        =============================================================== */}
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {HIGHLIGHTS.map((item, idx) => (
                        <motion.div
                            key={idx}
                            {...fade(0.3 + idx * 0.1)}
                            className="relative p-8 rounded-3xl border bg-white shadow-sm hover:shadow-lg transition group"
                            style={{ borderColor: ui.border }}
                        >
                            {/* Icon */}
                            <div
                                className="h-12 w-12 rounded-2xl flex items-center justify-center"
                                style={{ backgroundColor: ui.purpleSoft }}
                            >
                                <item.icon className="h-6 w-6" style={{ color: ui.purple }} />
                            </div>

                            {/* Title */}
                            <h3
                                className="mt-5 font-semibold text-lg"
                                style={{ color: ui.text }}
                            >
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p
                                className="mt-2 text-sm leading-relaxed"
                                style={{ color: ui.muted }}
                            >
                                {item.desc}
                            </p>

                            {/* Chips */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {item.chips.map((chip) => (
                                    <span
                                        key={chip}
                                        className="px-3 py-1 rounded-full bg-[#f3edff] text-[#7b5cf4] text-[11px] font-semibold"
                                    >
                                        {chip}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ============================================================
            Graph + CTA
        =============================================================== */}
                <motion.div
                    {...fade(0.5)}
                    className="mt-24 rounded-3xl border bg-[#faf9ff] p-10 shadow-sm"
                    style={{ borderColor: ui.border }}
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

                        {/* Left Text */}
                        <div className="max-w-lg">
                            <h3
                                className="text-2xl font-extrabold leading-snug"
                                style={{ color: ui.text }}
                            >
                                Real-time performance insights
                                <span className="block text-[#7b5cf4]">
                                    for mission-critical systems
                                </span>
                            </h3>

                            <p className="mt-3 text-sm leading-relaxed" style={{ color: ui.muted }}>
                                실시간 트래픽 변동·오류 패턴·승인율·지연률을
                                하나의 관측 플랫폼에서 수집하고 분석합니다.
                                Datadog / New Relic 수준의 관측성을 내장해
                                기술팀의 운영 부담을 대폭 줄입니다.
                            </p>

                            <button
                                className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-white shadow-sm transition"
                                style={{ backgroundColor: ui.purple }}
                            >
                                View Observability Suite
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Graph Mock */}
                        <div className="flex-1">
                            <MiniGraph />
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
