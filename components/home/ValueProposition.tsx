"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Cpu,
    Shield,
    Zap,
    Workflow,
    LineChart,
    Layers,
    Server,
    ArrowRight,
    BarChart3,
} from "lucide-react";

/**
 * =============================================================================
 * ValueProposition.tsx
 * -----------------------------------------------------------------------------
 * CodeCanvas의 핵심 기술적 가치(Value Proposition)를 명확하게 전달하는 섹션
 *
 * 목적:
 *  - “우리는 PG가 아니라 기술 인프라 회사다”를 명확하게 각인
 *  - 엔지니어링 중심 (Infra, Observability, Scalability, Security)
 *  - Stripe + Snowflake + Datadog 톤의 Technical Value Component
 *
 * 구성:
 *  1) Section Header — 기술 중심 메시지
 *  2) 4개 Value Cards — 엔터프라이즈 인프라 핵심 역량 요약
 *  3) Feature Rows (대형 List) — Stripe Why-Stripe 스타일
 *  4) Performance Metrics — 성능 수치 기반 설득
 * =============================================================================
 */

const ui = {
    purple: "#7b5cf4",
    purpleLight: "#efeaff",
    border: "#ece6ff",
    muted: "#6b6480",
    primary: "#1c1538",
    bg: "#fbfaff",
};

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.7, delay },
});

export default function ValueProposition(): JSX.Element {
    return (
        <section
            className="w-full py-32 bg-white border-t"
            style={{ borderColor: ui.border }}
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* ============================================================
            Section Header
        =============================================================== */}
                <motion.div {...fade(0)} className="text-center max-w-4xl mx-auto mb-20">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-1.5 text-sm rounded-full border bg-white shadow-sm"
                        style={{ borderColor: ui.border }}
                    >
                        <Zap className="h-4 w-4" style={{ color: ui.purple }} />
                        Built for modern engineering teams
                    </div>

                    <h2
                        className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
                        style={{ color: ui.primary }}
                    >
                        Enterprise infrastructure,
                        <span className="text-[#7b5cf4]"> redefined with simplicity</span>
                    </h2>

                    <p className="mt-6 text-base leading-relaxed" style={{ color: ui.muted }}>
                        CodeCanvas는 결제, 정산, 관측, 보안, 데이터 파이프라인을
                        한 번의 통합된 아키텍처로 제공해
                        <strong className="font-semibold">기술팀의 복잡성을 극단적으로 줄이면서</strong>
                        성능·안정성·확장성을 모두 확보합니다.
                    </p>
                </motion.div>

                {/* ============================================================
            4-Card Value Proposition
        =============================================================== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {[
                        {
                            icon: <Workflow className="h-6 w-6" />,
                            title: "Unified Architecture",
                            desc: "다양한 도메인을 하나의 엔터프라이즈 프레임워크로 통합하여 운영 복잡성 제거.",
                        },
                        {
                            icon: <Layers className="h-6 w-6" />,
                            title: "Modular Scalability",
                            desc: "Kubernetes 기반 독립 확장 구조로 서비스 영향 최소화.",
                        },
                        {
                            icon: <Shield className="h-6 w-6" />,
                            title: "Security by Design",
                            desc: "ISMS · PCI · HSM 기반 보안 모델 내장.",
                        },
                        {
                            icon: <LineChart className="h-6 w-6" />,
                            title: "Observability Suite",
                            desc: "로그·메트릭·트레이싱을 통합한 SRE 관측 플랫폼.",
                        },
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            {...fade(0.25 + i * 0.1)}
                            className="p-8 rounded-3xl border bg-white shadow-sm hover:shadow-xl transition"
                            style={{ borderColor: ui.border }}
                        >
                            <div
                                className="w-fit p-3 rounded-xl mb-5"
                                style={{
                                    backgroundColor: ui.purpleLight,
                                    color: ui.purple,
                                }}
                            >
                                {card.icon}
                            </div>
                            <h3
                                className="font-semibold text-lg mb-2"
                                style={{ color: ui.primary }}
                            >
                                {card.title}
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ color: ui.muted }}>
                                {card.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* ============================================================
            Feature List — Stripe-style long-form cards
        =============================================================== */}
                <div className="mt-28 space-y-14">
                    {[
                        {
                            title: "완전한 엔터프라이즈 운영 시스템",
                            icon: <Server className="h-6 w-6" />,
                            desc: "CodeCanvas는 결제 인프라에만 머무르지 않습니다. 결제·정산·전표·데이터레이크·관측 시스템까지 기업 운영에 필요한 모든 구성 요소를 하나의 Run-Time으로 제공합니다.",
                            bullets: [
                                "멀티 리전 운영 및 장애 자동 복구(HA 구성)",
                                "실시간 처리 엔진 기반의 승인/정산 파이프라인",
                                "데이터 ETL → 모델링 → BI 분석까지 일원화",
                            ],
                        },
                        {
                            title: "엔지니어링 중심 설계",
                            icon: <Cpu className="h-6 w-6" />,
                            desc: "개발자 경험(DX)을 극단적으로 끌어올리는 API·SDK·Webhook 기반 구조. 명확한 도메인 설계를 통해 기술팀은 제품 개발에 집중할 수 있습니다.",
                            bullets: [
                                "누적 TPS 410k+ 처리가 가능한 병렬 처리 모델",
                                "Idempotency + Event Replay 기반 안전한 재처리",
                                "250ms 이하 p95 Latency 보장",
                            ],
                        },
                        {
                            title: "SRE 관점의 Observability",
                            icon: <BarChart3 className="h-6 w-6" />,
                            desc: "Datadog·Grafana·NewRelic 수준의 관찰 가능성(Observability)을 플랫폼 내부에 기본 탑재.",
                            bullets: [
                                "로그·메트릭·트레이싱 통합 대시보드",
                                "Anomaly Detection 기반 오류 탐지",
                                "Slack/Email/PagerDuty 실시간 알림",
                            ],
                        },
                        {
                            title: "보안과 안정성에 대한 확신",
                            icon: <Shield className="h-6 w-6" />,
                            desc: "민감한 트랜잭션 데이터와 기업 시스템은 금융권 수준의 보호를 요구하기 때문에 CodeCanvas는 처음부터 Security by Design 원칙으로 구축되었습니다.",
                            bullets: [
                                "AES-256 + HSM 키 관리",
                                "Zero-Trust 네트워크 정책",
                                "ISMS · PCI DSS 기반 구조 설계",
                            ],
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            {...fade(0.3 + i * 0.15)}
                            className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start"
                        >
                            {/* Icon + Title */}
                            <div className="flex items-start gap-4 md:col-span-1">
                                <div
                                    className="p-3 rounded-xl"
                                    style={{
                                        backgroundColor: ui.purpleLight,
                                        color: ui.purple,
                                    }}
                                >
                                    {item.icon}
                                </div>

                                <div>
                                    <h3
                                        className="text-xl font-bold mb-2"
                                        style={{ color: ui.primary }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed" style={{ color: ui.muted }}>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Bullets */}
                            <ul className="space-y-4 md:col-span-2">
                                {item.bullets.map((b, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-3 text-sm leading-relaxed"
                                        style={{ color: ui.muted }}
                                    >
                                        <ArrowRight className="h-4 w-4 mt-1 text-[#7b5cf4]" />
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* ============================================================
            Performance Metrics — 고성능 강조
        =============================================================== */}
                <motion.div
                    {...fade(0.5)}
                    className="mt-32 grid grid-cols-2 sm:grid-cols-4 gap-10 text-center"
                >
                    {[
                        { value: "410k+", label: "TPS Throughput" },
                        { value: "99.99%", label: "SLA Uptime" },
                        { value: "<110ms", label: "Latency p95" },
                        { value: "150+", label: "Global Payment Channels" },
                    ].map((m, i) => (
                        <motion.div key={i} {...fade(0.55 + i * 0.05)}>
                            <div
                                className="text-2xl font-extrabold mb-1"
                                style={{ color: ui.purple }}
                            >
                                {m.value}
                            </div>
                            <div className="text-xs sm:text-sm" style={{ color: ui.muted }}>
                                {m.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
