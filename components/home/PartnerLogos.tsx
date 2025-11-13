"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Globe2, Server, Shield, ArrowRight, Layers } from "lucide-react";

/**
 * PartnerLogos.tsx
 * ------------------------------------------------------------------
 * - 엔터프라이즈 · 금융 · 테크 파트너사 로고/텍스트를 보여주는 섹션
 * - Stripe / Snowflake / Datadog 스타일의 "trusted by" 영역
 * - 실제 로고 이미지가 없으므로 텍스트/가상 네이밍 + 라벨 구성
 * - 라벤더/퍼플 계열 브랜딩 유지
 * ------------------------------------------------------------------
 */

const ui = {
    purple: "#7b5cf4",
    purpleSoft: "#f2ecff",
    border: "#e8e1ff",
    text: "#241f3a",
    muted: "#6b6280",
};

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.6, delay },
});

type Partner = {
    name: string;
    tier: "enterprise" | "financial" | "technology";
    label: string;
};

const ENTERPRISE_PARTNERS: Partner[] = [
    {
        name: "Aurelia Group",
        tier: "enterprise",
        label: "Global Commerce",
    },
    {
        name: "Nordex Retail",
        tier: "enterprise",
        label: "Omnichannel Retail",
    },
    {
        name: "Helio Labs",
        tier: "technology",
        label: "Cloud-native SaaS",
    },
    {
        name: "Linea Studio",
        tier: "technology",
        label: "Product Analytics",
    },
];

const FINANCIAL_PARTNERS: Partner[] = [
    {
        name: "Seoul First Bank",
        tier: "financial",
        label: "Banking Connectivity",
    },
    {
        name: "Atlas Card Network",
        tier: "financial",
        label: "Card Network",
    },
    {
        name: "Vertex Capital",
        tier: "financial",
        label: "Treasury & Liquidity",
    },
    {
        name: "Oceanic Pay",
        tier: "financial",
        label: "Digital Wallet",
    },
];

const TECH_PARTNERS: Partner[] = [
    {
        name: "Cloudframe",
        tier: "technology",
        label: "Cloud & Kubernetes",
    },
    {
        name: "Traceboard",
        tier: "technology",
        label: "Observability Stack",
    },
    {
        name: "SentinelX",
        tier: "technology",
        label: "Security & IAM",
    },
    {
        name: "Neon Metrics",
        tier: "technology",
        label: "Data Warehouse",
    },
];

function PartnerChip({ partner }: { partner: Partner }) {
    const tierColor =
        partner.tier === "enterprise"
            ? "bg-[#f0f7ff] text-[#1d3c7a]"
            : partner.tier === "financial"
                ? "bg-[#f4fbf5] text-[#14522a]"
                : "bg-[#f5f1ff] text-[#4a2a9d]";

    return (
        <div
            className="group flex flex-col items-start justify-between rounded-2xl border bg-white px-5 py-4 min-w-[180px] hover:-translate-y-[2px] transition-transform shadow-[0_6px_16px_rgba(29,24,70,0.04)]"
            style={{ borderColor: ui.border }}
        >
            <div className="flex items-center gap-2.5">
                {/* 🔥 FIXED: key missing issue */}
                <div
                    className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: ui.purpleSoft, color: ui.purple }}
                >
                    {partner.name
                        .split(" ")
                        .slice(0, 2)
                        .map((w, idx) => (
                            <span key={`${partner.name}-initial-${idx}`}>
                                {w[0].toUpperCase()}
                            </span>
                        ))}
                </div>

                <div>
                    <div className="text-sm font-semibold" style={{ color: ui.text }}>
                        {partner.name}
                    </div>
                    <div className="text-[11px] mt-0.5" style={{ color: ui.muted }}>
                        {partner.label}
                    </div>
                </div>
            </div>

            <div className="mt-3 inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] bg-white">
                <span
                    className={`rounded-full px-2 py-[2px] text-[9px] font-semibold ${tierColor}`}
                >
                    {partner.tier}
                </span>
                <span className="text-[9px]" style={{ color: ui.muted }}>
                    Connected via CodeCanvas
                </span>
            </div>
        </div>
    );
}


function MarqueeRow({
    partners,
    reversed,
    speed = 35,
}: {
    partners: Partner[];
    reversed?: boolean;
    speed?: number;
}) {
    return (
        <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent" />

            <motion.div
                className="flex gap-4"
                initial={{ x: reversed ? "-50%" : "0%" }}
                animate={{ x: reversed ? "0%" : "-50%" }}
                transition={{
                    repeat: Infinity,
                    duration: speed,
                    ease: "linear",
                }}
            >
                {[...partners, ...partners].map((p, idx) => (
                    <PartnerChip partner={p} key={`${p.name}-${idx}`} />
                ))}
            </motion.div>
        </div>
    );
}

export default function PartnerLogos(): JSX.Element {
    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* HEADER */}
                <motion.div
                    {...fade(0)}
                    className="flex flex-col md:flex-row gap-8 md:items-center md:justify-between"
                >
                    <div className="max-w-xl">
                        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] bg-[#fbfaff]"
                            style={{ borderColor: ui.border, color: ui.muted }}
                        >
                            <Globe2 className="h-3.5 w-3.5" style={{ color: ui.purple }} />
                            Trusted integrations
                        </div>

                        <h2
                            className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight"
                            style={{ color: ui.text }}
                        >
                            Engineering-grade integrations
                            <span className="block text-[#7b5cf4]">
                                with banks, networks, and cloud systems
                            </span>
                        </h2>

                        <p
                            className="mt-4 text-sm sm:text-base leading-relaxed"
                            style={{ color: ui.muted }}
                        >
                            CodeCanvas는 상단 비즈니스 계층뿐 아니라
                            은행·카드사·글로벌 결제 네트워크·클라우드·관측성 스택과
                            직접 연결되는 **엔터프라이즈 통합 레이어**입니다.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-4 text-xs">
                            <span className="inline-flex items-center gap-1 rounded-full bg-[#f3edff] px-3 py-1 font-semibold text-[#7b5cf4]">
                                <Shield className="h-3.5 w-3.5" />
                                금융권 보안 연동
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-full bg-[#f3edff] px-3 py-1 font-semibold text-[#7b5cf4]">
                                <Server className="h-3.5 w-3.5" />
                                실시간 인프라 연결
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-full bg-[#f3edff] px-3 py-1 font-semibold text-[#7b5cf4]">
                                <Layers className="h-3.5 w-3.5" />
                                Data & Observability
                            </span>
                        </div>
                    </div>

                    {/* SMALL METRICS CARD */}
                    <motion.div
                        {...fade(0.1)}
                        className="w-full md:w-auto"
                    >
                        <div
                            className="rounded-3xl border bg-[#fbfaff] px-6 py-5 shadow-sm"
                            style={{ borderColor: ui.border }}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div
                                    className="h-9 w-9 rounded-2xl flex items-center justify-center"
                                    style={{ backgroundColor: ui.purpleSoft, color: ui.purple }}
                                >
                                    <Building2 className="h-5 w-5" />
                                </div>
                                <div>
                                    <div
                                        className="text-xs font-semibold uppercase tracking-[0.14em]"
                                        style={{ color: ui.muted }}
                                    >
                                        Enterprise footprint
                                    </div>
                                    <div className="text-sm font-semibold" style={{ color: ui.text }}>
                                        Multi-region / Multi-bank
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-3 mt-4">
                                <div>
                                    <div
                                        className="text-sm font-extrabold"
                                        style={{ color: ui.purple }}
                                    >
                                        30+
                                    </div>
                                    <div className="text-[11px]" style={{ color: ui.muted }}>
                                        Financial entities
                                    </div>
                                </div>
                                <div>
                                    <div
                                        className="text-sm font-extrabold"
                                        style={{ color: ui.purple }}
                                    >
                                        150+
                                    </div>
                                    <div className="text-[11px]" style={{ color: ui.muted }}>
                                        Payment channels
                                    </div>
                                </div>
                                <div>
                                    <div
                                        className="text-sm font-extrabold"
                                        style={{ color: ui.purple }}
                                    >
                                        3
                                    </div>
                                    <div className="text-[11px]" style={{ color: ui.muted }}>
                                        Continents
                                    </div>
                                </div>
                            </div>

                            <button
                                className="mt-5 inline-flex items-center gap-1 text-[11px] font-semibold rounded-full px-3 py-1 bg-white border"
                                style={{ borderColor: ui.border, color: ui.purple }}
                            >
                                Integration matrix 보기
                                <ArrowRight className="h-3.5 w-3.5" />
                            </button>
                        </div>
                    </motion.div>
                </motion.div>

                {/* MARQUEE ROWS */}
                <motion.div
                    {...fade(0.25)}
                    className="mt-16 space-y-8"
                >
                    <MarqueeRow partners={ENTERPRISE_PARTNERS} speed={42} />
                    <MarqueeRow partners={FINANCIAL_PARTNERS} reversed speed={38} />
                    <MarqueeRow partners={TECH_PARTNERS} speed={46} />
                </motion.div>
            </div>
        </section>
    );
}
