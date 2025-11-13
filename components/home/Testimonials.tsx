"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Building2, Star } from "lucide-react";

/**
 * =============================================================================
 * Testimonials.tsx
 * -----------------------------------------------------------------------------
 * 엔터프라이즈 고객사가 CodeCanvas 인프라의 안정성, 성능, 보안에 대해 남긴
 * "기술 중심" 추천사 섹션
 *
 * Stripe • Linear • Snowflake • Datadog 스타일로 구성:
 *  - 미니멀하지만 고급스러운 레이아웃
 *  - 기술적 신뢰성을 드러내는 문체
 *  - CTO/SRE/Head of Engineering 등 실제 기술 리더 중심 인용문
 *  - 로고 + 카드 + 애니메이션 조합
 * =============================================================================
 */

const ui = {
    purple: "#7b5cf4",
    border: "#ece6ff",
    muted: "#6b6480",
    primary: "#1c1538",
    bg: "#fbfaff",
    purpleSoft: "#f4eeff",
};

// Fade animation
const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.7, delay },
});

// 고객사 데이터
const TESTIMONIALS = [
    {
        company: "NextBlock Commerce",
        role: "CTO",
        name: "Daniel H.",
        logoText: "NBC",
        quote:
            "CodeCanvas를 도입한 후 트래픽 급증 구간에서도 인프라가 멈춘 적이 없습니다. Observability Suite 덕분에 서비스 병목과 병렬 처리 문제를 실시간으로 파악해 운영 효율이 300% 개선되었습니다.",
        highlight: "운영 효율 300% 개선",
    },
    {
        company: "Apex Enterprise",
        role: "Head of Engineering",
        name: "Sarah Kim",
        logoText: "Apex",
        quote:
            "Kubernetes 기반 아키텍처와 데이터 파이프라인을 완전하게 통합한 플랫폼은 CodeCanvas가 유일합니다. 기존 시스템을 재구축한 수준의 안정성과 모듈성이 인상적입니다.",
        highlight: "End-to-End 아키텍처 통합",
    },
    {
        company: "Bluestone Mobility",
        role: "SRE Lead",
        name: "Yuta M.",
        logoText: "BLU",
        quote:
            "Latency, p95, 오류 지표를 한 화면에서 확인할 수 있는 관측 시스템은 SRE 입장에서 최고의 자산입니다. 리스크 탐지와 자동화된 알림 시스템까지 제공해 인프라 품질이 한 단계 올라갔습니다.",
        highlight: "SRE-grade Observability",
    },
];

/* =============================================================================
   ★ Minimalistic Customer Logo Component
============================================================================= */
const Logo = ({ text }: { text: string }) => (
    <div
        className="text-lg font-extrabold w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm"
        style={{ backgroundColor: ui.purpleSoft, color: ui.purple }}
    >
        {text}
    </div>
);

/* =============================================================================
   ★ Star Rating (Stripe 문구 스타일)
============================================================================= */
const Stars = () => (
    <div className="flex items-center gap-1 mt-2">
        {[1, 2, 3, 4, 5].map((s) => (
            <Star
                key={s}
                className="h-4 w-4 fill-[#7b5cf4] text-[#7b5cf4]"
                strokeWidth={1.5}
            />
        ))}
    </div>
);

/* =============================================================================
   Main Component
============================================================================= */
export default function Testimonials(): JSX.Element {
    return (
        <section
            className="w-full py-28 bg-[#faf9ff] border-t"
            style={{ borderColor: ui.border }}
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* ============================================================
            Section Header
        =============================================================== */}
                <motion.div {...fade(0)} className="text-center max-w-3xl mx-auto">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border bg-white"
                        style={{ borderColor: ui.border }}
                    >
                        <Building2 className="h-4 w-4" style={{ color: ui.purple }} />
                        Enterprise Success Stories
                    </div>

                    <h2
                        className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
                        style={{ color: ui.primary }}
                    >
                        Trusted by engineering-driven companies
                    </h2>

                    <p className="mt-5 text-sm sm:text-base leading-relaxed" style={{ color: ui.muted }}>
                        코드캔버스는 스타트업부터 엔터프라이즈까지
                        기술팀 중심 조직이 신뢰하는 **고성능 인프라 플랫폼**입니다.
                    </p>
                </motion.div>

                {/* ============================================================
            Testimonial Cards Grid
        =============================================================== */}
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {TESTIMONIALS.map((t, idx) => (
                        <motion.div
                            key={idx}
                            {...fade(0.25 + idx * 0.1)}
                            className="p-8 rounded-3xl border bg-white shadow-sm hover:shadow-xl transition group relative"
                            style={{ borderColor: ui.border }}
                        >
                            {/* Highlight Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full"
                                style={{ backgroundColor: ui.purpleSoft, color: ui.purple }}
                            >
                                {t.highlight}
                            </motion.div>

                            {/* Logo */}
                            <Logo text={t.logoText} />

                            {/* Quote */}
                            <p
                                className="mt-6 text-sm leading-relaxed"
                                style={{ color: ui.muted }}
                            >
                                “ {t.quote} ”
                            </p>

                            {/* Customer Info */}
                            <div className="mt-6">
                                <div className="font-semibold" style={{ color: ui.primary }}>
                                    {t.name}
                                </div>
                                <div className="text-xs mt-0.5" style={{ color: ui.muted }}>
                                    {t.role} @ {t.company}
                                </div>
                            </div>

                            {/* Stars */}
                            <Stars />
                        </motion.div>
                    ))}
                </div>

                {/* ============================================================
            CTA Banner
        =============================================================== */}
                <motion.div
                    {...fade(0.6)}
                    className="mt-24 rounded-3xl border bg-white shadow-sm p-10 flex flex-col md:flex-row items-center justify-between gap-8"
                    style={{ borderColor: ui.border }}
                >
                    <div className="max-w-xl">
                        <h3
                            className="text-2xl font-extrabold leading-snug"
                            style={{ color: ui.primary }}
                        >
                            Engineering-first companies choose CodeCanvas
                        </h3>
                        <p className="mt-3 text-sm" style={{ color: ui.muted }}>
                            지금 당신의 인프라 팀도 CodeCanvas 기반으로
                            확장성과 안정성을 확보할 수 있습니다.
                        </p>
                    </div>

                    <button
                        className="px-8 py-3 rounded-xl font-semibold text-white shadow-sm transition"
                        style={{ backgroundColor: ui.purple }}
                    >
                        Contact Sales
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
