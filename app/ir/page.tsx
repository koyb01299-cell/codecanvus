"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    BarChart3,
    PieChart,
    TrendingUp,
    Wallet,
    ArrowRight,
    Building2,
    Target,
    Users,
    CheckCircle2,
    Shield,
    LineChart,
    Globe2,
} from "lucide-react";

const colors = {
    bg: "bg-[#f9f7ff]",
    card: "bg-white",
    text: "text-[#241f3a]",
    textMuted: "text-[#5c5470]",
    violet: "text-[#7b5cf4]",
    violetBg: "bg-[#7b5cf4]",
    border: "border-[#e8e2fb]",
    grad: "bg-[linear-gradient(90deg,rgba(123,92,244,0.12),rgba(186,163,255,0.12))]"
};

const fadeUp = (i = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay: 0.06 * i },
});

export default function IRPage(): JSX.Element {
    const metrics = [
        { title: "Annual Revenue", value: "₩128억", icon: <Wallet className="h-5 w-5" /> },
        { title: "YoY Growth", value: "+87%", icon: <TrendingUp className="h-5 w-5" /> },
        { title: "Active Clients", value: "740+", icon: <Users className="h-5 w-5" /> },
        { title: "System SLA", value: "99.99%", icon: <Shield className="h-5 w-5" /> },
    ];

    const investments = [
        {
            title: "시리즈 A",
            amount: "₩30억",
            desc: "코어 기술 강화 및 제품 고도화",
            icon: <LineChart className="h-6 w-6" />,
        },
        {
            title: "시리즈 B",
            amount: "₩70억",
            desc: "글로벌 확장 및 신규 시장 진출",
            icon: <Globe2 className="h-6 w-6" />,
        },
        {
            title: "시리즈 C 예정",
            amount: "₩120억 목표",
            desc: "엔터프라이즈 인프라 및 AI 서비스 확장",
            icon: <Target className="h-6 w-6" />,
        },
    ];

    const valueProps = [
        {
            icon: <BarChart3 className="h-6 w-6" />,
            title: "탄탄한 수익 모델",
            desc: "결제, 리테일, 글로벌 정산 등 다중 수익 구조 보유.",
        },
        {
            icon: <Building2 className="h-6 w-6" />,
            title: "확장 가능한 인프라",
            desc: "멀티 클라우드 기반 고가용성 아키텍처.",
        },
        {
            icon: <CheckCircle2 className="h-6 w-6" />,
            title: "검증된 보안 & 컴플라이언스",
            desc: "PCI DSS·ISMS 기반의 금융권 수준 보안.",
        },
    ];

    return (
        <div className={`${colors.bg} ${colors.text}`}>
            {/* -------------------------------------- Hero -------------------------------------- */}
            <section className="relative overflow-hidden">
                <div className={`absolute inset-0 ${colors.grad}`} />
                <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
                    <motion.div {...fadeUp(0)} className="max-w-4xl mx-auto text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm bg-white/70 backdrop-blur border-white/60">
                            Investor Relations
                        </span>

                        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
                            CodeCanvas IR
                            <span className={`block ${colors.violet}`}>성장성과 가치를 공유합니다</span>
                        </h1>

                        <p className={`mt-6 text-lg sm:text-xl ${colors.textMuted} max-w-3xl mx-auto`}>
                            높은 성장률, 검증된 기술력, 그리고 글로벌 확장성.
                            CodeCanvas는 기술 중심 기업으로서 지속 가능한 가치를 제공합니다.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* -------------------------------------- Metrics -------------------------------------- */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((item, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(i)}
                            className={`rounded-2xl ${colors.card} border ${colors.border} p-6`}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`p-3 rounded-xl ${colors.violetBg} text-white`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <div className="text-sm font-medium">{item.title}</div>
                                    <div className="text-xl font-bold">{item.value}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* -------------------------------------- Investment Rounds -------------------------------------- */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <motion.div {...fadeUp(0)} className="max-w-3xl mb-12">
                    <h2 className="text-3xl font-extrabold">투자 라운드</h2>
                    <p className={`mt-2 text-sm ${colors.textMuted}`}>
                        CodeCanvas는 기술·보안·글로벌 결제 인프라를 중심으로 안정적이고 빠르게 성장하고 있습니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {investments.map((item, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(i)}
                            className="rounded-3xl bg-white border border-[#e8e2fb] p-8 hover:shadow-xl transition"
                        >
                            <div className="p-3 rounded-xl bg-[#f2edff] text-[#7b5cf4] w-fit mb-4">
                                {item.icon}
                            </div>

                            <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                            <p className="text-2xl font-extrabold mb-2 text-[#7b5cf4]">{item.amount}</p>
                            <p className={`${colors.textMuted} text-sm`}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* -------------------------------------- Value Proposition -------------------------------------- */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <motion.div {...fadeUp(0)} className="max-w-3xl mb-12">
                    <h2 className="text-3xl font-extrabold">왜 CodeCanvas인가?</h2>
                    <p className={`mt-2 text-sm ${colors.textMuted}`}>
                        투자자 관점에서 CodeCanvas의 기술력과 비즈니스 경쟁력은 확실합니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {valueProps.map((item, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(i)}
                            className="rounded-3xl bg-white border border-[#e8e2fb] p-8 hover:shadow-xl transition"
                        >
                            <div className="p-3 rounded-xl bg-[#f2edff] text-[#7b5cf4] w-fit mb-4">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                            <p className={`${colors.textMuted} text-sm`}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* -------------------------------------- CTA -------------------------------------- */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="rounded-3xl bg-white border border-[#e8e2fb] p-10 sm:p-14 text-center">
                    <h2 className="text-3xl font-bold mb-4">투자 관련 문의</h2>
                    <p className={`text-sm ${colors.textMuted} mb-8`}>
                        CodeCanvas의 성장 전략·재무 정보·협력 관련 문의는 IR 팀으로 연락하세요.
                    </p>

                    <a
                        href="/contact?type=ir"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7b5cf4] text-white font-semibold hover:opacity-95 transition"
                    >
                        IR 문의하기 <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </section>

            <div className="h-12" />
        </div>
    );
}
